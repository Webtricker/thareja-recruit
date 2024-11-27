"use client";
import { CrownSVG, TopRatedSVG } from "@/components/shared/card/Icons";
import { FreelancerProfileHoverDescriptionModal } from "@/components/shared/modal/FreelancersCardHoverModals";
import MouseOverActiveModal from "@/components/shared/modal/MouseOverActiveModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrorRightSVG, QuestionMarkSVG } from "./Icons";

const OpenToOffersQuestionModal = () => {
  const [activeQuestionModal, setActiveQuestionModal] = useState(false);

  return (
    <div className="flex items-center fs-base mb-2.5 gap-2">
      <span>As needed - open to offers</span>

      <div className="relative w-auto">
        <button
          className="w-auto"
          onMouseOver={() => setActiveQuestionModal(true)}
          onMouseOut={() => setActiveQuestionModal(false)}
        >
          <QuestionMarkSVG />
        </button>
        <MouseOverActiveModal
          className="top-[120%] left-[-142px] w-[300px] z-[999999999]"
          active={activeQuestionModal}
          polygon={false}
        >
          <p className="fs-md">
            This freelancers respond to most invitations within 24 hours
          </p>
        </MouseOverActiveModal>
      </div>
    </div>
  );
};

const NewLabelHoverModal = () => {
  const [activeQuestionModal, setActiveQuestionModal] = useState(false);
  return (
    <div className="flex items-center gap-1 fs-base mb-2.5 text-[#A1A5AD]">
      <span>Open to contract to hire</span>{" "}
      <div className="relative w-auto">
        <button
          className="w-auto block py-1 px-2.5 rounded-[10px] leading-[10px] bg-[#FFCC48] text-black text-[8px] tracking-[0.16px]"
          onMouseOver={() => setActiveQuestionModal(true)}
          onMouseOut={() => setActiveQuestionModal(false)}
        >
          NEW
        </button>
        <MouseOverActiveModal
          className="top-[120%] left-[-142px] w-[300px] z-[999999999]"
          active={activeQuestionModal}
          polygon={false}
        >
          <span className="mb-1 inline-block w-auto py-1 px-2.5 rounded-[10px] leading-[10px] bg-[#FFCC48] text-black text-[8px] tracking-[0.16px]">
            NEW
          </span>
          <p className="text-[#30353E] mb-2.5 fs-lg-lh-lg">Contract-to-hire</p>
          <p className="text-[#30353E] fs-base">
            Find talent open to starting with a contract, and later explore a
            full-time option.
          </p>
        </MouseOverActiveModal>
      </div>
    </div>
  );
};

