import React, { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  text: string;
  buttonClassName?: string;
  onClick?: () => void;
}

const gptVettingInviteACandidateButton: React.FC<ButtonProps> = ({
  children,
  text,
  buttonClassName = "commonButton",
  onClick,
}) => (
  <button
    className={`${buttonClassName} mx-2 gap-2 flex flex-row-reverse justify-between items-center bg-[#17171791] overflow-x-hidden z-[99999999999999999]`}
    onClick={onClick}
  >
    {children}
    <h2>{text}</h2>
  </button>
);

export default gptVettingInviteACandidateButton;
