"use client";
import { setActiveDropDownMenu } from "@/redux/features/hambergerMenuSlice.ts/mainHeaderSlice";
import { RootState } from "@/redux/store";
import { dropDownMenuData } from "@/staticData/DropDown";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import DownArrowSVG from "./DownArrowSVG";

const DropDownMenu = () => {
  const dispatch = useDispatch();
  const activeDropDown = useSelector(
    (state: RootState) => state.headerMenus.activeDropDownMenu
  );

  return (
    <div className="hidden nav-link-container lg:flex items-start w-full max-w-[419px] gap-6">
      {dropDownMenuData.map((data) => (
        <div
          key={data.label}
          onMouseEnter={() =>
            dispatch(setActiveDropDownMenu(data.activeIdentity))
          }
          onMouseLeave={() => dispatch(setActiveDropDownMenu(null))}
          className="drop-down-links"
        >
          <label htmlFor="" className="dropdown-label">
            {data.label}
            <DownArrowSVG
              className={
                activeDropDown === data.activeIdentity ? "rotate-180" : ""
              }
            />
          </label>
          {activeDropDown === data.activeIdentity && (
            <ul className="drop-down-content">
              {
                //TODO: Have to modify into link based on requirements.
                data.dropdownItems.map((item) => (
                  <li key={item.href}>{item.label}</li>
                ))
              }
            </ul>
          )}
        </div>
      ))}

      <Link href="/message">Message</Link>
    </div>
  );
};

export default DropDownMenu;
