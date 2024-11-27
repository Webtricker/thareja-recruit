import RenderCalendar from "@/components/shared/calendar/RenderCalendar";
import DownArrowSVG from "@/components/shared/header/DownArrowSVG";
import { CalendarSquare, SearchIconSVG } from "@/components/shared/icons/Icons";
import { WarningRedSVG } from "@/components/shared/modal/Icons";
import {
  addExpertists,
  ReleventWorkExperience,
  TEducation,
  updateSpeakingLanguage,
} from "@/redux/features/onboarding/createFreelancerProfileSlice";
import { SET_EXPAND } from "@/redux/features/rootModyfier/Modyfier";
import { RootState } from "@/redux/store";
import {
  availableLanguageItems,
  countryData,
} from "@/staticData/InviteFreeLancers";
import { getMonthsAndYears } from "@/utils/UtilityFN";
import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EducationFormData, ExperienceFormError } from "./Modals";
import { proficiencyLevelData, serviceLists, staticEndingYears, staticStartingYears } from "./StaticData";
import { CheckedSVG, InputValDeleteSVG } from "./Icons";
import indianFlag from "@/../public/svgs/profile/indian-flag.svg"   

type Country = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: any;
  };
};

type SortedCountry = {
  name: string;
  flag: string;
};

type CountrySelectorProps = {
  setFormData: Dispatch<SetStateAction<ReleventWorkExperience>>;
  formData: ReleventWorkExperience;
};
export const CountrySelector = ({
  setFormData,
  formData,
}: CountrySelectorProps) => {
  const dispatch = useDispatch();
  const ACTIVE_KEY = "INVITE_FREELANCERS_ADVANCED_FILTER_SEACH_LOCATIONS";
  // =============== Initial states ========
  const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);
  const [countries, setCountries] = useState<SortedCountry[]>(countryData);

  //   ========  handlers =======
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    if (!countryData?.length) return;
    const filtered = countryData.filter((country) =>
      country.name.toLowerCase().includes(searchValue)
    );
    setCountries(filtered);
  };

  return (
    <div className="w-full relative">
      <label
        onClick={(event) => {
          event.stopPropagation();
          dispatch(SET_EXPAND(ACTIVE_KEY));
        }}
        className={`fs-base w-full flex items-center justify-between gap-5 bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF] ${
          EXPAND === ACTIVE_KEY ? "pointer-events-none" : ""
        }`}
      >
        {formData?.country ? formData.country : "Country"}
        <DownArrowSVG
          className={`duration-200 ${
            EXPAND === ACTIVE_KEY ? "rotate-180" : ""
          }`}
        />
      </label>
      <div
        className={`country-container-shadow flex flex-col absolute top-[100%] left-0 bg-white rounded-[10px] overflow-hidden  mt-0 h-auto max-h-0 ${
          EXPAND === ACTIVE_KEY &&
          "!max-h-[250px] w-full z-[9999] border border-[#0000001a]  mt-2 p-5"
        }`}
        // className={`w-full  absolute top-[110%] left-0 cursor-pointer max-h-[400px] overflow-y-auto rounded-[20px] border border-[#0000001a] `}
      >
        <div className="border rounded-[100px] flex items-center relative">
          <SearchIconSVG className="pointer-events-none absolute top-[50%] left-5 translate-y-[-50%]" />
          <input
            onClick={(event) => {
              event.stopPropagation();
              dispatch(SET_EXPAND(ACTIVE_KEY));
            }}
            onChange={handleChange}
            className=" pl-[58px] rounded-[100px] py-[10px] focus:outline-none outline-none w-full"
            type="text"
            placeholder="Search locations"
          />
        </div>

        {/*  ============ SEARCH content================  */}
        <ul className=" custom_scrollbar flex flex-col gap-[14px] overflow-y-auto flex-grow mt-3">
          {countries?.length ? (
            countries.map((item: SortedCountry) => (
              <li
                className="cursor-pointer fs-sm flex items-center gap-2.5"
                onClick={(e) => {
                  e.stopPropagation();
                  setFormData({ ...formData, country:item.name});
                  dispatch(SET_EXPAND(null));
                }}
                key={item.name}
              >
                <Image
                  height={24}
                  width={16}
                  src={item.flag}
                  alt="Flag image"
                  className="min-w-6 h-auto w-6"
                />
                <span>{item.name}</span>
              </li>
            ))
          ) : (
            <li
              className={`flex items-center cursor-pointer py-1.5 px-5 my-0.5 gap-[11px]`}
            >
              No country found.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};




type YearSelectorProps = {
  label: string;
  clickeHandler: Function;
  targetKey: 'startingDate' | "endingDate",
  formData: TEducation;
  type: "STARTING_YEAR" | "ENDING_YEAR";
  items:number[];
};

const YearSelector = ({
  clickeHandler,
  type,
  formData,
  targetKey,
  label,
  items
}: YearSelectorProps) => {
  const dispatch = useDispatch();
  const ACTIVE_KEY = `CREATE_FREELANCER_PROFILE_EDUCATION_${type}_DROPDOWN`;

  // =============== Initial states ========
  const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);
  //   ======== Change handler =======

    // =============== Initial states ========
    const [filteredYears, setFilteredYears] = useState<number[]>(items);  
    const [selectedVal, setSelectedVal] = useState<string>(formData ? formData[targetKey] : "")

    //   ========  handlers =======
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const searchValue = e.target.value.toLowerCase();
      if (!items?.length) return;
      const filtered = items.filter((item) =>
        item.toString().includes(searchValue)
      );
      setFilteredYears(filtered);
    };
    
  return (
    <div className="w-full relative">
      <label
        onClick={(event) => {
          event.stopPropagation();
          dispatch(SET_EXPAND(ACTIVE_KEY));
        }}
        className={`fs-base w-full flex items-center justify-between gap-5 bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF] ${
          EXPAND === ACTIVE_KEY ? "pointer-events-none" : ""
        }`}
      >
        {selectedVal ? selectedVal : label}
        <DownArrowSVG
          className={`duration-200 ${
            EXPAND === ACTIVE_KEY ? "rotate-180" : ""
          }`}
        />
      </label>
      <div
        className={`country-container-shadow overflow-hidden flex flex-col absolute top-[105%] left-0 bg-white rounded-[10px]  mt-0 h-auto max-h-0 ${
          EXPAND === ACTIVE_KEY &&
          "!max-h-[250px] w-full max-w-[333px] z-[9999] border border-[#0000001a] py-5 pl-3 pr-0.5"
        }`}
      >
              <div className="border rounded-[100px] flex items-center relative mr-2.5 mb-[18px]">
          <SearchIconSVG className="pointer-events-none absolute top-[50%] left-5 translate-y-[-50%]" />
          <input
            onClick={(event) => {
              event.stopPropagation();
              dispatch(SET_EXPAND(ACTIVE_KEY));
            }}
            onChange={handleChange}
            className="pl-[58px] rounded-[100px] py-[10px] focus:outline-none outline-none w-full"
            type="text"
            placeholder="Search"
          />
        </div>
        <ul className="w-full custom_scrollbar h-full overflow-y-auto pr-2.5">
          {filteredYears.map((item, _i) => (
            <li
              onClick={() => {
                setSelectedVal(item+'')
                clickeHandler(item, type);
              }}
              className={`cursor-pointer flex items-center gap-3`}
              key={_i}
            > <CheckedSVG /> 
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

type DateSelectorProps = {
  items: string[];
  label: string;
  clickeHandler: Function;
  targetKey: "startingMonth" | "startingYear" | "endingMonth" | "endingYear";
  formData: ReleventWorkExperience;
  type: "STARTING_MONTH" | "STARTING_YEAR" | "ENDING_MONTH" | "ENDING_YEAR";
};

const DateSelector = ({
  clickeHandler,
  items,
  type,
  formData,
  targetKey,
  label,
}: DateSelectorProps) => {
  const dispatch = useDispatch();
  const ACTIVE_KEY = `CREATE_FREELANCER_PROFILE_EXPERIENCE_${type}_DROPDOWN`;

  // =============== Initial states ========
  const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);
  //   ======== Change handler =======
  // const handleClick = (val: string) => {};
  const selectedVal = formData ? formData[targetKey] : "";

  return (
    <div className="w-full relative">
      <label
        onClick={(event) => {
          event.stopPropagation();
          dispatch(SET_EXPAND(ACTIVE_KEY));
        }}
        className={`fs-base w-full flex items-center justify-between gap-5 bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF] ${
          EXPAND === ACTIVE_KEY ? "pointer-events-none" : ""
        }`}
      >
        {selectedVal ? selectedVal : label}{" "}
        <DownArrowSVG
          className={`duration-200 ${
            EXPAND === ACTIVE_KEY ? "rotate-180" : ""
          }`}
        />
      </label>
      <div
        className={`country-container-shadow overflow-hidden flex flex-col absolute top-[105%] left-0 bg-white rounded-[10px]  mt-0 h-auto max-h-0 ${
          EXPAND === ACTIVE_KEY &&
          "!max-h-[250px] w-full z-[9999] border border-[#0000001a] p-5 pr-0.5 py-4"
        }`}
      >
        <ul className="w-full custom_scrollbar h-full overflow-y-auto pr-[18px]">
          {items.map((item, _i) => (
            <li
              onClick={() => {
                clickeHandler(item, type);
              }}
              className={`cursor-pointer`}
              key={_i}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

type StartAndEndingDateDropDownComponentProps = {
  setFormData: Dispatch<SetStateAction<ReleventWorkExperience>>;
  formData: ReleventWorkExperience;
  error: ExperienceFormError;
  setError: Dispatch<SetStateAction<ExperienceFormError>>;
};
export const StartAndEndingDateDropDownComponent = ({
  formData,
  setFormData,
  error,
  setError,
}: StartAndEndingDateDropDownComponentProps) => {
  const { months, years } = getMonthsAndYears();
  const handleDateSelect = (val: string, type: string) => {
    if (type === "STARTING_MONTH") {
      error && setError(null);
      setFormData({ ...formData, startingMonth: val });
    } else if (type === "STARTING_YEAR") {
      setFormData({ ...formData, startingYear: val });
      error && setError(null);
    } else if (type === "ENDING_MONTH") {
      setFormData({ ...formData, endingMonth: val });
      error && setError(null);
    } else if (type === "ENDING_YEAR") {
      setFormData({ ...formData, endingYear: val });
      error && setError(null);
    }
  };
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6">
        <div className="w-full">
          <label htmlFor="Location" className="w-full fs-md block mb-2.5 ">
            Start Date*
          </label>
          <div className="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-4">
            <DateSelector
              type="STARTING_MONTH"
              formData={formData}
              targetKey="startingMonth"
              label="Month"
              items={months}
              clickeHandler={handleDateSelect}
            />
            <DateSelector
              type="STARTING_YEAR"
              label="Year"
              formData={formData}
              targetKey="startingYear"
              items={years}
              clickeHandler={handleDateSelect}
            />
          </div>

          {error?.field === "STARTING_DATE" ? (
            <p className="text-red-400 mt-1 flex items-center gap-1.5">
              <WarningRedSVG />
              <span className="text-base">Month and year are required.</span>
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="w-full">
          <label htmlFor="Location" className="w-full fs-md block mb-2.5 ">
            End Date*
          </label>
          <div className="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-4">
            <DateSelector
              type="ENDING_MONTH"
              label="Month"
              formData={formData}
              targetKey="endingMonth"
              items={months}
              clickeHandler={handleDateSelect}
            />
            <DateSelector
              type="ENDING_YEAR"
              label="Year"
              formData={formData}
              targetKey="endingYear"
              items={years}
              clickeHandler={handleDateSelect}
            />
          </div>
          {error?.field === "ENDING_DATE" ? (
            <p className="text-red-400 mt-1 flex items-center gap-1.5">
              <WarningRedSVG />
              <span className="text-base">Month and year are required.</span>
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};



/* ===== add/ update education =========*/

type DatesAttendenedForEducationProps = {
  setFormData: Dispatch<SetStateAction<EducationFormData>>;
  formData: EducationFormData;
  error: ExperienceFormError;
  setError: Dispatch<SetStateAction<ExperienceFormError>>;
};
export const DatesAttendenedForEducation= ({
  formData,
  setFormData,
  error,
  setError,
}: DatesAttendenedForEducationProps) => {
  
  const { months, years } = getMonthsAndYears();
  const handleDateSelect = (val: string, type: string) => {
  
    if (type === "STARTING_YEAR") {
      error && setError(null);

      setFormData({ ...formData, startingDate: val });
    } else if (type === "ENDING_YEAR") {
      setFormData({ ...formData, endingDate: val });
      error && setError(null);
    }
  };

  return (
        <div className="w-full">
          <label htmlFor="Location" className="w-full fs-md block mb-2.5 ">
          Dates Attended (Optional)
          </label>
          <div className="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-4">
            <YearSelector
            clickeHandler={handleDateSelect}
            formData={formData}
            items={staticStartingYears}
            label="From"
            targetKey="startingDate"
            type="STARTING_YEAR" 
            />
            <YearSelector 
            clickeHandler={handleDateSelect}
            formData={formData}
            items={staticEndingYears}
            label="To (or expected graduation year)"
            targetKey="endingDate"
            type="ENDING_YEAR" 
            />
          </div>

          {error?.field === "STARTING_DATE" ? (
            <p className="text-red-400 mt-1 flex items-center gap-1.5">
              <WarningRedSVG />
              <span className="text-base">Month and year are required.</span>
            </p>
          ) : (
            <></>
          )}
        </div>);
};



// ============ language components dropdown ===============
type LanguageSelectorProps = {
  id: number;
};
export const LanguageSelector = ({ id }: LanguageSelectorProps) => {
  const dispatch = useDispatch();
  const ACTIVE_KEY = `INVITE_FREELANCERS_ADVANCED_FILTER_SELECT_LOCATION_${id}`;
  // =============== Initial states ========
  const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);
  const [languages, setLanguages] = useState<string[]>(availableLanguageItems);
  const [selected, setSelected] = useState<string | null>(null);

  //   ========  handlers =======
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    if (!availableLanguageItems?.length) return;
    const filtered = availableLanguageItems.filter((_item) =>
      _item.toLowerCase().includes(searchValue)
    );
    setLanguages(filtered);
  };

  return (
    <div className="w-full relative md:max-w-[290px]">
      <label
        onClick={(event) => {
          event.stopPropagation();
          dispatch(SET_EXPAND(ACTIVE_KEY));
        }}
        className={`fs-base w-full flex items-center justify-between gap-5 bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF] ${
          EXPAND === ACTIVE_KEY ? "pointer-events-none" : ""
        }`}
      >
        {selected ? selected : "I know"}
        <DownArrowSVG
          className={`duration-200 ${
            EXPAND === ACTIVE_KEY ? "rotate-180" : ""
          }`}
        />
      </label>
      <div
      data-prevent-body-trigger
        className={`country-container-shadow flex flex-col absolute top-[115%] left-0 bg-white rounded-[10px] overflow-hidden  mt-0 h-auto max-h-0 ${
          EXPAND === ACTIVE_KEY &&
          "!max-h-[250px] w-full z-[9999] border border-[#0000001a] p-5"
        }`}
        // className={`w-full  absolute top-[110%] left-0 cursor-pointer max-h-[400px] overflow-y-auto rounded-[20px] border border-[#0000001a] `}
      >
        <div className="border rounded-[100px] flex items-center relative">
          <SearchIconSVG className="pointer-events-none absolute top-[50%] left-5 translate-y-[-50%]" />
          <input
            onClick={(event) => {
              event.stopPropagation();
              dispatch(SET_EXPAND(ACTIVE_KEY));
            }}
            onChange={handleChange}
            className="pl-[48px] rounded-[100px] py-[10px] focus:outline-none outline-none w-full"
            type="text"
            placeholder="Search locations"
          />
        </div>

        {/*  ============ SEARCH content================  */}
        <ul className=" custom_scrollbar flex flex-col gap-[14px] overflow-y-auto flex-grow mt-3">
          {languages?.length ? (
            languages.map((_item) => (
              <li
                className="cursor-pointer fs-sm flex items-center gap-2.5"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(
                    updateSpeakingLanguage({
                      id,
                      target: "language",
                      value: _item,
                    })
                  );
                  setSelected(_item);
                  dispatch(SET_EXPAND(null));
                }}
                key={_item}
              >
                {_item}
              </li>
            ))
          ) : (
            <li
              className={`flex items-center cursor-pointer py-1.5 px-5 my-0.5 gap-[11px]`}
            >
              No language found.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

type ProficiencyProps = {
  id: number;
};

type ProficiencyLevelType = {
  level: string;
  des: string;
};
export const ProficiencySelector = ({ id }: ProficiencyProps) => {
  const dispatch = useDispatch();
  const ACTIVE_KEY = `INVITE_FREELANCERS_ADVANCED_FILTER_SELECT_PROFICIENCY_${id}`;
  // =============== Initial states ========
  const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);
  const [selected, setSelected] = useState<ProficiencyLevelType | null>(null);

  return (
    <div className="w-full relative md:max-w-[260px]">
      <label
        onClick={(event) => {
          event.stopPropagation();
          dispatch(SET_EXPAND(ACTIVE_KEY));
        }}
        className={`fs-base w-full flex items-center justify-between gap-5 bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF] ${
          EXPAND === ACTIVE_KEY ? "pointer-events-none" : ""
        }`}
      >
        {selected ? selected.level : "My level is"}{" "}
        <DownArrowSVG
          className={`duration-200 ${
            EXPAND === ACTIVE_KEY ? "rotate-180" : ""
          }`}
        />
      </label>
      <div
       data-prevent-body-trigger
        className={`country-container-shadow overflow-hidden flex flex-col absolute top-[115%] left-0 bg-white rounded-[10px]  mt-0 h-auto max-h-0 ${
          EXPAND === ACTIVE_KEY &&
          "!max-h-[250px] w-full md:max-w-full z-[9999] border border-[#0000001a] p-5 pr-0.5 py-4"
        }`}
      >
        <ul className="w-full custom_scrollbar h-full overflow-y-auto pr-[18px]">
          {proficiencyLevelData.map((_item) => (
            <li
              onClick={(e) => {
                e.stopPropagation();
                dispatch(
                  updateSpeakingLanguage({
                    id,
                    target: "level",
                    value: _item.level,
                  })
                );
                setSelected(_item);
                dispatch(SET_EXPAND(null));
              }}
              className={`cursor-pointer mb-2.5`}
              key={_item.level}
            >
              <p className="fs-md mb-0.5">{_item.level}</p>
              <p className="fs-sm">{_item.des}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// ===== service selector of Expertists component =====
export const ServiceSelector = () => {
  const dispatch = useDispatch();
  const ACTIVE_KEY = `INVITE_FREELANCERS_ADVANCED_FILTER_SELECT_SERVICE`;
  // =============== Initial states ========
  const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="w-full relative my-5">
      <label
        onClick={(event) => {
          event.stopPropagation();
          dispatch(SET_EXPAND(ACTIVE_KEY));
        }}
        className={`fs-base w-full flex items-center justify-between gap-5 bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF] ${
          EXPAND === ACTIVE_KEY ? "pointer-events-none" : ""
        }`}
      >
        {selected ? selected : "Search for a service"}{" "}
        <DownArrowSVG
          className={`duration-200 ${
            EXPAND === ACTIVE_KEY ? "rotate-180" : ""
          }`}
        />
      </label>
      <div
        className={`country-container-shadow overflow-hidden flex flex-col absolute top-[110%] left-0 bg-white rounded-[10px]  mt-0 h-auto max-h-0 ${
          EXPAND === ACTIVE_KEY &&
          "!max-h-[300px] w-full  md:max-w-[420px] z-[9999] border border-[#0000001a] p-5 pr-0.5 py-4"
        }`}
      >
        <ul className="flex flex-col gap-[14px] w-full custom_scrollbar h-full overflow-y-auto pr-[18px]">
          {serviceLists.map((_item) => (
            <li
              onClick={(e) => {
                e.stopPropagation();
                dispatch(
                  addExpertists({
                    id: new Date().getTime(),
                    name: _item,
                  })
                );

                setSelected(_item);
                dispatch(SET_EXPAND(null));
              }}
              className={`cursor-pointer fs-base`}
              key={_item}
            >
              {_item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// ======== address component =========
export const BirthDateSelector = () => {
  const dispatch = useDispatch();
  const ACTIVE_KEY = `OPEN_INVITE_FREELANCERS_ADVANCED_FILTER_BIRTHDAY_CALENDAR`;
  // =============== Initial states ========
  const KEY = useSelector((state: RootState) => state.modyfier.EXPAND);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // ========= handlers ===========
  const handleClick = (date: Date, actionType="SELECT") => {

    if(actionType==="RESET"){
      setSelectedDate(null);
      return;
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dateString = `${month}-${day}-${year}`;
    setSelectedDate(dateString);
    dispatch(SET_EXPAND(null));
  };

  return (
    <div
      onClick={(e) => {
        e?.preventDefault();
        console.log("clicked");
        dispatch(SET_EXPAND(ACTIVE_KEY));
      }}
      className=" w-full max-w-[250px] relative"
    >
      <button
        onClick={() => dispatch(SET_EXPAND(ACTIVE_KEY))}
        className={`py-2.5 md:py-3 px-5  lg:py-[16px]  rounded-[100px] border border-[#005AFF] bg-[#005aff05] fs-base flex items-center gap-2.5 mb-1.5 ${
          ACTIVE_KEY === KEY && "pointer-events-none"
        }`}
      >
        <CalendarSquare />{" "}
        <span>{selectedDate ? selectedDate : "mm. dd. yyyy"}</span>
        <DownArrowSVG
          className={`duration-200 ${KEY === ACTIVE_KEY ? "rotate-180" : ""}`}
        />
      </button>

      {ACTIVE_KEY === KEY ? (
        <RenderCalendar
          KEY={ACTIVE_KEY}
          key={KEY}
          handleClick={handleClick}
          className="absolute top-[50%] left-0 w-full min-w-[350px] md:min-w-[484px]"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

// ========== country selector dropdown ===========
type CountrySelectorDropDownProps = {
  activeKey: string;
  expand: string | null;
  defaultLabel: string;
  clickHandler: Function;
};
export const CountrySelectorDropDown = ({
  activeKey,
  expand,
  defaultLabel,
  clickHandler,
}: CountrySelectorDropDownProps) => {
  const dispatch = useDispatch();
  // =============== Initial states ========
  const [countries, setCountries] = useState<SortedCountry[]>(countryData);
  const [selected, setSelected] = useState<SortedCountry | null>(null);

  //   ========  handlers =======
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    if (!countryData?.length) return;
    const filtered = countryData.filter((country) =>
      country.name.toLowerCase().includes(searchValue)
    );
    setCountries(filtered);
  };

  return (
    <div 
    data-prevent-body-trigger
    className="w-full relative">
      <label
        onClick={(event) => {
          event.stopPropagation();
          dispatch(SET_EXPAND(activeKey));
        }}
        className={`fs-base w-full flex items-center justify-between gap-5 bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF] ${
          expand === activeKey ? "pointer-events-none" : ""
        }`}
      >
        {selected?.name ? selected?.name : defaultLabel}{" "}
        <DownArrowSVG
          className={`duration-200 ${expand === activeKey ? "rotate-180" : ""}`}
        />
      </label>
      <div
        className={`country-container-shadow flex flex-col absolute top-[100%] left-0 bg-white rounded-[10px] overflow-hidden  mt-0 h-auto max-h-0 ${
          expand === activeKey &&
          "max-w-[420px] !max-h-[250px] w-full z-[9999] border border-[#0000001a]  mt-2 p-5"
        }`}
        // className={`w-full  absolute top-[110%] left-0 cursor-pointer max-h-[400px] overflow-y-auto rounded-[20px] border border-[#0000001a] `}
      >
        <div className="border rounded-[100px] flex items-center relative">
          <SearchIconSVG className="pointer-events-none absolute top-[50%] left-5 translate-y-[-50%]" />
          <input
            onClick={(event) => {
              event.stopPropagation();
              dispatch(SET_EXPAND(activeKey));
            }}
            onChange={handleChange}
            className="pl-[48px] rounded-[100px] py-[10px] focus:outline-none outline-none w-full"
            type="text"
            placeholder="Search locations"
          />
        </div>

        {/*  ============ SEARCH content================  */}
        <ul className=" custom_scrollbar flex flex-col gap-[14px] overflow-y-auto flex-grow mt-3">
          {countries?.length ? (
            countries.map((item: SortedCountry) => (
              <li
                className="cursor-pointer fs-sm flex items-center gap-2.5"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(item);
                  clickHandler(item);
                }}
                key={item.name}
              >
                <Image
                  height={24}
                  width={16}
                  src={item.flag}
                  alt="Flag image"
                  className="min-w-6 h-auto w-6"
                />
                <span>{item.name}</span>
              </li>
            ))
          ) : (
            <li
              className={`flex items-center cursor-pointer py-1.5 px-5 my-0.5 gap-[11px]`}
            >
              No country found.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
// ======== country dropwdown ends ==============

export const SelectFreelancerCountryAddress = () => {
  const dispatch = useDispatch();
  const activeKey = "CREATE_FREELANCER_PROFILE_ADDRESS_SELECT_COUNTRY_DROPDOWN";
  const expand = useSelector((state: RootState) => state.modyfier.EXPAND);
  const defaultLabel = "Select country";
  const handleClick = (item: SortedCountry) => {
    dispatch(SET_EXPAND(null))
  };
  return (
    <div className="w-full md:max-w-[724px]">
      <label htmlFor="" className="fs-md mb-1.5 block">
        Country*
      </label>
      <CountrySelectorDropDown
        activeKey={activeKey}
        defaultLabel={defaultLabel}
        clickHandler={handleClick}
        expand={expand}
        key={activeKey}
      />
    </div>
  );
};

export const PhoneSelector = () => {
  const dispatch = useDispatch();
  const activeKey = "OPEN_CREATE_PROFILE_PHONE_COUNTRY_SELECTOR_DROPDOWN_TO_SELECT_COUNTRY_CODE";
  
  // states
  const {EXPAND} = useSelector((state: RootState) => state.modyfier);
  const [val, setVal] = useState<number | string>("");
  const [selectedCountry, setSelectedCountry] = useState<SortedCountry | null>(null);
  const [focusedInput, setFocusInput] = useState(false)
  const [inputStyle,setInputStyle] = useState({})

  const placeholderRef = useRef<HTMLSpanElement>(null)

  // handlers 
const toggleDropdown = ()=>{
  if(EXPAND===activeKey){
    dispatch(SET_EXPAND(null))
  }else{
    dispatch(SET_EXPAND(activeKey))
  }
}

const handleSelectItem = (item:SortedCountry)=>{
  dispatch(SET_EXPAND(null))
  setSelectedCountry(item)
}

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  const clearVal = ()=>{
    setVal("");
  }


  useEffect(() => {
  if(placeholderRef.current){
    const width = placeholderRef.current.offsetWidth;
    const style = {
      'padding-left':width + 10 + 'px'
    }
    setInputStyle(style)
  }
  }, [placeholderRef])

  const selectedFlagSrc = selectedCountry?.flag?selectedCountry.flag: indianFlag;

  return  <div className="w-full max-w-[724px]">
  <label htmlFor="" className={`fs-md mb-1.5 block `}>
    Phone*
  </label>
  <div className={`w-full relative fs-base flex items-center justify-between  bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border outline-none ${focusedInput ?"border-[#005AFF]":'border-[#005aff1a]' }`}>
    <div className="w-full max-w-[68px] max-h-6 overflow-hidden flex items-center gap-5">
      <Image className="max-w-[24px] w-full  h-auto" width={24} height={16} src={selectedFlagSrc} alt="svg" />
     <button
     data-prevent-body-trigger
     onClick={toggleDropdown}>
     <DownArrowSVG
          className={`duration-200 ${EXPAND === activeKey ? "rotate-180" : ""}`}
        />
     </button>
    </div>

    {/* ======seperator ====== */}
    <span className="w-[1px] h-6 bg-[#DDE3E7] mx-2.5"></span>

{
  /* =========country flag container ====== */ 
  activeKey===EXPAND ? <>
<div 
data-prevent-body-trigger
 className="dropdown_shadow absolute left-0 bottom-[110%] pt-4 pb-5 pr-0.5 rounded-[10px] max-w-[65px] h-[320px] overflow-hidden bg-white ">
<ul className="custom_scrollbar h-full w-full overflow-y-auto inline-flex flex-col gap-[14px] pl-5 pr-[14px] bg-white ">
    {
      countryData?.map((item,index)=> <li
       onClick={()=>handleSelectItem(item)}
      key={index}>
        <Image className="max-w-6 w-6  h-auto" width={24} height={16} src={item.flag} alt="svg" />
        </li>)
    }

  </ul>
</div>
  </>:<></>
}
    {/* ==== number input========= */}
    <div className="w-full relative">
    <span ref={placeholderRef} className={`duration-200 absolute pointer-events-none top-[50%] left-0 translate-y-[-50%]  ${!val && 'text-[#A8B7C1]'}`}>+91</span>
    <input
    style={inputStyle}
     onFocus={()=>setFocusInput(true)}
     onBlur={()=>setFocusInput(false)}
      type='number'
      value={val}
      onChange={handleChange}
      className={`fs-base w-full outline-none `}
    />
    {val ? (
      <button
        onClick={clearVal}
        className="absolute top-[50%] right-[14px] translate-y-[-50%]"
      >
        <InputValDeleteSVG />
      </button>
    ) : (
      <></>
    )}
    </div>
  </div>
</div>
};
