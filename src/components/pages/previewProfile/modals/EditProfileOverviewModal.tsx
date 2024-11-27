"use client"
import { BtnLarge } from "@/components/shared/Buttons/Buttons";
import { WarningRedSVG } from "@/components/shared/modal/Icons";
import { CustomModal, CustomModalHeader } from "@/components/shared/modal/Modal";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { setBio, setFieldError } from "@/redux/features/onboarding/createFreelancerProfileSlice";
import { RootState } from "@/redux/store";
import { getRemainingCharacters } from "@/utils/UtilityFN";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EditProfileOverviewModal = () => {
    const dispatch = useDispatch();
  
    const KEY = "SHOW_PREVIEW_PROFILE_PROFILE_OVERVIEW_UPDATE_MODAL";
    const { fieldError: error, bio} = useSelector(
      (state: RootState) => state.createFreelancerProfile
    );

    const [des, setDes] = useState(bio?bio:"")
  
    //   state to mange functionality
    const [charLeft, setCharLeft] = useState(bio?getRemainingCharacters(bio):"50,000");
  
    // ======== handlers ==========
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
        return;
      }
  
      error && dispatch(setFieldError(null));
      const remainingCH = getRemainingCharacters(text, TOTAL_CHAR);
  
      // set the changed value.
      setCharLeft(remainingCH);
      setDes(text);
    };
  
    const handleModalAction = (action:"CLOSE"|"SAVE") => {
        if (action === "CLOSE") {
            setDes(bio?bio:"")
        } else if (action === "SAVE") {
          dispatch(setBio(des));
        }
      dispatch(toggleModal(null));
      document.body.style.overflowY = "auto";
    };  

    return (
      <CustomModal
        containerStyle="flex flex-col !max-w-[788px] !py-5 md:!py-5 lg:!py-5 !pl-2 !pr-1 md:!px-2 lg:px-2 overflow-hidden"
        key={KEY}
        activeKey={KEY}
      >
        <div className="country_dropdown_scrollbar w-full pl-2 pr-1  md:pl-3 md:pr-1  lg:pl-[14px] lg:pr-1.5 xl:pl-6 xl:pr-4 py-3 md:py-5 lg:py-[30px] !overflow-y-auto">
          <CustomModalHeader title="Profile overview" />
          <div className="w-full flex flex-col gap-6 md:gap-7 mt-6 md:mt-7">
            <div className="w-full">
              <p className="fs-md text-[#525966]">
                Use this space to show clients you have the skills and experience
                they&apos;re looking for.
              </p>
  
              <ul className="w-full list-disc list-inside my-4 md:my-[18px]">
                <li className="fs-md text-[#525966]">
                  Describe your strengths and skills
                </li>
                <li className="fs-md text-[#525966]">
                  Highlight projects, accomplishments and education
                </li>
                <li className="fs-md text-[#525966]">
                  Keep it short and make sure it&apos;s error-free
                </li>
              </ul>
              <Link href="#" className="fs-base text-[#005AFF]">
                Learn more about building your profile
              </Link>
            </div>
  
            <div className="w-full mb-[50px] md:mb-[60px] lg:mb-[72px]">
              <p className="fs-md mb-2.5">Profile overview</p>
              <textarea
                onChange={handleInputChange}
                placeholder="Already have a description? Paste it here!"
                className={`bg-[#FBFCFF] resize-none min-h-[200px] lg:min-h-[241px] fs-base w-full border border-[#0000001a] px-[14px] py-2.5 rounded-[6px] focus:outline-none focus:border-blue-500`}
                value={des ? des : ""}
              />
              <div className="not-italic flex items-center justify-between text-12">
                <div className="">
                  {error?.errorField === "BIO" && (
                    <p className="text-red-400 flex items-center gap-1.5">
                      <WarningRedSVG />
                      <span className="text-base">
                        Enter your profile overview
                      </span>
                    </p>
                  )}
                </div>
                <div className="fs-xxs text-right flex-grow flex items-center justify-end">
                  {charLeft} characters left
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

  export default EditProfileOverviewModal;