import DownArrowSVG from "@/components/pages/login/DownArrowSVG";
import { useState } from "react";

const SelectDropDown = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="job-scope-dropdown mb-5 md:mb-[23px]">
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

export default SelectDropDown;
