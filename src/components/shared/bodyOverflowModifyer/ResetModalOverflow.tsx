"use client";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const ResetJobPostReviewBodyOverflow = () => {
  const activeModal = useSelector(
    (state: RootState) => state.jobReviews.reviewActiveEditField
  );
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [activeModal]);
  return <></>;
};
