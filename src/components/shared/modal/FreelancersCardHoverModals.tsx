import React from "react";
import { PolyGonSVG } from "./Icons";
type JobSuccessPropsType = {
  children: React.ReactNode;
  className?: string;
  active: boolean;
};
export const FreelancerProfileHoverDescriptionModal = ({
  children,
  className,
  active,
}: JobSuccessPropsType) => {
  return (
    <div
      className={`duration-200 opacity-0 absolute p-[27px] rounded-[15px] freelancer-profile-hover-modal-shadow pointer-events-none  bg-white  ${className} ${
        active && "!opacity-100"
      } `}
    >
      <PolyGonSVG className="absolute top-[-16px] left-[50%] translate-x-[-50%]" />
      {children}
    </div>
  );
};
