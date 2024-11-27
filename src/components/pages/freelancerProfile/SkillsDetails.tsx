"use client";
import MouseOverActiveModal from "@/components/shared/modal/MouseOverActiveModal";
import { useState } from "react";
import AllSkills from "./AllSkills";
import { ChainSVG, DocumentSVG, SimpleBlackCheckMarkSVG } from "./Icons";
import PortFilios from "./PortFilios";
import WorkHistoryContent from "./WorkHistoryContent";
import WorkHistoryTabSwitcher from "./WorkHistoryTabSwitcher";

const WorkHistoryHoverModal = () => {
  const [activeQuestionModal, setActiveQuestionModal] = useState(false);

  return (
    <div className="relative w-auto inline-flex  items-center gap-[14px] ">
      <h2 className="fs-4xl ">Work history</h2>
      <button
        className="w-auto"
        onMouseOver={() => setActiveQuestionModal(true)}
        onMouseOut={() => setActiveQuestionModal(false)}
      >
        <DocumentSVG />
      </button>
      {/* <div className="relative w-auto"> */}
      <MouseOverActiveModal
        className="top-[130%] left-[120px] w-[220px] z-[999999999]"
        active={activeQuestionModal}
        polygon={true}
      >
        <ul className="w-full">
          <li className="w-full flex items-center gap-3">
            <SimpleBlackCheckMarkSVG />
            <span className="fs-base">Newest first</span>
          </li>
          <li className="w-full flex items-center gap-3">
            <SimpleBlackCheckMarkSVG />
            <span className="fs-base">Highest rated</span>
          </li>
          <li className="w-full flex items-center gap-3">
            <SimpleBlackCheckMarkSVG />
            <span className="fs-base">Lowest rated</span>
          </li>
          <li className="w-full flex items-center gap-3">
            <SimpleBlackCheckMarkSVG />
            <span className="fs-base">Largest projects</span>
          </li>
        </ul>
      </MouseOverActiveModal>
      {/* </div> */}
    </div>
  );
};

// ========= root component =======
const SkillsDetails = () => {
  const [showMore, setShowMore] = useState(false);
  const [copyLinkModal, setCopyLinkModal] = useState(false);
  return (
    <>
      <div className="w-full flex flex-col 2xl:flex-row  2xl:items-center justify-between gap-5 mb-4">
        <h2 className="w-full max-w-[550px] fs-4xl ">
          Senior UX/UI Designer: Web/ Mobile/ SaaS Export - Figma Framer
          Designer
        </h2>
        <div className="relative flex items-center gap-[12px]">
          <p className="fs-lg-lh-normal">$25.00/hr</p>
          <button
            onMouseOver={() => setCopyLinkModal(true)}
            onMouseOut={() => setCopyLinkModal(false)}
            className="w-auto btn-gradient-light-blue "
          >
            <ChainSVG />
          </button>

          <MouseOverActiveModal
            className="top-[150%] right-[-10px] w-[250px] z-[999999999]"
            active={copyLinkModal}
            polygon={true}
            polygonPosition="right-[20px] "
          >
            <p className="fs-base">Copy link to Clipboard</p>
          </MouseOverActiveModal>
        </div>
      </div>
      <p className="text-[#525966] fs-base mb-6 md:mb-8 lg:mb-[38px]">
        Specialises in UX/UI Design
      </p>

      <p className="text-[#525966] fs-base mb-6 md:mb-8 lg:mb-[38px]">
        UX (User Experience) focuses on the journey of the user, ensuring that a
        product is intuitive, efficient, and enjoyable. UI (User Interface) is
        about the look and feel, the visual appeal, and the interactivity of a
        product. Together, they ensure that a product isn&apos;t just usable;
        it&apos;s loved...
        <span
          className="cursor-pointer text-[#005AFF] ml-2"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "less" : "more"}
        </span>
      </p>

      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-5 md:my-6 lg:my-8 bg-[#0059ff33]"></span>
      <WorkHistoryHoverModal />
      <WorkHistoryTabSwitcher />
      <WorkHistoryContent />

      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-6 md:my-9 lg:my-[48px] bg-[#0059ff33]"></span>
      <PortFilios />
      <AllSkills />
    </>
  );
};

export default SkillsDetails;
