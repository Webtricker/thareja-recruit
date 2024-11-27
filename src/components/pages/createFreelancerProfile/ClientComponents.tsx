"use client";

import { AddPlusSVG } from "@/components/shared/icons/Icons";
import { WarningRedSVG } from "@/components/shared/modal/Icons";
import {
  addExpertists,
  addWorkingSkills,
  removeExpertists,
  removeWorkingSkills,
  setBio,
  setFieldError,
  setHourlyRate,
  setProfessionalRole,
} from "@/redux/features/onboarding/createFreelancerProfileSlice";
import { RootState } from "@/redux/store";
import {
  formatNumber,
  getCalculatedHourlyPrice,
  validateTextInputAsNumber,
} from "@/utils/UtilityFN";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddEducationButton,
  AddEducationIconButton,
  AddExperienceButton,
  AddExperienceIconButton,
  BackButton,
  DeleteLanguageButton,
  NextStepButtons,
} from "./Buttons";
import {
  AddedExperirenceCard,
  EducationCard,
  UpdateFreelancerProfile,
} from "./Cards";
import { AddPlusSVGBlack, InputValDeleteSVG } from "./Icons";
import {
  BirthDateSelector,
  LanguageSelector,
  PhoneSelector,
  ProficiencySelector,
  SelectFreelancerCountryAddress,
} from "./SelectItems";
import { staticSkills, suggestServiceLists } from "./StaticData";

export const CurrentStep = () => {
  const activeComponent = useSelector(
    (state: RootState) => state.createFreelancerProfile.activeComponent
  );
  switch (activeComponent) {
    case "GET_STARTED":
      return <>1/10</>;
    case "PROFESSIONAL_ROLE":
      return <>2/10</>;
    case "RELEVENT_WORK_EXPERIENCE":
      return <>3/10</>;
    case "EDUCATION":
      return <>4/10</>;
    case "COMMUNICATION_LANGUAGE":
      return <>5/10</>;
    case "SKILL_DESCRIPTION":
      return <>6/10</>;
    case "PROFILE_DESCRIPTION":
      return <>7/10</>;
    case "EXPERTISTS":
      return <>8/10</>;
    case "HOURLY_RATE":
      return <>9/10</>;
    case "ADDRESS":
      return <>10/10</>;
    default:
  }
};

// ===== active or deactive checkbox =====
type CheckBoxProps = {
  activeKey: string;
  className?: string;
  dataKey: "workingExperience" | "biggestGoal" | "workingTechnique";
};
// export const CheckBox = ({ activeKey, className, dataKey }: CheckBoxProps) => {
//   const selectedKey = useSelector(
//     (state: RootState) => state.freelancerOnboarding.queryData[dataKey]
//   );

//   return selectedKey === activeKey ? <SelectedSVG /> : <EmptyCircleSVG />;
// };

