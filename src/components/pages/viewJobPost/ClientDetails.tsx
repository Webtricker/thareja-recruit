import Image from "next/image";
import ClientsJobsLinks from "./ClientsJobsLinks";
import CopyClientJobLink from "./CopyClientJobLink";
import PencilSVG from "./PencilSVG";
import RatingStarSVG from "./RatingStarSVG";

const ClientDetails = () => {
  const paragraphStyle = "fs-base";
  return (
    <div className="w-full lg:max-w-[398px] p-5 md:p-6 lg:px-[30px] lg:py-10 rounded-[20px] border border-[#97BCFF] bg-[#FBFCFF]">
      <ClientsJobsLinks />
      {/* ============= About client starts =================          */}
      <div className="w-full flex items-center gap-2.5 mb-6 lg:mb-[30px]">
        <h2 className="text-[28px] md:text-[30px] lg:text-[34px] leading-normal tracking-[-1.02px]">
          About the client
        </h2>
        <button className="p-2 md:p-2.5 rounded-full border border-[#A8B7C1] bg-white">
          <PencilSVG />
        </button>
      </div>

      <div className="w-full">
        <p className="mb-[14px] flex gap-2.5 items-center fs-md">
          <Image
            width={19.99}
            height={20}
            src="/svgs/verfied-mark.svg"
            alt="verified icon"
          />
          <span>Payment method verified</span>
        </p>
        <div className="flex items-center gap-3 ">
          <RatingStarSVG /> <span className={paragraphStyle}>4.96</span>
        </div>
        <p className={`mb-5 md:mb-6 mt-1.5 ${paragraphStyle}`}>
          4.96 of 56 Reviews
        </p>
        <p className={`mb-1.5 ${paragraphStyle}`}>United States</p>
        <p className={`mb-5 md:mb-6 ${paragraphStyle}`}>
          Fort Lauderdale 4:36 PM
        </p>

        <p className={`mb-1.5 ${paragraphStyle}`}>168 jobs posted</p>
        <p className={`mb-5 md:mb-6 ${paragraphStyle}`}>
          48% hire rate, 1 open job
        </p>
        <p className={`mb-1.5 ${paragraphStyle}`}>$368k total spent</p>
        <p className={`mb-5 md:mb-6 ${paragraphStyle}`}>90 hires, 9 active</p>

        <p className={`mb-1.5 ${paragraphStyle}`}>
          $14.13/hr/ avg hourly rate paid
        </p>
        <p className={paragraphStyle}>21,258 hours</p>

        <p className={`my-6 md:my-[30px] ${paragraphStyle}`}>
          Member since Aug 11, 2008
        </p>
        <h3 className="mb-2 fs-lg-lh-lg">Job link</h3>

        <CopyClientJobLink />
      </div>
    </div>
  );
};

export default ClientDetails;
