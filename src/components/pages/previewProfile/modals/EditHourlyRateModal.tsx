"use client"
import { BtnLarge } from "@/components/shared/Buttons/Buttons";
import { CustomModal, CustomModalHeader } from "@/components/shared/modal/Modal";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { setHourlyRate, setProfileSrc } from "@/redux/features/onboarding/createFreelancerProfileSlice";
import { RootState } from "@/redux/store";
import { formatNumber, getCalculatedHourlyPrice, validateTextInputAsNumber } from "@/utils/UtilityFN";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
 const EditHourlyRateModal = () => {
    const dispatch = useDispatch();
    const {hourlyRate:prevHourlyRate} = useSelector((state:RootState)=>state.createFreelancerProfile);

    const [ratePerHour, setRatePerHour] = useState(prevHourlyRate?prevHourlyRate:"");
  
    // ======== handlers ==========
    const basePriceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const val = validateTextInputAsNumber(e.target.value);
      if (val === "empty_input") {
        setRatePerHour("");
      } else if (val) {
        setRatePerHour(val);
      }
    };
  
    const KEY = "SHOW_PREVIEW_PROFILE_HOURLY_RATE_UPDATE_MODAL";

    //   handlers
    const handleModalAction = (action:"CLOSE"|"SAVE") => {
      if(action === "SAVE"){
        dispatch(setHourlyRate(ratePerHour))
      }
      dispatch(toggleModal(null));
      document.body.style.overflowY = "auto";
    };
    return (
      <CustomModal
        containerStyle="flex flex-col !max-w-[758px] !py-5 md:!py-5 lg:!py-5 !pl-2 !pr-1 md:!px-2 lg:px-2 overflow-hidden"
        key={KEY}
        activeKey={KEY}
      >
        <div className="country_dropdown_scrollbar w-full pl-2 pr-1  md:pl-3 md:pr-1  lg:pl-[14px] lg:pr-1.5 xl:pl-6 xl:pr-4 py-3 md:py-5 lg:py-[30px] !overflow-y-auto">
          <CustomModalHeader title="Change hourly rate" />
          <div className="w-full flex flex-col gap-6 md:gap-7 mt-6 md:mt-7">
            <p className="fs-md text-[#525966]">
              Please note that your new hourly rate will only apply to new
              contracts.
            </p>
  
            <p className="fs-md text-[#525966]">Your profile rate: $10.00/hr</p>
  
            <div className="w-full mb-[50px] md:mb-[60px] lg:mb-[72px]">
              <div className="w-full flex flex-col gap-5">
                {/* ======== client will see ======== */}
                <div className="flex flex-col md:flex-row gap-2.5 w-full p-4 md:py-[18px] lg:px-7 rounded-[10px] border border-[#0000001a] bg-[#FBFCFF] ">
                  <div className="flex-grow">
                    <h3 className="fs-xl-lh-lg mb-2.5">Hourly rate</h3>
                    <p className="fs-base">Total amount the client will see.</p>
                  </div>
                  <div className="flex gap-2.5 md:justify-end items-center w-full max-w-[204px] md:max-w-[140px] lg:max-w-[204px] ">
                    <input
                      type="text"
                      value={ratePerHour ? `$${formatNumber(ratePerHour)}` : ""}
                      onChange={basePriceChangeHandler}
                      placeholder="$0.00"
                      className={`bg-[#FFFFFF] text-right rounded-[6px]  max-w-[160px] w-full p-2.5 border border-[#0000001a] focus:outline-none focus:border-blue-500`}
                    />
                    <span className="fs-lg-lh-normal lg:text-[24px]">/hr</span>
                  </div>
                </div>
  
                {/* ======== service fees ======== */}
                <div className="flex flex-col md:flex-row gap-2.5 w-full p-4 md:py-[18px] lg:px-7 rounded-[10px] border border-[#0000001a] bg-[#FBFCFF] ">
                  <div className="flex-grow">
                    <div className="w-full md:flex  mb-2.5 gap-5 items-center">
                      <h3 className="fs-xl-lh-lg">Service fee</h3>
                      <Link href="#" className="underline text-[#005AFF] fs-base">
                        Learn more
                      </Link>
                    </div>
                    <p className="fs-base">
                      This helps us run the platform and provide services like
                      payment protection and customer support.
                    </p>
                  </div>
                  <div className="flex gap-2.5 md:justify-end items-center w-full max-w-[204px] md:max-w-[140px] lg:max-w-[204px] ">
                    <input
                      type="text"
                      value={
                        ratePerHour
                          ? `-$${getCalculatedHourlyPrice(ratePerHour, 0.1)}`
                          : ""
                      }
                      placeholder="$0.00"
                      className={`pointer-events-none bg-[#F8F9FA] text-right rounded-[6px]  w-full p-2.5 border border-[#0000001a] max-w-[160px] focus:outline-none focus:border-blue-500`}
                    />
                    <span className="fs-lg-lh-normal lg:text-[24px]">/hr</span>
                  </div>
                </div>
  
                {/* ======== freelancer will see ======== */}
                <div className="flex flex-col md:flex-row gap-2.5 w-full p-4 md:py-[18px] lg:px-7 rounded-[10px] border border-[#0000001a] bg-[#FBFCFF] ">
                  <div className="flex-grow">
                    <h3 className="fs-xl-lh-lg mb-2.5">You&apos;ll get</h3>
                    <p className="fs-base">
                      The estimated amount you&apos;ll receive after service fees.
                    </p>
                  </div>
                  <div className="flex gap-2.5 md:justify-end items-center w-full max-w-[204px] md:max-w-[140px] lg:max-w-[204px] ">
                    <input
                      type="text"
                      value={
                        ratePerHour
                          ? `$${getCalculatedHourlyPrice(ratePerHour, 0.9)}`
                          : ""
                      }
                      placeholder="$0.00"
                      className={`pointer-events-none bg-[#FFFFFF] text-right  max-w-[160px] rounded-[6px] w-full p-2.5 border border-[#0000001a] focus:outline-none focus:border-blue-500`}
                    />
                    <span className="fs-lg-lh-normal lg:text-[24px]">/hr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className=" w-full flex flex-wrap items-center justify-end gap-[14px]">
            <BtnLarge
              style=""
              handler={()=>handleModalAction("CLOSE")}
              key="CANCEL_HOURLY_RATE_MODAL_BTN"
              text="Cancel"
            />
            <BtnLarge
              style="btn-bg-blue"
              handler={()=>handleModalAction("SAVE")}
              text="Save"
              key="SAVE_HOURLY_RATE_MODAL_BTN"
            />
          </div>
        </div>
      </CustomModal>
    );
  };
  export default EditHourlyRateModal;