import React from "react";
import Image, { StaticImageData } from "next/image";

export interface ButtonProps {
  svgSrc: StaticImageData;
  text: string;
  buttonClassName?: string;
  onClick?: () => void;
}

const gptVettingInviteACandiate: React.FC<ButtonProps> = ({
  svgSrc,
  text,
  buttonClassName = "commonButton",
  onClick,
}) => (
  <button
    className={`${buttonClassName} mx-2 gap-2 flex flex-row-reverse justify-between items-center`}
    onClick={onClick}
  >
    <Image src={svgSrc} alt={text} />
    <h2>{text}</h2>
  </button>
);

export default gptVettingInviteACandiate;
