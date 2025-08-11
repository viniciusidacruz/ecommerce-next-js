import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { SignInSchema, signInSchema } from "@/shared/schemas";

export function useSignIn() {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const form = useForm<SignInSchema>({
    mode: "onBlur",
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
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
