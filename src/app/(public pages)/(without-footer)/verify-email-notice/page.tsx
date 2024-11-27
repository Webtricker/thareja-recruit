import TopWarning from "@/components/shared/common/topWarning";
import Container from "@/components/shared/wrapper/Container";
import Image from "next/image";

const VerifyEmailNoticePage = () => {
  return (
    <main className="relative w-full h-[100%] pb-[50px] md:pb-[100px] 2xl:pb-[178px] pt-[130px] lg:pt-[149px] px-5 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[120px]">
      <Container className="w-full ai-page min-h-[100%] mx-auto">
        <TopWarning
          className="pb-[50px] md:pb-[60px] lg:pb-[80px]"
          warning="As part of our continued efforts to remain compliant with tax laws globally, please enter your Tax Identification Number here."
        />
        <div className="flex flex-col items-center justify-center w-full h-full gap-[30px] md:gap-10 lg:gap-[60px]">
          <Image
            src="/svgs/user-card.svg"
            width={223}
            height={191}
            alt="Card image"
            className="w-[100px] md:w-[130px] lg:w-[140px] xl:w-[223px] h-auto"
          />
          <h1 className="text-center fs-6xl text-[#30353E]">
            We can’t wait to post your job! Please verify your email and phone.
          </h1>
        </div>
      </Container>
    </main>
  );
};

export default VerifyEmailNoticePage;
