"use client";
import { setPostReviewActiveEditField } from "@/redux/features/jobpost/JobReviewSlice";
import { setJobPostDescription } from "@/redux/features/jobpost/jobPostSlice";
import { setJobPostErrors } from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditJobDescriptionUploadFile from "../getStartedWithoutAi/EditJobDescriptionUploadFile";
import WarningSVG from "../login/WarningSVG";
import DescriptionEditsButtons from "./DescriptionEditsButtons";
import JobReviewModalButtons from "./JobReviewModalButtons";
import JobReviewModalTitle from "./JobReviewModalTitle";

const EditDescriptionField = () => {
  const dispatch = useDispatch();
  const description = useSelector(
    (state: RootState) => state.jobPosting.jobDescription
  );
  const error = useSelector(
    (state: RootState) => state.jobPostingStages.errors
  );
  const [val, setVal] = useState(description);

  const handleCloseModal = () => {
    dispatch(setPostReviewActiveEditField(null));
  };
  const handleSaveData = () => {
    if (!val) {
      dispatch(
        setJobPostErrors({
          field: "DESCRIPTION",
          message: "Description is required",
        })
      );
      return;
    }

    dispatch(setJobPostDescription(val));
    if (error) {
      dispatch(setJobPostErrors(null));
    }
    dispatch(setPostReviewActiveEditField(null));
  };
  return (
    <div className=" w-full max-w-[776px] max-h-[95%] min-h-[250px] py-[20px] h-full rounded-[20px] md:rounded-[30px] bg-white shadow-md ">
      <div className="overflow-y-auto relative px-[20px]  md:px-[32px] md:py-[30px] max-h-[100%] w-full h-full">
        <JobReviewModalTitle
          handler={handleCloseModal}
          label="Edit description"
        />
        {/* Search Bar Section */}
        <div className="search-bar w-full">
          {/* Title above the search bar */}
          <h2 className="fs-lg-lh-lg mb-[5px] text-[#525966]">
            Let&apos;s make some edits.
          </h2>
          <div className="flex flex-wrap gap-y-[12px] gap-x-[10px] mt-[14px] mb-[28px]">
            <DescriptionEditsButtons />
          </div>
          <textarea
            onChange={(e) => {
              setVal(e.target.value);
              if (error) {
                dispatch(setJobPostErrors(null));
              }
            }}
            placeholder="Already have a description? Paste it here!"
            className={`text-[#525966] bg-[#005aff05] mb-[28px] fs-base w-full border border-[#0000001a] px-6 py-4 rounded-[10px] focus:outline-none focus:border-blue-500`}
            value={val}
            rows={8} // Adjust height as needed
          />
          {error?.field === "DESCRIPTION" && (
            <p className="text-[#FF0000] fs-base flex items-center gap-[6px] mt-[7px] md:mt-[12px] mb-[7px] md:mb-[12px]">
              <WarningSVG /> {error.message}
            </p>
          )}

          <EditJobDescriptionUploadFile />
        </div>

        {/* Save & Cancel button */}
        <JobReviewModalButtons
          key="EDIT_DESCRIPTION_FIELD"
          cancleHandler={handleCloseModal}
          saveHandler={handleSaveData}
        />
      </div>
    </div>
  );
};

export default EditDescriptionField;
