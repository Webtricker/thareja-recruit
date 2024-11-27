"use client";
import Container from "@/components/shared/wrapper/Container";
import { setActiveIdentityVerificationCompletedStep } from "@/redux/features/settings/identityVerificationSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

type TSize = {
  width: number;
  height: number;
};

const SelfieInstructionPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [style, setStyle] = useState<CSSProperties | undefined>();
  const imageRef = useRef<HTMLImageElement>(null);

  // handlers
  const handleBack = () => {
    dispatch(setActiveIdentityVerificationCompletedStep(0));
    router.push("/settings/identity-verification");
  };

  // static variables
  const KEY = "OPEN_PROFILE_SELFI_MODAL";

  const handleTakeSelfie = () => {
    dispatch(setActiveIdentityVerificationCompletedStep(1));
    router.push("/settings/identity-verification");
  };

  useEffect(() => {
    if (imageRef.current) {
      const calculatedStyle: CSSProperties = {
        width: `${imageRef.current.width}px`,
      };
      setStyle(calculatedStyle);
    }
  }, []);

  return (
    <main className="relative text-[#30353E] w-full h-screen pt-[170px] lg:pt-[160px] px-5 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[120px]">
      <Container className="w-full h-full flex flex-col mx-auto ">
        <div className="w-auto h-full flex-grow relative mx-auto">
          <Image
            ref={imageRef}
            height={911}
            width={1518}
            src="/img/settings/take-selfi-overlay.jpg"
            alt="Selfi demo image"
            className="h-full w-auto"
          />
          <div
            style={style}
            className="px-[30px] h-[30%] flex flex-col justify-between absolute bottom-0 left-0 w-full"
          >
            <p className="fs-lg-lh-normal text-white text-center ">
              While taking the selfie please make sure your entire face should
              be within the round circle.
            </p>
            <div className="w-full flex pb-[50px]  flex-wrap gap-10 justify-between items-center">
              <button
                onClick={handleBack}
                className="btn-large fs-md text-white"
              >
                Back
              </button>
              <button
                onClick={handleTakeSelfie}
                className="btn-large btn-bg-blue fs-md"
              >
                Take Selfie
              </button>
            </div>
          </div>
        </div>
      </Container>
      {/* <Container className="w-full h-full flex flex-col mx-auto ">
        <CustomModal activeKey={KEY}>
          <h1>demo modal</h1>
          {/* <Webcam
    audio={false}
    height={720}
    screenshotFormat="image/jpeg"
    width={1280}
    videoConstraints={videoConstraints}
  > */}
      {/* </CustomModal> */}
      {/* </Container> */}
    </main>
  );
};

export default SelfieInstructionPage;
