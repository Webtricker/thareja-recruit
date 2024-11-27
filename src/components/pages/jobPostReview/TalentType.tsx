import DownArrowSVG from "@/components/shared/header/DownArrowSVG";
import { SET_EXPAND } from "@/redux/features/rootModyfier/Modyfier";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const data: string[] = ["No preference", "Independent", "Agency"];
const TalentType = () => {
  const dispatch = useDispatch();
  const ACTIVE_KEY =
    "JOB_POST_REVIEW_ADVANCED_PREFERENCES_TALEN_TYPE_DROP_DOWN";
  // =============== Initial states ========
  const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);
  const [selected, setSelected] = useState<string | null>("Select");
  return (
    <div className="w-full max-w-[248px] mb-[18px]">
      <h4 className="fs-lg-lh-md mb-3">Talent type</h4>
      <div
        onClick={(e) => {
          e.stopPropagation();
          dispatch(SET_EXPAND(EXPAND !== ACTIVE_KEY ? ACTIVE_KEY : null));
        }}
        className={`bg-white border rounded-[8px] py-2 px-2 border-[#0000001a] cursor-pointer flex items-center gap-4 justify-between ${
          EXPAND === ACTIVE_KEY && "pointer-events-none"
        }`}
      >
        {
          <h5 className="fs-base w-[80%] text-[#525966] px-0.5">
            {selected ? (
              selected
            ) : (
              <span className="text-[#A8B7C1]">Select</span>
            )}
          </h5>
        }
        <DownArrowSVG
          className={`duration-300 !w-[24px] ${
            EXPAND === ACTIVE_KEY && "rotate-180"
          }`}
        />
      </div>
      <ul
        className={`bg-white rounded-[10px] overflow-hidden  mt-1 h-auto max-h-0 ${
          EXPAND === ACTIVE_KEY &&
          "!max-h-[9999px] my-5 px-4 shadow border border-[#0000001a] py-2.5 country-container-shadow"
        }`}
      >
        {data.map((item) => (
          <li
            className={`cursor-pointer py-0.5 block `}
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

export default TalentType;
