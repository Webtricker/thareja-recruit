"use client";
import ReviewPostFieldModal from "@/components/pages/jobPostReview/ReviewPostFieldModal";
import XMarkBlack from "@/components/shared/icons/XMarkBlack";
import { setActivePostYourJobConfirmationModal } from "@/redux/features/jobpost/JobReviewSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PostYourJobModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const active = useSelector(
    (state: RootState) => state.jobReviews.activePostYourJobConfirmationModal
  );

  //   ======== handelars

  const handleCloseModal = () => {
    dispatch(setActivePostYourJobConfirmationModal(false));
  };

  const handleSavePost = () => {
    dispatch(setActivePostYourJobConfirmationModal(false));
    router.push("/view-job-post");
  };

  useEffect(() => {
    dispatch(setActivePostYourJobConfirmationModal(false));
  }, []);

  return active ? (
    <ReviewPostFieldModal>
      <div className=" w-full max-w-[694px] max-h-[95%] min-h-[250px] h-auto rounded-[20px] md:rounded-[30px] bg-white shadow-md ">
        <div className="overflow-y-auto relative p-[20px]  md:p-[30px] md:px-[51px] max-h-[100%] w-full h-full">
          {/* ====== cancel button ======= */}
          <button
            className="mb-2.5 w-full flex items-center justify-end"
            onClick={handleCloseModal}
          >
            <XMarkBlack />
          </button>

          {/* ====== post your job modal content starts ======= */}
          <div className="w-full flex flex-col items-center justify-center gap-5 md:gap-7">
            <Image
              width={157}
              height={136}
              className="w-[100px] h-auto md:w-[130px] lg:w-[157px] mx-auto"
              src="/svgs/hand-holding-writing-checklist-application-form-document.svg"
              alt="Hand holding writing checklist appliation from document"
            />
            <h2 className="text-center fs-xl-lh-lg">
              What happens after you post your job?
            </h2>
            <p className="fs-base text-center">
              You’ll receive proposals and you can invite talent to your job, No
              charges until you hire.
            </p>

            {/* ===== Job post Save & button ======= */}
            <div className="w-full flex items-center justify-center gap-[14px] flex-wrap md:flex-nowrap">
              <Link
                // onClick={}
                href="/job-post-review"
                className="text-[#005AFF] text-base md:text-xl py-[14px] md:py-[18px] px-[30px] md:px-10"
              >
                Edit job post
              </Link>
              <button
                onClick={handleSavePost}
                className={` bg-[#005AFF] text-white text-base md:text-xl py-[14px] md:py-[18px] px-[30px] md:px-10 rounded-full `}
              >
                Save Job Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </ReviewPostFieldModal>
  ) : (
    <></>
  );
};

export default PostYourJobModal;
