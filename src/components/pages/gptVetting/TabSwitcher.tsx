"use client";
"use client";

import { setActiveTab } from "@/redux/features/GptVettilngSlice/GptVettingFreelancerTableSlice";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type ItemType = "SEARCH" | "INVITE" | "HIRE" | "SAVED";
type Item = {
  label: string;
  Key: ItemType;
};

const TabSwitcher = () => {
  const dispatch = useDispatch();
  const active = useSelector(
    (state: RootState) => state.gptVettingFreelancerActieStates.activeTab
  );

  // // drop down toggler
  // const ACTIVE_KEY = "OPEN_INVITE_FREELANCER_TAB_SWITCHER";
  // // =============== Initial states ========
  // const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);

  const [selected, setSelected] = useState<ItemType>("SEARCH");
  return (
    <div className="w-full flex justify-start relative my-5">
      <div className="w-auto bg-[#FBFCFF] h-full z-20">
        <button
          onClick={() => dispatch(setActiveTab("REPORT"))}
          className={`pb-1.5 border-b fs-base ${
            active === "REPORT"
              ? "text-[#005AFF] border-[#005AFF] mx-1"
              : "border-[#A8B7C1] pr-2.5"
          }`}
        >
          Report (17)
        </button>
      </div>
      <div className="w-auto bg-[#FBFCFF] z-20">
        <button
          onClick={() => dispatch(setActiveTab("CONNECTED"))}
          className={`pb-1.5 border-b fs-base ${
            active === "CONNECTED"
              ? "text-[#005AFF] border-[#005AFF] mx-1"
              : "border-[#A8B7C1] px-2.5"
          }`}
        >
          Connected (3)
        </button>
      </div>
      <div className="w-auto bg-[#FBFCFF] z-20">
        <button
          onClick={() => dispatch(setActiveTab("ARCHIVED"))}
          className={`pb-1.5 border-b fs-base ${
            active === "ARCHIVED"
              ? "text-[#005AFF] border-[#005AFF] ml-1"
              : "border-[#A8B7C1] pl-2.5"
          }`}
        >
          Archived (0)
        </button>
      </div>
      <div className="border-b z-10 border-[#A8B7C1] w-full h-1 absolute bottom-0 left-0"></div>
    </div>
  );
};

export default TabSwitcher;
