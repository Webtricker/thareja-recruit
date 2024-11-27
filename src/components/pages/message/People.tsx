"use client";
import {
  setConversationType,
  setSelectedList,
  setShowPeopleMessage,
} from "@/redux/features/message/MessageActiveStages";
import { RootState } from "@/redux/store";
import { messageLists } from "@/staticData/Message";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { FilterSVG, SmallSearchSVG, ThreeDotSVG } from "./Icons";

const SearchBar = () => {
  return (
    <div className="flex items-center  w-full gap-4 md:gap-5 mb-4 md:mb-5 ">
      <div className="flex items-center gap-3 w-full border border-[#A8B7C1] px-5 rounded-[100px] focus:border-[#005AFF]">
        <SmallSearchSVG />
        <input
          type="text"
          placeholder="Search"
          className="w-full fs-md bg-transparent py-2 md:py-2.5 focus:outline-none focus:border-blue-500"
        />
      </div>
      <button className="text-[#005AFF] ">
        <FilterSVG />
      </button>
    </div>
  );
};

export type MessageCardPropsType = {
  id: number;
  imgUrl: string | null;
  name: string;
  skill: string;
  lastMessage: string;
  messageDeliveryDate: string; // it could be date. Then have to calculate the day
  imgAlt: string;
  status: "ACTIVE" | "INACTIVE";
  isGrouped: boolean;
};

const MessageCard = ({ list }: { list: MessageCardPropsType }) => {
  const showPeopleMessage = useSelector(
    (state: RootState) => state.messageActiveStages.showPeopleMessage
  );
  const activeList = useSelector(
    (state: RootState) => state.messageActiveStages.selectedList
  );

  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(setSelectedList(list.id));
        dispatch(setShowPeopleMessage(true));
        dispatch(setConversationType(list.isGrouped ? "GROUP" : "DUAL"));
      }}
      className={`duration-200 cursor-pointer w-full rounded-[20px] bg-transparent hover:bg-[#EBF2FF] px-2 md:px-[18px] py-5 flex items-center justify-between gap-5 ${
        activeList === list.id && "!bg-[#005AFF] !text-white"
      }`}
    >
      <div className="relative w-full max-w-[70px] md:max-w-[80px]">
        {list.imgUrl ? (
          <div
            className={`p-0.5 rounded-full w-[70px] md:w-[80px]  h-[70px] md:h-[80px] border-[2px] ${
              list.status === "ACTIVE"
                ? "border-[#01D18F] "
                : "border-transparent"
            }`}
          >
            <div className="w-full h-full bg-[#DDE3E7] rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src={list.imgUrl}
                width={107}
                height={107}
                alt="Profile"
                className={`w-full h-full  rounded-full ${
                  list.isGrouped && "max-w-[36px] max-h-[26px]"
                }`}
              />
            </div>
          </div>
        ) : (
          <div
            className={`p-1.5 rounded-full w-[70px] md:w-[80px]  h-[70px] md:h-[80px] border-[2px] flex items-center justify-center bg-[#DDE3E7] ${
              list.status === "ACTIVE"
                ? "border-[#01D18F] "
                : "border-transparent"
            }`}
          >
            <span className="fs-md text-[#525966]">{list.imgAlt}</span>
          </div>
        )}

        <span
          className={`absolute z-50 right-1.5 bottom-1.5  lg:right-[3.84px] lg:bottom-[3.84px] w-4 h-4 md:w-[19.31px] md:h-[19.31px] rounded-full border-[1px] border-white ${
            list.status === "ACTIVE" ? "bg-[#01D18F]" : "bg-[#DDE3E7]"
          } `}
        ></span>
      </div>
      <div className="w-full lg:max-w-[306px]">
        <div className="flex items-center gap-1 justify-between">
          <h5 className="fs-lg-lh-normal">{list.name}</h5>
          <p className="fs-base mb-2">9/6/24</p>
        </div>
        <p className="fs-base mb-[2px]">{list.skill}</p>
        <p className="fs-base mb-[2px]">{list.lastMessage}</p>
      </div>
    </div>
  );
};

const PeopleListAndMessage = () => {
  return (
    <div className="w-full flex-grow  py-5 pr-1 bg-[#F5F8FF] rounded-[30px] h-full overflow-hidden">
      <div className="custom_scrollbar w-full flex flex-col gap-1.5 px-5 pr-4 rounded-[30px]  h-full overflow-y-auto">
        {messageLists.map((list) => (
          <MessageCard key={list.id} list={list} />
        ))}
      </div>
    </div>
  );
};

const PeopleComponentContent = () => {
  return (
    <div className="w-full lg:max-w-[442px] h-full flex flex-col">
      <div className="w-full h-auto">
        <div className="w-full flex items-center gap-1 justify-between mb-5 md:mb-6 lg:mb-[30px]">
          <h1 className="fs-5xl text-[#30353E]">Messages</h1>
          <button className="btn-gradient-light-blue ">
            <ThreeDotSVG />
          </button>
        </div>
        <SearchBar />
      </div>
      <PeopleListAndMessage />
    </div>
  );
};

//  ========== root component =============
const People = () => {
  const showPeopleMessage = useSelector(
    (state: RootState) => state.messageActiveStages.showPeopleMessage
  );

  return (
    <div
      className={` w-full px-5 md:mr-0 2xl:px-0 h-full duration-500 flex z-[999]  lg:max-w-[445px] bg-white lg:bg-transparent rounded-[30px] lg:translate-x-0 absolute top-0 right-0  lg:relative ${
        showPeopleMessage && "!translate-x-[-110%] lg:!translate-x-0"
      }`}
    >
      {/* <div className="w-full max-w-[442px] h-full max-h-[85vh]"> */}
      <PeopleComponentContent />
    </div>
  );
};

export default People;
