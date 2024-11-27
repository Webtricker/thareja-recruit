import React from "react";

type PropsType = {
  className?: string;
  largeText: string;
  smallText: string;
  children: React.ReactNode;
};

const JobScheduleCard = ({
  children,
  largeText,
  smallText,
  className,
}: PropsType) => {
  return (
    <div
      className={`flex gap-[14px] items-start p-3 md:p-4 rounded-[10px] border border-[#DDE3E7]  ${className}`}
    >
      {children}
      <div className="flex-grow">
        <h3 className="fs-lg-lh-normal">{largeText}</h3>
        <p className="text-[12px] leading-normal tracking-[0.24px]">
          {smallText}
        </p>
      </div>
    </div>
  );
};

export default JobScheduleCard;
