import LoginHeader from "@/components/shared/header/LoginHeader";

export default function SignInSignOut({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LoginHeader />
      {children}
    </>
  );
}
