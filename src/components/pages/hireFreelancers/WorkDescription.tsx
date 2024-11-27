"use client";
import FileUpload from "@/components/shared/fileUpload/FileUpload";
import {
  GradientCheckboxSquareActive,
  GradientCheckboxSquareInactive,
} from "@/components/shared/icons/Icons";
import Link from "next/link";
import { useState } from "react";

const TermsAndCondition = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="my-7 md:my-10 lg:mt-[48px] lg:mb-[54px] w-full  fs-md">
      <button
        className="mr-[15px] inline float-left mt-0.5"
        onClick={() => setChecked(!checked)}
      >
        {checked ? (
          <GradientCheckboxSquareActive />
        ) : (
          <GradientCheckboxSquareInactive />
        )}
      </button>
      <span className="inline">
        Yes, I understand and agree to the Upwork Terms of Service, including
        the User Agreement and Privacy Policy.
      </span>
    </div>
  );
};

//  ============ root component ================
const WorkDescription = () => {
  return (
    <div className="w-full mt-[30px]">
      <h2 className="mb-1.5 fs-xl-lh-lg">Work description</h2>
      <p className="mb-1.5 fs-base">Related job listing</p>
      <Link href="#" className="fs-base">
        <span className="text-[#005AFF]">Blog Post Writer SEO ChatGPT </span>{" "}
        <span>(#1009406507)</span>
      </Link>
      <p className="mb-1.5 mt-5 md:mt-6 fs-base">Contract title</p>
      <p className="mb-5 md:mb-6 fs-base">Blog Post Writer SEO ChatGPT</p>
      {/* ========== double seperator ============= */}
      <span className="w-full h-[1px] block my-6  bg-[#0000001f]"></span>

      <p className="mb-1.5 fs-base">Add a description of the work</p>
      <p className="mb-5 md:mb-6 fs-base">
        I need someone to create Blog posts for me. I will provide a list. The
        list will have a sample of another article same topic. I need someone to
        create a better version using ChatGPT. Use ChatGPT in Web search mode.
        Also create an image using Dalle for featured images. If needed add more
        images. Check for SEO, spelling, plagiarism and Al detection
      </p>
      <FileUpload />

      <TermsAndCondition />
    </div>
  );
};

export default WorkDescription;
