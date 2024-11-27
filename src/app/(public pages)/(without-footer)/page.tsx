import Hero from "@/components/pages/home/hero";
import TopWarning from "@/components/shared/common/topWarning";
import Container from "@/components/shared/wrapper/Container";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-5 max-w-[100%] md:px-[40px] relative pb-[50px] md:pb-[100px] 2xl:pb-[120px] pt-[130px] lg:pt-[149px]">
      <Container className="mx-auto">
        <TopWarning
          className="pb-10 lg:pb-[60px]"
          warning="As part of our continued efforts to remain compliant with tax laws
            globally, please enter your Tax Identification Number here."
        />
        <Hero />
      </Container>

      <Image
        className="pointer-events-none z-[-1] absolute w-[341px] md:w-[441px] 2xl:w-[641px] h-auto right-0 bottom-0"
        height={705}
        src="/svgs/home-flower-bg.svg"
        width={641}
        alt="flower image"
      />
    </main>
  );
}
