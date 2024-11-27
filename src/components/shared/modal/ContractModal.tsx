"use client";
import {
  setActiveCalendar,
  setActiveModal,
  setModalType,
} from "@/redux/features/contact/contractModals";
import { RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import {
  ContactFormModalBody,
  EmailSendSuccessMessageModalBody,
  ReviewContractModalBody,
} from "./ContractModalContent";
import { ModalCloseSVG } from "./Icons";

// =========== calendar modal =================

// =========== active modal body =================
const ModalBody = () => {
  const modalType = useSelector(
    (state: RootState) => state.contractModals.modalType
  );

  //   return <EmailSendSuccessMessageModalBody />;
  switch (modalType) {
    case "CREATE_CONTRACT":
      return <ContactFormModalBody />;
    case "SEND_MESSAGE":
      return <EmailSendSuccessMessageModalBody />;
    case "REVIEW_CONTRACT":
      return <ReviewContractModalBody />;

    default:
      return <></>;
  }
};

const HeaderContent = () => {
  const modalType = useSelector(
    (state: RootState) => state.contractModals.modalType
  );

  const activeInput = useSelector(
    (state: RootState) => state.contractModals.activeContractFormInputs
  );

  switch (modalType) {
    case "CREATE_CONTRACT":
      return "PERSONAL_INFO" === activeInput
        ? "New contract"
        : "Contract amount";
    case "REVIEW_CONTRACT":
      return "Review contract";
    case "SEND_MESSAGE":
      return "Contact sent";
    default:
      return "Unknown";
  }
};

// =========== root component =================
const ContractModal = () => {
  const dispatch = useDispatch();
  const activeModal = useSelector(
    (state: RootState) => state.contractModals.activeModal
  );
  const modalType = useSelector(
    (state: RootState) => state.contractModals.modalType
  );

  //   ====== close and reset modal state =====
  const hideModal = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();

    // ========= hide & reset previous state conditionaly =========
    if ("SEND_MESSAGE" === modalType) {
      dispatch(setModalType("CREATE_CONTRACT"));
    }
    dispatch(setActiveModal(false));
    document.body.style.overflowY = "auto";
  };

  const openModal = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    dispatch(setActiveCalendar(null));
    dispatch(setActiveModal(true));
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
        onClick={openModal}
        className={`w-full max-w-[844px] duration-300 h-auto max-h-[90vh] flex flex-col relative py-10 md:py-[50px] px-1.5 pr-[11px] md:px-2.5 md:pr-[15px] lg:px-[22px] lg:pr-[27px] bg-white rounded-[20px] lg:rounded-[8px]  z-[999999999999999999]`}
      >
        {/* ===== modal header ====== */}
        <div className="w-full pl-2.5 pr-[5px]">
          <div className="w-full flex justify-between items-center mb-[28px] rounded-[12px] bg-[#005aff08] py-2.5 px-[18px]">
            <h2 className="fs-xl-lh-lg">
              <HeaderContent />
            </h2>
            <button
              onClick={hideModal}
              className="text-gray-500 hover:text-gray-700 text-[27px]"
            >
              <ModalCloseSVG />
            </button>
          </div>
        </div>

        <ModalBody />

        {/* ========= toast container =========== */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContractModal;

// // ========= success message modal =================
// export function ContactForm() {

//   }
