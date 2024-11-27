import {
  addMilestoneStage,
  removeMilestoneStage,
  setActiveCalendar,
  setContractType,
  setError,
  updateFormData,
  updateHourlyInfo,
  updateMessageSendingData,
  updateMilestoneStage,
} from "@/redux/features/contact/contractModals";
import { RootState } from "@/redux/store";
import { formateCalendarSelectedDate } from "@/utils/UtilityFN";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RenderCalendar from "../calendar/RenderCalendar";
import { RoundGradientActiveInactiveSVG } from "../icons/Icons";
import {
  BackButton,
  CloseButton,
  NextButton,
  ReviewContractBackButton,
  ReviewContractSendContract,
} from "./Buttons";
import {
  AddMilestonPlusSVG,
  BlueDotSVG,
  CalendarOpenDownArrow,
  CalendarSVG,
  DollarBlueSVG,
  WarningRedSVG,
} from "./Icons";

/* =================================
                           REVIEW CONTRACT MODAL BODY STARTS 
                                                          ==========================*/

export const ReviewContractModalBody = () => {
  const contracts = useSelector(
    (state: RootState) => state.allContracts.activeContracts
  );
  const reviewContractIndex = useSelector(
    (state: RootState) => state.allContracts.reviewContractIndex
  );

  const {
    clientEmail,
    contractName,
    createdAt,
    freelancerInfo,
    milestone,
    totalAmount,
  } = reviewContractIndex ? contracts[reviewContractIndex] : contracts[0];
  return (
    <div className="w-full pl-2.5 pr-[5px] flex-grow overflow-y-auto flex flex-col">
      <h3 className="fs-xl-lh-normal mb-[28px]">{contractName}</h3>

      <p className="text-[#A8B7C1] fs-lg-lh-lg ">{clientEmail}</p>
      <h3 className="fs-xl-lh-normal my-5">${totalAmount}</h3>
      <div className="w-full flex items-center gap-5">
        <Image
          height={71}
          width={71}
          src={
            freelancerInfo.profileUrl
              ? freelancerInfo.profileUrl
              : "/img/profile/ali-d.svg"
          }
          alt="Freelancer profile"
        />
        <div className="w-full">
          <p className="fs-lg-lh-lg ">{freelancerInfo.name}</p>
          <p className="text-[#A8B7C1] fs-lg-lh-lg ">Freelancer</p>
        </div>
      </div>
      {/* ===== seperator ======= */}
      <span className="w-full h-[1px] block my-6 md:my-7 border-[#DDE3E7] border-t  "></span>
      <p className="fs-md leading_normal tracking-[0.4px] mb-5">Milestone</p>
      <div className="w-full flex items-start gap-5">
        <div className="flex items-center justify-center w-10 min-w-10 min-h-10 h-10 border border-[#005AFF] rounded-full">
          <span className="text-[#005AFF] fs-xl-lh-normal">1</span>
        </div>
        <div className="w-full">
          <p className="mb-2.5 fs-md leading_normal tracking-[0.4px]">
            {contractName}
          </p>
          <p className="fs-md leading_normal tracking-[0.4px] mb-5">
            ${totalAmount}
          </p>
        </div>
      </div>

      {/* ===== seperator ======= */}
      <span className="w-full h-[1px] block my-6 md:my-7 border-[#DDE3E7] border-t  "></span>
      <p className="fs-md leading_normal tracking-[0.4px] mb-2.5">End date</p>
      <p className="fs-md leading_normal tracking-[0.4px]">
        {milestone.endDate}
      </p>

      {/* ===== seperator ======= */}
      <span className="w-full h-[1px] block my-6 md:my-7 border-[#DDE3E7] border-t  "></span>
      <p className="fs-md leading_normal tracking-[0.4px] mb-2.5">Send to</p>
      <p className="fs-md leading_normal tracking-[0.4px]">
        muhammad123@gmail.com
      </p>
      <div className="w-full flex items-center justify-end">
        <ReviewContractBackButton />
        <ReviewContractSendContract />
      </div>
    </div>
  );
};

