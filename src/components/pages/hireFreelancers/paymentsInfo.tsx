"use client";
import RenderCalendar from "@/components/shared/calendar/RenderCalendar";
import {
  CalendarSquare,
  GradientCheckboxSquareActive,
  GradientCheckboxSquareInactive,
} from "@/components/shared/icons/Icons";
import MouseOverActiveModal from "@/components/shared/modal/MouseOverActiveModal";
import { toggleActiveCalendar } from "@/redux/features/contact/directContactsSlice";
import { SET_EXPAND } from "@/redux/features/rootModyfier/Modyfier";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuestionMarkSVG } from "../freelancerProfile/Icons";
import { ArrowDownSVG } from "./Icons";

// const PaymentOption = ()=>{
// }
const PaymentOption = () => {
  const dispatch = useDispatch();
  const active = useSelector((state: RootState) => state.modyfier.EXPAND);
  const key = "INVITE_FREELANCERS_PAYMENT_OPTION_DROPDOWN";
  const [paymentOption, setPaymentOption] = useState("Hourly");
  const [activeQuestionModal, setActiveQuestionModal] = useState(false);
  return (
    <div className="w-full">
      <div className="mb-1.5 fs-lg-lh-normal flex items-center gap-1.5">
        <span>Payment option </span>
        <div className="relative w-auto">
          <button
            className="w-auto"
            onMouseOver={() => setActiveQuestionModal(true)}
            onMouseOut={() => setActiveQuestionModal(false)}
          >
            <QuestionMarkSVG />
          </button>
          <MouseOverActiveModal
            className="top-[160%] left-[-142px] w-[300px] z-[999999999]"
            active={activeQuestionModal}
            polygon={true}
          >
            <p>Missing text. We will add as soon as we get related text.</p>
          </MouseOverActiveModal>
        </div>
      </div>

      <div className="w-full max-w-[200px] relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(SET_EXPAND(key));
          }}
          className={`fs-base flex items-center gap-2.5 mb-1.5 ${
            active === key && "pointer-events-none"
          }`}
        >
          <span>{paymentOption}</span>{" "}
          <ArrowDownSVG
            className={` duration-200 ${active === key ? "rotate-180" : ""}`}
          />
        </button>
        <ul
          onClick={(event) => {
            event.stopPropagation();
            dispatch(SET_EXPAND(key));
          }}
          className={`max-h-0 overflow-hidden w-full absolute top-[120%] left-0 bg-white  ${
            active === key &&
            "!max-h-[99999px] border rounded-[10px] shadow-lg py-1"
          }`}
        >
          <li
            onClick={(event) => {
              event.stopPropagation();
              setPaymentOption("Hourly");
              dispatch(SET_EXPAND(null));
            }}
            className="w-full cursor-pointer hover:bg-[#005AFF] duration-200 my-0.5
             hover:text-white px-5"
          >
            Hourly
          </li>
          <li
            onClick={(event) => {
              event.stopPropagation();
              setPaymentOption("Fixed");
              dispatch(SET_EXPAND(null));
            }}
            className="w-full cursor-pointer hover:bg-[#005AFF] duration-200 my-0.5
             hover:text-white px-5"
          >
            Fixed
          </li>
        </ul>
      </div>

      <p className="fs-base">Muhammad I.’s profile rate is $12.00 / hr</p>
    </div>
  );
};

const PayByTheHour = () => {
  const dispatch = useDispatch();
  const active = useSelector((state: RootState) => state.modyfier.EXPAND);
  const key = "INVITE_FREELANCERS_PAYBY_HOUR_DROPDOWN";
  const [paymentOption, setPaymentOption] = useState("Hourly");
  const [activeQuestionModal, setActiveQuestionModal] = useState(false);
  return (
    <div className="w-full">
      <p className="mb-1.5 fs-lg-lh-normal flex items-center gap-1.5">
        <span>Pay by the hour </span>
        <div className="relative w-auto">
          <button
            className="w-auto"
            onMouseOver={() => setActiveQuestionModal(true)}
            onMouseOut={() => setActiveQuestionModal(false)}
          >
            <QuestionMarkSVG />
          </button>
          <MouseOverActiveModal
            className="top-[160%] left-[-142px] w-[300px] z-[999999999]"
            active={activeQuestionModal}
            polygon={true}
          >
            <p>Missing text. We will add as soon as we get related text.</p>
          </MouseOverActiveModal>
        </div>
      </p>
      <div className="w-full max-w-[200px] relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(SET_EXPAND(key));
          }}
          className={`fs-base flex items-center gap-2.5 mb-1.5 ${
            active === key && "pointer-events-none"
          }`}
        >
          <span>$7.00 / hr</span>{" "}
          <ArrowDownSVG
            className={` duration-200 ${active === key ? "rotate-180" : ""}`}
          />
        </button>

        {/* ===== drop down content ======== */}
        <ul
          onClick={(event) => {
            event.stopPropagation();
            dispatch(SET_EXPAND(key));
          }}
          className={`max-h-0 overflow-hidden w-full absolute top-[120%] left-0 bg-white ${
            active === key &&
            "!max-h-[99999px] border rounded-[10px] shadow-lg py-1"
          }`}
        >
          <li
            onClick={(event) => {
              event.stopPropagation();
              // setPaymentOption("Hourly");
              dispatch(SET_EXPAND(null));
            }}
            className="w-full cursor-pointer hover:bg-[#005AFF] duration-200 my-0.5
             hover:text-white px-5"
          >
            unknown item 1
          </li>
          <li
            onClick={(event) => {
              event.stopPropagation();
              // setPaymentOption("Fixed");
              dispatch(SET_EXPAND(null));
            }}
            className="w-full cursor-pointer hover:bg-[#005AFF] duration-200 my-0.5
             hover:text-white px-5"
          >
            unknown item 2
          </li>
        </ul>
      </div>
    </div>
  );
};

