"use client";
import Image from "next/image";
import { EditPenSVG } from "../icons/Icons";

type EditButtonProps = {
  handler?: Function;
  style?: string;
  pencilStyle?: string;
};

export const EditButton = ({
  handler,
  style = "",
  pencilStyle = "",
}: EditButtonProps) => {
  const handleClick = () => {
    handler && handler();
  };
  return (
    <button
      onClick={handleClick}
      className={`w-[38px] h-[38px] rounded-full flex items-center justify-center border border-[#005AFF] ${style}`}
    >
      <EditPenSVG style={pencilStyle} />
    </button>
  );
};

type DeleteButtonProps = {
  handler?: Function;
  style?: string;
};
export const DeleteButton = ({ handler, style = "" }: DeleteButtonProps) => {
  const handleClick = () => {
    handler && handler();
  };
  return (
    <button
      onClick={handleClick}
      className={`w-[38px] h-[38px] rounded-full flex items-center justify-center border border-[#005AFF] ${style}`}
    >
      <Image
        height={22}
        width={19}
        src="/svgs/profile/delete-trash-can.svg"
        alt="trash can icon"
      />
    </button>
  );
};

type ButtonProps = {
  text: string;
  handler: Function;
  style?: string;
  type?:"button" | "submit" | "reset" | undefined;
};
export const BtnLarge = ({ text, handler, style = "",type="button" }: ButtonProps) => {
  const handleClick = () => {
    handler && handler();
  };

  return (
    <button type={type} onClick={handleClick} className={`btn-large fs-md ${style}`}>
      {text}
    </button>
  );
};
export const BtnMedium = ({ text, handler, style = "" }: ButtonProps) => {
  const handleClick = () => {
    handler && handler();
  };

  return (
    <button type="button" onClick={handleClick} className={`btn-medium fs-md ${style}`}>
      {text}
    </button>
  );
};