// ========= root component ============
const ViewProfile = () => {
  const [activeModal, setActiveModal] = useState<
    "RATING" | "JOB_SUCCESS" | null
  >(null);
  return (
    <>
      <h3 className="mb-1 fs-xl-lh-lg">View profile</h3>
      <div className="mx-[14px] flex flex-col gap-3 mt-3">
        <p className="fs-base">UX/UI Design</p>
        <p className="fs-base">Mobile Design</p>
        <button className="mt-1 w-full  md:max-w-[350px] flex items-center justify-between fs-md py-1.5 px-5 rounded-[100px] border border-[#0059ff33] text-[#005AFF]">
          <span>All work</span>{" "}
          <span>
            <ArrorRightSVG />
          </span>
        </button>
      </div>

      {/*  ========= seperator ================  */}
      <span className="w-full h-[1px] block my-6 md:my-8 lg:my-[38px] bg-[#0059ff33]"></span>

      <div className="w-full flex items-start justify-between">
        <div className="">
          <p className="fs-md leading_normal tracking-[0.4px] text-[#005AFF] mb-1">
            30
          </p>
          <p className="fs-md leading_normal tracking-[0.4px] text-[#A1A5AD]">
            Total Jobs
          </p>
        </div>
        <div className="">
          <p className="fs-md leading_normal tracking-[0.4px] text-[#005AFF] mb-1">
            30
          </p>
          <p className="fs-md leading_normal tracking-[0.4px] text-[#A1A5AD]">
            Total Jobs
          </p>
        </div>
        <div className="">
          <p className="fs-md leading_normal tracking-[0.4px] text-[#005AFF] mb-1">
            1,180
          </p>
          <p className="fs-md leading_normal tracking-[0.4px] text-[#A1A5AD]">
            Total Hours
          </p>
        </div>
      </div>

      <h3 className="mb-1 fs-xl-lh-lg mt-6 md:mt-8 lg:mt-[38px]">
        Hours per week
      </h3>
      <p className="fs-base mb-1">As needed - open to offers</p>
      <OpenToOffersQuestionModal />

      <NewLabelHoverModal />
      <h3 className="mb-1 fs-xl-lh-lg mt-6 md:mt-8 lg:mt-[38px]">Languages </h3>
      <p className="fs-base mb-1">
        <span className="">English:</span> 
        <span className="text-[#A1A5AD]">Native or Bilingual</span>
      </p>
      <p className="fs-base mb-1">
        <span className="">Hindi:</span> 
        <span className="text-[#A1A5AD]">Native or Bilingual</span>
      </p>

      {/* ======== seperator =========== */}
      <h3 className="mb-1 fs-xl-lh-lg mt-6 md:mt-8 lg:mt-[38px]">
        Verifications{" "}
      </h3>
      <p className="fs-base mb-1">ID: Verified</p>

      {/* ======== seperator =========== */}
      <h3 className="mb-1 fs-xl-lh-lg mt-6 md:mt-8 lg:mt-[38px]">Education</h3>
      <p className="fs-base mb-1">
        Associate&apos;s degree, professional print design | Skills Development
        Centre
      </p>
      <p className="fs-base mb-1 text-[#A1A5AD]">2017-2018</p>
      <p className="fs-base mb-1">
        Associate&apos;s degree, professional print design | Skills Development
        Centre
      </p>
      <p className="fs-base mb-1 text-[#A1A5AD]">
        Bachelor of Computer Science (BCompSc) 2014-2016
      </p>

      {/* ======== seperator =========== */}
      <h3 className="mb-1 fs-xl-lh-lg mt-6 md:mt-8 lg:mt-[38px]">
        Associated with
      </h3>
      <div className="flex items-start gap-1.5">
        <Image
          width={50}
          height={50}
          src="/svgs/epicsols-icon.svg"
          alt="icon"
        />
        <div>
          <p className="fs-base mb-1">Epicsols</p>
          <p className="text-[14px] leading-[25px] mb-1 text-[#A1A5AD]">
            581 hours
          </p>
          <div className="relative w-auto mb-1">
            <p
              onMouseEnter={() => setActiveModal("JOB_SUCCESS")}
              onMouseLeave={() => setActiveModal(null)}
              className="z-10 cursor-pointer fs-base flex items-center gap-2 "
            >
              <CrownSVG />{" "}
              <span className="text-[#9EAB0C]">98% job sucess</span>
            </p>
            {/* ===== hover modal ======== */}
            <FreelancerProfileHoverDescriptionModal
              active={activeModal === "JOB_SUCCESS"}
              className="w-[270px] top-[180%] left-[-30%] z-50"
            >
              <p className="fs-base ">
                The percentage of this freelancer&apos;s jobs that resulted in a
                great client experience.
                <br />
                <Link href="#" className="text-[#005AFF]">
                  Learn more
                </Link>
              </p>
            </FreelancerProfileHoverDescriptionModal>
          </div>
          <div className="relative w-auto">
            <p
              onMouseEnter={() => setActiveModal("RATING")}
              onMouseLeave={() => setActiveModal(null)}
              className="z-10 cursor-pointer fs-base flex items-center gap-2 text-[#FF9314]"
            >
              <TopRatedSVG /> <span>Top rated</span>
            </p>
            {/* ===== hover modal ======== */}
            <FreelancerProfileHoverDescriptionModal
              active={activeModal === "RATING"}
              className="z-50 w-[270px] top-[180%] left-[-50%]"
            >
              <p className="fs-base ">
                Top Rated talent delivers quality work with stellar feedback.{" "}
                <Link href="#" className="text-[#005AFF]">
                  Learn more
                </Link>
              </p>
            </FreelancerProfileHoverDescriptionModal>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;
