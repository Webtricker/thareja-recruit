import { RoketSVG } from "./Icons";

// ========== root component =========

type PropsType = {
  className?: string;
};
const GetStartedAndConnectTalent = () => {
  return (
    <div className="p-[1px] rounded-[30px] mb-10 xl:mb-11 2xl:mb-[60px] bg-gradient-to-r to-[#005AFF] from-[#01D18F] ">
      <div
        className="flex flex-col-reverse items-center gap-10 md:gap-5
       md:items-start md:flex-row  p-6 md:p-8 lg:p-10 xl:p-11 2xl:py-[50px] 2xl:p-[60px] rounded-[29px] bg-[#FBFCFF]"
      >
        <div className="w-full">
          <p className="mb-2.5fs-lg-lh-normal">Get started</p>
          <h3 className="mb-5 md:mb-6 lg:mb-8 2xl:mb-10 fs-4xl ">
            Get started and connect with talent to get work done
          </h3>
          <button className="fs-lg-lh-md btn-large btn-bg-blue">
            Go to article
          </button>
        </div>
        <RoketSVG />
      </div>
    </div>
  );
};
export default GetStartedAndConnectTalent;
