"use client";
import { setActivePostYourJobConfirmationModal } from "@/redux/features/jobpost/JobReviewSlice";
import { useDispatch } from "react-redux";
const SaveJobPostButton = () => {
  const dispatch = useDispatch();

  //   ======== handelars
  const handleOpenModal = () => {
    dispatch(setActivePostYourJobConfirmationModal(true));
  };
  return (
    <button
      onClick={handleOpenModal}
      className={` bg-[#005AFF] text-white text-xl leading-[25px] py-[14px] md:py-[18px] px-[30px] md:px-10 rounded-full`}
    >
      Save Job Post
    </button>
  );
};

export default SaveJobPostButton;
