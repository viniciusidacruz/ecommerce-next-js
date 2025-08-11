import { z } from "zod";

const REGEX_PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const signUpSchema = z
  .object({
    name: z
      .string("Campo inválido")
      .trim()
      .min(3, "Nome deve ter no mínimo 3 caracteres"),
    email: z.email("E-mail inválido").trim(),
    confirmPassword: z
      .string("Campo inválido")
      .min(8, "Senha deve ter no mínimo 8 caracteres")
      .regex(
        REGEX_PASSWORD,
        "Senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial",
      ),
    password: z
      .string("Campo inválido")
      .min(8, "Senha deve ter no mínimo 8 caracteres")
      .regex(
        REGEX_PASSWORD,
        "Senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial",
      ),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Senhas não coincidem",
      });
    }
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;
