"use client";
import { setActiveTabBtn } from "@/redux/features/jobpost/AllJobPostActiveStages";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

const TopTabSwitcher = () => {
  const dispatch = useDispatch();
  const active = useSelector(
    (state: RootState) => state.allJobPostActiveStages.activeTabBtn
  );
  //   ======= handelars ========
  return (
    <div className="w-full flex justify-start relative">
      <div className="w-auto bg-white h-full z-20">
        <button
          onClick={() => dispatch(setActiveTabBtn("ALL_JOB_POSTS"))}
          className={` border-b fs-base ${
            active === "ALL_JOB_POSTS"
              ? "text-[#005AFF] border-[#005AFF] mx-1"
              : "border-[#A8B7C1] pr-2.5"
          }`}
        >
          All job posts
        </button>
      </div>
      <div className="w-auto bg-white z-20">
        <button
          onClick={() => dispatch(setActiveTabBtn("ALL_CONTRACTS"))}
          className={` border-b fs-base ${
            active === "ALL_CONTRACTS"
              ? "text-[#005AFF] border-[#005AFF] mx-1"
              : "border-[#A8B7C1] pl-2.5"
          }`}
        >
          All contracts{" "}
        </button>
      </div>
      <div className="border-b z-10 border-[#A8B7C1] w-full h-1 absolute bottom-0 left-0"></div>
    </div>
  );
};

export default TopTabSwitcher;
