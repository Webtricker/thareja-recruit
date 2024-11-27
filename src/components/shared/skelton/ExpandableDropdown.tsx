import { useState } from "react";
import DownArrowSVG from "../header/DownArrowSVG";

const ExpandableDropdown = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div className={``}>
      <div
        onClick={() => setExpand(!expand)}
        className="rounded-[6px] border border-[#0000001a] flex items-center gap-4 justify-between py-1.5 px-[14px]"
      >
        <h4 className="fs-md leading-normal font-normal tracking-[0.4px]">
          Add regions and countries
        </h4>

        <DownArrowSVG className={`duration-300 ${expand && "rotate-180"}`} />
      </div>
      <ul
        className={` rounded-[6px] mt-0 h-auto max-h-0 overflow-hidden ${
          expand && "!max-h-[9999px] py-[10px] mt-2 shadow-select-dropdown"
        }`}
      >
        <li className="select-option">item-1</li>
        <li className="select-option">item-2</li>
        <li className="select-option">item-3</li>
        <li className="select-option">item-4</li>
        <li className="select-option">item-5</li>
      </ul>
    </div>
  );
};

export default ExpandableDropdown;
