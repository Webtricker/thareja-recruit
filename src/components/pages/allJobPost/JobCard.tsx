import { ReactNode } from "react";

type PropsType = {
  className?: string;
  children: ReactNode;
};
const JobCard = ({ className, children }: PropsType) => {
  return (
    <div
      className={`w-full ${
        className ? className : ""
      } py-[30px] md:py-10 px-[26px] md:px-[32px] border border-[#005aff33] bg-[#005aff05] rounded-[20px] `}
    >
      {children}
    </div>
  );
};

export default JobCard;
