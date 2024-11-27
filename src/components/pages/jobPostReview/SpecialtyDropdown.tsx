import DownArrowSVG from "@/components/pages/login/DownArrowSVG";
import { SET_EXPAND } from "@/redux/features/rootModyfier/Modyfier";
import { RootState } from "@/redux/store";
import { jobSpecialtyDropDown } from "@/staticData/DropDown";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type PropsType = {
  handler: (id: number, category: string) => void;
};

const SpecialtyDropdown = ({ handler }: PropsType) => {
  const dispatch = useDispatch();
  const prevActiveId = useSelector(
    (state: RootState) => state.jobReviews.activeSpecialtyID
  );

  // Specialty states
  const [activeId, setActiveId] = useState(prevActiveId);

  // Dropdown content
  const specialties = jobSpecialtyDropDown;

  const selectedSpecialty = specialties.find((item) => item.id === activeId);

  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<CSSProperties | undefined>();

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const { top, left, height } = rect;
      const style: CSSProperties = {
        top: `${Math.abs(top + height + 5)}px`,
        left: `${left}px`,
      };
      setPos(style);
    }
  }, [activeId]);

  const expandKey = useSelector((state: RootState) => state.modyfier.EXPAND);
  const key = "OPEN_SPECIALTY_SELECT_DROPDOWN";

  // condition to expand drop down
  const expand = expandKey === key;

  return (
    <div className="relative">
      <div
        ref={containerRef}
        onClick={() => dispatch(SET_EXPAND(key))}
        className={`${
          expand && "pointer-events-none"
        } text-[#525966] cursor-pointer border border-[#0000001a] py-[10px] px-4 rounded-[6px] flex items-center gap-4 justify-between`}
      >
        <h4 className="fs-base  ">{selectedSpecialty?.label}</h4>

        <DownArrowSVG className={`duration-300 ${expand && "rotate-180"}`} />
      </div>
      <div
        style={pos}
        className={`!bg-white w-full max-w-[300px] sm:max-w-[380px] fixed flex flex-col mt-0 h-auto max-h-0 overflow-hidden z-[99999999999999999999] ${
          expand &&
          "!max-h-[250px] 2xl:!max-h-[300px] px-2 border border-[#0000001a] pt-[10px] pb-[11px] rounded-[20px] bg-white job-post-card-select-shadow"
        }`}
      >
        <ul className="dropdown_scrollbar w-full overflow-y-auto ">
          {specialties.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                setActiveId(item.id);
                handler(item.id, item.label);
              }}
              className={`select-option`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpecialtyDropdown;
