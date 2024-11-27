import DownArrowSVG from "@/components/pages/login/DownArrowSVG";
import { SearchIconSVG } from "@/components/shared/icons/Icons";
import { SET_EXPAND } from "@/redux/features/rootModyfier/Modyfier";
import { ChangeEvent, CSSProperties, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { CheckedSVG } from "./Icons";

type SearchYearDropdownProps = {
  activeKey: string;
  expand: string | null;
  defaultLabel: string;
  clickHandler: Function;
  labelStyle?: string;
  parentStyle?: string;
  dropdownContainerStyle?: string;
  items: string[];
  position?: "FIXED" | "ABSOLUTE";
};
export const SearchYearDropdown = ({
  activeKey,
  expand,
  defaultLabel,
  clickHandler,
  dropdownContainerStyle,
  labelStyle,
  parentStyle,
  position,
  items,
}: SearchYearDropdownProps) => {
  const dispatch = useDispatch();
  // =============== Initial states ========
  const [searchedVal, setSearchedVal] = useState(items);
  const [selected, setSelected] = useState<string | null>(null);

  //   ========  handlers =======
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toLowerCase();
    const filtered = items.filter((item) => item.toLowerCase().includes(val));
    setSearchedVal(filtered);
  };

  // ===== fixed position calculation =================================

  const containerRef = useRef<HTMLLabelElement>(null);
  const [pos, setPos] = useState<CSSProperties | undefined>();

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const { top, left, height } = rect;
      const style: CSSProperties = {
        top: `${Math.abs(top + height)}px`,
        left: `${left}px`,
      };
      setPos(style);
    }
  }, [clickHandler]);
  return (
    <div className={`w-full relative ${parentStyle}`}>
      <label
        onClick={(event) => {
          event.stopPropagation();
          dispatch(SET_EXPAND(activeKey === expand ? null : activeKey));
        }}
        ref={containerRef}
        className={`fs-base w-full flex items-center justify-between gap-5 bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF] ${labelStyle} ${
          expand === activeKey ? "pointer-events-none" : ""
        }`}
      >
        {selected ? (
          selected
        ) : (
          <span className="text-[#A8B7C1]">{defaultLabel}</span>
        )}
        <DownArrowSVG
          className={`duration-200 ${expand === activeKey ? "rotate-180" : ""}`}
        />
      </label>
      <div
        onClick={(e) => e.stopPropagation()}
        style={position === "FIXED" ? pos : {}}
        className={`dropdown_shadow flex flex-col z-[99999999999999999999] ${
          position === "FIXED" ? "fixed" : position === "ABSOLUTE" && "absolute"
        } top-[100%] left-0 bg-white rounded-[20px] h-auto ${
          expand !== activeKey
            ? "overflow-hidden  mt-0 max-h-0"
            : `max-w-[420px] !max-h-[250px] w-full z-[9999] border border-[#0000001a]  mt-2 p-5 pr-2 ${dropdownContainerStyle}`
        }`}
      >
        <div className="border rounded-[100px] flex items-center relative mr-3">
          <SearchIconSVG className="pointer-events-none absolute top-[50%] left-5 translate-y-[-50%]" />
          <input
            onClick={(event) => {
              event.stopPropagation();
              //   dispatch(SET_EXPAND(activeKey));
            }}
            onChange={handleChange}
            className="pl-[48px] rounded-[100px] py-[10px] focus:outline-none outline-none w-full"
            type="text"
            placeholder="Search"
          />
        </div>

        {/*  ============ SEARCH content================  */}
        <ul className="country_dropdown_scrollbar flex flex-col gap-[20px] overflow-y-auto flex-grow mt-4 ">
          {searchedVal?.length ? (
            searchedVal.map((item) => (
              <li
                className="cursor-pointer fs-base flex items-center gap-2.5 px-[11px]"
                onClick={(e) => {
                  dispatch(SET_EXPAND(null));
                  setSelected(item);
                  clickHandler(item);
                }}
                key={item}
              >
                <CheckedSVG />
                <span>{item}</span>
              </li>
            ))
          ) : (
            <li
              className={`flex items-center cursor-pointer py-1.5 px-5 my-0.5 gap-[11px]`}
            >
              No item found.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
