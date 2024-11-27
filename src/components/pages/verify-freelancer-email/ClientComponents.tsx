"use client";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import { Button } from "./Buttons";

type CtaButtonsProps = {
  setActive: React.Dispatch<SetStateAction<"VERIFY" | "REDIRECT">>;
};
export const CtaButtons = ({ setActive }: CtaButtonsProps) => {
  const handleSendAgain = () => {
    // email resend functionality goes here
  };

  const handleGotoGmailInbox = () => {
    setActive("REDIRECT");
    // open redirecting modal.
  };
  return (
    <>
      <Button
        text="Send again"
        clickHandler={handleSendAgain}
        style="fs-md btn-border-blue !text-[#005AFF]"
      />
      <Button
        text="Go to Gmail Inbox"
        clickHandler={handleGotoGmailInbox}
        style="fs-md !bg-[#005AFF] !text-white"
      />

      {/* Render modal */}
    </>
  );
};

export const DidntReciveEmailButton = () => {
  const handleClick = () => {
    // email resend functionality goes here
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="fs-xl-lh-lg text-[#005AFF] underline"
      >
        Didn’t receive email?
      </button>
    </>
  );
};

// ========= redirecting message component =================
type RedirectingEmailMessageProps = {
  setActive: React.Dispatch<SetStateAction<"VERIFY" | "REDIRECT">>;
};

export function RedirectingEmailMessage({
  setActive,
}: RedirectingEmailMessageProps) {
  //  ========== hidden overflow of body ========
  useEffect(() => {
    const id = setTimeout(() => {
      setActive("VERIFY");
    }, 2000);
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
      clearTimeout(id);
    };
  }, []);

  return (
    // <div className="w-full">
    <>
      <Image
        height={200}
        width={150}
        src="/svgs/onboarding/email-verified-success-redirecting.svg"
        alt="Verified email SVG"
      />
      <h1 className="text-center fs-5xl max-w-[969px]">
        Congratulation! Your account is verified. Redirecting...
      </h1>
    </>
    // </div>
  );
}

// ========= redirecting message component =================
type VerifyEmailAddressProps = {
  setActive: React.Dispatch<SetStateAction<"VERIFY" | "REDIRECT">>;
};
export function VerifyEmailAddress({ setActive }: VerifyEmailAddressProps) {
  return (
    <>
      <Image
        height={200}
        width={150}
        src="/svgs/onboarding/verify-email-and-continue.svg"
        alt="Email SVG"
      />
      <h1 className="text-center fs-5xl ">Verify your email to continue</h1>
      <h3 className="text-center max-w-[969px] fs-xl-lh-lg">
        We just sent email to the address muhammad123@gmail.com Please check
        your email and select the link provided to verify your address
      </h3>

      <div className="w-full flex items-center justify-center gap-5 mb-10 lg:mb-[50px]">
        <CtaButtons setActive={setActive} />
      </div>
      <DidntReciveEmailButton />
    </>
  );
}

export const PageContents = () => {
  const [active, setActive] = useState<"VERIFY" | "REDIRECT">("VERIFY");

  switch (active) {
    case "REDIRECT":
      return <RedirectingEmailMessage setActive={setActive} />;

    case "VERIFY":
      return <VerifyEmailAddress setActive={setActive} />;

    default:
      return <></>;
  }
};
