"use client";
import {
  setExpandSearchBar,
  setOpenMenuLinks,
} from "@/redux/features/hambergerMenuSlice.ts/mainHeaderSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

const HambergerMenu = () => {
  const dispatch = useDispatch();
  const openMenuLinks = useSelector(
    (state: RootState) => state.headerMenus.openMenuLinks
  );

  const handleClick = () => {
    dispatch(setExpandSearchBar(false));
    dispatch(setOpenMenuLinks(!openMenuLinks));
  };

  return (
    <div
      onClick={handleClick}
      className={`phone-nav mr-5 lg:hidden ${openMenuLinks && "active"}`}
      id="phone-nav"
    >
      <div className="first"></div>
      <div className="second"></div>
      <div className="third"></div>
    </div>
  );
};

export default HambergerMenu;
