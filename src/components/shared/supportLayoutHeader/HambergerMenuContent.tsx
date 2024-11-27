"use client";
import { setActiveDropDownMenu } from "@/redux/features/hambergerMenuSlice.ts/mainHeaderSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import DownArrowSVG from "./DownArrowSVG";

const HambergerMenuContent = () => {
  const openMenuLinks = useSelector(
    (state: RootState) => state.headerMenus.openMenuLinks
  );

  const dispatch = useDispatch();
  const activeDropDown = useSelector(
    (state: RootState) => state.headerMenus.activeDropDownMenu
  );

  return (
    <div
      className={`border-t border-[#A8B7C1] px-5 md:px-[40px] duration-300 w-screen h-screen absolute top-full left-0 z-[99] bg-white  translate-x-[-100%] ${
        openMenuLinks && "!translate-x-0"
      }`}
    >
      <div className="nav-link-container flex flex-col items-start w-full gap-6 mt-6">
        <Link href="#" className="text-[18px]">
          Help Center
        </Link>
        <Link href="#" className="text-[18px]">
          Known Issues
        </Link>

        <div
          onClick={() =>
            dispatch(
              setActiveDropDownMenu(
                "REPORT" === activeDropDown ? null : "REPORT"
              )
            )
          }
          className="drop-down-links w-full text-[18px]"
        >
          <label htmlFor="" className="dropdown-label justify-between w-full">
            Resources
            <DownArrowSVG
              className={activeDropDown === "REPORT" ? "rotate-180" : ""}
            />
          </label>
          {activeDropDown === "REPORT" && (
            <ul className="drop-down-content !relative !py-2 !my-2 border-t !max-w-full">
              <li className="w-full">item 1</li>
              <li className="w-full">item 2</li>
              <li className="w-full">item 3</li>
            </ul>
          )}
        </div>

        <Link className="inline-block text-[18px]" href="#">
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default HambergerMenuContent;