// ========= Freelancer setup progress bar =======
export const CreateProfileProgressBar = () => {
  const activeComponent = useSelector(
    (state: RootState) => state.createFreelancerProfile.activeComponent
  );

  // PROGRESS BAR STYLE
  let progressBarStyle = "";

  switch (activeComponent) {
    case "GET_STARTED":
      progressBarStyle = "!w-[10%]";
      break;
    case "PROFESSIONAL_ROLE":
      progressBarStyle = "!w-[20%]";
      break;
    case "RELEVENT_WORK_EXPERIENCE":
      progressBarStyle = "!w-[30%]";
      break;
    case "EDUCATION":
      progressBarStyle = "!w-[40%]";
      break;
    case "COMMUNICATION_LANGUAGE":
      progressBarStyle = "!w-[50%]";
      break;
    case "SKILL_DESCRIPTION":
      progressBarStyle = "!w-[60%]";
      break;
    case "PROFILE_DESCRIPTION":
      progressBarStyle = "!w-[70%]";
      break;
    case "EXPERTISTS":
      progressBarStyle = "!w-[80%]";
      break;
    case "HOURLY_RATE":
      progressBarStyle = "!w-[90%]";
      break;
    case "ADDRESS":
      progressBarStyle = "!w-[100%]";
      break;
    default:
      progressBarStyle = "!w-[10%]";
  }

  if ("PROFILE_READY" === activeComponent) {
    return <></>;
  }
  return (
    <div className="progress-bar bg-white w-full pt-[30px] pb-[30px] lg:pb-[40px] xl:pb-[50px] 2xl:pb-[62px] relative">
      <span
        className={` duration-300 progress-bar-active absolute top-0 left-0 h-1 bg-[#005AFF] z-[2] w-[10%] 
       ${progressBarStyle}
      `}
      ></span>
      <span className="progress-bar w-full absolute top-0 left-0 h-1 bg-[#DDE3E7] z-[1]"></span>

      <div className=" w-full flex-wrap gap-y-5 flex items-center justify-between  px-5 md:px-[30px] lg:px-[35px] xl:px-[40px] 2xl:px-[47px]">
        <BackButton />
        <div className="flex-grow gap-2.5 flex flex-wrap items-center justify-end">
          <NextStepButtons />
        </div>
      </div>
    </div>
  );
};

// ======== Professional role set up input
export const ProfessionalRoleInput = () => {
  const dispatch = useDispatch();
  const {fieldError:error, professionalRole} = useSelector(
    (state: RootState) => state.createFreelancerProfile
  );

  const handleCLick = (event: ChangeEvent<HTMLInputElement>) => {
    if (error?.errorField) {
      dispatch(setFieldError(null));
    }
    dispatch(setProfessionalRole(event.target.value));
  };
  return (
    <>
      <input
        onChange={handleCLick}
        value={professionalRole?professionalRole:''}
        type="text"
        className="w-full bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF]"
      />
      {error?.errorField === "PROFESSIONAL_ROLE_ERROR" && (
        <p className="mt-1 text-red-400 flex items-center gap-1.5">
          <WarningRedSVG />
          <span className="text-base">
            Value is required and can’t be empty.
          </span>
        </p>
      )}
    </>
  );
};

//  ======== relevent experiences ==========
export const ReleventWorkExperiences = () => {
  const releventExperiences = useSelector(
    (state: RootState) => state.createFreelancerProfile.releventWorkExperience
  );
  return (
    <div className="w-full flex flex-col-reverse md:flex-row gap-10 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10 items-center">
      {releventExperiences.length ? (
        <>
          <AddExperienceIconButton />
          <div className="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-5 2xl:gap-10">
            {releventExperiences.map((item, _i) => {
              return <AddedExperirenceCard item={item} key={_i} />;
            })}
          </div>
        </>
      ) : (
        <AddExperienceButton />
      )}
    </div>
  );
};

//  ======== educations ==========
export const AddedEducations = () => {
  const educations = useSelector(
    (state: RootState) => state.createFreelancerProfile.educations
  );

  return (
    <div className="w-full flex flex-col-reverse md:flex-row gap-10 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10 items-center">
      {educations.length ? (
        <>
          <AddEducationIconButton />
          <div className="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-5 2xl:gap-10">
            {educations.map((item, _i) => {
              return <EducationCard item={item} key={_i} />;
            })}
          </div>
        </>
      ) : (
        <AddEducationButton />
      )}
    </div>
  );
};

// ======== CommunicationLanguage components ============

