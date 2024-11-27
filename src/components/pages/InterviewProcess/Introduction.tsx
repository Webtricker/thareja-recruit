import PowerdByRecruit from "@/components/shared/copyRight/PowerdByRecruit";
import Image from "next/image";
import { ContinueIntroductionButton } from "./Buttons";

const Introduction = () => {
  return (
    <>
      <p className="text-center fs-md max-w-[615px] mx-auto block ">
        The difficulty of the questions are based on how you rate yourself on
        each skill. Please note that this test is timed, with an approximate
        allocation of 2 minutes per question. You will answer each question
        using a voice recording, please make sure you have a stable internet
        connection and clear audio. TESTINGGGGGGGGGinging
      </p>

      <h2 className="text-center fs-3xl text-[#005AFF] my-7 lg:my-10">
        Best of luck!
      </h2>

      <div className="w-full max-w-[680px] mx-auto mb-10 md:mb-12 lg:mb-16 2xl:mb-[100px]">
        {/* it will be interveiew iframe related video */}
        <Image
          src="/svgs/interview-iframe-get-start-video-bg.svg"
          width={680}
          height={403}
          className="w-full h-auto"
          alt="backgrund image"
        />
      </div>

      <ContinueIntroductionButton />
      <PowerdByRecruit />
    </>
  );
};

export default Introduction;
