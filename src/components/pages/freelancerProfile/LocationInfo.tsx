import { LocationSVG } from "@/components/shared/card/Icons";

const LocationInfo = () => {
  return (
    <div className="flex items-center flex-wrap gap-y-2.5 w-full mb-[35px] md:mb-[45px] lg:mb-[50px]">
      <p className="text-[#525966] fs-base flex items-center gap-1 mr-[30px]">
        <LocationSVG />
        <span>Bawalpur, Pakistan - 12:37 AM Local Time</span>
      </p>
      <p className="text-[#525966] fs-base ml-[30px]">
        Proposal Details: $40.00/hr
      </p>
      <p className="ml-1.5 text-[#525966] fs-xxs">Proposed bid</p>
    </div>
  );
};

export default LocationInfo;