export const ChoosedLanguageProficiency = () => {
  const speakingLanguages = useSelector(
    (state: RootState) => state.createFreelancerProfile.speakingLanguages
  );
  return (
    <>
      <div
        className={`w-full md:flex items-center ${
          speakingLanguages.length > 1 &&
          " border-b-2 border-[#005aff1a] pb-5 mb-5"
        }`}
      >
        <div className="w-full justify-between md:flex  gap-2.5 mb-10 md:mb-0">
          <div className="w-full max-w-[720px] mb-5 md:mb-0">
            <h4 className="fs-lg-lh-normal mb-2.5">Languages</h4>
            {/* <div className="w-full bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF]"> */}
            <div className="w-full md:max-w-[290px] relative">
              <label
                className={`fs-base w-full flex items-center justify-between gap-5 bg-[#FBFCFF] py-[10.5px] px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF]`}
              >
                {speakingLanguages[0].language}
              </label>
            </div>
          </div>
          <div className="w-full max-w-[720px]">
            <h4 className="fs-lg-lh-normal mb-2.5">Proficiency</h4>
            <ProficiencySelector id={speakingLanguages[0].id} />
          </div>
        </div>
        <div className="w-full max-w-[68px] md:h-[30px]"></div>
      </div>

      {speakingLanguages.length > 1 &&
        speakingLanguages.map((_item, _i) => {
          if (_i === 0) return <></>;
          return (
            <div
              key={_item.id}
              className="w-full justify-between md:justify-start flex items-center border-b-2 border-[#005aff1a] pb-5 mb-5"
            >
              <div className="w-full justify-between md:flex  gap-2.5 mb-10 md:mb-0">
                <div className="w-full max-w-[720px] mb-5 md:mb-0">
                  <h4 className="fs-lg-lh-normal mb-2.5 md:hidden">
                    Languages
                  </h4>
                  {/* <div className="w-full bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF]"> */}
                  <LanguageSelector key={_item.id} id={_item.id} />
                </div>
                <div className="w-full max-w-[720px]">
                  <h4 className="fs-lg-lh-normal mb-2.5 md:hidden">
                    Proficiency
                  </h4>
                  <ProficiencySelector key={_item.id} id={_item.id} />
                </div>
              </div>
              <div className="w-full max-w-[68px] h-[30px] flex items-center justify-end md:justify-start">
                <DeleteLanguageButton id={_item.id} />
              </div>
            </div>
          );
        })}
    </>
  );
};

// ========== skill description =========
export const ChooseSkills = () => {
  const dispatch = useDispatch();
  const selectedSkills = useSelector(
    (state: RootState) => state.createFreelancerProfile.workingSkills
  );

  const arrayList = selectedSkills.map((_item) => _item.name);

  const filteredSkills = selectedSkills.length
    ? staticSkills.filter((skill, _i) => arrayList.indexOf(skill) === -1)
    : staticSkills;

  // hanlders =======
  // const handleAddSkill = () => {};
  return (
    <>
      <div className="w-full my-10 ">
        <h4 className="fs-md">Your skills</h4>
        <div className="min-h-[44px] my-2.5 fs-base w-full flex-wrap flex items-center justify-start gap-2.5 bg-[#FBFCFF] py-[10.5px] px-[14px] rounded-[6px] border border-[#005aff1a] ">
          {selectedSkills.map((skill) => (
            <button
              onClick={() => dispatch(removeWorkingSkills(skill.id))}
              key={skill.name}
              className={`flex items-center gap-2.5 skill-btn-medium hover:border-[#005AFF]`}
            >
              <span>{skill.name}</span>
              <AddPlusSVG />
            </button>
          ))}
        </div>
        <div className="w-full flex justify-end">
          <p className="fs-xxs">Max 15 skills</p>
        </div>
      </div>

      <div className="w-full flex-wrap flex items-center justify-start gap-2.5">
        {filteredSkills.map((skill) => (
          <button
            onClick={() =>
              dispatch(
                addWorkingSkills({
                  name: skill,
                  id: new Date().getTime(),
                })
              )
            }
            key={skill}
            className={`flex gap-2.5 skill-btn-medium hover:border-[#005AFF]`}
          >
            <span>{skill}</span>
            <AddPlusSVG />
          </button>
        ))}
      </div>
    </>
  );
};

