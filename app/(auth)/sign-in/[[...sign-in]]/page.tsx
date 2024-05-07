import { SignIn, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import { Loader2 } from 'lucide-react';

const SignInPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2e2a47]">Welcome Back!</h1>
          <p className="text-base text-[#7e8ca0]">
            Login or Create account to get back to your dashboard!
          </p>
          <div className="flex items-center justify-center mt-8">
            <ClerkLoading>
              <Loader2 className="animate-spin text-muted-foreground" />
            </ClerkLoading>
            <ClerkLoaded>
              <SignIn path="/sign-in" />
            </ClerkLoaded>
          </div>
        </div>
      </div>
      <div className="h-full hidden lg:flex items-center justify-center border-l-2">
        <h1>LogoIPSUM</h1>
      </div>
    </div>
  );
};

export default SignInPage;
