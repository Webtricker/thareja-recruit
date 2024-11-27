import { HeartSVG } from "@/components/shared/card/Icons";
import Image from "next/image";
import Link from "next/link";
import {
  DollarSVG,
  GraphMonitorSVG,
  RatingStarSVG,
  RightArrowLongSVG,
  RightArrowSVG,
  RoundedLocationSVG,
  SmallSuitcaseSVG,
  VideoSVG,
  XMarkWhiteSVG,
} from "./Icons";

const GidedTour = () => {
  return (
    <div className="min-h-[467px] p-5 md:p-6 w-full flex flex-col gap-1 bg-[#005AFF] rounded-[20px]">
      <div className="w-full flex items-center justify-between mb-[18px]">
        <GraphMonitorSVG /> <XMarkWhiteSVG />
      </div>
      <p className="mb-5 text-white fs-base">Guided tour</p>

      <p className=" text-white fs-lg-lh-normal">
        Book a consultation with an expert to review your project’s budget,
        timeline, and scope one-on-one.
      </p>

      <div className="w-full mt-auto mx-auto flex items-center justify-center">
        <button className="fs-md py-2.5 md:py-3 px-5 md:px-8 lg:px-[40px] rounded-[100px] bg-white text-[#005AFF] ">
          Learn more
        </button>
      </div>
    </div>
  );
};

