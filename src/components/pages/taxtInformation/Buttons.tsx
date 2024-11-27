"use client";

import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { useDispatch } from "react-redux";
import { EditPenSVG } from "../contactInfo/Icons";

type PropsType = {
  text: string;
  style?: string;
  clickHandler?: Function;
};

export const Button = ({ text, clickHandler, style }: PropsType) => {
  const handleClick = () => {
    clickHandler && clickHandler();
  };
  return (
    <button onClick={handleClick} className={`btn-large fs-md ${style}`}>
      {text}
    </button>
  );
};

type EditButtonProps = {
  handler: Function;
  style?: string;
};
const EditButton = ({ handler, style }: EditButtonProps) => {
  const handleClick = () => {
    handler && handler();
  };
  return (
    <button
      onClick={handleClick}
      className={`w-[38px] h-[38px] rounded-full flex items-center justify-center border border-[#005AFF] ${style}`}
    >
      <EditPenSVG />
    </button>
  );
};

// ======== tax residence card buttons ===========

export const EditTaxResidenceButton = () => {
  const dispatch = useDispatch();
  const KEY = "OPEN_SETTINGS_TAX_INFO_TAX_RESIDENCE_UPDATE_MODAL";
  const handleClick = () => {
    dispatch(toggleModal(KEY));
  };
  return (
    <EditButton
      style="min-w-[38px] min-h-[38px]"
      handler={handleClick}
      key={KEY}
    />
  );
};

// ======= Taxpayer identification ============

export const EditTaxpayerIdentificationButton = () => {
  const dispatch = useDispatch();
  const KEY = "OPEN_SETTINGS_TAX_INFO_TAX_PRAYER_UPDATE_MODAL";
  const handleClick = () => {
    dispatch(toggleModal(KEY));
  };
  return (
    <EditButton
      style="min-w-[38px] min-h-[38px]"
      handler={handleClick}
      key={KEY}
    />
  );
};

// ======= Tax identification number============

export const EditTaxIdentificationNumberBtn = () => {
  const dispatch = useDispatch();
  const KEY = "OPEN_SETTINGS_TAX_INFO_TAX_IDENTIFICATION_NUMBER_UPDATE_MODAL";
  const handleClick = () => {
    dispatch(toggleModal(KEY));
  };
  return (
    <EditButton
      style="min-w-[38px] min-h-[38px]"
      handler={handleClick}
      key={KEY}
    />
  );
};

// ======= Additional tax information============

export const EditAdditionalTaxInformationBtn = () => {
  const dispatch = useDispatch();
  const KEY = "OPEN_SETTINGS_TAX_INFO_GOODS_AND_SERVICES_UPDATE_MODAL";
  const handleClick = () => {
    dispatch(toggleModal(KEY));
  };
  return (
    <EditButton
      style="min-w-[38px] min-h-[38px]"
      handler={handleClick}
      key={KEY}
    />
  );
};

// export const TaxResidenceCompleteBtn = ()=>{

// }

export const EditAccountButton = () => {
  const dispatch = useDispatch();
  const KEY = "OPEN_SETTINGS_CONTACT_INFO_ACOUNT_UPDATE_MODAL";
  const handleClick = () => {
    dispatch(toggleModal(KEY));
  };
  return (
    <EditButton
      style="min-w-[38px] min-h-[38px]"
      handler={handleClick}
      key={KEY}
    />
  );
};

export const ModalCancelBtn = ({ text }: { text: string }) => {
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(toggleModal(null));
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-[#005AFF] fs-md py-2.5 md:py-3 px-5 md:px-8 lg:py-[16px] lg:px-[40px]  "
    >
      {text}
    </button>
  );
};

export const ModalUpdateBtn = ({ text }: { text: string }) => {
  return (
    <button type="submit" className="fs-md btn-large btn-bg-blue ">
      {text}
    </button>
  );
};
