"use client";
import { setActiveDropDownMenu } from "@/redux/features/hambergerMenuSlice.ts/mainHeaderSlice";
import { RootState } from "@/redux/store";
import { dropDownMenuData } from "@/staticData/DropDown";
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
        {dropDownMenuData.map((data) => (
          <div
            key={data.label}
            onClick={() =>
              dispatch(
                setActiveDropDownMenu(
                  data.activeIdentity === activeDropDown
                    ? null
                    : data.activeIdentity
                )
              )
            }
            className="drop-down-links w-full "
          >
            <label htmlFor="" className="dropdown-label justify-between w-full">
              {data.label}
              <DownArrowSVG
                className={
                  activeDropDown === data.activeIdentity ? "rotate-180" : ""
                }
              />
            </label>
            {activeDropDown === data.activeIdentity && (
              <ul className="drop-down-content !relative !py-2 !my-2 border-t !max-w-full">
                {
                  //TODO: Have to modify into link based on requirements.
                  data.dropdownItems.map((item) => (
                    <li className="w-full" key={item.href}>
                      {item.label}
                    </li>
                  ))
                }
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HambergerMenuContent;
