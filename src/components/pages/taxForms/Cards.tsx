import Image from "next/image";
import { ViewDetailsBtn } from "./Buttons";

export const WBBENCard = () => {
  return (
    <div className="relative w-full p-5 lg:p-[30px] border border-[#00000024] rounded-[20px]">
      <div className="w-full flex gap-5 md:mr-[105px]">
        <p className="fs-lg-lh-normal w-full md:max-w-[50px] max-w-[60px] sm:max-w-[200px] lg:max-w-[200px]">
          Year
        </p>
        <p className="fs-lg-lh-normal w-full max-w-[200px]">Submitted</p>
        <p className="fs-lg-lh-normal w-full max-w-[200px]">Status</p>
      </div>
      <span className="w-full h-[1px] block my-6 md:my-7 lg:my-[30px] bg-[#DDE3E7]"></span>
      <div className="w-full flex items-center justify-between flex-wrap xl:flex-nowrap gap-y-10">
        <div className="w-full flex gap-5 ">
          <p className="fs-lg-lh-normal w-full md:max-w-[50px] max-w-[60px] sm:max-w-[200px] lg:max-w-[200px]">
            2023
          </p>
          <p className="fs-lg-lh-normal w-full max-w-[200px]">December 15</p>
          <p className="fs-lg-lh-normal w-full max-w-[200px]">Completed</p>
        </div>
        <ViewDetailsBtn />
      </div>
    </div>
  );
};

export const RecruitCommunityCard = () => {
  return (
    <div className=" flex gap-5 flex-wrap-reverse items-center justify-between w-full p-5 lg:p-[30px] border border-[#00000024] rounded-[20px]">
      <div className="w-full max-w-[671px] min-w-[327px]">
        <h4 className="fs-lg-lh-normal mb-[14px]">Recruit Community</h4>
        <p className="fs-base">
          Find all the answers you need on local taxes and service fees in our
          hub
        </p>
      </div>
      <Image
        height={129}
        width={183}
        src="/svgs/settings/tax-form-document-business-tax-concept-money-with-calculator-3d-render-illustration_276199-345-transformed 1.svg"
        alt="tax document image"
      />
    </div>
  );
};