type ConsultationCardPropsType = {
  className?: string;
  imgUrl: string;
  badgeType?: "PING" | "GREEN" | "YELLOW";
  name: string;
  location: string;
  hourlyRate: string;
  jobExperience: string;
  rating: number;
  skills: string;
  children: React.ReactNode;
  showBadge: boolean;
};
const ConsultationCard = ({
  badgeType,
  children,
  hourlyRate,
  imgUrl,
  jobExperience,
  location,
  name,
  rating,
  skills,
  showBadge,
}: ConsultationCardPropsType) => {
  return (
    <div className="min-h-[467px] p-5 md:p-6 w-full flex flex-col gap-1 border border-[#005aff33] rounded-[20px]">
      <div className="w-full flex mb-5 items-start">
        <div className="mr-[14px] rounded-full w-[58px] h-[58px] relative p-[3px] border border-[#DDE3E7] flex items-center justify-center">
          <Image src={imgUrl} alt="Profile Image" width={58} height={58} />
          <span className="absolute -top-1 -left-1">
            <svg
              className="inline bg-white rounded-full icon-round-shadow"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12.083"
                cy="8.75"
                r="6.75"
                fill={
                  badgeType === "PING"
                    ? "#FF1694"
                    : badgeType === "GREEN"
                    ? "#067964"
                    : badgeType === "YELLOW"
                    ? "#FF9314"
                    : ""
                }
              />
              <path
                d="M6.8618 15.4082L3.84863 20.7187L7.45613 19.9696L8.71984 23.5312L12.2393 17.3437L6.8618 15.4082ZM17.6167 15.4082L12.2393 17.3437L15.7585 23.5312L17.0223 19.9696L20.6299 20.7187L17.6167 15.4082Z"
                fill={
                  badgeType === "PING"
                    ? "#FF1694"
                    : badgeType === "GREEN"
                    ? "#067964"
                    : badgeType === "YELLOW"
                    ? "#FF9314"
                    : ""
                }
              />
              <path
                d="M5.20801 8.90625C5.20801 12.7833 8.36223 15.9375 12.2393 15.9375C16.1163 15.9375 19.2705 12.7833 19.2705 8.90625C19.2705 5.02922 16.1163 1.875 12.2393 1.875C8.36223 1.875 5.20801 5.02922 5.20801 8.90625ZM12.2393 2.8125C15.5994 2.8125 18.333 5.54606 18.333 8.90625C18.333 12.2664 15.5994 15 12.2393 15C8.87907 15 6.14551 12.2664 6.14551 8.90625C6.14551 5.54606 8.87907 2.8125 12.2393 2.8125Z"
                fill={
                  badgeType === "PING"
                    ? "#FF1694"
                    : badgeType === "GREEN"
                    ? "#067964"
                    : badgeType === "YELLOW"
                    ? "#FF9314"
                    : ""
                }
              />
              <path
                d="M7.89845 8.07056L9.71542 9.86077L9.29738 12.3768C9.2831 12.4627 9.29303 12.5509 9.32606 12.6314C9.35909 12.712 9.41391 12.7818 9.48437 12.8329C9.5548 12.8841 9.63806 12.9146 9.72486 12.9211C9.81165 12.9276 9.89854 12.9098 9.97581 12.8698L12.2395 11.6942L14.5031 12.8698C14.5804 12.9099 14.6673 12.9277 14.7541 12.9212C14.8408 12.9147 14.9241 12.8841 14.9945 12.833C15.065 12.7818 15.1198 12.7121 15.1528 12.6315C15.1859 12.5509 15.1958 12.4628 15.1815 12.3769L14.7635 9.86077L16.5804 8.07056C16.6425 8.00949 16.6863 7.93234 16.7069 7.84776C16.7275 7.76318 16.7242 7.67452 16.6973 7.59174C16.6703 7.50896 16.6208 7.43531 16.5544 7.37904C16.488 7.32277 16.4072 7.2861 16.3211 7.27313L13.7996 6.89358L12.6586 4.61189C12.6197 4.53402 12.5599 4.46852 12.4859 4.42274C12.4118 4.37697 12.3265 4.35272 12.2394 4.35272C12.1524 4.35272 12.0671 4.37697 11.993 4.42274C11.919 4.46852 11.8591 4.53402 11.8202 4.61189L10.6793 6.89358L8.15776 7.27313C8.07169 7.28609 7.99092 7.32276 7.92451 7.37904C7.8581 7.43531 7.80867 7.50897 7.78176 7.59175C7.75485 7.67453 7.75151 7.76316 7.77213 7.84773C7.79275 7.9323 7.83646 8.00946 7.89845 8.07056ZM11.0596 7.78434C11.2105 7.76166 11.3409 7.66697 11.4092 7.53056L12.2395 5.86969L13.0699 7.53061C13.1036 7.59783 13.1529 7.65598 13.2137 7.70014C13.2746 7.74431 13.3451 7.77321 13.4195 7.78439L15.2547 8.06072L13.9321 9.36352C13.8786 9.41632 13.8386 9.48121 13.8154 9.55271C13.7921 9.62422 13.7864 9.70025 13.7987 9.77442L14.103 11.6056L12.4554 10.7502C12.3887 10.7155 12.3146 10.6975 12.2394 10.6975C12.1642 10.6975 12.0902 10.7155 12.0234 10.7502L10.3759 11.6056L10.6802 9.77442C10.6926 9.70025 10.6869 9.62419 10.6637 9.55267C10.6404 9.48115 10.6003 9.41627 10.5467 9.36352L9.22435 8.06072L11.0596 7.78434ZM12.7083 0.46875C12.7083 0.727641 12.4984 0.9375 12.2395 0.9375C11.9806 0.9375 11.7708 0.727641 11.7708 0.46875C11.7708 0.209859 11.9806 0 12.2395 0C12.4984 0 12.7083 0.209859 12.7083 0.46875Z"
                fill={
                  badgeType === "PING"
                    ? "#FF1694"
                    : badgeType === "GREEN"
                    ? "#067964"
                    : badgeType === "YELLOW"
                    ? "#FF9314"
                    : ""
                }
              />
              <path
                d="M10.0301 0.276335C6.08691 1.28284 3.33301 4.83165 3.33301 8.90626C3.33301 11.4369 4.39707 13.8216 6.2649 15.5103L3.44082 20.4873C3.39637 20.5657 3.37546 20.6552 3.38059 20.7452C3.38572 20.8352 3.41667 20.9218 3.46974 20.9946C3.52281 21.0674 3.59575 21.1234 3.67982 21.1559C3.7639 21.1884 3.85554 21.1959 3.94379 21.1776L7.15088 20.5117L8.27809 23.688C8.30811 23.7726 8.36182 23.8469 8.43282 23.9018C8.50382 23.9568 8.58912 23.9902 8.67857 23.9981C8.76802 24.006 8.85785 23.988 8.93737 23.9463C9.0169 23.9046 9.08276 23.8409 9.12713 23.7629L12.2393 18.2917L15.3511 23.7629C15.3921 23.8348 15.4513 23.8946 15.5228 23.9362C15.5943 23.9779 15.6756 23.9998 15.7584 23.9998C15.7721 23.9998 15.786 23.9993 15.7997 23.9982C15.8892 23.9902 15.9745 23.9568 16.0455 23.9018C16.1165 23.8468 16.1703 23.7726 16.2004 23.688L17.3274 20.5117L20.5345 21.1776C20.7147 21.215 20.9001 21.1434 21.0085 20.9947C21.0617 20.9219 21.0927 20.8353 21.0978 20.7453C21.1029 20.6553 21.082 20.5657 21.0375 20.4873L18.2135 15.5103C20.0814 13.8215 21.1454 11.4369 21.1454 8.90626C21.1454 4.8316 18.3915 1.28284 14.4485 0.276335C14.3888 0.261086 14.3268 0.257737 14.2658 0.26648C14.2049 0.275223 14.1463 0.295886 14.0933 0.327288C14.0404 0.358691 13.9941 0.400218 13.9572 0.449497C13.9203 0.498776 13.8935 0.554842 13.8783 0.614491C13.8142 0.865366 13.9656 1.1206 14.2165 1.18468C17.7441 2.08519 20.208 5.26046 20.208 8.90626C20.208 13.3434 16.6043 16.875 12.2393 16.875C7.87107 16.875 4.27051 13.3405 4.27051 8.90626C4.27051 5.26046 6.73421 2.08519 10.2619 1.18468C10.5128 1.1206 10.6642 0.865366 10.6003 0.614491C10.5851 0.554837 10.5583 0.498766 10.5214 0.449484C10.4845 0.400201 10.4382 0.358671 10.3853 0.327268C10.3323 0.295865 10.2737 0.275204 10.2127 0.266464C10.1518 0.257725 10.0897 0.261079 10.0301 0.276335ZM8.81902 22.4088L7.89784 19.8129C7.85996 19.7061 7.78469 19.6167 7.68596 19.5611C7.58723 19.5056 7.47172 19.4876 7.36079 19.5106L4.76748 20.0491L7.00248 16.1102C8.3056 17.0575 9.84863 17.6347 11.4532 17.7775L8.81902 22.4088ZM17.1175 19.5106C17.0066 19.4877 16.8911 19.5056 16.7924 19.5612C16.6937 19.6167 16.6184 19.7062 16.5805 19.8129L15.6595 22.4088L13.0251 17.7775C14.6299 17.6347 16.1728 17.0575 17.4761 16.1102L19.7111 20.0491L17.1175 19.5106Z"
                fill={
                  badgeType === "PING"
                    ? "#FF1694"
                    : badgeType === "GREEN"
                    ? "#067964"
                    : badgeType === "YELLOW"
                    ? "#FF9314"
                    : ""
                }
              />
              <path
                d="M16.0887 8.33L14.479 9.91579L14.3495 10.0433L14.3793 10.2225L14.7497 12.4516L12.7443 11.4103L12.583 11.3266L12.4217 11.4103L10.4162 12.4517L10.7866 10.2225L10.8164 10.0433L10.687 9.91579L9.07729 8.33003L11.3113 7.99374L11.491 7.96669L11.5722 7.80416L12.583 5.78262L13.5938 7.80416L13.675 7.96669L13.8547 7.99374L16.0887 8.33Z"
                stroke="white"
                strokeWidth="0.7"
              />
            </svg>
          </span>
        </div>
        <div className="flex-grow flex flex-col justify-start">
          <p className="mb-0.5 fs-base">{name}</p>
          <div className="w-full flex gap-1">
            <RoundedLocationSVG />{" "}
            <p className="text-[14px] text-[#525966]">{location}</p>
          </div>
        </div>
        <button className="btn-gradient-light-blue ">
          <HeartSVG />
        </button>
      </div>

      {/* ====== body ======= */}
      <div className="w-full flex justify-between">
        <p className="flex items-center gap-1.5">
          <DollarSVG /> <span className="fs-base">{hourlyRate}/hr</span>
        </p>

        <p className="flex items-center gap-1.5">
          <SmallSuitcaseSVG />{" "}
          <span className="fs-base lg:max-w-[270px]">{jobExperience}</span>
        </p>
        <p className="flex items-center gap-1.5">
          <RatingStarSVG /> <span className="fs-base">{rating}</span>
        </p>
      </div>
      {/* ======= seperator ======== */}
      <span className="w-full h-[1px] block my-2.5 md:my-3 bg-[#DDE3E7]"></span>

      <div className="w-full fs-sm">{skills}</div>

      {/* ======= seperator ======== */}
      <span className="w-full h-[1px] block my-2.5 md:my-3 bg-[#DDE3E7]"></span>
      {children}

      <div className="w-full mt-auto">
        <button className="fs-md w-full py-2.5 md:py-3 px-5 md:px-8 lg:px-[40px] rounded-[100px] border border-[#005AFF] text-[#005AFF] ">
          Book a consultation
        </button>
      </div>
    </div>
  );
};

