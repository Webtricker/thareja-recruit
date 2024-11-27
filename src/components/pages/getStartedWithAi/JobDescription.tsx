"use client";
import { setJobPostDescription } from "@/redux/features/jobpost/jobPostSlice";
import { setJobPostErrors } from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WarningSVG from "../login/WarningSVG";
const JobDescription = () => {
  const dispatch = useDispatch();
  const error = useSelector(
    (state: RootState) => state.jobPostingStages.errors
  );
  const description = useSelector(
    (state: RootState) => state.jobPosting.jobDescription
  );

  //   state to mange functionality
  const [charLeft, setCharLeft] = useState("200");
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const TOTAL_CHAR = 200;
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

    // set the changed value.
    setCharLeft(remainingCH);
    dispatch(setJobPostDescription(text));
  };
  return (
    <div className="max-w-[1300px] w-full mx-auto h-full flex items-center justify-between">
      <div className="w-full">
        <h1 className="mb-[38px] fs-5xl max-w-[1016px] text-center mx-auto block">
          Describe what you’re looking for in a sentence or two.
        </h1>
        <textarea
          onChange={handleInputChange}
          placeholder="Eg. I need someone to help me to build a shopify website for my office furniture business"
          className={`text-wrap h-28 md:h-20 lg:h-auto rounded-[20px] lg:rounded-[50px]  text-left resize-none bg-[#005aff05] leading-[25px] text-[18px] md:text-[20px] w-full border border-[#0000001a] px-5 py-[14px] focus:outline-none focus:border-blue-500  ${
            !description && "lg:text-center "
          }`}
          value={description}
          rows={1}
          // Adjust height as needed
        />
        <dfn className="not-italic text-end block text-12 mt-5 lg:mt-[30px]">
          {charLeft} characters left
        </dfn>
        {error?.field === "DESCRIPTION" && (
          <p className="text-[#FF0000] fs-base flex items-center gap-[6px] mt-[7px] md:mt-[12px] mb-[7px] md:mb-[12px]">
            <WarningSVG /> {error.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default JobDescription;
