"use client";
import { useState } from "react";
import DropDownMenu from "./DropDownMenu";
import HambergerMenu from "./HambergerMenu";
import HambergerMenuContent from "./HambergerMenuContent";
import HeaderIcons from "./HeaderIcons";
import HeaderLogo from "./HeaderLogo";
import SearchBar from "./SearchBar";
import SearchBarContentSmallDevices from "./SearchBarContentSmallDevices";
import SmallDeviceSearchBar from "./SmallDeviceSearchBar";

const SupportLayoutHeader = () => {
  const [activeDropDown, setActiveDropDown] = useState<null | number>(null);
  return (
    <div
      id="main_header"
      className="fixed top-0  bg-white w-full z-[9999] left-0 px-5 md:px-[40px] py-[24px] md:py-[28px] xl:py-[34px]"
    >
      <div className="max-w-[1920px] mx-auto flex items-center justify-between w-full">
        {/* left container */}
        <div className="flex items-center w-full lg:gap-10 lg:max-w-[708px] z-[999]">
          <HambergerMenu />
          <HeaderLogo />
          <DropDownMenu />
        </div>
        {/* right container */}
        <div className="flex justify-end items-center gap-[30px] w-full max-w-[572px] ">
          <SmallDeviceSearchBar />

          {/* search bar */}
          <div className="hidden search-container w-full border border-[#A8B7C1] rounded-[100px]  py-[10px] px-5 lg:flex items-center justify-end text-[18px] ">
            <SearchBar />
          </div>

          <HeaderIcons />
        </div>
      </div>
      <SearchBarContentSmallDevices />
      <HambergerMenuContent />
    </div>
  );
};

export default SupportLayoutHeader;
