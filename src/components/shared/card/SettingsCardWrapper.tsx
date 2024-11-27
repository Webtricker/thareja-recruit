import { ReactNode } from "react";

type CardWrapperProps = {
  children: ReactNode;
  className?: string;
};
const SettingsContentCardWrapper = ({
  children,
  className,
}: CardWrapperProps) => {
  return (
    <div
      className={`w-full border border-[#00000024] rounded-[20px] p-5 md:p-6 lg:p-7 xl:p-8 2xl:p-[30px] ${className}`}
    >
      {children}
    </div>
  );
};

export default SettingsContentCardWrapper;
