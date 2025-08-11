import * as CE from "@/shared/components/external";
import * as CI from "@/shared/components/internal";
import { TAB_VALUES } from "@/shared/constants";

const SignInPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center p-8">
      <CE.Tabs defaultValue={TAB_VALUES.SIGN_IN}>
        <CE.TabsList className="w-full">
          <CE.TabsTrigger value={TAB_VALUES.SIGN_IN}>Entrar</CE.TabsTrigger>
          <CE.TabsTrigger value={TAB_VALUES.SIGN_UP}>
            Criar conta
          </CE.TabsTrigger>
        </CE.TabsList>

        <CE.TabsContent className="w-full" value={TAB_VALUES.SIGN_IN}>
          <CI.SignInForm />
        </CE.TabsContent>
        <CE.TabsContent className="w-full" value={TAB_VALUES.SIGN_UP}>
          <CI.SignUpForm />
        </CE.TabsContent>
      </CE.Tabs>
    </div>
  );
};

export default SignInPage;
