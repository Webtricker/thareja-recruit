"use client";
import ActiveInActiveCheckboxes from "@/components/shared/checkbox/ActiveInActiveCheckboxes";
import { CountrySelectorDropDown } from "@/components/shared/dropdown/CountrySelector";
import GlobeSVG from "@/components/shared/icons/GlobeSVG";
import LocationSVG from "@/components/shared/icons/LocationSVG";
import XMarkBlack from "@/components/shared/icons/XMarkBlack";
import {
  setActiveJobLocation,
  setPostReviewActiveEditField,
} from "@/redux/features/jobpost/JobReviewSlice";
import { setJobPostJobLocation } from "@/redux/features/jobpost/jobPostSlice";
import { RootState } from "@/redux/store";
import { DropdownCountry } from "@/types/dropdownTypes";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobReviewModalButtons from "./JobReviewModalButtons";

// type starts
type SelectedJobLocation = {
  type: "US_ONLY" | "WORLD_WIDE";
  label: string | null;
};
const EditReviewJobLocation = () => {
  const dispatch = useDispatch();

  const activeJobLocation = useSelector(
    (state: RootState) => state.jobReviews.activeJobLocation
  );
  const rootKey = useSelector((state: RootState) => state.modyfier.EXPAND);

  const [selectedLocation, setSelectedLocation] = useState<SelectedJobLocation>(
    {
      type: activeJobLocation,
      label: null,
    }
  );

  // ==== static variables =====
  const COUNTRY_DROPDOWN_ACTIVE_KEY = "ACTIVE_JOB_REVIEW_COUNTRY_DROPDOWN";

  // ======= Handlers ===========
  const handleCloseModal = () => {
    dispatch(setPostReviewActiveEditField(null));
  };
  const handleSaveData = () => {
    if (selectedLocation.label) {
      dispatch(setActiveJobLocation(selectedLocation.type));
      dispatch(setJobPostJobLocation(selectedLocation.label));
    }
    dispatch(setPostReviewActiveEditField(null));
  };

  const handleCountrySelect = (country: DropdownCountry) => {
    console.log(country);
  };
  return (
    <div className="flex flex-col overflow-hidden w-full max-w-[776px] max-h-[90vh] min-h-[250px] py-[30px] h-auto rounded-[20px] md:rounded-[30px] bg-white shadow-md ">
      <div className="px-[20px]  md:px-[32px] mb-5 md:mb-[28px] rounded-[12px]  w-full flex justify-end">
        <button onClick={handleCloseModal}>
          <XMarkBlack />
        </button>
      </div>
      <div className="flex-grow overflow-y-auto h-full relative px-[20px] md:px-[32px]  w-full">
        {/* ============LOCATION SELECT CONTAINER STARTS============ */}
        <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-10 lg:gap-[52px] md:justify-between pb-7 lg:pb-10 pt-2.5">
          {/* ====== card left ======= */}
          <div
            onClick={() => {
              setSelectedLocation({ type: "US_ONLY", label: "U.S. only" });
            }}
            className={`job-review-gradient-container gradient-border`}
          >
            <div
              className={`location-gradient-card  ${
                selectedLocation.type === "US_ONLY" && "!bg-[#FAFCFF]"
              } `}
            >
              <div className="logo-container  mb-[18px] flex items-start justify-between">
                <LocationSVG />
                <ActiveInActiveCheckboxes
                  className="!w-[34.45px] !h-[34.45px]"
                  active={selectedLocation.type === "US_ONLY"}
                />
              </div>
              <h3 className="fs-2xl mb-5 lg:mb-[24px] font-normal">
                U.S. only
              </h3>
              <p className="fs-base">
                Only talent in the United States can submit proposals
              </p>
            </div>
          </div>

          {/* ====== card right ======= */}
          <div
            onClick={() => {
              setSelectedLocation({ type: "WORLD_WIDE", label: "WorldWide" });
            }}
            className="job-review-gradient-container gradient-border "
          >
            <div
              className={`location-gradient-card ${
                selectedLocation.type === "WORLD_WIDE" && "!bg-[#FAFCFF]"
              } `}
            >
              <div className="logo-container mb-[18px] flex items-start justify-between">
                <GlobeSVG />
                <ActiveInActiveCheckboxes
                  className="!w-[34.45px] !h-[34.45px]"
                  active={selectedLocation.type === "WORLD_WIDE"}
                />
              </div>
              <h3 className="fs-2xl mb-5 lg:mb-[24px] font-normal">
                Worldwide
              </h3>
              <p className="fs-base">
                Talent in any location can submit proposals.
              </p>
            </div>
          </div>
        </div>
        {/* ============LOCATION SELECT CONTAINER ENDS============ */}
        <div className="w-full mt-5 md:mt-0 pb-2.5">
          <p className="mb-5 m-[1px] md:mb-[23px] fs-md">
            Region or country preferences (optional)
          </p>
          <CountrySelectorDropDown
            parentStyle="mb-5"
            labelStyle="!rounded-1.5 !py-1.5 !px-[14px] !bg-transparent"
            activeKey={COUNTRY_DROPDOWN_ACTIVE_KEY}
            expand={rootKey}
            key={COUNTRY_DROPDOWN_ACTIVE_KEY}
            clickHandler={handleCountrySelect}
            defaultLabel="Add regions and countries"
          />
          <p className="fs-base font-light mb-5 lg:mb-[30px]">
            These location preferences will be displayed to all candidates. but
            anyone can submit proposals.{" "}
          </p>
        </div>
      </div>
      <div className="w-full px-[20px]  md:px-[32px]">
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

export default EditReviewJobLocation;
