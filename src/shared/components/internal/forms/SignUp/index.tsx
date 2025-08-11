"use client";

import * as CE from "@/shared/components/external";
import { useSignUp } from "@/shared/hooks";

export function SignUpForm() {
  const { form, onSubmit, isVisiblePassword, handleTogglePasswordVisibility } =
    useSignUp();

  return (
    <CE.Form {...form}>
      <form onSubmit={onSubmit} className="w-full">
        <CE.Card className="w-full">
          <CE.CardHeader>
            <CE.CardTitle>Criar conta</CE.CardTitle>
            <CE.CardDescription>
              Crie uma conta para continuar
            </CE.CardDescription>
          </CE.CardHeader>
          <CE.CardContent className="space-y-6">
            <CE.FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <CE.FormItem>
                  <CE.FormLabel>Nome</CE.FormLabel>
                  <CE.FormControl>
                    <CE.Input
                      id="name"
                      placeholder="Digite seu nome"
                      {...field}
                    />
                  </CE.FormControl>
                  <CE.FormMessage />
                </CE.FormItem>
              )}
            />

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

                  <CE.FormMessage />
                </CE.FormItem>
              )}
            />

            <CE.FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <CE.FormItem>
                  <CE.FormLabel>Confirmar senha</CE.FormLabel>
                  <CE.FormControl>
                    <CE.Input
                      id="confirmPassword"
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
                  <CE.FormMessage />
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
              {form.formState.isSubmitting ? "Criando conta..." : "Criar conta"}
            </CE.Button>
          </CE.CardFooter>
        </CE.Card>
      </form>
    </CE.Form>
  );
}
