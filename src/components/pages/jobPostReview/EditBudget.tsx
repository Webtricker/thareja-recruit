"use client";
import { setPostReviewActiveEditField } from "@/redux/features/jobpost/JobReviewSlice";
import {
  setJobBudget,
  setJobPostBudgetType,
} from "@/redux/features/jobpost/jobPostSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HourlyBudgetGraph } from "../getStartedWithoutAi/ClientComponents";
import JobReviewModalButtons from "./JobReviewModalButtons";
import JobReviewModalTitle from "./JobReviewModalTitle";
import ReviewBudgetCheckbox from "./ReviewBudgetCheckbox";

const EditBudget = () => {
  const dispatch = useDispatch();

  const budgetType = useSelector(
    (state: RootState) => state.jobPosting.jobBudgetType
  );
  const prevSelectedBudget = useSelector(
    (state: RootState) => state.jobPosting.jobBudget
  );

  const [fixedPrice, setFixedPrice] = useState("");
  const [activeBudgetType, setActiveBudgetType] = useState<"HOURLY" | "FIXED">(
    budgetType
  );
  const [budget, setBudget] = useState({
    to: "5.00",
    from: "4.00",
  });

  // ======= HANDLERS ==========
  const handleFromInput = (e: ChangeEvent<HTMLInputElement>) => {
    const val: any = e.target.value.split("$");
    if (e.target.value !== "$" && isNaN(val[1] - 1)) return;

    setBudget({
      ...budget,
      from: val[1],
    });
    console.log(budget);
  };

  const handleToInput = (e: ChangeEvent<HTMLInputElement>) => {
    const val: any = e.target.value.split("$");
    if (e.target.value !== "$" && isNaN(val[1] - 1)) return;
    setBudget({
      ...budget,
      to: val[1],
    });
    console.log(budget);
  };

  const handleFixedPriceInput = (e: ChangeEvent<HTMLInputElement>) => {
    const val: any = e.target.value.split("$");
    if (e.target.value !== "$" && isNaN(val[1] - 1)) return;
    setFixedPrice(val[1]);
  };

  const handleCloseModal = () => {
    dispatch(setPostReviewActiveEditField(null));
  };

  const handleSaveData = () => {
    let convertedBudget = fixedPrice;
    if (activeBudgetType === "HOURLY") {
      convertedBudget = `${budget.from} - ${budget.to}`;
    }

    dispatch(setPostReviewActiveEditField(null));
    dispatch(setJobBudget(convertedBudget));
    dispatch(setJobPostBudgetType(activeBudgetType));
  };

  useEffect(() => {
    // set fixed / budget
    // console.log(prevSelectedBudget);
    if (!prevSelectedBudget) return;
    if (activeBudgetType === "FIXED") {
      setFixedPrice(prevSelectedBudget);
    } else {
      const budgetArray = prevSelectedBudget.split(" - ");
      setBudget({ from: budgetArray[0], to: budgetArray[1] });
    }
  }, []);
  return (
    <div className=" w-full max-w-[776px] max-h-[95%] min-h-[250px] py-[20px] h-full rounded-[20px] md:rounded-[30px] bg-white shadow-md ">
      <div className="overflow-y-auto relative px-[20px] md:px-[50px] md:pl-[32px] md:py-[30px] max-h-[100%] w-full h-full">
        <JobReviewModalTitle handler={handleCloseModal} label="Edit budget" />

        {/* ========JOB BUDGET starts */}
        <div className="pt-[1px] right-item flex flex-col justify-between !w-full">
          <div className="budget-rate w-full lg:max-w-[790px] ">
            <div className="card-container grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-[27px] xl:gap-[30px] mb-[34px]">
              {/* Hourly Card */}
              <div
                onClick={() => setActiveBudgetType("HOURLY")}
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
                    <ReviewBudgetCheckbox
                      key={"HOURLY"}
                      active={activeBudgetType === "HOURLY"}
                    />
                  </div>
                  <h3 className="fs-lg-lh-normal">Hourly rate</h3>
                </div>
              </div>

              {/* Fixed price */}
              <div
                onClick={() => setActiveBudgetType("FIXED")}
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
                    <ReviewBudgetCheckbox
                      key={"HOURLY"}
                      active={activeBudgetType === "FIXED"}
                    />
                  </div>
                  <h3 className="fs-lg-lh-normal">Fixed price</h3>
                </div>
              </div>
            </div>
            {activeBudgetType === "HOURLY" && (
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
                        value={`$${budget.from}`}
                        className="text-[20px] w-full max-w-[140px] tracking-[-0.6px] border border-gray-300 rounded-[6px] p-[10px] focus:outline-none focus:border-[#005AFF] text-end"
                      />
                      <span className="fs-lg-lh-normal inline-block">/ hr</span>
                    </div>
                  </div>
                  <div className="right-input w-full">
                    <label className="block fs-lg-lh-normal mb-[14px]">
                      To
                    </label>
                    <div className="input-item flex gap-[10px] items-center">
                      <input
                        id="milestone-amount-1"
                        type="text"
                        onChange={handleToInput}
                        aria-describedby="currency-hourly-6"
                        placeholder="$0.00"
                        value={`$${budget.to}`}
                        className="text-[20px] max-w-[140px] tracking-[-0.6px] border border-gray-300 rounded-[6px] p-[10px] focus:outline-none focus:border-[#005AFF] text-end"
                      />
                      <span className="fs-lg-lh-normal"> / hr</span>
                    </div>
                  </div>
                </div>
                <p className="fs-base pt-8">
                  This is the average rate for similar projects.
                </p>
              </>
            )}
          </div>
          {activeBudgetType === "HOURLY" ? (
            <HourlyBudgetGraph
              key="JOB_REVIEW_BUDGET_GRAPH"
              hideHourlyRateLink={true}
            />
          ) : (
            // FIXED BUDGET INFO
            <>
              <div className="budget-chart mb-10 lg:mb-0 w-full lg:max-w-[627px] ">
                <p className="fs-base mb-[28px] md:mb-[38px]">
                  Set a price for the project and pay at the end, or you can
                  divide the project into milestones and pay as each milestone
                  is completed.
                </p>

                <h4 className="mb-[18px] text-[20px] md:text-[23px] leading-[30px] md:leading-[40px] lg:text-[25px] xl:text-[27px] font-normal tracking-[-0.96px]">
                  What is the best cost estimate for your project?
                </h4>
                <p className="fs-base mb-[28px] ">
                  You can negotiate this cost and create milestones when you
                  chat with your freelancer.
                </p>

                <input
                  id="milestone-amount-1"
                  type="text"
                  onChange={handleFixedPriceInput}
                  aria-describedby="currency-hourly-6"
                  placeholder="$"
                  value={`$${fixedPrice}`}
                  className="fs-md block  w-full max-w-[145px] border border-gray-300 rounded-[6px] p-[10px] focus:outline-none focus:border-[#005AFF] text-end"
                />

                <Link
                  href="#"
                  className="block  fs-md text-[#005AFF] pt-[38px]"
                >
                  Change Fixed Price to Hourly
                </Link>
              </div>
            </>
          )}
        </div>
        {/* ========JOB BUDGET ends */}

        {/* Save & Cancel button */}
        <JobReviewModalButtons
          key="EDIT_REVIEW_BUDGET"
          cancleHandler={handleCloseModal}
          saveHandler={handleSaveData}
        />
      </div>
    </div>
  );
};

export default EditBudget;