// type PropsType = {
//     className?: string;
//   };
const ProjectGoalCards = () => {
  return (
    <div className=" relative w-full items-center grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] 2xl:flex  gap-8 2xl:gap-[32px] mb-11 2xl:mb-[60px]">
      {/* ========= Guided tour card ======== */}
      <GidedTour />
      <ConsultationCard
        showBadge={true}
        hourlyRate="40.00"
        imgUrl="/svgs/Project-goals-freelancer-profile-jobs-page.svg"
        jobExperience="7"
        location="Pakistan"
        name="Muhammad I."
        rating={4.91}
        skills="Senior UI UX Designer | Product Designer | SaaS | Figma"
        badgeType="PING"
        className=""
        key="Profile card"
      >
        <p className="w-full text-[14px] md:text-[16px] leading_normal">
          My portfolio: zoie- <br />
          portfolio-2021.webflow.io 👋Hey, my <br /> name is Yicheng or people
          usually call <br /> me Zoie.
        </p>
      </ConsultationCard>
      <ConsultationCard
        showBadge={false}
        hourlyRate="40.00"
        imgUrl="/svgs/Project-goals-freelancer-profile-jobs-page.svg"
        jobExperience="7"
        location="Pakistan"
        name="Muhammad I."
        rating={4.91}
        skills="Senior UI UX Designer | Product Designer | SaaS | Figma"
        badgeType="GREEN"
        className=""
        key="Profile card"
      >
        <p className="h-[74px] w-full text-[14px] md:text-[16px] leading_normal">
          Hi there. Thanks for stopping by! I am an award-winning Graphic
          Designer and Art Director with 5+ year...
        </p>
        {/* ======= seperator ======== */}
        <span className="w-full h-[1px] block my-2.5 md:my-3 bg-[#DDE3E7]"></span>
        <div className="w-full flex items-center gap-1">
          <VideoSVG />{" "}
          <span className="text-[14px] leading_normal text-[#005AFF]">
            100$ per 30minutes Zoom meeting
          </span>
        </div>
      </ConsultationCard>
      <ConsultationCard
        showBadge={true}
        hourlyRate="40.00"
        imgUrl="/svgs/Project-goals-freelancer-profile-jobs-page.svg"
        jobExperience="7"
        location="Pakistan"
        name="Muhammad I."
        rating={4.91}
        skills="Senior UI UX Designer | Product Designer | SaaS | Figma"
        badgeType="YELLOW"
        className=""
        key="Profile card"
      >
        I&apos;m a storyteller, designer, and University of
        Pennsylvania-educated, Amazon Web Services-certified
        {/* ======= seperator ======== */}
        <span className="w-full h-[1px] block my-2.5 md:my-3 bg-[#DDE3E7]"></span>
        <div className="w-full flex items-center gap-1">
          <VideoSVG />{" "}
          <span className="text-[14px] leading_normal text-[#005AFF]">
            100$ per 30minutes Zoom meeting
          </span>
        </div>
      </ConsultationCard>
      <button className="mt-5 2xl:mt-0 2xl:absolute top-[50%] w-[35.2px] h-[35.2px] -right-[17.5px] translate-y-[-50%] bg-shadow dropdown_shadow ml-2.5 2xl:ml-0 rounded-full flex items-center justify-center max-w-[35.2px] min-h-[35.2px] max-h-[35.2px]">
        <RightArrowSVG />
      </button>
    </div>
  );
};

//  ===== root component ======
const ProjectGoals = () => {
  return (
    <div className="w-full">
      <div className="w-full gap-y-5 lg:flex-nowrap flex-wrap flex items-center justify-between mb-10 xl:mb-11 2xl:mb-[60px]">
        <h3 className="text-[#30353E] fs-4xl ">
          Review your project’s goals with an expert, one-on-one
        </h3>
        <Link href="#" className="flex items-center gap-[18px] ">
          <span className=" fs-xl-lh-normal text-[#005AFF]">
            Browse experts
          </span>{" "}
          <RightArrowLongSVG />
        </Link>
      </div>
      <ProjectGoalCards />
    </div>
  );
};

export default ProjectGoals;