/* =================================
                            EMAIL SEND SUCCESS MESSAGE MODAL BODY STARTS 
                                                          ==========================*/

export const EmailSendSuccessMessageModalBody = () => {
  const { contract, email } = useSelector(
    (state: RootState) => state.contractModals.messageSendingData
  );

  console.log(contract, email);
  return (
    <div className="w-full pl-2.5 pr-[5px] flex-grow overflow-y-auto flex items-center flex-col">
      <Image
        height={120}
        width={120}
        src="/svgs/direct-contacts/mail-send-monitor.svg"
        alt="Mail send icon"
        className="mb-7"
      />
      <h3 className="fs-xl-lh-normal mb-5">Contract sent</h3>
      <p className="text-center fs-lg-lh-normal mb-5 text-[#525966]">
        We have emailed the contract for {contract} to {email}.
      </p>
      <p className="fs-lg-lh-normal mb-[72px]">
        We will notify you when they accept it.
      </p>

      <div className="w-full flex items-center justify-center">
        <CloseButton />
      </div>
    </div>
  );
};

/* =================================
                            CONTRACT FORM MODAL BODY STARTS 
                                                ==========================*/
type MileStonePropsType = {
  id: number;
  date: string | null;
  index: number;
};

const Milestone = ({ index, id, date }: MileStonePropsType) => {
  const dispatch = useDispatch();
  const tempKey = useSelector(
    (state: RootState) => state.contractModals.activeCalendar
  );
  const KEY = `ACTIVE_MILESTONE_DUE_DATE_MODAL_${id}`;
  const handleClick = (date: Date) => {
    dispatch(setActiveCalendar(null));
    dispatch(updateMilestoneStage({ id: id, value: date, type: "DATE" }));
  };

  return (
    <div className="w-full flex items-center gap-5 justify-start relative mb-5">
      <div className="w-full flex flex-col gap-5 max-w-[333px]">
        {/* ====== Amount ======== */}
        <div className="w-full flex flex-col">
          <label
            htmlFor="contractName"
            className="block mb-2.5 fs-md leading_normal tracking-[0.4px]"
          >
            Amount
          </label>
          <input
            onChange={(event) => {
              dispatch(
                updateMilestoneStage({
                  type: "AMOUNT",
                  value: event.target.value,
                  id: id,
                })
              );
            }}
            // value={prevData.clientContactName ? prevData.clientContactName : ""}
            type="number"
            id="contractName"
            placeholder="0"
            className=" text-right outline-none duration-200 w-full py-[10px] px-[14px] rounded-[6px] border border-[#0000001a] text-base md:text-[18px] tracking-[0.36pxpx] flex items-center justify-center gap-5 bg-[#FBFCFF] focus:border-[#00000051]"
          />
        </div>

        {/* ====== calendar date picker ======== */}
        <div className="w-full flex flex-col relative">
          <label
            htmlFor="contractName"
            className="block mb-2.5 fs-md leading_normal tracking-[0.4px]"
          >
            Due date
          </label>
          <button
            onClick={(event) => {
              event.stopPropagation();
              dispatch(setActiveCalendar(KEY === tempKey ? null : KEY));
            }}
            type="button"
            id="contractName"
            className={`outline-none duration-200 w-full py-[10px] px-[14px] rounded-[6px] border border-[#0000001a] bg-[#FBFCFF] ${
              tempKey === KEY && "pointer-events-none"
            }`}
          >
            <span className="pointer-events-none flex items-center justify-between w-full">
              <span className="flex items-center gap-2.5">
                <CalendarSVG />
                <span className="text-base md:text-[18px] tracking-[0.36pxpx] text-[#525966]">
                  {date ? formateCalendarSelectedDate(date) : "mm. dd. yyyy"}
                </span>
              </span>
              <CalendarOpenDownArrow
                className={`duration-200 ${tempKey === KEY && "rotate-180"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* =========== render delete button if it not first rendered =========== */}

      {index ? (
        <Image
          onClick={(event) => {
            event.stopPropagation();
            dispatch(removeMilestoneStage(id));
          }}
          height={28}
          width={24}
          src="/svgs/direct-contacts/blue-trash-can.svg"
          alt="Trash can icon"
          className="inline"
        />
      ) : (
        <></>
      )}

      {tempKey === KEY && (
        <RenderCalendar
          handleClick={handleClick}
          className=" absolute top-[85%] left-0 "
          KEY={KEY}
        />
      )}
    </div>
  );
};

const MilestonesInfo = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector(
    (state: RootState) => state.contractModals.totalAmount
  );

  const mileStoneStages = useSelector(
    (state: RootState) => state.contractModals.mileStoneStages
  );

  return (
    <div className="w-full flex flex-col gap-5 lg:gap-[28px] pr-[5px] pl-2.5 pb-5">
      <div className="w-full py-[28px] px-[50px] flex items-center justify-center gap-[60px]">
        <DollarBlueSVG />
        <span className="fs-5xl !2xl:text-[80px] tracking-[-2.16px]">
          {totalAmount ? totalAmount : 0}
        </span>
      </div>
      <div className="duration-200 w-full py-[10px] px-[14px] rounded-[6px] border border-[#0000001a] text-base md:text-[18px] tracking-[0.36pxpx] flex items-center justify-center gap-5 bg-[#FBFCFF]">
        <span className="inline-block p-1 rounded-full bg-white">
          <BlueDotSVG />
        </span>
        <span className="text-[#A8B7C1]">Milestone</span>
      </div>

      {/* ====== milestone input ======== */}
      <div className="w-full flex flex-col">
        <label
          htmlFor="contractName"
          className="block mb-2.5 fs-md leading_normal tracking-[0.4px]"
        >
          Milestone
        </label>
        <input
          onChange={(event) => {
            // dispatch(
            //   updateFormData({ target: "NAME", value: event.target.value })
            // );
          }}
          // value={prevData.clientContactName ? prevData.clientContactName : ""}
          type="text"
          id="contractName"
          placeholder="Write your Contract name"
          className="outline-none duration-200 w-full py-[10px] px-[14px] rounded-[6px] border border-[#0000001a] text-base md:text-[18px] tracking-[0.36pxpx] flex items-center justify-center gap-5 bg-[#FBFCFF] focus:border-[#00000051]"
        />
      </div>

      {/* ====== milestones list ======== */}
      {mileStoneStages.map((milestone, index) => (
        <Milestone
          index={index}
          date={milestone.date}
          id={milestone.id}
          key={milestone.id}
        />
      ))}

      {/* ============= add mileston inputs handlers ======= */}
      <button
        onClick={() => dispatch(addMilestoneStage())}
        type="button"
        className=" w-full max-w-[170px] flex items-center gap-1.5"
      >
        <AddMilestonPlusSVG />
        <span className="fs-md leading_normal tracking-[0.4px] text-[#005AFF]">
          Add milestone
        </span>
      </button>

      {/* ======== show recruit fee and remaining amount ======= */}
      <div className="w-full">
        <p className="mb-2.5 text-[#525966] w-full flex items-center justify-between gap-5 text-base md:text-[18px]">
          <span className="">5.0% Recruit fee</span>
          <span>${totalAmount ? (totalAmount * 5) / 100 : 0}</span>
        </p>
        <p className=" w-full flex items-center justify-between gap-5 text-base md:text-[18px]">
          <span className="">You&apos;ll receive</span>
          <span>
            ${totalAmount ? totalAmount - (totalAmount * 5) / 100 : 0}
          </span>
        </p>
      </div>
    </div>
  );
};

/* =================================
                            PERSONAL INFO 
                                ==========================*/

const EndDate = () => {
  const dispatch = useDispatch();
  const hourlyInfo = useSelector(
    (state: RootState) => state.contractModals.hourlyInfo
  );
  const [endDateType, setEndDateType] = useState("Undefined");

  const tempKey = useSelector(
    (state: RootState) => state.contractModals.activeCalendar
  );
  const KEY = `HOURLY_CONTRACT_END_DATE_FOR_SPECIFIC_PROJECT`;
  const handleClick = (date: Date) => {
    dispatch(setActiveCalendar(null));
    const dateTime = date.getTime();
    dispatch(updateHourlyInfo({ target: "END_DATE", value: dateTime }));
  };

  const selectedDate = hourlyInfo.endDate ? new Date(hourlyInfo.endDate) : null;

  return (
    <div className="w-full border border-[#005aff1a] p-4 md:p-5 rounded-[10px] ">
      <label
        htmlFor=""
        className="block mb-2.5 fs-md leading_normal tracking-[0.4px]"
      >
        End date
      </label>
      <div className="w-full flex flex-col gap-2.5">
        <button
          onClick={(event) => {
            event.stopPropagation();
            setEndDateType("Undefined");
          }}
          type="button"
          className="max-w-[333px] inline-flex items-center gap-2.5"
        >
          <RoundGradientActiveInactiveSVG
            className="max-w-[20px] "
            active={endDateType === "Undefined"}
          />
          <span className="text-base md:text-[18px] leading_normal tracking-[0.4px]">
            Undefined
          </span>
        </button>

        <button
          onClick={(event) => {
            event.stopPropagation();
            setEndDateType("Specific date");
          }}
          type="button"
          className="inline-flex max-w-[333px] items-center gap-2.5"
        >
          <RoundGradientActiveInactiveSVG
            className="max-w-[20px] "
            active={endDateType === "Specific date"}
          />
          <span className="text-base md:text-[18px] leading_normal tracking-[0.4px]">
            Specific date
          </span>
        </button>
      </div>

      {/* ====== calendar date picker ======== */}
      {endDateType === "Specific date" && (
        <div className="w-full flex flex-col relative mt-2.5">
          <button
            onClick={(event) => {
              event.stopPropagation();
              dispatch(setActiveCalendar(KEY === tempKey ? null : KEY));
            }}
            type="button"
            id="contractName"
            className={`max-w-[333px] outline-none duration-200 w-full py-[10px] px-[14px] rounded-[6px] border border-[#0000001a] bg-[#FBFCFF] ${
              tempKey === KEY && "pointer-events-none"
            }`}
          >
            <span className="pointer-events-none flex items-center justify-between w-full">
              <span className="flex items-center gap-2.5">
                <CalendarSVG />
                <span className="text-base md:text-[18px] tracking-[0.36pxpx] text-[#525966]">
                  {selectedDate
                    ? formateCalendarSelectedDate(`${selectedDate}`)
                    : "mm. dd. yyyy"}
                </span>
              </span>
              <CalendarOpenDownArrow
                className={`duration-200 ${tempKey === KEY && "rotate-180"}`}
              />
            </span>
          </button>

          {tempKey === KEY && (
            <RenderCalendar
              handleClick={handleClick}
              className=" absolute top-[85%] left-0 "
              KEY={KEY}
            />
          )}
        </div>
      )}
    </div>
  );
};

const HourlyRateInputs = () => {
  const dispatch = useDispatch();
  const hourlyInfo = useSelector(
    (state: RootState) => state.contractModals.hourlyInfo
  );
  const error = useSelector((state: RootState) => state.contractModals.error);

  // ======== element reference ==========
  const hourlyRate = useRef<HTMLInputElement | null>(null);
  const weeklyRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (error) {
      switch (error.field) {
        case "HOURLY_RATE":
          hourlyRate.current &&
            hourlyRate.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          break;
        case "WEEKLY_LIMIT":
          weeklyRef.current &&
            weeklyRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          break;

        default:
          break;
      }
    }
  }, [error]);

  return (
    <div className="w-full mt-10 flex flex-col gap-5">
      {/* =====Hourly rate ====== */}
      <div className="w-full flex flex-col">
        <label
          htmlFor=""
          className="block mb-2.5 fs-md leading_normal tracking-[0.4px]"
        >
          Hourly rate
        </label>
        <div className="w-full flex items-center gap-2.5">
          <input
            ref={hourlyRate}
            onChange={(event) => {
              dispatch(setError(null));
              dispatch(
                updateHourlyInfo({
                  target: "HOURLY_RATE",
                  value: parseFloat(event.target.value),
                })
              );
            }}
            value={hourlyInfo.hourlyRate ? hourlyInfo.hourlyRate : ""}
            type="number"
            id=""
            placeholder="0"
            className={`bg-[#FBFCFF] text-right duration-200 w-full max-w-[333px] py-[11.15px] px-[14px] rounded-[6px] border border-[#0000001a] outline-none focus:border-[#00000051] text-base md:text-[18px] tracking-[0.36pxpx] 
                ${error && error.field === "HOURLY_RATE" && "!border-red-400"}
                `}
          />
          <span className=" fs-base">/hr</span>
        </div>
        {error && error.field === "HOURLY_RATE" && (
          <p className="mt-1 text-red-400 flex items-center gap-1.5">
            <WarningRedSVG />
            <span className="text-base">
              Value is required and can’t be empty.
            </span>
          </p>
        )}
      </div>

      {/* =====Recruit fee ====== */}
      <div className="w-full flex flex-col">
        <label
          htmlFor=""
          className="block mb-2.5 fs-md leading_normal tracking-[0.4px]"
        >
          5.0% Recruit fee
        </label>
        <div className="w-full flex items-center gap-2.5">
          <input
            onChange={(event) => {
              dispatch(
                updateHourlyInfo({
                  target: "RECRUIT_FEE",
                  value: parseFloat(event.target.value),
                })
              );
            }}
            value={hourlyInfo.recruitFee ? hourlyInfo.recruitFee : ""}
            type="number"
            id=""
            placeholder="0"
            className="bg-[#FBFCFF] pointer-events-none text-right duration-200 w-full max-w-[333px] py-[11.15px] px-[14px] rounded-[6px] border border-[#0000001a] outline-none focus:border-[#00000051] text-base md:text-[18px] tracking-[0.36pxpx]"
          />
          <span className=" fs-base">/hr</span>
        </div>
      </div>

      {/* ===== you'll recieve ====== */}
      <div className="w-full flex flex-col">
        <label
          htmlFor=""
          className="block mb-2.5 fs-md leading_normal tracking-[0.4px]"
        >
          You&apos;ll receive
        </label>
        <div className="w-full flex items-center gap-2.5">
          <input
            onChange={(event) => {
              dispatch(
                updateHourlyInfo({
                  target: "REMAINING_AMOUNT",
                  value: parseFloat(event.target.value),
                })
              );
            }}
            value={hourlyInfo.remainingAmount ? hourlyInfo.remainingAmount : ""}
            type="number"
            id=""
            placeholder="0"
            className="bg-[#FBFCFF] text-right duration-200 w-full max-w-[333px] py-[11.15px] px-[14px] rounded-[6px] border border-[#0000001a] outline-none focus:border-[#00000051] text-base md:text-[18px] tracking-[0.36pxpx]"
          />
          <span className=" fs-base">/hr</span>
        </div>
      </div>

      {/* ===== weekly limit ====== */}
      <div className="w-full flex flex-col">
        <label
          htmlFor=""
          className="block mb-1.5 fs-md leading_normal tracking-[0.4px]"
        >
          Weekly limit
        </label>
        <p className="mb-2">
          Total number of hours your estimate working on this contract per week.
          You&apos;ll log hours worked each week manually
        </p>
        <div className="w-full flex items-center gap-2.5">
          <input
            ref={weeklyRef}
            onChange={(event) => {
              dispatch(setError(null));
              dispatch(
                updateHourlyInfo({
                  target: "WEEKLY_LIMIT",
                  value: parseFloat(event.target.value),
                })
              );
            }}
            value={hourlyInfo.weeklyLimit ? hourlyInfo.weeklyLimit : ""}
            type="number"
            id=""
            placeholder="0"
            className={`bg-[#FBFCFF] text-right duration-200 w-full max-w-[333px] py-[11.15px] px-[14px] rounded-[6px] border border-[#0000001a] outline-none focus:border-[#00000051] text-base md:text-[18px] tracking-[0.36pxpx] *:
                ${error && error.field === "WEEKLY_LIMIT" && "!border-red-400"}
               `}
          />
          <span className=" fs-base">/hr</span>
        </div>
        {error && error.field === "WEEKLY_LIMIT" && (
          <p className="mt-1 text-red-400 flex items-center gap-1.5">
            <WarningRedSVG />
            <span className="text-base">
              Value is required and can’t be empty.
            </span>
          </p>
        )}
      </div>

      {/* ======== end ============ */}
      <EndDate />
    </div>
  );
};

const ContractType = () => {
  const dispatch = useDispatch();
  const contractType = useSelector(
    (state: RootState) => state.contractModals.contractType
  );

  return (
    <div className="w-full flex flex-col">
      <label
        htmlFor="descripton"
        className="block mb-2.5 fs-md leading_normal tracking-[0.4px]"
      >
        Contract type
      </label>

      <div className="w-full rounded-[100px] flex items-center justify-between border border-[#DDE3E7]">
        <button
          onClick={(event) => {
            event.stopPropagation();
            dispatch(setContractType("HOURLY"));
          }}
          className={`p-2.5 rounded-[100px] duration-200 bg-transparent flex-grow fs-lg-lh-lg text-[#005AFF]
               ${contractType === "HOURLY" && "!bg-[#005AFF] text-white"}
              `}
          type="button"
        >
          Hourly
        </button>
        <span
          className={`w-[1px] h-10 bg-[#DDE3E7] ${contractType && "hidden"}`}
        ></span>
        <button
          onClick={(event) => {
            event.stopPropagation();
            dispatch(setContractType("FIXED"));
          }}
          className={`p-2.5 rounded-[100px] duration-200 bg-transparent flex-grow fs-lg-lh-lg text-[#005AFF]
              ${contractType === "FIXED" && "!bg-[#005AFF] text-white"}
             `}
          type="button"
        >
          Fixed price
        </button>
      </div>

      {contractType === "HOURLY" && <HourlyRateInputs />}
    </div>
  );
};

export const PersonalInfo = () => {
  const error = useSelector((state: RootState) => state.contractModals.error);
  const dispatch = useDispatch();
  const prevData = useSelector((state: RootState) => state.contractModals);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (error) {
      switch (error.field) {
        case "NAME":
          nameRef.current &&
            nameRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          break;
        case "EMAIL":
          emailRef.current &&
            emailRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          break;
        case "DESCRIPTION":
          descriptionRef.current &&
            descriptionRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          break;

        default:
          break;
      }
    }
  }, [error]);
  return (
    <div className="w-full pl-2.5 pr-[5px] flex flex-col gap-[28px]">
      {/* =====email field ====== */}
      <div className="w-full flex flex-col">
        <label
          htmlFor="email"
          className="block mb-2.5 fs-md leading_normal tracking-[0.4px]"
        >
          Client’s email address
        </label>
        <input
          onChange={(event) => {
            dispatch(setError(null));

            dispatch(
              updateFormData({ target: "EMAIL", value: event.target.value })
            );
            dispatch(
              updateMessageSendingData({
                target: "email",
                value: event.target.value,
              })
            );
          }}
          ref={emailRef}
          value={prevData.clientEmail ? prevData.clientEmail : ""}
          type="email"
          id="email"
          placeholder="Write your Client’s email address"
          className={`outline-none duration-200 w-full py-[10px] px-[14px] rounded-[6px] border border-[#0000001a] text-base md:text-[18px] tracking-[0.36pxpx] flex items-center justify-center gap-5 bg-[#FBFCFF] focus:border-[#00000051] ${
            error && error.field === "EMAIL" && "!border-red-400"
          }`}
        />
        {error && error.field === "EMAIL" && (
          <p className="mt-1 text-red-400 flex items-center gap-1.5">
            <WarningRedSVG />
            <span className="text-base">
              Valid email is required and can’t be empty.
            </span>
          </p>
        )}
      </div>

      {/* =====name field ====== */}
      <div className="w-full flex flex-col">
        <label
          htmlFor="name"
          className="block mb-2.5 fs-md leading_normal tracking-[0.4px]"
        >
          Contract name
        </label>
        <input
          ref={nameRef}
          onChange={(event) => {
            dispatch(setError(null));
            dispatch(
              updateFormData({ target: "NAME", value: event.target.value })
            );
            dispatch(
              updateMessageSendingData({
                target: "contract",
                value: event.target.value,
              })
            );
          }}
          value={prevData.contractName ? prevData.contractName : ""}
          type="text"
          id="name"
          placeholder="Write your Contract name"
          className={`outline-none duration-200 w-full py-[10px] px-[14px] rounded-[6px] border border-[#0000001a] text-base md:text-[18px] tracking-[0.36pxpx] flex items-center justify-center gap-5 bg-[#FBFCFF] focus:border-[#00000051] ${
            error && error.field === "NAME" && "!border-red-400"
          }`}
        />
        {error && error.field === "NAME" && (
          <p className="mt-1 text-red-400 flex items-center gap-1.5">
            <WarningRedSVG />
            <span className="text-base">
              Value is required and can’t be empty.
            </span>
          </p>
        )}
      </div>

      {/* =====description field ====== */}
      <div className="w-full flex flex-col">
        <label
          htmlFor="descripton"
          className="block mb-2.5 fs-md leading_normal tracking-[0.4px]"
        >
          Description
        </label>
        <textarea
          ref={descriptionRef}
          onChange={(event) => {
            dispatch(setError(null));
            dispatch(
              updateFormData({ target: "DES", value: event.target.value })
            );
          }}
          value={prevData.contractDes ? prevData.contractDes : ""}
          id="descripton"
          placeholder="Outline project deliverables to give more context"
          className={`bg-[#FBFCFF] h-[200px] resize-none duration-200 w-full py-[11.15px] px-[14px] rounded-[6px] border border-[#0000001a] outline-none focus:border-[#00000051] text-base md:text-[18px] tracking-[0.36pxpx] *:
            ${error && error.field === "DESCRIPTION" && "!border-red-400"}
            `}
        ></textarea>
        {error && error.field === "DESCRIPTION" && (
          <p className="mt-1 text-red-400 flex items-center gap-1.5">
            <WarningRedSVG />
            <span className="text-base">
              Value is required and can’t be empty.
            </span>
          </p>
        )}
      </div>

      <ContractType />
    </div>
  );
};

export const ContactFormModalBody = () => {
  const activeInputs = useSelector(
    (state: RootState) => state.contractModals.activeContractFormInputs
  );

  return (
    <>
      <form className="w-full flex-grow overflow-y-auto">
        {activeInputs === "MILESTONES_INFO" ? (
          <MilestonesInfo />
        ) : (
          <PersonalInfo />
        )}
      </form>

      {/* ======== modal footer ======= */}
      <div className="w-full flex items-center justify-end mt-[50px] lg:mt-[72px] pr-[5px]">
        {activeInputs === "MILESTONES_INFO" && <BackButton />}
        <NextButton />
      </div>
    </>
  );
};
