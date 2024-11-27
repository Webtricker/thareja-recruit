"use client";
import { SearchInput } from "@/components/shared/input/SearchInput";
import {
  resetJobPost,
  setJobBudget,
  setJobPostBudgetType,
  setJobPostJobTitle,
  setJobPostRequiredSkills,
} from "@/redux/features/jobpost/jobPostSlice";
import { setJobPostErrors } from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WarningSVG from "../login/WarningSVG";
import { NextButtonText, PreviousButton } from "./Buttons";
import { CheckedSVG, PlusSVG, StarSVG, UnCheckedSVG, XmarkSVG } from "./Icons";
import { staticSkills } from "./StaticData";

// ========= reset active components and all fields ===========
export const InitialReset = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetJobPost("RESET"));
    // dispatch(resetActiveState("RESET"));
  });
  return <></>;
};

// ======== progress bar ========
export const WithoutAiJobPostProgressbar = () => {
  //  redux states
  const activeStage = useSelector(
    (state: RootState) => state.jobPostingStages.activeStage
  );

  const progressBarStyle =
    activeStage === "TITLE_COMPONENT"
      ? "!w-[20%]"
      : activeStage === "SKILLS_COMPONENT"
      ? "!w-[40%]"
      : activeStage === "WORK_DETAILS_COMPONENT"
      ? "!w-[60%]"
      : activeStage === "BUDGET_COMPONENT"
      ? "!w-[80%]"
      : activeStage === "DESCRIPTION_COMPONENT"
      ? "!w-[100%]"
      : "";

  return (
    <div className="progress-bar bg-white fixed bottom-0 left-0 w-full pt-[30px] pb-[30px] md:pb-[40px] 2xl:pb-[62px]">
      <span
        className={` duration-300 progress-bar-active absolute top-0 left-0 h-1 bg-[#005AFF] z-[2] w-[20%] 
     ${progressBarStyle}
    `}
      ></span>
      <span className="progress-bar w-full absolute top-0 left-0 h-1 bg-[#DDE3E7] z-[1]"></span>

      {/* next and prev buttons */}

      <div className=" w-full flex items-center justify-between px-5 md:px-[30px] lg:px-[35px] xl:px-[40px] 2xl:px-[47px]">
        <PreviousButton />
        <NextButtonText />
      </div>
    </div>
  );
};

// ==== active component ========
export const CurrentComponentIndex = () => {
  const activeStage = useSelector(
    (state: RootState) => state.jobPostingStages.activeStage
  );

  let content;

  switch (activeStage) {
    case "TITLE_COMPONENT":
      content = "1/5";
      break;
    case "SKILLS_COMPONENT":
      content = "2/5";
      break;
    case "WORK_DETAILS_COMPONENT":
      content = "3/5";
      break;
    case "BUDGET_COMPONENT":
      content = "4/5";
      break;
    case "DESCRIPTION_COMPONENT":
      content = "5/5";
      break;
    default:
      content = "";
  }

  return (
    <div className="w-full max-w-[120px] flex justify-between">
      <span className="fs-base">{content}</span>
      <p className="fs-base">Job post</p>
    </div>
  );
};

// ==== title component input field ========
export const JobTitleInput = () => {
  const dispatch = useDispatch();
  const title = useSelector((state: RootState) => state.jobPosting.title);
  const error = useSelector(
    (state: RootState) => state.jobPostingStages.errors
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setJobPostJobTitle(e.target.value));
    if (error) {
      dispatch(setJobPostErrors(null));
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Ex: UX/UI Designer"
        className="w-full bg-transparent border border-[#0000001a] px-4 py-2 rounded-[10px] focus:outline-none focus:border-[#005AFF]"
        onChange={handleInputChange}
        value={title}
      />
      {error?.field === "TITLE" && (
        <p className="text-[#FF0000] flex items-center gap-[6px] mt-[7px] md:mt-[10px]">
          <WarningSVG /> {error.message}
        </p>
      )}
    </>
  );
};

