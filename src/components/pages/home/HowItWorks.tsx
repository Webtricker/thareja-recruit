"use client";
import Link from "next/link";
import { useState } from "react";

const HowItWorks = () => {
  const [show, setShow] = useState(false);
  return !show ? (
    <p className="text-lg max-w-[612px] w-full pt-[20px] lg:pt-10">
      Beta feature powered by Uma, Recruit’s Mindful AI.{" "}
      <button
        onClick={() => setShow(true)}
        className="inline text-[#005AFF] tracking-[0.4px] "
      >
        How it works
      </button>
    </p>
  ) : (
    <p className="fs-md max-w-[612px] w-full pt-[20px] lg:pt-10">
      We&apos;ll share your requirements for the job with OpenAi to help you
      draft a job post. our use of this feature will be subject to OpenAI&apos;s{" "}
      <Link className="inline text-[#005AFF] tracking-[0.4px]" href="#">
        Usage Policy
      </Link>{" "}
      and{" "}
      <Link className="inline text-[#005AFF] tracking-[0.4px]" href="#">
        Privacy Policy
      </Link>
    </p>
  );
};

export default HowItWorks;
