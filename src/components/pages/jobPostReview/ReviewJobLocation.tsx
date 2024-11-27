"use client";
import { RootState } from "@/redux/store";
import EditPenSVG from "./EditPenSVG";

import { setPostReviewActiveEditField } from "@/redux/features/jobpost/JobReviewSlice";
import { useDispatch, useSelector } from "react-redux";
import EditReviewJobLocation from "./EditReviewJobLocation";
import ReviewPostFieldModal from "./ReviewPostFieldModal";

const ReviewJobLocation = () => {
  const dispatch = useDispatch();
  const activeModal = useSelector(
    (state: RootState) => state.jobReviews.reviewActiveEditField
  );
  const location = useSelector(
    (state: RootState) => state.jobPosting.jobLocation
  );
  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-6">
        <div className="">
          <h6 className="fs-lg-lh-md mb-1.5 text-[#30353E]">
            Location preferences
          </h6>
          <p className="fs-base text-[#525966] ">{location}</p>
        </div>

        <button
          onClick={() => dispatch(setPostReviewActiveEditField("LOCATION"))}
          className="text-[#005AFF] border border-[#A8B7C1] rounded-full flex items-center justify-center w-10 h-10"
        >
          <EditPenSVG />
        </button>
      </div>
      {activeModal === "LOCATION" && (
        <ReviewPostFieldModal>
          <EditReviewJobLocation />
        </ReviewPostFieldModal>
      )}
    </>
  );
};

export default ReviewJobLocation;
