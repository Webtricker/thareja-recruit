"use client";
import { ClockSVG } from "@/components/shared/icons/Icons";
import Image from "next/image";
import Link from "next/link";
import {
  AttachementSVG,
  DownArrowSVG,
  EditDocumentSVG,
  EyeOpenSVG,
  PeopleSVG,
  SearchSVG,
  SuitcaseSVG,
} from "./Icons";

const Profile = () => {
  const dispatch = useDispatch();
  return (
    <div className="relative w-full max-w-[420px]  p-5 pr-1  md:p-6 md:pr-1 lg:pr-1 lg:p-[30px] bg-[#005aff0a] rounded-[30px] h-full overflow-hidden">
      <button
        onClick={(e) => {
          console.log("btn clicked");
          e.stopPropagation();
          dispatch(SET_EXPAND(null));
        }}
        className={`2xl:hidden duration-1000 top-5 left-5 absolute`}
      >
        <XMarkBlack className="w-5 h-5" />
      </button>
      <div className="w-full custom_scrollbar overflow-y-auto h-full pr-4 md:pr-5 lg:pr-[26px]">
        {/* ======= content ======= */}
        <div className="relative w-[90px] md:w-[100px] lg:w-[110px] xl:w-[120px] mb-2.5 mx-auto">
          <Image
            src="/img/profile/user-profile.png"
            width={107}
            height={107}
            alt="Profile"
            className="p-1.5 rounded-full w-[90px] md:w-[100px] lg:w-[110px] xl:w-[120px] h-[90px] md:h-[100px] lg:h-[110px] xl:h-[120px] border-[2px] border-[#01D18F]"
          />
          <span className="absolute z-50 right-1.5 bottom-1.5  lg:right-[5.84px] lg:bottom-[5.84px] w-5 h-5 md:w-6 md:h-6 lg:w-[28.96px] lg:h-[28.96px] rounded-full border-[2px] border-white bg-[#01D18F] "></span>
        </div>

        <h5 className="mx-auto text-center fs-lg-lh-normal mb-[14px]">
          Ali D.
        </h5>
        <p className="fs-base  flex items-center gap-[12px] justify-center w-full mb-1.5">
          <SuitcaseSVG /> <span>ABC Technologies LLP</span>
        </p>

        <p className="fs-base  flex items-center gap-[12px] justify-center w-full mb-6 md:mb-7 lg:mb-[30px] mx-auto">
          <ClockSVG /> <span>5:37 AM GMT+2 (3.5 h behind)</span>
        </p>

        <Link
          href="#"
          className="fs-base  flex items-center gap-[12px] justify-center w-full mb-6 md:mb-7 lg:mb-[30px] mx-auto text-[#005AFF]"
        >
          <EyeOpenSVG /> <span>View proposal</span>
        </Link>

        {/* ===========  Search message =========== */}
        <button
          onClick={() =>
            dispatch(setUserProfileActiveDropdown("SEARCH_MESSAGE"))
          }
          className="w-full flex items-center gap-1 justify-between"
        >
          <label className="flex items-center gap-4">
            <SearchSVG />
            <span className="fs-md">Search messages</span>
          </label>{" "}
          <DownArrowSVG />
        </button>

        {/* ============ separator ============= */}
        <span className="w-full h-[1px] block my-4 md:my-5 lg:my-6 bg-[#DDE3E7]"></span>

        {/* ===========  People =========== */}
        <button
          onClick={() => dispatch(setUserProfileActiveDropdown("PEOPLE"))}
          className="w-full flex items-center gap-1 justify-between"
        >
          <label className="flex items-center gap-4">
            <PeopleSVG />
            <span className="fs-md">People</span>
          </label>{" "}
          <DownArrowSVG />
        </button>

        {/* ============ separator ============= */}
        <span className="w-full h-[1px] block my-4 md:my-5 lg:my-6 bg-[#DDE3E7]"></span>

        {/* ===========  People =========== */}
        <button
          onClick={() =>
            dispatch(setUserProfileActiveDropdown("FILE_AND_LINKS"))
          }
          className="w-full flex items-center gap-1 justify-between"
        >
          <label className="flex items-center gap-4">
            <AttachementSVG />
            <span className="fs-md">Files and links</span>
          </label>{" "}
          <DownArrowSVG />
        </button>

        {/* ============ separator ============= */}
        <span className="w-full h-[1px] block my-4 md:my-5 lg:my-6 bg-[#DDE3E7]"></span>

        {/* ===========  People =========== */}
        <button
          onClick={() =>
            dispatch(setUserProfileActiveDropdown("PERSONAL_NOTEPAD"))
          }
          className="w-full flex items-center gap-1 justify-between"
        >
          <label className="flex items-center gap-4">
            <EditDocumentSVG />
            <span className="fs-md">Personal notepad</span>
          </label>{" "}
          <DownArrowSVG />
        </button>
      </div>
    </div>
  );
};
// const SearchMessage = ()=>{
//     return <div className="w-full">

//     </div>
// }

//  ============== root component ================
import XMarkBlack from "@/components/shared/icons/XMarkBlack";
import { setUserProfileActiveDropdown } from "@/redux/features/message/MessageActiveStages";
import { SET_EXPAND } from "@/redux/features/rootModyfier/Modyfier";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import AddPeople from "./AddPeople";
import FilesAndLinks from "./FilesAndLinks";
import PersonalNotepad from "./PersonalNotepad";
import SearchMessages from "./SearchMessages";

const UserProfileContent = () => {
  const active = useSelector(
    (state: RootState) => state.messageActiveStages.userProfileActiveDropDown
  );
  switch (active) {
    case "SEARCH_MESSAGE":
      return <SearchMessages />;
    case "PEOPLE":
      return <AddPeople />;
    case "FILE_AND_LINKS":
      return <FilesAndLinks />;
    case "PERSONAL_NOTEPAD":
      return <PersonalNotepad />;

    default:
      return <Profile />;
  }
};

// ==== root component ========
const UserProfile = () => {
  const dispatch = useDispatch();
  // const active = useSelector(
  //   (state: RootState) => state.messageActiveStages.showUserProfileDrawer
  // );
  const active = useSelector((state: RootState) => state.modyfier.EXPAND);
  const key = "OPEN_MESSAGE_USER_PROFILE_DRAWER";
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        dispatch(SET_EXPAND(key));
      }}
      className={`duration-500 w-full flex shadow-2xl 2xl:shadow-none justify-end z-50 lg:pr-5 xl:pr-[25px] 2xl:pr-0 max-w-[420px] xl:max-w-[445px] 2xl:max-w-[420px]  bg-white 2xl:bg-transparent rounded-[10px] lg:rounded-[30px]  h-full 2xl:pl-0 2xl:translate-x-0 translate-x-[110%]  absolute top-0 right-0  2xl:relative ${
        active === key && "!translate-x-0"
      }`}
    >
      {/* <div className="w-full max-w-[420px] h-full rounded-[30px] shadow-lg bg-white rounded-"> */}
      <UserProfileContent />
      {/* </div> */}
    </div>
  );
};

export default UserProfile;
