"use client";
import { setPostReviewActiveEditField } from "@/redux/features/jobpost/JobReviewSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import EditJobScope from "./EditJobScope";
import EditPenSVG from "./EditPenSVG";
import ReviewPostFieldModal from "./ReviewPostFieldModal";

const ReviewJobScope = () => {
  const dispatch = useDispatch();
  const activeModal = useSelector(
    (state: RootState) => state.jobReviews.reviewActiveEditField
  );
  const jobScale = useSelector((state: RootState) => state.jobPosting.jobScale);
  const projectDuration = useSelector(
    (state: RootState) => state.jobPosting.jobDuration
  );
  const experienceLavel = useSelector(
    (state: RootState) => state.jobPosting.jobExperienceLevel
  );

  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-2 md:gap-6">
        <div className="w-[80%]">
          <h6 className="fs-lg-lh-md mb-1.5 text-[#30353E]">Scope</h6>
          <p className="fs-base text-[#525966] ">
            {jobScale}, {projectDuration}, {experienceLavel}
          </p>
        </div>

        <button
          onClick={() => dispatch(setPostReviewActiveEditField("SCOPE"))}
          className="text-[#005AFF] border border-[#A8B7C1] rounded-full flex items-center justify-center w-10 h-10"
        >
          <EditPenSVG />
        </button>
      </div>

      {activeModal === "SCOPE" && (
        <ReviewPostFieldModal>
          <EditJobScope />
        </ReviewPostFieldModal>
      )}
    </>
  );
};

export default ReviewJobScope;
