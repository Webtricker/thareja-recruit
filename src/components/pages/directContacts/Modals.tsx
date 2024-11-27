"use client";
import {
  toggleActiveCalendar,
  toggleConctactFormModal,
} from "@/redux/features/contact/directContactsSlice";
import { RootState } from "@/redux/store";
import React, { useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ModalCloseSVG } from "../gptVetting/Icons";
import { BackButton, NextButton } from "./Buttons";
import { MilestonesInfo, PersonalInfo } from "./ModalContents";

// type ValuePiece = Date | null;
// type Value = ValuePiece | [ValuePiece, ValuePiece];

// ContactForm
const ContactFormBody = () => {
  const activeInputs = useSelector(
    (state: RootState) => state.directContactsForm.activeFormInputs
  );

  return (
    <>
      <form className="w-full flex-grow overflow-y-auto">
        {activeInputs === "MILESTONES_INFO" ? (
          <MilestonesInfo />
        ) : (
          <PersonalInfo />
        )}
      </form>

      {/* ======== modal footer ======= */}
      <div className="w-full flex items-center justify-end mt-[50px] lg:mt-[72px] pr-[5px]">
        {activeInputs === "MILESTONES_INFO" && <BackButton />}
        <NextButton />
      </div>
    </>
  );
};

// ========= success message modal =================
export function ContactForm() {
  const dispatch = useDispatch();
  const activeModal = useSelector(
    (state: RootState) => state.directContactsForm.activeContactFormModal
  );

  const activeFormInputs = useSelector(
    (state: RootState) => state.directContactsForm.activeFormInputs
  );

  //   reset all state
  const hideModal = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    // dispatch(resetAll("RESET"));
    dispatch(toggleConctactFormModal(false));
    document.body.style.overflowY = "auto";
  };

  //  ========== hidden overflow of body ========
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [activeModal]);

  if (!activeModal) return <></>;
  return (
    <div
      onClick={hideModal}
      className="w-full h-full fixed top-0 px-5 left-0 flex justify-center items-center bg-[#17171791] overflow-hidden z-[999999999]"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          dispatch(toggleActiveCalendar(null));
          dispatch(toggleConctactFormModal(true));
        }}
        className={`w-full max-w-[844px] duration-300 h-auto max-h-[90vh] flex flex-col relative py-10 md:py-[50px] px-1.5 pr-[11px] md:px-2.5 md:pr-[15px] lg:px-[22px] lg:pr-[27px] bg-white rounded-[20px] lg:rounded-[8px]  z-[999999999999999999]`}
      >
        {/* ===== modal header ====== */}
        <div className="w-full pl-2.5 pr-[5px]">
          <div className="w-full flex justify-between items-center mb-[28px] rounded-[12px] bg-[#005aff08] py-2.5 px-[18px]">
            <h2 className="fs-xl-lh-lg">
              {activeFormInputs === "PERSONAL_INFO"
                ? "New contract"
                : "Contract amount"}
            </h2>
            <button
              onClick={hideModal}
              className="text-gray-500 hover:text-gray-700 text-[27px]"
            >
              <ModalCloseSVG />
            </button>
          </div>
        </div>

        {/* ========== modal body ========== */}
        <ContactFormBody />

        {/* ========= toast container =========== */}
        <ToastContainer />
      </div>
    </div>
  );
}
