"use client";
import { useState } from "react";
import DropDownMenu from "./DropDownMenu";
import HambergerMenu from "./HambergerMenu";
import HambergerMenuContent from "./HambergerMenuContent";
import HeaderIcons from "./HeaderIcons";
import HeaderLogo from "./HeaderLogo";
import SearchBar from "./SearchBar";
import SearchBarContentSmallDevices from "./SearchBarContentSmallDevices";
import SearchingDropDown from "./SearchingDropDown";
import SmallDeviceSearchBar from "./SmallDeviceSearchBar";

const MainHeader = () => {
  const [activeDropDown, setActiveDropDown] = useState<null | number>(null);
  return (
    <div
      id="main_header"
      className="fixed top-0  bg-white w-full z-[9999] left-0 px-5 md:px-[40px] py-[24px] md:py-[28px] xl:py-[34px]"
    >
      <div className="max-w-[1920px] mx-auto flex items-center justify-between w-full">
        {/* left container */}
        <div className="flex items-center lg:gap-[40px] w-full lg:max-w-[589px] z-[999]">
          <HambergerMenu />
          <HeaderLogo />
          <DropDownMenu />
        </div>
        {/* right container */}
        <div className="flex justify-end items-center gap-[30px] w-full max-w-[686px] ">
          <SmallDeviceSearchBar />

          {/* search bar */}
          <div className="hidden search-container w-full border border-[#A8B7C1] rounded-[100px]  py-[10px] px-5 lg:flex items-center text-[18px] ">
            <SearchBar />

            <SearchingDropDown />
          </div>
          <HeaderIcons />
        </div>
      </div>
      <SearchBarContentSmallDevices />
      <HambergerMenuContent />
    </div>
  );
};

export default MainHeader;
