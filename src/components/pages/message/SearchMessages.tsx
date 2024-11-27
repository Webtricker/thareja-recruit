"use client";
import { setUserProfileActiveDropdown } from "@/redux/features/message/MessageActiveStages";
import { useDispatch } from "react-redux";
import ColorBooksSVG from "./ColorBooksSVG";
import { BackwardArrowSVG, SearchSVG } from "./Icons";

const SearchMessages = () => {
  const dispatch = useDispatch();

  return (
    <div className="custom_scrollbar w-full max-w-[420px]  p-5 md:p-6 lg:p-[30px] bg-[#005aff0a] rounded-[30px] h-full overflow-y-auto flex flex-col">
      <div className="flex items-center  w-full gap-5 md:gap-2.5 max-w-[720px]">
        <button
          onClick={() => dispatch(setUserProfileActiveDropdown(null))}
          className="text-[#005AFF]"
        >
          <BackwardArrowSVG />
        </button>
        <div className="flex items-center gap-5 w-full border border-[#A8B7C1] px-5 rounded-[100px] focus:border-[#005AFF]">
          <SearchSVG />
          <input
            type="text"
            placeholder="Search"
            className="w-full fs-md bg-transparent py-2 md:py-2.5 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className="flex flex-grow items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <ColorBooksSVG />
          <h2 className="fs-xl-lh-normal mt-[30px] mb-2.5">Search messages</h2>

          <p className="fs-base text-center max-w-[300px]">
            between You, Team Recruit and Muhammad l.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchMessages;
