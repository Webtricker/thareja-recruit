import DownArrowSVG from "@/components/pages/login/DownArrowSVG";
import { SET_EXPAND } from "@/redux/features/rootModyfier/Modyfier";
import { RootState } from "@/redux/store";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type SelectDropdownProps = {
  items: string[];
  activeKey: string;
  defaultLabel: string;
  defaultLabelStyle?: string;
  clickHandler: Function;
  labelStyle?: string;
  parentStyle?: string;
  containerStyle?: string;
  listContainerStyle?: string;
  listStyle?: string;
  position?: string;
};
const SelectDropdown = (props: SelectDropdownProps) => {
  const {
    activeKey,
    clickHandler,
    defaultLabel = "Select",
    defaultLabelStyle = "",
    items,
    containerStyle = "",
    listContainerStyle = "",
    listStyle = "",
    position = "",
    labelStyle = "",
    parentStyle = "",
  } = props;

  const dispatch = useDispatch();
  const containerRef = useRef<HTMLLabelElement>(null);

  // =============== Initial states ========
  const [selected, setSelected] = useState<string | null>(null);
  const [pos, setPos] = useState<CSSProperties | undefined>();

  //   Redux value
  const expand = useSelector((state: RootState) => state.modyfier.EXPAND);

  // ===== fixed position calculation =================================
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
          dispatch(SET_EXPAND(activeKey));
        }}
        ref={containerRef}
        className={`fs-base w-full flex items-center justify-between gap-5 bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF] ${labelStyle} ${
          expand === activeKey ? "pointer-events-none" : ""
        }`}
      >
        {selected ? (
          selected
        ) : (
          <span className={defaultLabelStyle}>{defaultLabel}</span>
        )}{" "}
        <DownArrowSVG
          className={`duration-200 ${expand === activeKey ? "rotate-180" : ""}`}
        />
      </label>
      <div
        onClick={(e) => e.stopPropagation()}
        style={position === "fixed" ? pos : {}}
        className={`country-container-shadow flex flex-col z-[999] ${position} top-[100%] left-0 bg-white rounded-[10px] overflow-hidden  mt-0 h-auto max-h-0 ${
          expand === activeKey &&
          `max-w-[420px] !max-h-[250px] w-full z-[9999] border border-[#0000001a]  mt-2 p-5 ${containerStyle}`
        }`}
      >
        {/*  ============ SEARCH content================  */}
        <ul
          className={`custom_scrollbar flex flex-col gap-[14px] overflow-y-auto flex-grow ${listContainerStyle}`}
        >
          {items.map((item: string) => (
            <li
              className={`cursor-pointer fs-base ${listStyle}`}
              onClick={(e) => {
                dispatch(SET_EXPAND(null));
                setSelected(item);
                clickHandler(item);
              }}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectDropdown;
