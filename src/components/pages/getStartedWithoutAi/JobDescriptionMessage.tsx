"use client";
import { setJobPostDescription } from "@/redux/features/jobpost/jobPostSlice";
import { setJobPostErrors } from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WarningSVG from "../login/WarningSVG";
import { YellowWarningSVG } from "./Icons";

const JobDescriptionMessage = () => {
  const dispatch = useDispatch();
  const error = useSelector(
    (state: RootState) => state.jobPostingStages.errors
  );
  const description = useSelector(
    (state: RootState) => state.jobPosting.jobDescription
  );

  //   state to mange functionality
  const [warning, setWarning] = useState(false);
  const [charLeft, setCharLeft] = useState("50,000");
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const TOTAL_CHAR = 50000;
    if (text.length > TOTAL_CHAR) {
      dispatch(
        setJobPostErrors({
          field: "DESCRIPTION",
          message: "Maximum capacity exceeded!",
        })
      );
      dispatch(setJobPostDescription(description));
      return;
    }

    dispatch(setJobPostErrors(null));

    let remainingCH = (TOTAL_CHAR - text.length).toString();
    if (text.length > 0 && text.length < 500) {
      setWarning(true);
    } else {
      warning && setWarning(false);
    }
    if (remainingCH.length > 3) {
      remainingCH = remainingCH
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // set the changed value.
    setCharLeft(remainingCH);
    dispatch(setJobPostDescription(text));
  };
  return (
    <div className="search-bar w-full">
      {/* Title above the search bar */}
      <h2 className="text-22 leading-[34px] md:leading-[40px] font-normal mb-[5px]">
        Describe what you need
      </h2>
      <textarea
        onChange={handleInputChange}
        placeholder="Already have a description? Paste it here!"
        className={`bg-[#005aff05] leading-[25px] text-[18px] w-full border border-[#0000001a] px-6 py-4 rounded-[10px] focus:outline-none focus:border-blue-500 ${
          warning && "!border-[#FFCC48]"
        }`}
        value={description}
        rows={8} // Adjust height as needed
      />
      <dfn className="not-italic text-end block text-12">
        {charLeft} characters left
      </dfn>
      {error?.field === "DESCRIPTION" && (
        <p className="text-[#FF0000] fs-base flex items-center gap-[6px] mt-[7px] md:mt-[12px] mb-[7px] md:mb-[12px]">
          <WarningSVG /> {error.message}
        </p>
      )}
      {warning && (
        <p className="fs-base flex gap-[6px] mt-[7px] md:mt-[12px] mb-[7px] md:mb-[12px]">
          <YellowWarningSVG className="w-[22px] h-[22px]" />{" "}
          <span>
            Your description looks a little short. Add details like your project
            milestones and a bit about your team.
          </span>
        </p>
      )}
    </div>
  );
};

export default JobDescriptionMessage;
