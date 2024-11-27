"use client";
import { setExpandSearchBar } from "@/redux/features/hambergerMenuSlice.ts/mainHeaderSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../modal/Alert";
import DownArrowSVG from "./DownArrowSVG";

const SearchBarContentSmallDevices = () => {
  const dispatch = useDispatch();
  const expand = useSelector(
    (state: RootState) => state.headerMenus.expandSearchBar
  );

  const [show, setShow] = useState(false);

  return (
    <div
      className={`duration-300 w-screen h-screen fixed top-0 right-0 z-[9999] bg-white translate-x-[100%] ${
        expand && " !translate-x-0"
      }`}
    >
      <div className="top-searchbar flex items-center gap-5 py-[24px] md:py-[28px] border-b border-[#A8B7C1] px-5 md:px-[40px]">
        <button onClick={() => dispatch(setExpandSearchBar(false))}>
          <DownArrowSVG className="rotate-90" />
        </button>
        <div className="border border-[#A8B7C1] rounded-[100px]  py-[10px] px-5 flex items-center gap-3 w-full">
          <Image
            onClick={() => setShow(true)}
            src="/svgs/search.svg"
            alt="search"
            width={20}
            height={20}
          />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full "
          />
        </div>
        {show && (
          <Alert hide={setShow} message="This feature is not avaialble yet" />
        )}
      </div>
      <div className="flex items-center justify-center h-full w-ful px-5 md:px-[40px]">
        <h1 className="text-xl">
          Necessary content will be here. Not available right now.
        </h1>
      </div>
    </div>
  );
};

export default SearchBarContentSmallDevices;