// ======== required skills component select skills ============
export const RequiredSkillsSelector = () => {
  const dispatch = useDispatch();

  // redux sate
  const prevSelectedSkills = useSelector(
    (state: RootState) => state.jobPosting.requiredSkills
  );

  const error = useSelector(
    (state: RootState) => state.jobPostingStages.errors
  );

  const [searchedSkills, setSearchedSkills] = useState<string[]>([]);

  // const filteredSkills: string[] = prevSelectedSkills
  //   ? searchedSkills.filter((skill) => prevSelectedSkills.indexOf(skill) === -1)
  //   : staticSkills;

  //  handlers
  const handleRemove = (skill: string) => {
    dispatch(
      setJobPostRequiredSkills(
        prevSelectedSkills.filter((item) => item !== skill)
      )
    );
    setSearchedSkills([...searchedSkills, skill]);
  };

  const handleAddSkill = (skill: string) => {
    dispatch(setJobPostRequiredSkills([...prevSelectedSkills, skill]));
    dispatch(setJobPostErrors(null));
    const remainingSkills = searchedSkills.filter((sk) => sk !== skill);
    setSearchedSkills(remainingSkills);
  };

  const handleSearch = (val: string) => {
    const filterSearchSkills = staticSkills.filter((skill) =>
      skill.toLowerCase().includes(val.toLowerCase())
    );
    setSearchedSkills(filterSearchSkills);
  };

  // component side effects & data fetching ====
  useEffect(() => {
    // get the data from the server
    setSearchedSkills(staticSkills);
  }, []);

  return (
    <>
      <SearchInput
        changeHandler={handleSearch}
        containerStyle="!px-6 !rounded-[10px] !gap-4 !bg-[#005aff05] !border-[#0000001a] mb-[14px]"
        inputStyle=""
        placeholder=""
      />
      <h4 className="fs-base flex gap-2">
        <StarSVG /> For the best results, add 3-5 skills
      </h4>
      {prevSelectedSkills.length ? (
        <div className="w-full mt-[34px]">
          <p className={`text-xl `}>Selected skills</p>
          <div className="selected-skills flex gap-[12px] pt-[20px] flex-wrap">
            {prevSelectedSkills.map((skill) => (
              <button
                onClick={() => handleRemove(skill)}
                key={skill}
                className="jobpost-skill-btn !border-[#005AFF]"
              >
                <span>{skill}</span>
                <XmarkSVG />
              </button>
            ))}
          </div>
        </div>
      ) : null}
      {
        // Render error if no skill selected
        error?.field === "SKILLS" ? (
          <p className="text-[#FF0000] flex items-center gap-[6px] mt-[7px] md:mt-[10px]">
            <WarningSVG />
            {error.message}
          </p>
        ) : null
      }

      {searchedSkills.length ? (
        <div>
          <p className="text-xl pt-[24px] md:pt-[34px]">
            Popular skills for UX/UI Design
          </p>
          <div className="btn-item flex gap-[12px] pt-5 flex-wrap">
            {searchedSkills.map((skill) => (
              <button
                onClick={() => handleAddSkill(skill)}
                key={skill}
                className={`jobpost-skill-btn hover:border-[#005AFF]`}
              >
                <span>{skill}</span>
                <PlusSVG />
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

/*



========== Budget componets elements =======


*/

export const FixedPriceInfo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const val: any = e.target.value.split("$");
    if (e.target.value !== "$" && isNaN(val[1] - 1)) return;

    const hourlyBudget = `$${val[1]}`;
    setValue(val[1]);
    dispatch(setJobBudget(hourlyBudget));
  };
  return (
    <div className="budget-chart mb-10 lg:mb-0 w-full lg:max-w-[627px] ">
      <p className="text-[22px] mb-[28px] md:mb-[38px] leading-normal">
        Set a price for the project and pay at the end, or you can divide the
        project into milestones and pay as each milestone is completed.
      </p>

      <h4 className="mb-[18px] text-[20px] md:text-[23px] leading-[30px] md:leading-[40px] lg:text-[25px] xl:text-[27px] font-normal tracking-[-0.96px]">
        What is the best cost estimate for your project?
      </h4>
      <p className="text-[22px] mb-[28px] leading-normal">
        You can negotiate this cost and create milestones when you chat with
        your freelancer.
      </p>

      <input
        id="milestone-amount-1"
        type="text"
        onChange={handleInput}
        aria-describedby="currency-hourly-6"
        placeholder="$"
        value={`$${value}`}
        className="text-[20px] block  w-full max-w-[145px] tracking-[-0.6px] border border-gray-300 rounded-[6px] p-[10px] focus:outline-none focus:border-[#005AFF] text-end"
      />

      <Link href="#" className="block text-[20px] text-[#005AFF] pt-[38px]">
        Not ready to set a budget?
      </Link>
    </div>
  );
};

export const HourlyBudgetGraph = ({
  hideHourlyRateLink,
}: {
  hideHourlyRateLink?: boolean;
}) => {
  return (
    <div className="budget-chart mb-10 lg:mb-0 w-full lg:max-w-[627px] mt-7 ">
      <p className="fs-md pb-20">
        Professionals tend to charge{" "}
        <span className="text-blue">$8 - $20 </span>/hour (USD) for recruiting &
        talent sourcing projects like yours. Experts may charge higher rates.{" "}
      </p>
      <Image
        className="w-full h-auto"
        src="/svgs/budget-rate-graph.svg"
        width={627}
        height={446}
        alt="Hourly budget graph"
      />
      {!hideHourlyRateLink && (
        <Link href="#" className="fs-md text-[#005AFF] pt-[40px] block">
          Not ready to set an hourly rate?
        </Link>
      )}
    </div>
  );
};

export const HourlyCard = () => {
  const dispatch = useDispatch();
  const active = useSelector(
    (state: RootState) => state.jobPosting.jobBudgetType
  );
  return (
    <div
      onClick={() => {
        dispatch(setJobPostBudgetType("HOURLY"));
      }}
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
          {active === "HOURLY" ? <CheckedSVG /> : <UnCheckedSVG />}
        </div>
        <h3 className="fs-2xl">Hourly rate</h3>
      </div>
    </div>
  );
};

export const FixedPriceCard = () => {
  const dispatch = useDispatch();
  const active = useSelector(
    (state: RootState) => state.jobPosting.jobBudgetType
  );
  return (
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

          {active === "FIXED" ? <CheckedSVG /> : <UnCheckedSVG />}
        </div>
        <h3 className="fs-2xl">Fixed price</h3>
      </div>
    </div>
  );
};

const HourlyBudgetInputs = () => {
  const dispatch = useDispatch();
  const [from, setFrom] = useState("4.00");
  const [to, setTo] = useState("5.00");

  const handleFromInput = (e: ChangeEvent<HTMLInputElement>) => {
    const val: any = e.target.value.split("$");
    console.log(val);
    if (e.target.value !== "$" && isNaN(val[1] - 1)) return;

    const hourlyBudget = `$${val[1]} - $${to}`;
    setFrom(val[1]);
    dispatch(setJobBudget(hourlyBudget));
  };

  const handleToInput = (e: ChangeEvent<HTMLInputElement>) => {
    const val: any = e.target.value.split("$");
    if (e.target.value !== "$" && isNaN(val[1] - 1)) return;

    const hourlyBudget = `${from} - ${val[1]}`;
    setTo(val[1]);
    dispatch(setJobBudget(hourlyBudget));
  };
  return (
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
      <p className="fs-md mt-5">
        This is the average rate for similar projects.
      </p>
    </>
  );
};

export const JobBudgetDetails = () => {
  const budgetType = useSelector(
    (state: RootState) => state.jobPosting.jobBudgetType
  );
  return (
    <div className="pt-[1px] right-item flex flex-col-reverse lg:flex-row lg:gap-[28px] justify-between !w-full">
      <div className="budget-rate w-full lg:max-w-[790px] ">
        <div className="card-container grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-[30px] xl:gap-[50px] mb-[34px]">
          <HourlyCard />
          <FixedPriceCard />
        </div>
        {budgetType === "HOURLY" ? <HourlyBudgetInputs /> : null}
      </div>
      {budgetType === "HOURLY" ? <HourlyBudgetGraph /> : <FixedPriceInfo />}
    </div>
  );
};
