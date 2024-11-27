"use client";
import { setActiveTabBtn } from "@/redux/features/jobpost/InviteFreeLancersActiveStages";
import { SET_EXPAND } from "@/redux/features/rootModyfier/Modyfier";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DownArrowSVG from "../login/DownArrowSVG";

type ItemType = "SEARCH" | "INVITE" | "HIRE" | "SAVED";
type Item = {
  label: string;
  Key: ItemType;
};

const dropDownItems: Item[] = [
  {
    label: "Search",
    Key: "SEARCH",
  },
  {
    label: "Invited Freelancers",
    Key: "INVITE",
  },
  {
    label: "My Hires",
    Key: "HIRE",
  },
  {
    label: "Saved",
    Key: "SAVED",
  },
];

const InviteFreelancersTabSwitcher = () => {
  const dispatch = useDispatch();
  const active = useSelector(
    (state: RootState) => state.inviteFreelancersActiveStages.activeTabBtn
  );

  // drop down toggler
  const ACTIVE_KEY = "OPEN_INVITE_FREELANCER_TAB_SWITCHER";
  // =============== Initial states ========
  const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);

  const [selected, setSelected] = useState<ItemType>("SEARCH");

  const filteredItem = dropDownItems.find((item) => item.Key === active);

  //   ======= handelars ========
  return (
    <>
      <div className="w-full hidden md:flex justify-start relative mb-5">
        <div className="w-auto bg-white h-full z-20">
          <button
            onClick={() => dispatch(setActiveTabBtn("SEARCH"))}
            className={`pb-1.5 border-b fs-base ${
              active === "SEARCH"
                ? "text-[#005AFF] border-[#005AFF] mx-1"
                : "border-[#A8B7C1] pr-2.5"
            }`}
          >
            Search
          </button>
        </div>
        <div className="w-auto bg-white z-20">
          <button
            onClick={() => dispatch(setActiveTabBtn("INVITE"))}
            className={`pb-1.5 border-b fs-base ${
              active === "INVITE"
                ? "text-[#005AFF] border-[#005AFF] mx-1"
                : "border-[#A8B7C1] px-2.5"
            }`}
          >
            Invited Freelancers
          </button>
        </div>
        <div className="w-auto bg-white z-20">
          <button
            onClick={() => dispatch(setActiveTabBtn("HIRE"))}
            className={`pb-1.5 border-b fs-base ${
              active === "HIRE"
                ? "text-[#005AFF] border-[#005AFF] mx-1"
                : "border-[#A8B7C1] px-2.5"
            }`}
          >
            My Hires
          </button>
        </div>
        <div className="w-auto bg-white z-20">
          <button
            onClick={() => dispatch(setActiveTabBtn("SAVED"))}
            className={`pb-1.5 border-b fs-base ${
              active === "SAVED"
                ? "text-[#005AFF] border-[#005AFF] mx-1"
                : "border-[#A8B7C1] px-2.5"
            }`}
          >
            Saved (1)
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
              {item.label} {item.Key === "SAVED" ? <span> (1)</span> : ""}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default InviteFreelancersTabSwitcher;
