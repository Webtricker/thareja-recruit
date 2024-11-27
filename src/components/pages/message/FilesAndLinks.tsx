import {
  setActiveFilesAndLinks,
  setUserProfileActiveDropdown,
} from "@/redux/features/message/MessageActiveStages";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  AttachementSVG,
  ChainColorSVG,
  FileSVG,
  SearchSVG,
  UpArrowSVG,
} from "./Icons";

const TabSwitcher = () => {
  const dispatch = useDispatch();
  const active = useSelector(
    (state: RootState) => state.messageActiveStages.activeFileAndLinks
  );

  return (
    <div className="w-full hidden md:flex justify-start relative mb-6">
      <div
        className={`w-auto  h-full z-20  ${
          active === "ALL" && "bg-[#F5F8FF]"
        } `}
      >
        <button
          onClick={() => dispatch(setActiveFilesAndLinks("ALL"))}
          className={`pb-1.5 border-b fs-base ${
            active === "ALL"
              ? "text-[#005AFF] border-[#005AFF] mx-1 "
              : "border-[#A8B7C1] pr-2.5"
          }`}
        >
          All
        </button>
      </div>
      <div
        className={`w-auto  h-full z-20  ${
          active === "FILES" && "bg-[#F5F8FF]"
        } `}
      >
        <button
          onClick={() => dispatch(setActiveFilesAndLinks("FILES"))}
          className={`pb-1.5 border-b fs-base ${
            active === "FILES"
              ? "text-[#005AFF] border-[#005AFF] mx-1"
              : "border-[#A8B7C1] px-2.5"
          }`}
        >
          Files
        </button>
      </div>
      <div
        className={`w-auto  h-full z-20  ${
          active === "LINKS" && "bg-[#F5F8FF]"
        } `}
      >
        <button
          onClick={() => dispatch(setActiveFilesAndLinks("LINKS"))}
          className={`pb-1.5 border-b fs-base ${
            active === "LINKS"
              ? "text-[#005AFF] border-[#005AFF] mx-1"
              : "border-[#A8B7C1] px-2.5"
          }`}
        >
          Links
        </button>
      </div>
      <div className="border-b z-10 border-[#A8B7C1] w-full h-1 absolute bottom-0 left-0"></div>
    </div>
  );
};

const All = () => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center gap-[14px] p-2.5 rounded-[10px] bg-[#FBFCFF] border border-[#97BCFF]">
        <div className="p-2.5 rounded-[6px] bg-[#EDF4FF]">
          <FileSVG />
        </div>
        <div className="w-full">
          <p className="fs-base">20230502_Recruit_...</p>
          <p className="fs-xs mt-0.5">15 kb</p>
        </div>
      </div>
    </div>
  );
};

const Files = () => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center gap-[14px] p-2.5 rounded-[10px] bg-[#FBFCFF] border border-[#97BCFF]">
        <div className="p-2.5 rounded-[6px] bg-[#EDF4FF]">
          <FileSVG />
        </div>
        <div className="w-full">
          <p className="fs-base">20230502_Recruit_...</p>
          <p className="fs-xs mt-0.5">15 kb</p>
        </div>
      </div>
    </div>
  );
};
const Links = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col pt-[200px]">
      <ChainColorSVG />
      <p className="fs-xl-lh-normal">No Files</p>
    </div>
  );
};

const TabContent = () => {
  const active = useSelector(
    (state: RootState) => state.messageActiveStages.activeFileAndLinks
  );

  // render components conditionaly
  switch (active) {
    case "ALL":
      return <All />;
    case "FILES":
      return <Files />;
    case "LINKS":
      return <Links />;
    default:
      return <></>;
  }
};

// const TabContent = ()=>{}

//  ======== root component ==============
const FilesAndLinks = () => {
  const dispatch = useDispatch();
  return (
    <div className="custom_scrollbar w-full max-w-[420px]  p-5 md:p-6 lg:p-[30px] bg-[#005aff0a] rounded-[30px] h-full overflow-y-auto">
      <div className="mb-6 flex items-center  w-full gap-5 md:gap-2.5 max-w-[720px] justify-between">
        <div className="flex items-center gap-5 w-full flex-grow">
          <AttachementSVG />
          <p className="fs-md">Files and Links</p>
        </div>
        <button
          onClick={() => dispatch(setUserProfileActiveDropdown(null))}
          className="text-[#005AFF] w-auto"
        >
          <UpArrowSVG />
        </button>
      </div>

      {/* ========= Search bar =========== */}
      <div className="flex items-center gap-5 mb-5 w-full border border-[#A8B7C1] px-5 rounded-[100px] focus:border-[#005AFF]">
        <SearchSVG />
        <input
          type="text"
          placeholder="Search"
          className="w-full fs-md bg-transparent py-2 md:py-2.5 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* ======= all files tab switcher =========== */}
      <TabSwitcher />
      <TabContent />
    </div>
  );
};

export default FilesAndLinks;
