import DownArrowSVG from "@/components/shared/header/DownArrowSVG";
import { SET_EXPAND } from "@/redux/features/rootModyfier/Modyfier";
import { RootState } from "@/redux/store";
import { dropDownCategory } from "@/staticData/InviteFreeLancers";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const DropDownCategories = () => {
  const dispatch = useDispatch();
  const ACTIVE_KEY = "INVITE_FREELANCERS_ADVANCED_FILTER_SEE_ALL_CATEGORIES";
  // =============== Initial states ========
  const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);
  const [selected, setSelected] = useState<string | null>("See all categories");
  return (
    <div className="w-full relative max-w-[370px] my-5">
      <div
        onClick={(e) => {
          e.stopPropagation();
          dispatch(SET_EXPAND(EXPAND !== ACTIVE_KEY ? ACTIVE_KEY : null));
        }}
        className={`bg-white border rounded-[8px] py-2 px-[14px] border-[#0000001a] cursor-pointer flex items-center gap-4 justify-between ${
          EXPAND === ACTIVE_KEY && "pointer-events-none"
        }`}
      >
        {
          <h5 className="text-base w-[80%]">
            {selected ? selected : "See all categories"}
          </h5>
        }
        <DownArrowSVG
          className={`duration-300 !w-[24px] ${
            EXPAND === ACTIVE_KEY && "rotate-180"
          }`}
        />
      </div>
      <ul
        className={`w-full bg-white absolute left-0 top-[110%] rounded-[10px] overflow-hidden  mt-1 h-auto max-h-0 ${
          EXPAND === ACTIVE_KEY &&
          "!max-h-[250px] z-[9999] my-5 shadow border border-[#0000001a] overflow-y-auto"
        }`}
      >
        {dropDownCategory.map((item) => (
          <li
            className={`cursor-pointer py-1.5 px-5 block my-0.5 ${
              selected === item && "bg-[#005AFF] text-white"
            }`}
            onClick={() => setSelected(item)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownCategories;
