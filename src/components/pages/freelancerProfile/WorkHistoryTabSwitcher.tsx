"use client";
import { setActiveTabBtn } from "@/redux/features/profile/FreelancerProfileActiveStages";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type ItemType = "COMPLETED_JOBS" | "IN_PROGRESS";
type Item = {
  label: string;
  Key: ItemType;
  notification: number;
};

const dropDownItems: Item[] = [
  {
    label: "Completed jobs",
    Key: "COMPLETED_JOBS",
    notification: 46,
  },
  {
    label: "In progress",
    Key: "IN_PROGRESS",
    notification: 7,
  },
];

const WorkHistoryTabSwitcher = () => {
  const dispatch = useDispatch();
  const active = useSelector(
    (state: RootState) => state.freelancerProfileActiveStages.activeTabBtn
  );

  // drop down toggler
  //   const ACTIVE_KEY = "OPEN_REVIEW_PROPOSALS_TAB_SWITCHER";
  // =============== Initial states ========
  //   const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);

  const [selected, setSelected] = useState<ItemType>("COMPLETED_JOBS");

  //   ======= handelars ========
  return (
    <div className="w-full flex justify-start relative my-5 md:my-6 lg:my-7">
      <div className="w-auto bg-white h-full z-20">
        <button
          onClick={() => dispatch(setActiveTabBtn("COMPLETED_JOBS"))}
          className={` border-b fs-base ${
            active === "COMPLETED_JOBS"
              ? "text-[#005AFF] border-[#005AFF] mx-1"
              : "border-[#A8B7C1] pr-2.5"
          }`}
        >
          Completed jobs (46)
        </button>
      </div>
      <div className="w-auto bg-white z-20">
        <button
          onClick={() => dispatch(setActiveTabBtn("IN_PROGRESS"))}
          className={` border-b fs-base ${
            active === "IN_PROGRESS"
              ? "text-[#005AFF] border-[#005AFF] mx-1"
              : "border-[#A8B7C1] pl-2.5"
          }`}
        >
          In progress (7)
        </button>
      </div>
      <div className="border-b z-10 border-[#A8B7C1] w-full h-1 absolute bottom-0 left-0"></div>
    </div>
  );
};

export default WorkHistoryTabSwitcher;
