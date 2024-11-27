"use client";
import RenderCalendar from "@/components/shared/calendar/RenderCalendar";
import { RoundGradientActiveInactiveSVG } from "@/components/shared/icons/Icons";
import {
  addMilestoneStage,
  removeMilestoneStage,
  setContractType,
  setError,
  toggleActiveCalendar,
  updateFormData,
  updateHourlyInfo,
  updateMilestoneStage,
} from "@/redux/features/contact/directContactsSlice";
import { RootState } from "@/redux/store";
import { formateCalendarSelectedDate } from "@/utils/UtilityFN";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  AddMilestonPlusSVG,
  BlueDotSVG,
  CalendarOpenDownArrow,
  CalendarSVG,
  DollarBlueSVG,
  WarningRedSVG,
} from "./Icons";

// const RenderCalendar = () => {
//   const [value, onChange] = useState<Value>(new Date());

//   const handleCLick = () => {};

//   return (
//     <>
//       <Calendar
//         className="milestone-date-picker-calendar"
//         calendarType={"gregory"}
//         onChange={onChange}
//         value={value}
//         next2Label={null}
//         onClickDay={handleCLick}
//         prev2Label={null}
//       />
//     </>
//   );
// };
type MileStonePropsType = {
  id: number;
  date: string | null;
  index: number;
};
export const Milestone = ({ index, id, date }: MileStonePropsType) => {
  const dispatch = useDispatch();
  const tempKey = useSelector(
    (state: RootState) => state.directContactsForm.activeCalendar
  );
  const KEY = `ACTIVE_MILESTONE_DUE_DATE_MODAL_${id}`;
  const handleClick = (date: Date) => {
    dispatch(toggleActiveCalendar(null));

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
              dispatch(toggleActiveCalendar(KEY === tempKey ? null : KEY));
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

export const MilestonesInfo = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector(
    (state: RootState) => state.directContactsForm.totalAmount
  );

  const mileStoneStages = useSelector(
    (state: RootState) => state.directContactsForm.mileStoneStages
  );

  return (
    <div className="w-full flex flex-col gap-5 lg:gap-[28px] pr-[5px] pl-2.5 pb-5">
      <div className="w-full py-[28px] px-[50px] flex items-center justify-center gap-[60px]">
        <DollarBlueSVG />
        <span className="xl:text-[80px] tracking-[-2.16px]">
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
    (state: RootState) => state.directContactsForm.hourlyInfo
  );
  const [endDateType, setEndDateType] = useState("Undefined");

  const tempKey = useSelector(
    (state: RootState) => state.directContactsForm.activeCalendar
  );
  const KEY = `HOURLY_CONTRACT_END_DATE_FOR_SPECIFIC_PROJECT`;
  const handleClick = (date: Date) => {
    dispatch(toggleActiveCalendar(null));
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
              dispatch(toggleActiveCalendar(KEY === tempKey ? null : KEY));
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
    (state: RootState) => state.directContactsForm.hourlyInfo
  );
  const error = useSelector(
    (state: RootState) => state.directContactsForm.error
  );

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
    (state: RootState) => state.directContactsForm.contractType
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
  const error = useSelector(
    (state: RootState) => state.directContactsForm.error
  );
  const dispatch = useDispatch();
  const prevData = useSelector((state: RootState) => state.directContactsForm);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);

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
              Value is required and can’t be empty.
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
          }}
          value={prevData.clientContactName ? prevData.clientContactName : ""}
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
          onChange={(event) => {
            dispatch(
              updateFormData({ target: "DES", value: event.target.value })
            );
          }}
          value={prevData.clientDescription ? prevData.clientDescription : ""}
          id="descripton"
          placeholder="Outline project deliverables to give more context"
          className="bg-[#FBFCFF] h-[200px] resize-none duration-200 w-full py-[11.15px] px-[14px] rounded-[6px] border border-[#0000001a] outline-none focus:border-[#00000051] text-base md:text-[18px] tracking-[0.36pxpx]"
        ></textarea>
      </div>

      <ContractType />
    </div>
  );
};
