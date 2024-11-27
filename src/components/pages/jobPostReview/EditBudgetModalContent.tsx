"use client";
import ActiveInActiveCheckboxes from "@/components/shared/checkbox/ActiveInActiveCheckboxes";
import {
  setJobBudget,
  setJobPostBudgetType,
} from "@/redux/features/jobpost/jobPostSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FixedPriceInfo,
  HourlyBudgetGraph,
} from "../getStartedWithoutAi/ClientComponents";

const EditBudgetModalContent = () => {
  const dispatch = useDispatch();
  const budgetType = useSelector(
    (state: RootState) => state.jobPosting.jobBudgetType
  );

  //   STATES STARTS
  const [from, setFrom] = useState("4.00");
  const [to, setTo] = useState("5.00");

  // HANDLERS
  const handleFromInput = (e: ChangeEvent<HTMLInputElement>) => {
    const val: any = e.target.value.split("$");
    if (e.target.value !== "$" && isNaN(val[1] - 1)) return;

    const hourlyBudget = `$${val[1]} - $${to}`;
    setFrom(val[1]);
    dispatch(setJobBudget(hourlyBudget));
  };

  const handleToInput = (e: ChangeEvent<HTMLInputElement>) => {
    const val: any = e.target.value.split("$");
    if (e.target.value !== "$" && isNaN(val[1] - 1)) return;

    const hourlyBudget = `$${from} - $${val[1]}`;
    setTo(val[1]);
    dispatch(setJobBudget(hourlyBudget));
  };
  return (
    <div className="pt-[1px] right-item flex flex-col justify-between !w-full">
      <div className="budget-rate w-full lg:max-w-[790px] ">
        <div className="card-container grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-[27px] xl:gap-[30px] mb-[34px]">
          {/* Hourly Card */}
          <div
            onClick={() => dispatch(setJobPostBudgetType("HOURLY"))}
            className="flex items-center justify-center gap-[1px] p-[1px] gradient-border cursor-pointer w-full rounded-[20px] h-auto"
          >
            <div className="card min-h-full h-full border border-transparent rounded-[19px] bg-white w-full px-5 py-3  md:px-[25px]  xl:px-[42px] md:py-[15px] xl:py-[29px]">
              <div className="logo-container  mb-[15px] xl:mb-[30px] flex items-start justify-between">
                {/* client logo */}
                <Image
                  alt="Client logo"
                  src="/svgs/hourly-clock.svg"
                  width={60}
                  height={60}
                  className="w-[50px] h-[50px] lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px]"
                />
                <ActiveInActiveCheckboxes
                  key={"FIXED"}
                  active={budgetType === "HOURLY"}
                />
              </div>
              <h3 className="text-[18px] md:text-[26px] lg:text-[30px] xl:text-[32px] font-normal tracking-[-0.96px]">
                Hourly rate
              </h3>
            </div>
          </div>

          {/* Fixed price */}
          <div
            onClick={() => dispatch(setJobPostBudgetType("FIXED"))}
            className="flex items-center justify-center gap-[1px] p-[1px] gradient-border cursor-pointer w-full rounded-[20px] h-auto"
          >
            <div className="card min-h-full h-full rounded-[19px] bg-white w-full px-5 py-3  md:px-[25px]  xl:px-[42px] md:py-[15px] xl:py-[29px]">
              <div className="logo-container  mb-[15px] xl:mb-[30px] flex items-start justify-between">
                {/* client logo */}
                <Image
                  alt="Clock"
                  src="/svgs/fixed-price-token.svg"
                  width={60}
                  height={60}
                  className="w-[50px] h-[50px] lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px]"
                />
                <ActiveInActiveCheckboxes
                  key={"FIXED"}
                  active={budgetType === "FIXED"}
                />
              </div>
              <h3 className="text-[18px] md:text-[26px] lg:text-[30px] xl:text-[32px] font-normal tracking-[-0.96px]">
                Fixed price
              </h3>
            </div>
          </div>
        </div>
        {budgetType === "HOURLY" && (
          <>
            <div className="budget-inputs grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">
              <div className="left-input w-full">
                <label className="block hourly text-[20px] md:text-2xl tracking-[-0.72px] mb-[14px]">
                  From
                </label>
                <div className="input-item flex gap-[10px] items-center">
                  <input
                    id="milestone-amount-1"
                    type="text"
                    onChange={handleFromInput}
                    aria-describedby="currency-hourly-6"
                    placeholder="$0.00"
                    value={`$${from}`}
                    className="text-[20px] w-full max-w-[140px] tracking-[-0.6px] border border-gray-300 rounded-[6px] p-[10px] focus:outline-none focus:border-[#005AFF] text-end"
                  />
                  <span className="text-[20px] md:text-2xl tracking-[-0.72px] inline-block">
                    / hr
                  </span>
                </div>
              </div>
              <div className="right-input w-full">
                <label className="block text-[20px] md:text-2xl tracking-[-0.72px] mb-[14px]">
                  To
                </label>
                <div className="input-item flex gap-[10px] items-center">
                  <input
                    id="milestone-amount-1"
                    type="text"
                    onChange={handleToInput}
                    aria-describedby="currency-hourly-6"
                    placeholder="$0.00"
                    value={`$${to}`}
                    className="text-[20px] max-w-[140px] tracking-[-0.6px] border border-gray-300 rounded-[6px] p-[10px] focus:outline-none focus:border-[#005AFF] text-end"
                  />
                  <span className="text-[20px] md:text-2xl tracking-[-0.72px]">
                    {" "}
                    / hr
                  </span>
                </div>
              </div>
            </div>
            <p className="text-18 pt-8">
              This is the average rate for similar projects.
            </p>
          </>
        )}
      </div>
      {budgetType === "HOURLY" ? <HourlyBudgetGraph /> : <FixedPriceInfo />}
    </div>
  );
};

export default EditBudgetModalContent;
