import { PageContents } from "@/components/pages/verify-freelancer-email/ClientComponents";
import Container from "@/components/shared/wrapper/Container";

const EmailVerifyPage = () => {
  return (
    <main className="text-[#30353E] px-5 md:px-[40px] overflow-y-auto w-full bg-[#FFF] relative pt-[130px] lg:pt-[159px] 2xl:pt-[221px]">
      <Container className="mx-auto !max-w-[1518px]  flex flex-col items-center gap-[30px]  pb-[120px]">
        <PageContents />
      </Container>
    </main>
  );
};

export default EmailVerifyPage;