// =========== Profile Overview ====================
export const ProfileOverview = () => {
  const dispatch = useDispatch();
  const error = useSelector(
    (state: RootState) => state.createFreelancerProfile.fieldError
  );
  const description = useSelector(
    (state: RootState) => state.createFreelancerProfile.bio
  );

  //   state to mange functionality
  const [charLeft, setCharLeft] = useState("50,000");
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const TOTAL_CHAR = 50000;
    if (text.length > TOTAL_CHAR) {
      dispatch(
        setFieldError({
          errorField: "BIO",
          message: "Maximum capacity exceeded!",
        })
      );
      dispatch(setBio(description));
      return;
    }

    error && dispatch(setFieldError(null));

    let remainingCH = (TOTAL_CHAR - text.length).toString();
    if (remainingCH.length > 3) {
      remainingCH = remainingCH
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // set the changed value.
    setCharLeft(remainingCH);
    dispatch(setBio(text));
  };
  return (
    <div className="search-bar w-full">
      <textarea
        onChange={handleInputChange}
        placeholder="Already have a description? Paste it here!"
        className={`bg-[#FBFCFF] min-h-[200px] lg:min-h-[241px] fs-base w-full border border-[#0000001a] px-[14px] py-2.5 rounded-[6px] focus:outline-none focus:border-blue-500`}
        value={description ? description : ""}
      />
      <div className="not-italic flex items-center justify-between text-12">
        <div className="">
          {error?.errorField === "BIO" && (
            <p className="text-red-400 flex items-center gap-1.5">
              <WarningRedSVG />
              <span className="text-base">Enter your profile overview</span>
            </p>
          )}
        </div>
        <div className="fs-xxs text-right flex-grow flex items-center justify-end">
          {charLeft} characters left
        </div>
      </div>
    </div>
  );
};

