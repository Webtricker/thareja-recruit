"use client";
import Image from "next/image";
import { useState } from "react";
import WarningSVG from "../../pages/login/WarningSVG";
type PropsType = {
  className?: string;
  warning: string;
};
const TopWarning = ({ className, warning }: PropsType) => {
  const [show, setShow] = useState(true);
  return show ? (
    <div className={`w-full ${className && className}`}>
      <div className="flex justify-between w-full md:items-center gap-[10px] rounded-[20px] md:rounded-[8px]    py-2 md:py-[10px] px-[18px] bg-[#FFE2E2] text-[#30353E] ">
        <p className="inline">
          <WarningSVG className=" float-left mr-[10px] w-5 h-5 md:w-6 md:h-6" />
          <span className="fs-base clear-right">{warning}</span>
        </p>
        <Image
          onClick={() => setShow(false)}
          src="/svgs/x-icon.svg"
          width={18}
          height={18}
          alt="cancel icon"
          className="mt-1 md:mt-0 inline cursor-pointer w-[14px] md:w-[18px] h-[14px] md:h-[18px]"
        />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default TopWarning;
