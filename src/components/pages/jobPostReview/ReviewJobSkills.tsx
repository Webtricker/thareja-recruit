"use client";
import { setPostReviewActiveEditField } from "@/redux/features/jobpost/JobReviewSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import EditJobSkills from "./EditJobSkills";
import EditPenSVG from "./EditPenSVG";
import ReviewPostFieldModal from "./ReviewPostFieldModal";

const ReviewJobSkills = () => {
  const dispatch = useDispatch();
  const activeModal = useSelector(
    (state: RootState) => state.jobReviews.reviewActiveEditField
  );

  const selectedSkills = useSelector(
    (state: RootState) => state.jobPosting.requiredSkills
  );
  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-2 md:gap-6 w-full">
        <div className="w-full max-w-[80%]">
          <h6 className="text-[22px] text-[#30353E]">Skills</h6>
          <p className="text-lg text-[#525966] ">
            {selectedSkills.length
              ? selectedSkills.join(", ")
              : "Add skills for Job"}
          </p>
        </div>
        <button
          onClick={() => dispatch(setPostReviewActiveEditField("SKILLS"))}
          className="text-[#005AFF] border border-[#A8B7C1] rounded-full flex items-center justify-center w-10 h-10"
        >
          <EditPenSVG />
        </button>
      </div>
      {activeModal === "SKILLS" && (
        <ReviewPostFieldModal>
          <EditJobSkills />
        </ReviewPostFieldModal>
      )}
    </>
  );
};

export default ReviewJobSkills;
