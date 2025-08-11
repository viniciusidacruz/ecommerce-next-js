"use client";

import * as CE from "@/shared/components/external";
import { useSignIn } from "@/shared/hooks";

export function SignInForm() {
  const { form, onSubmit, isVisiblePassword, handleTogglePasswordVisibility } =
    useSignIn();

  return (
    <CE.Form {...form}>
      <form onSubmit={onSubmit} className="w-full">
        <CE.Card className="w-full">
          <CE.CardHeader>
            <CE.CardTitle>Entrar</CE.CardTitle>
            <CE.CardDescription>Faça login para continuar</CE.CardDescription>
          </CE.CardHeader>
          <CE.CardContent className="space-y-6">
            <CE.FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <CE.FormItem>
                  <CE.FormLabel>Email</CE.FormLabel>
                  <CE.FormControl>
                    <CE.Input
                      id="email"
                      placeholder="Digite seu email"
                      {...field}
                    />
                  </CE.FormControl>
                  <CE.FormMessage />
                </CE.FormItem>
              )}
            />

            <CE.FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <CE.FormItem>
                  <CE.FormLabel>Senha</CE.FormLabel>
                  <CE.FormControl>
                    <CE.Input
                      id="password"
                      placeholder="Digite sua senha"
                      type={isVisiblePassword ? "text" : "password"}
                      {...field}
                    />
                  </CE.FormControl>

                  <button
                    type="button"
                    onClick={handleTogglePasswordVisibility}
                    className="text-muted-foreground w-fit text-sm"
                  >
                    {isVisiblePassword ? "Ocultar" : "Mostrar"} senha
                  </button>
                </CE.FormItem>
              )}
            />
          </CE.CardContent>
          <CE.CardFooter>
            <CE.Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting || !form.formState.isValid}
            >
              {form.formState.isSubmitting ? "Entrando..." : "Entrar"}
            </CE.Button>
          </CE.CardFooter>
        </CE.Card>
      </form>
    </CE.Form>
  );
}
