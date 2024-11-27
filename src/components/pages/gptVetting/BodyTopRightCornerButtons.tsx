import React from "react";
import {
  CustomizeContentButton,
  InviteCandidateButton,
  ManageAccessButton,
  QuickDemoButton,
} from "./Buttons";

const BodyTopRightCornerButtons: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-[10px] items-center">
      <CustomizeContentButton />
      <span className="hidden md:inline-block w-[1px] h-10 bg-[#A8B7C1] mx-1"></span>
      <ManageAccessButton />
      <span className="hidden md:inline-block w-[1px] h-10 bg-[#A8B7C1] mx-1"></span>
      <QuickDemoButton />
      <InviteCandidateButton />
    </div>
  );
};

export default BodyTopRightCornerButtons;
