"use client";
import {
  setActiveContracts,
  setReviewContractIndex,
} from "@/redux/features/contact/allContractsSlice";
import {
  setActiveModal,
  setError,
  setModalType,
  updateActiveFormInputs,
} from "@/redux/features/contact/contractModals";
import { RootState } from "@/redux/store";
import { formateDate } from "@/utils/UtilityFN";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

//======== contract form modal body buttons ============
export const NextButton = () => {
  const dispatch = useDispatch();
  const contractModals = useSelector(
    (state: RootState) => state.contractModals
  );

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (contractModals.activeContractFormInputs === "PERSONAL_INFO") {
      // ====== validate name email and description input fields =================
      if (
        !contractModals.clientEmail ||
        !emailRegex.test(contractModals.clientEmail)
      ) {
        dispatch(
          setError({ field: "EMAIL", message: "Valid email is required" })
        );
        return;
      } else if (!contractModals.contractName) {
        dispatch(
          setError({ field: "NAME", message: "Contract name is required" })
        );
        return;
      } else if (!contractModals.contractDes) {
        dispatch(
          setError({ field: "DESCRIPTION", message: "Description is required" })
        );
        return;
      }

      // ========validate if contract type is Hourly =============
      if (contractModals.contractType === "HOURLY") {
        if (!contractModals.hourlyInfo.hourlyRate) {
          dispatch(
            setError({
              field: "HOURLY_RATE",
              message: "Hourly rate is required",
            })
          );
          return;
        } else if (!contractModals.hourlyInfo.weeklyLimit) {
          dispatch(
            setError({
              field: "WEEKLY_LIMIT",
              message: "Weekly limit is required",
            })
          );
          return;
        }

        /* ============  submit form and navigate to the apps and offers page 
                                          and create an entry    ================= */

        const contract = {
          contractName: contractModals.contractName,
          clientEmail: contractModals.clientEmail,
          totalAmount: contractModals.hourlyInfo.hourlyRate,
          freelancerInfo: {
            name: "Muhammad I.",
            email: "muhammad@gmail.com",
            profileUrl: null,
          },
          milestone: {
            name: contractModals.contractName,
            amount: contractModals.hourlyInfo.hourlyRate,
            endDate: contractModals.hourlyInfo.endDate
              ? formateDate(contractModals.hourlyInfo.endDate)
              : null,
          },
          createdAt: new Date().getTime(),
        };

        dispatch(setActiveContracts(contract));
        dispatch(setModalType("SEND_MESSAGE"));
      } else {
        dispatch(updateActiveFormInputs("MILESTONES_INFO"));
      }
    } else {
      /* ============  submit form and navigate to the apps and offers page 
                                          and create an entry    ================= */
      const contract = {
        contractName: contractModals.contractName,
        clientEmail: contractModals.clientEmail,
        totalAmount: contractModals.totalAmount,
        freelancerInfo: {
          name: "Muhammad I.",
          email: "muhammad@gmail.com",
          profileUrl: null,
        },
        milestone: {
          name: contractModals.contractName,
          amount: contractModals.totalAmount,
          endDate: contractModals.hourlyInfo.endDate
            ? formateDate(contractModals.hourlyInfo.endDate)
            : null,
        },
        createdAt: new Date().getTime(),
      };

      dispatch(setActiveContracts(contract));
      dispatch(setModalType("SEND_MESSAGE"));
    }
  };
  return (
    <button onClick={handleClick} className="fs-md btn-large btn-bg-blue ">
      Next
    </button>
  );
};

export const BackButton = () => {
  const dispatch = useDispatch();
  const activeFormInput = useSelector(
    (state: RootState) => state.directContactsForm.activeFormInputs
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (activeFormInput === "MILESTONES_INFO") {
      dispatch(updateActiveFormInputs("PERSONAL_INFO"));
    }
  };
  return (
    <button
      onClick={handleClick}
      className="text-[#005AFF] fs-md py-2.5 md:py-3 px-5 md:px-8 lg:py-[16px] lg:px-[40px]  "
    >
      Back
    </button>
  );
};

// =========== contract send modal buttons starts =================
export const CloseButton = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const directContactsForm = useSelector(
    (state: RootState) => state.directContactsForm
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(setModalType("REVIEW_CONTRACT"));
    dispatch(setActiveModal(false));
    if (
      "/direct-contacts/all-contracts" !==
      window.location.pathname.replace(/^\/$/, "")
    ) {
      router.push("/direct-contacts/all-contracts");
    } else {
    }
  };
  return (
    <button onClick={handleClick} className="fs-md btn-large btn-bg-blue ">
      Close
    </button>
  );
};

// ========= Review contract modal buttons =============
export const ReviewContractBackButton = () => {
  const dispatch = useDispatch();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    dispatch(setActiveModal(false));
    dispatch(setReviewContractIndex(null));
  };
  return (
    <button
      onClick={handleClick}
      className="text-[#005AFF] fs-md py-2.5 md:py-3 px-5 md:px-8 lg:py-[16px] lg:px-[40px]  "
    >
      Back
    </button>
  );
};

export const ReviewContractSendContract = () => {
  const dispatch = useDispatch();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(setModalType("SEND_MESSAGE"));
  };
  return (
    <button onClick={handleClick} className="fs-md btn-large btn-bg-blue ">
      Send Contract
    </button>
  );
};
