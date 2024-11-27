"use client";
import {
  setExpandSearchBar,
  setOpenMenuLinks,
} from "@/redux/features/hambergerMenuSlice.ts/mainHeaderSlice";
import Image from "next/image";
import Link from "next/link";

import { useDispatch } from "react-redux";

const SmallDeviceSearchBar = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setExpandSearchBar(true));
    dispatch(setOpenMenuLinks(false));
  };
  return (
    <div className="flex items-center gap-5 lg:hidden search-bar w-auto">
      <Link href="/sign-up">Sign up</Link>
      <Image
        onClick={handleClick}
        src="/svgs/search.svg"
        alt="search"
        width={20}
        height={20}
      />
    </div>
  );
};

export default SmallDeviceSearchBar;