// =========Expertists ==============
export const SuggestedServices = () => {
  const dispatch = useDispatch();
  const selectedServices = useSelector(
    (state: RootState) => state.createFreelancerProfile.expertists
  );

  const arrayList = selectedServices.map((_item) => _item.name);

  const filteredServices = selectedServices.length
    ? suggestServiceLists.filter((skill, _i) => arrayList.indexOf(skill) === -1)
    : suggestServiceLists;

  if (!filteredServices.length) return <></>;
  return (
    <div className="w-full">
      <h3 className="fs-lg-lh-lg mb-2.5">Suggested services</h3>
      <div className="w-full flex-wrap flex items-center justify-start gap-2.5">
        {filteredServices.map((_item) => (
          <button
            onClick={() => {
              dispatch(
                addExpertists({
                  id: new Date().getTime(),
                  name: _item,
                })
              );
            }}
            key={_item}
            className={`flex gap-2.5 text-[#30353E] skill-btn-medium hover:border-[#005AFF]`}
          >
            <AddPlusSVGBlack />
            <span>{_item}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export const SelectedServices = () => {
  const dispatch = useDispatch();
  const selectedServices = useSelector(
    (state: RootState) => state.createFreelancerProfile.expertists
  );

  if (!selectedServices.length) return <></>;
  return (
    <div className="w-full">
      <h3 className="fs-lg-lh-lg mb-2.5">Selected services</h3>
      <div className="w-full flex-wrap flex items-center justify-start gap-2.5 mb-[50px] md:mb-[60px] lg:mb-[72px]">
        {selectedServices.map((_item) => (
          <button
            onClick={() => {
              dispatch(removeExpertists(_item.id));
            }}
            key={_item.id}
            className={`flex gap-2.5 text-[#30353E] skill-btn-medium hover:border-[#005AFF]`}
          >
            <AddPlusSVGBlack />
            <span>{_item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// =================Hourly rate =============
export const CalculatedHourlyRateAndFees = () => {
  const hourlyRate = useSelector(
    (state: RootState) => state.createFreelancerProfile.hourlyRate
  );

  // ========= tax percentage ==========
  const dispatch = useDispatch();

  // ======== handlers ==========
  const basePriceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const val = validateTextInputAsNumber(e.target.value);
    if (val === "empty_input") {
      dispatch(setHourlyRate(""));
    } else if (val) {
      dispatch(setHourlyRate(val));
    }
  };

  const deductPriceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const val = validateTextInputAsNumber(e.target.value);
    if (val === "empty_input") {
      dispatch(setHourlyRate(""));
    } else if (val) {
      const baseVal = parseFloat(val) / 0.9 + "";
      dispatch(setHourlyRate(baseVal));
    }
  };
  return (
    <div className="w-full mt-5 flex flex-col gap-5">
      {/* ======== client will see ======== */}
      <div className="flex flex-wrap sm:flex-nowrap gap-2.5 w-full py-[18px] px-3  md:px-7 rounded-[10px] border border-[#0000001a] bg-[#FBFCFF] ">
        <div className="flex-grow">
          <h3 className="fs-xl-lh-lg mb-2.5">Hourly rate</h3>
          <p className="fs-base">Total amount the client will see.</p>
        </div>
        <div className="flex gap-2.5 items-center">
          <input
            type="text"
            value={hourlyRate ? `$${formatNumber(hourlyRate)}` : ""}
            onChange={basePriceChangeHandler}
            placeholder="$0.00"
            className={`bg-[#FFFFFF] text-right rounded-[6px] max-w-[160px] w-full p-2.5 border border-[#0000001a] focus:outline-none focus:border-blue-500`}
          />
          <span className="fs-lg-lh-normal lg:text-[24px]">/hr</span>
        </div>
      </div>

      {/* ======== service fees ======== */}
      <div className="flex flex-wrap sm:flex-nowrap gap-2.5 w-full py-[18px] px-3 md:px-7 rounded-[10px] border border-[#0000001a] bg-[#FBFCFF] ">
        <div className="flex-grow">
          <div className="w-full flex gap-5 items-center">
            <h3 className="fs-xl-lh-lg mb-2.5">Service fee</h3>
            <Link href="#" className="underline text-[#005AFF] fs-base">
              Learn more
            </Link>
          </div>
          <p className="fs-base">
            This helps us run the platform and provide services like payment
            protection and customer support.
          </p>
        </div>
        <div className="flex gap-2.5 items-center">
          <input
            type="text"
            value={
              hourlyRate ? `-$${getCalculatedHourlyPrice(hourlyRate, 0.1)}` : ""
            }
            placeholder="$0.00"
            className={`pointer-events-none bg-[#F8F9FA] text-right rounded-[6px] max-w-[160px] w-full p-2.5 border border-[#0000001a] focus:outline-none focus:border-blue-500`}
          />
          <span className="fs-lg-lh-normal lg:text-[24px]">/hr</span>
        </div>
      </div>

      {/* ======== freelancer will see ======== */}
      <div className="flex flex-wrap sm:flex-nowrap gap-2.5 w-full py-[18px] px-3 md:px-7 rounded-[10px] border border-[#0000001a] bg-[#FBFCFF] ">
        <div className="flex-grow">
          <h3 className="fs-xl-lh-lg mb-2.5">You&apos;ll get</h3>
          <p className="fs-base">
            The estimated amount you&apos;ll receive after service fees.
          </p>
        </div>
        <div className="flex gap-2.5 items-center">
          <input
            type="text"
            value={
              hourlyRate ? `$${getCalculatedHourlyPrice(hourlyRate, 0.9)}` : ""
            }
            onChange={deductPriceChangeHandler}
            placeholder="$0.00"
            className={`bg-[#FFFFFF] text-right rounded-[6px] max-w-[160px] w-full p-2.5 border border-[#0000001a] focus:outline-none focus:border-blue-500`}
          />
          <span className="fs-lg-lh-normal lg:text-[24px]">/hr</span>
        </div>
      </div>
    </div>
  );
};

type FormInputProps = {
  label: string;
  className?: string;
  labelStyle?: string;
  inputStyle?: string;
  inputType: string;
  inputPlaceholder: string;
  changeHandler: Function;
  showClearBtn: boolean;
};
const FormInput = ({
  label,
  className,
  labelStyle,
  inputStyle,
  inputType,
  inputPlaceholder,
  changeHandler,
  showClearBtn,
}: FormInputProps) => {
  const [val, setVal] = useState("");

  // =========== handlers ===========
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
    changeHandler(e.target.value);
  };

  const handleClear = () => {
    setVal("");
    changeHandler("");
  };
  return (
    <div className={`w-full ${className}`}>
      <label htmlFor="" className={`fs-md mb-1.5 block ${labelStyle}`}>
        {label}
      </label>
      <div className="w-full relative">
        <input
          type={inputType}
          value={val}
          onChange={handleChange}
          placeholder={inputPlaceholder}
          className={`fs-base w-full flex items-center justify-between gap-5 bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF] ${inputStyle}`}
        />
        {showClearBtn && val ? (
          <button
            onClick={handleClear}
            className="absolute top-[50%] right-[14px] translate-y-[-50%]"
          >
            <InputValDeleteSVG />
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

// ========== address ===========
export const FreelancerAddress = () => {
  // ============ handlers ============
  const streetAddressHandler = (address: string) => {};
  const aptOrSuiteHandler = (val: string) => {};
  const cityAddressHandler = (val: string) => {};
  const stateOrProvinceHandler = (val: string) => {};
  const postalCodeHandler = (val: string) => {};
  return (
    <div className="mt-5 w-full flex flex-col lg:flex-row items-start gap-[29px] lg:gap-[46px]">
      {/* ======== profile =======  */}
      <UpdateFreelancerProfile />

      {/* ====== info ======= */}
      <div className="w-full">
        <div className="w-full ">
          <label htmlFor="" className="fs-md mb-1.5 block">
            Birth Date*
          </label>
          <BirthDateSelector />
        </div>
        <span className="w-full h-[1px] block my-5 bg-[#DDE3E7]"></span>

        {/*  ======== address ======= */}
        <div className="w-full flex flex-col gap-5">
          <SelectFreelancerCountryAddress />
          <div  className="flex flex-col md:flex-row gap-5 lg:gap-6">
            <FormInput
              label="Street address*"
              inputType="text"
              inputPlaceholder="Address"
              changeHandler={streetAddressHandler}
              showClearBtn={true}
              className=" w-full"
            />
            <FormInput
              label="Apt/Suite"
              inputType="text"
              inputPlaceholder="Apt/Suite (optional)"
              changeHandler={aptOrSuiteHandler}
              showClearBtn={true}
              className=" w-full"
            />
          </div>
          <div  className="flex flex-col md:flex-row flex-nowrap gap-5 lg:gap-6">
            <div className="w-full flex flex-wrap 2xl:flex-nowrap flex-col md:flex-row items-center gap-6">
              <FormInput
                label="City*"
                inputType="text"
                inputPlaceholder="Enter city"
                changeHandler={cityAddressHandler}
                showClearBtn={true}
                className="2xl:max-w-[348px] w-full md:min-w-[320px]"
              />
              <FormInput
                label="State/Province"
                inputType="text"
                inputPlaceholder="State or Province"
                changeHandler={stateOrProvinceHandler}
                showClearBtn={true}
                className="2xl:max-w-[348px] w-full md:min-w-[320px]"
              />
            </div>
            <FormInput
              label="ZIP/Postal code"
              inputType="number"
              inputPlaceholder="Postal Code"
              changeHandler={postalCodeHandler}
              showClearBtn={true}
              className="2xl:max-w-[520px] w-full"
            />
          </div>
          <PhoneSelector />
        </div>
      </div>
    </div>
  );
};
// export const CalculatedHourlyRateAndFees = ()=>{
// }
