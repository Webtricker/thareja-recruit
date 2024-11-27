"use client";
import { toggleActiveCalendar } from "@/redux/features/contact/directContactsSlice";
import { SET_EXPAND } from "@/redux/features/rootModyfier/Modyfier";
import { MouseEvent, MouseEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { NextIcon, PreviousIcon } from "./Icons";

type PropsType = {
  className?: string;
  handleClick: Function;
  KEY: string;
};
const RenderCalendar = ({KEY, className, handleClick }: PropsType) => {
  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Function to change to the previous month
  const prevMonth = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(toggleActiveCalendar(KEY));
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  // Function to change to the next month
  const nextMonth = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(SET_EXPAND(KEY))
    dispatch(toggleActiveCalendar(KEY));
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const clickHandler = (date: Date | undefined) => {
    if (date) {
      handleClick(date);
    }
  };

  // Get the current year and month
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0 is January, 1 is February, etc.

  // Get the first day of the current month
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Get the number of days in the current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Get the number of days in the previous month
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  // Create an array for the dates to display in the calendar
  const dates = [];

  // Add the days from the previous month to fill the grid
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    dates.push({
      day: daysInPrevMonth - i,
      isCurrentMonth: false,
    });
  }

  // Add the days of the current month
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push({
      day: i,
      isCurrentMonth: true,
      fullDate: new Date(year, month, i),
    });
  }

  // Add the days from the next month to fill the remaining cells
  const remainingCells = 42 - dates.length; // 42 cells to cover 6 rows
  for (let i = 1; i <= remainingCells; i++) {
    dates.push({
      day: i,
      isCurrentMonth: false,
    });
  }

  return (
    <div
    className={`z-[999999999999] ${className}`}>
      <div
       data-prevent-body-trigger
        id="calendar"
        className={`calendar bg-white  text-[#30353E] my-10  p-4 lg:py-[28px] lg:px-[32px] rounded-[30px] `}
      >
        {/* Calendar Header */}
        <div className="calendar-header flex w-full justify-between bg-[#005aff08] py-2.5 px-[18px] rounded-[12px]">
          <button type="button" onClick={prevMonth}>
            <PreviousIcon />
          </button>
          <h2 className="fs-xl-lh-lg">
            {currentDate.toLocaleString("default", { month: "long" })} {year}
          </h2>
          <button type="button" onClick={nextMonth}>
            <NextIcon />
          </button>
        </div>

        {/* Calendar Days of the Week */}
        <div className="calendar-grid mt-2.5">
          {/* ========== calendar header ========== */}
          <div className="days-container grid grid-cols-7 w-full mb-2.5">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-center fs-md leading_normal tracking-[0.4px] day-name"
              >
                {day}
              </div>
            ))}
          </div>

          {/* ========== calendar body ========== */}

          <div className="dates-container grid grid-cols-7">
            {/* Calendar Dates */}
            {dates.map((date, index) => (
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  dispatch(toggleActiveCalendar(KEY));
                  setSelectedDate(date.fullDate ? date.fullDate : null);
                  clickHandler(date.fullDate);
                }}
                key={index}
                className={`duration-300 rounded-[6px] text-center p-2.5 lg:p-3 fs-md leading_normal tracking-[0.4px] day ${
                  date.isCurrentMonth
                    ? "current-month cursor-pointer"
                    : "other-month text-[#A8B7C1] pointer-events-none"
                }
              ${
                selectedDate &&
                date.fullDate &&
                selectedDate.getTime() === date.fullDate.getTime()
                  ? "bg-[#005AFF] text-white"
                  : "hover:bg-[#7ea6efe3] hover:text-white"
              }
              `}
              >
                {date.day}
              </button>
            ))}
          </div>

          {/* ========== calendar footer ========= */}
          <div className="w-full mt-2.5 flex justify-end">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                handleClick(new Date(),"RESET")
                setSelectedDate(null);
              }}
              className="text-[#005AFF] text-center p-2.5 lg:p-3 fs-md leading_normal tracking-[0.4px]"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderCalendar;