const ScheduleIncreaseRate = () => {
  const dispatch = useDispatch();
  const active = useSelector((state: RootState) => state.modyfier.EXPAND);
  const key = "INVITE_FREELANCERS_SCHEDULE_RATE_INCREASE_DROPDOWN";
  const [paymentOption, setPaymentOption] = useState("Hourly");
  return (
    <div className="w-full">
      <p className="mb-1.5 fs-lg-lh-normal">Schedule a rate increase</p>
      <p className="fs-base my-1.5">
        Set an optional rate increase for Sajjad in your contract&apos;s terms.
        Their rate will increase automatically and can&apos;t be changed if they
        accept your offer.
      </p>
      <div className="w-full max-w-[200px] relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(SET_EXPAND(key));
          }}
          className={`fs-base flex items-center gap-2.5 mb-1.5 ${
            active === key && "pointer-events-none"
          }`}
        >
          <span>None</span>{" "}
          <ArrowDownSVG
            className={` duration-200 ${active === key ? "rotate-180" : ""}`}
          />
        </button>

        {/* ===== drop down content ======== */}
        <ul
          onClick={(event) => {
            event.stopPropagation();
            dispatch(SET_EXPAND(key));
          }}
          className={`max-h-0 overflow-hidden w-full absolute top-[120%] left-0 bg-white ${
            active === key &&
            "!max-h-[99999px] border rounded-[10px] shadow-lg py-1"
          }`}
        >
          <li
            onClick={(event) => {
              event.stopPropagation();
              // setPaymentOption("Hourly");
              dispatch(SET_EXPAND(null));
            }}
            className="w-full cursor-pointer hover:bg-[#005AFF] duration-200 my-0.5
             hover:text-white px-5"
          >
            unknown item 1
          </li>
          <li
            onClick={(event) => {
              event.stopPropagation();
              // setPaymentOption("Fixed");
              dispatch(SET_EXPAND(null));
            }}
            className="w-full cursor-pointer hover:bg-[#005AFF] duration-200 my-0.5
             hover:text-white px-5"
          >
            unknown item 2
          </li>
        </ul>
      </div>
    </div>
  );
};

