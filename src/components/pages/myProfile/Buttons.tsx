"use client";

import { EditButton } from "@/components/shared/Buttons/Buttons";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { useDispatch } from "react-redux";

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

export const EditCategoriesButton = () => {
  const dispatch = useDispatch();
  const KEY = "SETTING_MY_PROFILE_CATEGORY_UPDATE_MODAL";
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
