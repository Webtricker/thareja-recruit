"use client";
import { SET_EXPAND } from "@/redux/features/rootModyfier/Modyfier";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DownArrowSVG from "../gptVetting/Icons";

type ListType = "BEGINNER" | "INTERMEDIATE" | "EXPERT" | null;
type ListItemType = {
  label: string;
  type: ListType;
};

const levelList: ListItemType[] = [
  {
    label: "Beginner",
    type: "BEGINNER",
  },
  {
    label: "Intermediate",
    type: "INTERMEDIATE",
  },
  {
    label: "Expert",
    type: "EXPERT",
  },
];

const SelectSkillLevel = ({ id }: { id: string }) => {
  const ACTIVE_KEY = `SELECT_ADDING_JOB_SKILL_LEVEL_${id}`;
  // =============== Initial states ========
  const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);
  const [selected, setSelected] = useState<ListType>("BEGINNER");

  //   ============= handlers ========
  const dispatch = useDispatch();

  const filteredItem = levelList.find((item) => item.type === selected);
  return (
    <div className="relative  w-full">
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(SET_EXPAND(EXPAND !== ACTIVE_KEY ? ACTIVE_KEY : null));
        }}
        type="button"
        // className=" fs-md leading_normal tracking-[0.4px] "
        className={`p-3 rounded-[4px] border bg-transparent border-[#DDE3E7] ourline:none focus:outline-none w-full flex items-center justify-between gap-4 ${
          EXPAND === ACTIVE_KEY && "pointer-events-none"
        }`}
      >
        <span
          className={`pointer-events-none fs-md leading_normal tracking-[0.4px] leading-[25px]`}
        >
          {filteredItem?.label}
        </span>

        <DownArrowSVG
          className={`pointer-events-none ${
            EXPAND === ACTIVE_KEY && "rotate-180"
          }`}
        />
      </button>
      <ul
        className={`z-40 absolute flex flex-col gap-0.5 justify-between top-full w-full left-0 mt-0 h-auto max-h-0 overflow-hidden ${
          EXPAND === ACTIVE_KEY &&
          "!max-h-[9999px] mt-1 border bg-white border-[#DDE3E7] rounded-[20px] overflow-hidden p-2.5"
        }`}
      >
        {levelList.map((item) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              setSelected(item.type);
            }}
            key={item.type}
            // ======== add some style based on selected ==========
            className={` duration-200 cursor-pointer py-1.5 px-5 rounded-[8px] fs-base ${
              item.type === selected && "bg-[#EDF4FF]"
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

// ======= select
const SkillBox = ({ index }: { index: string }) => {
  return (
    <div key={index} className="grid grid-cols-2 gap-5">
      <input
        type="text"
        id={`skillName-${index}`}
        placeholder="Skill name"
        className="w-full bg-transparent fs-md leading_normal tracking-[0.4px] p-3 rounded-[4px] border border-[#DDE3E7] focus:border-[#005AFF] ourline:none focus:outline-none"
      />
      <SelectSkillLevel id={index} />
    </div>
  );
};

// =========== root component =================
export function SkillsForm() {
  return (
    <form className="my-[50px] lg:my-[60px] flex flex-col gap-[18px] max-w-[720px] w-full mx-auto ">
      {/* labels */}
      <div className="grid grid-cols-2 gap-5">
        <label htmlFor="" className="fs-md leading_normal tracking-[0.4px]">
          Enter main skills
        </label>
        <label htmlFor="" className="fs-md leading_normal tracking-[0.4px]">
          Rate yourself
        </label>
      </div>

      <SkillBox index="FIRST_SKILL" key="FIRST_SKILL" />
      <SkillBox index="SECOND_SKILL" key="SECOND_SKILL" />
      <SkillBox index="THIRD_SKILL" key="THIRD_SKILL" />
      <SkillBox index="FOURTH_SKILL" key="FOURTH_SKILL" />
    </form>
  );
}