const WeeklyLimit = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const active = useSelector((state: RootState) => state.modyfier.EXPAND);
  const key = "INVITE_FREELANCERS_WEEKLY_LIMIT_DROPDOWN";
  const [paymentOption, setPaymentOption] = useState("Hourly");
  const [activeQuestionModal, setActiveQuestionModal] = useState(false);
  return (
    <div className="w-full">
      <p className="mb-1.5 fs-lg-lh-normal flex items-center gap-1.5">
        <span>Weekly limit </span>
        <div className="relative w-auto">
          <button
            className="w-auto"
            onMouseOver={() => setActiveQuestionModal(true)}
            onMouseOut={() => setActiveQuestionModal(false)}
          >
            <QuestionMarkSVG />
          </button>
          <MouseOverActiveModal
            className="top-[160%] left-[-142px] w-[300px] z-[999999999]"
            active={activeQuestionModal}
            polygon={true}
          >
            <p>Missing text. We will add as soon as we get related text.</p>
          </MouseOverActiveModal>
        </div>
      </p>

      <div className="w-full max-w-[200px] relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(SET_EXPAND(key));
          }}
          className={`fs-base flex items-center gap-2.5 mb-1.5 ${
            active === key && "pointer-events-none"
          }`}
        >
          <span>40 hrs/week</span>
          <ArrowDownSVG
            className={` duration-200 ${active === key ? "rotate-180" : ""}`}
          />
        </button>

        {/* ===== drop down content ======== */}
        <ul
          onClick={(event) => {
            event.stopPropagation();
            dispatch(SET_EXPAND(key));
          }}
          className={`max-h-0 overflow-hidden w-full absolute top-[120%] left-0 bg-white ${
            active === key &&
            "!max-h-[99999px] border rounded-[10px] shadow-lg py-1"
          }`}
        >
          <li
            onClick={(event) => {
              event.stopPropagation();
              // setPaymentOption("Hourly");
              dispatch(SET_EXPAND(null));
            }}
            className="w-full cursor-pointer hover:bg-[#005AFF] duration-200 my-0.5
             hover:text-white px-5"
          >
            unknown item 1
          </li>
          <li
            onClick={(event) => {
              event.stopPropagation();
              // setPaymentOption("Fixed");
              dispatch(SET_EXPAND(null));
            }}
            className="w-full cursor-pointer hover:bg-[#005AFF] duration-200 my-0.5
             hover:text-white px-5"
          >
            unknown item 2
          </li>
        </ul>
      </div>
      <p className="fs-base mb-6 md:mb-7 lg:mb-[30px]">$280.00 max/week</p>
      <div className="w-full fs-md">
        <button
          className="mr-[15px] inline float-left mt-0.5"
          onClick={() => setChecked(!checked)}
        >
          {checked ? (
            <GradientCheckboxSquareActive />
          ) : (
            <GradientCheckboxSquareInactive />
          )}
        </button>
        <span className="inline">
          Allow talent to long time manually if needed.
        </span>
        <Link href="#" className="inline text-[#005AFF] underline ml-2">
          Learn more
        </Link>
      </div>
    </div>
  );
};

const StartDate = () => {
  const dispatch = useDispatch();
  const tempKey = useSelector(
    (state: RootState) => state.directContactsForm.activeCalendar
  );
  const key = "INVITE_FREELANCERS_STARTING_DATE_OPTIONAL_DROPDOWN";
  const [activeQuestionModal, setActiveQuestionModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const handleClick = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dateString = `${month}-${day}-${year}`;
    dispatch(toggleActiveCalendar(null));
    setSelectedDate(dateString);
  };

  return (
    <div className="w-full  mb-6 md:mb-7 lg:mb-[30px]">
      <p className="fs-lg-lh-normal flex items-center gap-[14px] mb-1.5">
        <span>Start date (optional) </span>
        <div className="relative w-auto">
          <button
            className="w-auto"
            onMouseOver={() => setActiveQuestionModal(true)}
            onMouseOut={() => setActiveQuestionModal(false)}
          >
            <QuestionMarkSVG />
          </button>
          <MouseOverActiveModal
            className="top-[160%] left-[-142px] w-[300px] z-[999999999]"
            active={activeQuestionModal}
            polygon={true}
          >
            <p>Missing text. We will add as soon as we get related text.</p>
          </MouseOverActiveModal>
        </div>
      </p>
      <div className="w-full max-w-[250px] relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(toggleActiveCalendar(key));
          }}
          className={`py-2.5 md:py-3 px-5  lg:py-[16px]  rounded-[100px] border border-[#005AFF] bg-[#005aff05] fs-base flex items-center gap-2.5 mb-1.5 ${
            tempKey === key && "pointer-events-none"
          }`}
        >
          <CalendarSquare />{" "}
          <span>{selectedDate ? selectedDate : "mm. dd. yyyy"}</span>
          <ArrowDownSVG
            className={` duration-200 ${tempKey === key ? "rotate-180" : ""}`}
          />
        </button>

        {tempKey === key ? (
          <RenderCalendar
            KEY={key}
            key="PAYMENT_STARTING_DATE_CALENDAR "
            handleClick={handleClick}
            className="absolute top-[60%] left-0 w-full min-w-[350px] md:min-w-[484px]"
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

// ============ root component ===============

const PaymentInfo = () => {
  return (
    <div className="w-full">
      <PaymentOption />
      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-6 md:my-7 lg:my-[30px] bg-[#0000001f]"></span>
      <PayByTheHour />
      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-6 md:my-7 lg:my-[30px] bg-[#0000001f]"></span>
      <ScheduleIncreaseRate />
      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-6 md:my-7 lg:my-[30px] bg-[#0000001f]"></span>
      <WeeklyLimit />
      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-6 md:my-7 lg:my-[30px] bg-[#0000001f]"></span>
      <StartDate />
    </div>
  );
};

export default PaymentInfo;
