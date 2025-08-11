import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { SignUpSchema, signUpSchema } from "@/shared/schemas";

export function useSignUp() {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const form = useForm<SignUpSchema>({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleTogglePasswordVisibility = () => {
    setIsVisiblePassword((prev) => !prev);
  };

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return { form, onSubmit, isVisiblePassword, handleTogglePasswordVisibility };
}
