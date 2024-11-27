"use client";
import { setActiveTabBtn } from "@/redux/features/jobpost/ReviewProposalsActiveStages";
import { SET_EXPAND } from "@/redux/features/rootModyfier/Modyfier";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DownArrowSVG from "../login/DownArrowSVG";

type ItemType = "PROPOSALS" | "SHORT_LISTED" | "MESSAGE" | "ARCHIVED";
type Item = {
  label: string;
  Key: ItemType;
  notification: number;
};

const dropDownItems: Item[] = [
  {
    label: "All proposals",
    Key: "PROPOSALS",
    notification: 65,
  },
  {
    label: "Shortlisted",
    Key: "SHORT_LISTED",
    notification: 0,
  },
  {
    label: "Messaged",
    Key: "MESSAGE",
    notification: 6,
  },
  {
    label: "Archived",
    Key: "ARCHIVED",
    notification: 17,
  },
];

const ReviewProposalsTabSwitcher = () => {
  const dispatch = useDispatch();
  const active = useSelector(
    (state: RootState) => state.reviewJobProposalsActiveStages.activeTabBtn
  );

  // drop down toggler
  const ACTIVE_KEY = "OPEN_REVIEW_PROPOSALS_TAB_SWITCHER";
  // =============== Initial states ========
  const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);

  const [selected, setSelected] = useState<ItemType>("PROPOSALS");

  const filteredItem = dropDownItems.find((item) => item.Key === active);

  //   ======= handelars ========
  return (
    <>
      <div className="w-full hidden md:flex justify-start relative mb-5">
        <div className="w-auto bg-white h-full z-20">
          <button
            onClick={() => dispatch(setActiveTabBtn("PROPOSALS"))}
            className={`pb-1.5 border-b fs-base ${
              active === "PROPOSALS"
                ? "text-[#005AFF] border-[#005AFF] mx-1"
                : "border-[#A8B7C1] pr-2.5"
            }`}
          >
            All proposals <span> (65)</span>
          </button>
        </div>
        <div className="w-auto bg-white z-20">
          <button
            onClick={() => dispatch(setActiveTabBtn("SHORT_LISTED"))}
            className={`pb-1.5 border-b fs-base ${
              active === "SHORT_LISTED"
                ? "text-[#005AFF] border-[#005AFF] mx-1"
                : "border-[#A8B7C1] px-2.5"
            }`}
          >
            Shortlisted <span></span>
          </button>
        </div>
        <div className="w-auto bg-white z-20">
          <button
            onClick={() => dispatch(setActiveTabBtn("MESSAGE"))}
            className={`pb-1.5 border-b fs-base ${
              active === "MESSAGE"
                ? "text-[#005AFF] border-[#005AFF] mx-1"
                : "border-[#A8B7C1] px-2.5"
            }`}
          >
            Messaged <span> (6)</span>
          </button>
        </div>
        <div className="w-auto bg-white z-20">
          <button
            onClick={() => dispatch(setActiveTabBtn("ARCHIVED"))}
            className={`pb-1.5 border-b fs-base ${
              active === "ARCHIVED"
                ? "text-[#005AFF] border-[#005AFF] mx-1"
                : "border-[#A8B7C1] px-2.5"
            }`}
          >
            Archived <span> (17)</span>
          </button>
        </div>
        <div className="border-b z-10 border-[#A8B7C1] w-full h-1 absolute bottom-0 left-0"></div>
      </div>

      {/* drop down for mobile device */}
      <div className="rounded-[10px] relative mb-5 w-full md:hidden z-[99999999]">
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(SET_EXPAND(EXPAND !== ACTIVE_KEY ? ACTIVE_KEY : null));
          }}
          className={`w-full flex items-center border-b border-[#A8B7C1] gap-4 justify-between !pb-1.5 !px-0  md:!py-2.5 md:!px-[14px] ${
            EXPAND === ACTIVE_KEY && "pointer-events-none"
          }`}
        >
          <span className="pointer-events-none fs-base">
            {filteredItem?.label}
          </span>

          <DownArrowSVG
            className={`duration-200 pointer-events-none ${
              EXPAND === ACTIVE_KEY && "rotate-180"
            }`}
          />
        </button>
        <ul
          className={`z-40 absolute flex flex-col gap-0.5 justify-between w-full top-[110%] left-0 mt-0 h-auto max-h-0 overflow-hidden ${
            EXPAND === ACTIVE_KEY &&
            "!max-h-[9999px] py-2.5 shadow-lg mt-1 border bg-white border-[#0000001a] rounded-[10px] overflow-hidden"
          }`}
        >
          {dropDownItems.map((item) => (
            <li
              onClick={(e) => {
                e.stopPropagation();
                dispatch(setActiveTabBtn(item.Key));
                setSelected(item.Key);
              }}
              key={item.label}
              // ======== add some style based on selected ==========
              className={`pl-2.5 ml-2.5  md:pl-[14px]  duration-200 cursor-pointer py-0.5 my-1 fs-base ${
                selected === item.Key && "border-l-2 border-[#005AFF]"
              }`}
            >
              {item.label} {item.notification}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ReviewProposalsTabSwitcher;
