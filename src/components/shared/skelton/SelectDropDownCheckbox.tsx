import DownArrowSVG from "@/components/pages/login/DownArrowSVG";
import { useState } from "react";

const SelectDropDownWIthoutCheckbox = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div
      className={`job-scope-dropdown ${
        expand
          ? "bg-[#005aff05] !p-[28px]"
          : "!py-[18px] !px-0 !border-t-0 !border-l-0 !border-r-0"
      }`}
    >
      <div
        onClick={() => setExpand(!expand)}
        className="flex items-center gap-4 justify-between"
      >
        <h4 className="jobpost-details-label">
          I want to create a new job post
        </h4>

        <DownArrowSVG className={` ${expand && "rotate-180"}`} />
      </div>
      <ul
        className={`grid md:grid-cols-2 md:gap-[25px] lg:gap-[42px]  mt-0 h-auto max-h-0 overflow-hidden ${
          expand && "!max-h-[9999px] pt-[28px]"
        }`}
      >
        <li>item-1</li>
        <li>item-2</li>
        <li>item-3</li>
        <li>item-4</li>
        <li>item-5</li>
      </ul>
    </div>
  );
};

export default SelectDropDownWIthoutCheckbox;
