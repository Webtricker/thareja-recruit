import { LocationSVG, TopRatedSVG } from "@/components/shared/card/Icons";
import Image from "next/image";
import { ClockSVG } from "./Icons";

const OffersFreelancerCard = () => {
  return (
    <div className="relative w-full p-5  md:p-10 md:pt-20 border border-[#005aff33] bg-[#005aff05] rounded-[20px]  flex flex-col lg:flex-row gap-5 md:gap-[30px] items-start">
      <p className="w-full block max-w-[120px] absolute top-5 right-5 md:right-0 md:left-10 py-2 px-2.5 rounded-[10px] bg-gradient-to-r to-[#FAFCFF] from-[#E1E5FF] fs-base text-[#005AFF]">
        Best Match
      </p>
      <div className="relative w-full h-auto max-w-[94px]">
        <Image
          src="/svgs/freelancer-profile.svg"
          width={84.27}
          height={84.27}
          alt="Profile"
          className="p-[2.86px] rounded-full w-[94.27px] h-[94.27px] border-[2.62px] border-[#01D18F]"
        />
        <span className="absolute z-50 right-[3.24px] bottom-[3.24px] w-[22.69px] h-[22.69px] rounded-full border-[1.62px] border-white bg-[#01D18F]"></span>
      </div>
      <div className="w-full ">
        {/* ===========  top container =========== */}
        <h2 className="fs-xl-lh-normal mb-1.5">Muhammad I.</h2>
        <p className="fs-base mb-1.5">
          Senior UI UX Designer | Product Designer | SaaS | Figma
        </p>
        <p className="fs-base flex items-center gap-2 text-[#FF9314] mb-5">
          <TopRatedSVG /> <span>Top rated</span>
        </p>
        <p className="fs-base flex items-center gap-1 mb-2.5">
          <LocationSVG />
          <span>Bahawalpur, Pakistan</span>
        </p>

        <p className="fs-base flex items-center gap-1">
          <ClockSVG />
          <span>12:38 AM Local time</span>
        </p>
      </div>
    </div>
  );
};

export default OffersFreelancerCard;
