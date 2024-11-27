import React from "react";
import { PolyGonSVG } from "./Icons";

type PropsType = {
  children: React.ReactNode;
  className?: string;
  active: boolean;
  polygon: boolean;
  polygonPosition?: string;
};
const MouseOverActiveModal = ({
  polygon,
  children,
  className,
  active,
  polygonPosition,
}: PropsType) => {
  return (
    <div
      className={`duration-200 opacity-0 absolute p-[27px] rounded-[15px] freelancer-profile-hover-modal-shadow pointer-events-none  bg-white  ${className} ${
        active && "!opacity-100 !pointer-events-auto"
      } `}
    >
      {children}
      {polygon ? (
        <PolyGonSVG
          className={`absolute top-[-16px]  ${
            polygonPosition ? polygonPosition : "left-[50%] translate-x-[-50%] "
          }`}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default MouseOverActiveModal;
