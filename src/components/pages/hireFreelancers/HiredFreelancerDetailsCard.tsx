"use client";
import { CrownSVG, LocationSVG } from "@/components/shared/card/Icons";
import { FreelancerProfileHoverDescriptionModal } from "@/components/shared/modal/FreelancersCardHoverModals";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MailSVG, RightArrowSVG } from "./Icons";

const HiredFreelancerDetailsCard = () => {
  const [activeModal, setActiveModal] = useState<
    "RATING" | "JOB_SUCCESS" | null
  >(null);
  return (
    <div className="relative w-full p-5  md:p-10 border border-[#005aff33] bg-[#005aff05] rounded-[20px]  flex flex-col lg:flex-row gap-5 md:gap-[30px] items-start">
      <div className="relative w-full lg:max-w-[94px] flex flex-col gap-[30px]">
        <div className="relative w-full h-auto max-w-[94px]">
          <Image
            src="/svgs/freelancer-profile.svg"
            width={84.27}
            height={84.27}
            alt="Profile"
            className="p-[2.86px] rounded-full w-[94.27px] h-[94.27px] border-[2.62px] border-[#A8B7C1]"
          />
          <span className="absolute z-50 right-[3.24px] bottom-[3.24px] w-[22.69px] h-[22.69px] rounded-full border-[1.62px] border-white bg-[#A8B7C1]"></span>
        </div>
        <p className="absolute lg:relative top-5 lg:right-0 lg:top-0 right-5 w-auto max-w-[98px] block py-2 px-2.5 rounded-[10px] bg-gradient-to-r to-[#FAFCFF] from-[#E1E5FF] fs-base text-[#005AFF]">
          Invited
        </p>
      </div>
      <div className="w-full lg:max-w-[1314px]">
        {/* ===========  top container =========== */}
        <div className="w-full mb-5 flex  items-start justify-between flex-wrap gap-5">
          <div>
            <h2 className="fs-xl-lh-normal mb-1.5">Muhammad I.</h2>
            <p className="fs-base mb-1.5">
              Senior UI UX Designer | Product Designer | SaaS | Figma
            </p>
            <p className="fs-base flex items-center gap-1 mr-[30px]">
              <LocationSVG />
              <span>India</span>
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <button className=" fs-md btn-large btn-border-blue">Rehire</button>
          </div>
        </div>

        {/* ===========  bottom container =========== */}

        <div className="w-full">
          <div className="flex items-center flex-wrap gap-y-2.5 gap-x-5 w-full my-5">
            <p className="inline fs-base">
              $ <span>6.00/hr</span>
            </p>
            <p className="fs-base">
              $ <span>60k+ earned </span>
            </p>
            <div className="relative w-auto">
              <p
                onMouseEnter={() => setActiveModal("JOB_SUCCESS")}
                onMouseLeave={() => setActiveModal(null)}
                className=" cursor-pointer fs-base flex items-center gap-2 "
              >
                <CrownSVG />{" "}
                <span className="text-[#9EAB0C]">98% job sucess</span>
              </p>
              {/* ===== hover modal ======== */}
              <FreelancerProfileHoverDescriptionModal
                active={activeModal === "JOB_SUCCESS"}
                className="w-[270px] top-[180%] left-[-30%]"
              >
                <p className="fs-base ">
                  The percentage of this freelancer&apos;s jobs that resulted in
                  a great client experience.
                  <br />
                  <Link href="#" className="text-[#005AFF]">
                    Learn more
                  </Link>
                </p>
              </FreelancerProfileHoverDescriptionModal>
            </div>
          </div>

          <div className="w-full ">
            <MailSVG className="inline float-left mr-[14px]" />
            <span className="">
              Recieved 2 quarters ago: Well noted Dhiraj Thareja
            </span>
          </div>

          <p className="fs-base my-5 md:my-[30px]">
            <span className="text-[#005AFF]">Cover letter</span>{" "}
            <span>
              - Already working on a similar project using the GPT-4 Model which
              has access to the website to get statistics. You may check out the
              sample article.
            </span>
            <Link
              className="text-wrap inline-flex flex-wrap"
              target="_blank"
              href="https://docs.google.com/document/d/1JRbwokohV-mWN78ggLOYU62VBU2nLH1cORqdMOLJNEU/edit"
            >
              {" "}
              https://docs.google.com<span>/document/d/</span>
              <span>1JRbwokohV-</span>
              <span>mWN78ggLOY</span>
              <span>U62VBU2n</span>
              <span>LH1cORq</span>
              <span>dMOLJNEU</span>/edit{" "}
            </Link>
            <span>Hi, I hope you are having a good day.</span>
          </p>

          {/* skills container  */}
          <div className="w-full flex items-center gap-[14px] flex-wrap">
            <p className="fs-md skill-btn-large">Application Design</p>
            <p className="fs-md skill-btn-large">Website Design</p>
            <p className="fs-md skill-btn-large">Prototyping</p>
            <p className="fs-md skill-btn-large">Website Copywriting</p>
            <p className="fs-md skill-btn-large">Product Description</p>
            <RightArrowSVG />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiredFreelancerDetailsCard;
