import Image from "next/image";
import {
  ButtonsPopular,
  CheckStatusPageButton,
  Search,
} from "./DynamicComponents";

export const TopBanner = () => {
  return (
    <div className="w-full p-[1px] rounded-[30px] bg-gradient-to-r from-[#01D18F] to-[#005AFF]">
      <div className="w-full flex  items-center bg-[#FBFCFF] rounded-[30px] justify-between flex-wrap-reverse ">
        {/* ======= left container =========  */}
        <div className="flex-grow  p-8 md:p-9 lg:py-10  lg:px-[50px] lg:pr-0">
          <p className="fs-lg-lh-normal text-[#525966] mb-2.5">Help Center</p>
          <h2 className="fs-4xl mb-[14px]">Find solutions fast.</h2>
          <p className="fs-lg-lh-normal">
            Search hundreds of articles on Recruit Help
          </p>
          <Search />
          <div className="w-full flex items-center gap-[14px] flex-wrap ">
            <p className="fs-lg-lh-normal">Popular: </p>
            <ButtonsPopular />
          </div>
        </div>
        {/* ======== right container ========== */}
        {/* young-woman-jane-freelance-worker-working-with-laptop-home-daily-work-routine-3d-vector-people-character-illustration_979495-134078-transformed.svg */}
        <Image
          className="mx-auto lg:mx-10 2xl:mx-[70px]"
          height={385}
          width={385}
          src="/img/support/young-woman-jane-freelance-worker-working-with-laptop-home-daily-work-routine-3d-vector-people-character-illustration_979495-134078-transformed.svg"
          alt="Freelancer working Image"
        />
      </div>
    </div>
  );
};

type ServiceCardProps = {
  children: React.ReactNode;
  title: string;
  des: string;
};
export const ServiceCard = ({ children, des, title }: ServiceCardProps) => {
  return (
    <div className="service-card-shadow flex-grow w-full p-[30px] rounded-[20px] border hover:border-transparent border-[#97BCFF] min-h-[222px]">
      {children}
      <h3 className="fs-xl-lh-lg mt-[18px] mb-1.5">{title}</h3>

      <p className="fs-base">{des}</p>
    </div>
  );
};

export const RecruitServiceMiddleBanner = () => {
  return (
    <div className="w-full overflow-hidden flex text-white  items-center bg-[#005AFF] rounded-[30px] justify-between flex-wrap-reverse md:flex-nowrap mb-[50px] md:mb-[60px]">
      {/* ======= left container =========  */}
      <div className="flex-grow  p-8 md:p-9 lg:py-10  lg:px-[50px] lg:pr-0">
        <p className="fs-lg-lh-normal ">Recruit Status</p>
        <h2 className="fs-4xl my-7">
          Check the current status of Recruit services.
        </h2>

        <CheckStatusPageButton />
      </div>
      {/* ======== right container ========== */}
      <Image
        className="mx-auto md:mx-10 2xl:mx-[70px]"
        height={284}
        width={196}
        src="/img/support/middle-banner-hand-image.svg"
        alt="Freelancer working Image"
      />
    </div>
  );
};
