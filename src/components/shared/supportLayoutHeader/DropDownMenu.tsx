"use client";
import { setActiveDropDownMenu } from "@/redux/features/hambergerMenuSlice.ts/mainHeaderSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import DownArrowSVG from "./DownArrowSVG";

const DropDownMenu = () => {
  const dispatch = useDispatch();
  const activeDropDown = useSelector(
    (state: RootState) => state.headerMenus.activeDropDownMenu
  );

  return (
    <div className="hidden nav-link-container lg:flex items-start w-full  min-w-[588px] gap-6">
      <Link href="#">Known Issues</Link>
      <div
        onMouseEnter={() => dispatch(setActiveDropDownMenu("REPORT"))}
        onMouseLeave={() => dispatch(setActiveDropDownMenu(null))}
        className="drop-down-links"
      >
        <label htmlFor="" className="dropdown-label">
          Resources
          <DownArrowSVG
            className={activeDropDown === "REPORT" ? "rotate-180" : ""}
          />
        </label>
        {activeDropDown === "REPORT" && (
          <ul className="drop-down-content">
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
          </ul>
        )}
      </div>
      <Link className="inline-block" href="#">
        Contact Support
      </Link>
    </div>
  );
};

export default DropDownMenu;
