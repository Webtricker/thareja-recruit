import DownArrowSVG from "@/components/shared/header/DownArrowSVG";
import { SearchIconSVG } from "@/components/shared/icons/Icons";
import { SET_EXPAND } from "@/redux/features/rootModyfier/Modyfier";
import { RootState } from "@/redux/store";
import { countryData } from "@/staticData/InviteFreeLancers";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputValDeleteSVG } from "../createFreelancerProfile/Icons";

// global types for this file
type SortedCountry = {
  name: string;
  flag: string;
};

type CountrySelectorDropDownProps = {
  activeKey: string;
  expand: string | null;
  defaultLabel: string;
  clickHandler: Function;
};

// ========== location modal dropdowns ===========
export const TimezoneAndCountry = () => {
  const dispatch = useDispatch();
  // redux state
  const TIMEZONE_DROPDOWN_KEY = "UPDATE_LOCATION_TIME_ZONE_SELECT_DROPDOWN";
  const COUNTRY_DROPDOWN_KEY = "UPDATE_LOCATION_COUNTRY_SELECT_DROPDOWN";
  const expand = useSelector((state: RootState) => state.modyfier.EXPAND);

  // states
  const [countries, setCountries] = useState<SortedCountry[]>(countryData);
  const [selectedCountry, setSelectedCountry] = useState<SortedCountry | null>(
    null
  );
  const [selectedTimezone, setSelectedTimezone] = useState();

  //   ========  handlers =======
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    if (!countryData?.length) return;
    const filtered = countryData.filter((country) =>
      country.name.toLowerCase().includes(searchValue)
    );
    setCountries(filtered);
  };

  const handleCountrySelect = (item: SortedCountry) => {};
  const handleTimezonSelect = (item: any) => {};

  return (
    <div className="w-full md:flex  gap-6">
      <div className="w-full mb-[28px] md:mb-0">
        <label htmlFor="timeZone" className="fs-md mb-2.5 block w-full">
          Time Zone
        </label>
        {/* ========  country selector ======== */}
        <div className="relative w-full">
          <div
            onClick={(event) => {
              event.stopPropagation();
              dispatch(SET_EXPAND(TIMEZONE_DROPDOWN_KEY));
            }}
            className={`w-full flex items-center px-[14px] py-2.5 border border-[#0000001a] rounded-[6px] focus:outline-none  justify-between gap-5 ${
              expand === TIMEZONE_DROPDOWN_KEY ? "pointer-events-none" : ""
            }`}
          >
            <span>
              {selectedTimezone ? selectedTimezone : "Select timezone"}
            </span>
            <DownArrowSVG
              className={`duration-200 ${
                expand === TIMEZONE_DROPDOWN_KEY ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`country-container-shadow flex flex-col absolute top-[100%] left-0 bg-white rounded-[10px] overflow-hidden  mt-0 max-h-0 ${
              expand === TIMEZONE_DROPDOWN_KEY &&
              "w-full !max-h-[250px] z-[9999999999] border border-[#0000001a]  mt-2 p-5"
            }`}
          >
            {/*  ============ timezone lists ==========   */}
            <ul className=" custom_scrollbar flex flex-col gap-[14px] overflow-y-auto flex-grow mt-3">
              {countries?.length ? (
                countries.map((item: SortedCountry) => (
                  <li
                    className="cursor-pointer fs-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCountry(item);
                      handleCountrySelect(item);
                    }}
                    key={item.name}
                  >
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
        {/* ===== COUNTRY SELECTOR DROPDOWN ========== */}
      </div>
      <div className="w-full mb-[28px] md:mb-0">
        <label htmlFor="country" className="fs-md mb-2.5 block w-full">
          Country
        </label>
        {/* ========  country selector ======== */}
        <div className="relative w-full">
          <div
            onClick={(event) => {
              event.stopPropagation();
              dispatch(SET_EXPAND(COUNTRY_DROPDOWN_KEY));
            }}
            className={`w-full flex items-center px-[14px] py-2.5 border border-[#0000001a] rounded-[6px] focus:outline-none  justify-between gap-5 ${
              expand === COUNTRY_DROPDOWN_KEY ? "pointer-events-none" : ""
            }`}
          >
            <span>
              {selectedCountry?.name ? selectedCountry?.name : "Select country"}
            </span>
            <DownArrowSVG
              className={`duration-200 ${
                expand === COUNTRY_DROPDOWN_KEY ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`country-container-shadow flex flex-col absolute top-[100%] left-0 bg-white rounded-[10px] overflow-hidden  mt-0 max-h-0 ${
              expand === COUNTRY_DROPDOWN_KEY &&
              "w-full !max-h-[250px] z-[9999999999] border border-[#0000001a]  mt-2 p-5"
            }`}
          >
            <div className="border rounded-[100px] flex items-center relative">
              <SearchIconSVG className="pointer-events-none absolute top-[50%] left-5 translate-y-[-50%]" />
              <input
                onClick={(event) => {
                  event.stopPropagation();
                  dispatch(SET_EXPAND(COUNTRY_DROPDOWN_KEY));
                }}
                onChange={handleChange}
                className="pl-[48px] rounded-[100px] py-[10px] focus:outline-none outline-none w-full"
                type="text"
                placeholder="Search locations"
              />
            </div>

            {/*  ============ timezone lists ==========   */}
            <ul className=" custom_scrollbar flex flex-col gap-[14px] overflow-y-auto flex-grow mt-3">
              {countries?.length ? (
                countries.map((item: SortedCountry) => (
                  <li
                    className="cursor-pointer fs-sm flex items-center gap-2.5"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCountry(item);
                      handleCountrySelect(item);
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
        {/* ===== COUNTRY SELECTOR DROPDOWN ========== */}
      </div>
    </div>
  );
};

//  lOCATION MODALS INPUTS

// initial values
const defaultFlag = "";
export const PhoneNumberInput = () => {
  const dispatch = useDispatch();
  // redux state
  const activeKey = "UPDATE_LOCATION_COUNTRY_CODE_SELECT_DROPDOWN";
  const expand = useSelector((state: RootState) => state.modyfier.EXPAND);

  // states
  const [countries, setCountries] = useState<SortedCountry[]>(countryData);
  const [selected, setSelected] = useState<SortedCountry | null>(null);
  const [phone, setPhone] = useState("");
  const [flag, setFlag] = useState("https://flagcdn.com/in.svg");
  const [isFocused, setIsFocused] = useState(false);

  //   ========  handlers =======
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    if (!countryData?.length) return;
    const filtered = countryData.filter((country) =>
      country.name.toLowerCase().includes(searchValue)
    );
    setCountries(filtered);
  };

  const handlePhoneNumber = (val: string) => {};

  const clickHandler = (item: SortedCountry) => {};

  //  set country default value;
  useEffect(() => {
    countries.length > 0 &&
      countries.forEach((country) => {
        if (country.name === "India") {
          setFlag(country.flag);
        }
      });
  });
  return (
    <div
      className={`w-full group flex gap-2.5 items-center pl-[14px] bg-white rounded-[6px] border outline-none ${
        isFocused ? "border-[#005AFF]" : "border-[#005aff1a]"
      }`}
    >
      {/* ========  country code selector ======== */}
      <div className="relative">
        <div
          onClick={(event) => {
            event.stopPropagation();
            dispatch(SET_EXPAND(activeKey));
          }}
          className={`max-w-[68px] w-full flex items-center justify-between gap-5 ${
            expand === activeKey ? "pointer-events-none" : ""
          }`}
        >
          <Image
            height={24}
            width={16}
            src={selected?.flag ? selected?.flag : flag}
            alt="Flag image"
            className="min-w-6 h-auto w-6"
          />
          <DownArrowSVG
            className={`duration-200 ${
              expand === activeKey ? "rotate-180" : ""
            }`}
          />
        </div>
        <div
          className={`country-container-shadow flex flex-col absolute -top-[330px] left-[-14px] bg-white rounded-[10px] overflow-hidden  mt-0 max-h-0 ${
            expand === activeKey &&
            "w-[420px] h-[320px] !max-h-[320px] z-[9999999999] border border-[#0000001a]  mt-2 p-5"
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

      {/* ====== line ===== */}
      <div className="w-[1px] h-[24px] bg-[#DDE3E7]"></div>
      {/* ======= country code ====== */}
      <p className="fs-base text-[#A8B7C1]">+91</p>
      {/* ======= phone number input ========= */}
      <div className="relative flex-grow">
        <input
          type="number"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
          className={`fs-base w-full rounded-[6px] focus:outline-none flex items-center justify-between gap-5  py-2.5 pr-[14px]`}
        />
        <button
          type="button"
          onClick={() => setPhone("")}
          className="absolute top-[50%] right-[14px] translate-y-[-50%]"
        >
          <InputValDeleteSVG />
        </button>
      </div>
    </div>
  );
};

// const dispatch = useDispatch();
// const ACTIVE_KEY = `INVITE_FREELANCERS_ADVANCED_FILTER_SELECT_PROFICIENCY_${id}`;
// // =============== Initial states ========
// const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);
// const [selected, setSelected] = useState<ProficiencyLevelType | null>(null);
