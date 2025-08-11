import { z } from "zod";

export const signInSchema = z.object({
  email: z.email("E-mail inválido"),
  password: z.string(),
});

export type SignInSchema = z.infer<typeof signInSchema>;
