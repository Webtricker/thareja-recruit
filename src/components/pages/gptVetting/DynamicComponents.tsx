"use client";

import { setOpenTestDetailsModal } from "@/redux/features/GptVettilngSlice/SkillTest";
import { RootState } from "@/redux/store";
import { GenerateHTML } from "@/utils/HTMLGenerator";
import { generatePDF } from "@/utils/UtilityFN";
import { useDispatch, useSelector } from "react-redux";
import { RightTopArrowViewSVG, TestReportDownloadSVG } from "./Icons";
import { ArchivedTable, ConnectedTable, ReportTable } from "./Table";

export const TestDetailsModalHeader = () => {
  const dispatch = useDispatch();
  const testDetails = useSelector(
    (state: RootState) => state.interviewProcess.testDetails
  );

  // ====== handlers ========
  const handleDownload = () => {
    // download report
    if (testDetails) {
      const html = GenerateHTML(testDetails);
      generatePDF(html, testDetails.name);
    }
    dispatch(setOpenTestDetailsModal(false));
  };
  return (
    <div className="w-full flex items-center justify-between flex-wrap gap-5 mb-6 md:mb-8">
      <div>
        <button
          onClick={handleDownload}
          className="flex items-center gap-[18px]"
        >
          <TestReportDownloadSVG />
          <span className="text-[#005AFF] fs-base">Download report</span>
        </button>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-[18px]">
        <button className="fs-md text-[#525966cc] bg-[#dde3e766]  btn-large bg-[#005AFF] ">
          Contacted
        </button>
        <button className="text-[#FF0000] fs-base">Archive</button>
      </div>
    </div>
  );
};

type TestSkillResultPropsType = {
  name: string;
  experience: string;
};

const TestSkillResult = ({ name, experience }: TestSkillResultPropsType) => {
  return (
    <div className="flex flex-col gap-2.5 w-full py-5 px-6 rounded-[20px] border border-[#EDF4FF] bg-[#FBFCFF]">
      <p className="fs-base">{name}</p>
      <p className="fs-xs">
        <span className="#525966">Self rating:</span> {experience}
      </p>
      <p className="fs-xs text-[#01D18F]">AI assessment:</p>
      <p className="fs-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque
        sollicitudin consequat dui nec Pellentesque ut rhoncus nibh. Duis ac
        augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante
        dignissim, interdum Duis ac augue ut lectus congue luctus. Vivamus eu
        lacus vestibulum, luctus ante dignissim, interdum
      </p>
      <p className="fs-xs">
        <span className="#525966">Rating by AI: </span>Not experienced
      </p>
    </div>
  );
};

export const TestDetailsModalBody = () => {
  const testDetails = useSelector(
    (state: RootState) => state.interviewProcess.testDetails
  );

  return (
    <>
      <div className="w-full border border-[#DDE3E7]  p-4 lg:p-7 xl:p-8">
        <div className="w-full flex justify-between flex-wrap gap-5">
          {/* ========== candidate details ======== */}
          <div className="flex ">
            <ul className="w-[134px] flex flex-col gap-2.5">
              <li className="w-20 fs-base text-[#A8B7C1]">Report id:</li>
              <li className="w-20 fs-base text-[#A8B7C1]">Name:</li>
              <li className="w-20 fs-base text-[#A8B7C1]">Email:</li>
            </ul>
            <ul className="flex flex-col gap-2.5">
              <li className="fs-base w-[146px]">004559</li>
              <li className="fs-base w-[146px]">
                {testDetails?.name ? testDetails?.name : "Name not found"}
              </li>
              <li className="fs-base w-[146px]">thareja@recruit.ai</li>
            </ul>
          </div>

          <div className="w-auto flex-grow">
            <p className="fs-base text-right block">
              Date:{" "}
              {testDetails?.testOn ? testDetails?.testOn : "Date not found"}
            </p>
          </div>
        </div>
        {/* ========== seperator ======== */}
        <span className="w-full h-[1px] block my-6 md:my-7 lg:my-[30px] bg-[#DDE3E7]"></span>

        {/* ======== skill test details ======== */}
        <div className="w-full flex flex-col gap-5">
          {testDetails?.skills &&
            testDetails.skills.map((skill, indx) => (
              <TestSkillResult
                name={skill.name}
                experience={skill.experience}
                key={indx + 1}
              />
            ))}
        </div>

        {/* ========== seperator ======== */}
        <span className="w-full h-[1px] block my-6 md:my-7 bg-[#DDE3E7]"></span>

        <div className="w-full flex flex-col gap-5">
          <h5 className="fs-lg">Soft Skills Result</h5>
          <TestSkillResult experience="Expert" name="Communication" />
          <TestSkillResult experience="Expert" name="Writing" />
        </div>

        <button className="mt-6 md:mt-7 flex items-center gap-[14px] btn-medium border-[#005AFF] ">
          <span className="fs-md">View transcript of questions & answers</span>
          <RightTopArrowViewSVG />
        </button>

        {/* ========== seperator ======== */}
        <span className="w-full h-[1px] block my-6 md:my-7 bg-[#DDE3E7]"></span>

        <h5 className="fs-lg-lh-md leading_normal">Did the Candidate Cheat?</h5>

        <p className="fs-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque
          sollicitudin consequat dui nec Pellentesque ut rhoncus nibh. Duis ac
          augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus
          ante dignissim, interdum Duis ac augue ut lectus congue luctus.
          Vivamus eu lacus vestibulum
        </p>
        <h5 className="mb-[14px] mt-6 md:mt-7 fs-md">Proctoring results</h5>
        <div className="w-[140px] p-[1px] bg-gradient-to-r from-[#01D18F] to-[#005AFF] rounded-[8px]">
          <div className="rounded-[7.5px] py-2.5 px-[14px] bg-[#EDF4FF]">
            <p className="fs-lg-lh-md leading_normal mb-1.5">61%</p>
            <p className="fs-sm text-[#525966]">Trust score</p>
          </div>
        </div>
      </div>

      {/* bottom body */}
      {/* <div className="w-full border border-[#DDE3E7]  p-7 md:p-8 mt-[14px]">
         
        </div> */}
    </>
  );
};

export function GPTVettingPageContent() {
  const active = useSelector(
    (state: RootState) => state.gptVettingFreelancerActieStates.activeTab
  );
  switch (active) {
    case "REPORT":
      return <ReportTable />;
    case "CONNECTED":
      return <ConnectedTable />;
    case "ARCHIVED":
      return <ArchivedTable />;
    default:
      return <></>;
  }
}
