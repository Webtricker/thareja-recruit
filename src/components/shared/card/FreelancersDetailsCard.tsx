import Image from "next/image";
import Link from "next/link";
import { CrownSVG, HeartSVG, LocationSVG, TopRatedSVG } from "./Icons";
import ThunderSVG from "./ThunderSVG";

// we will change this PropsTypes according to our needs.
type PropsType = {
  coverLetter?: boolean;
};
const FreelancersDetailsCard = ({ coverLetter }: PropsType) => {
  return (
    <div className="relative w-full p-5  md:p-10 md:pt-20 border border-[#005aff33] bg-[#005aff05] rounded-[20px]  flex flex-col lg:flex-row gap-5 md:gap-[30px] items-start">
      <p className="w-auto max-w-[112px] inline absolute top-5 right-5 md:right-0 md:left-10 py-2 px-2.5 rounded-[10px] bg-gradient-to-r to-[#FAFCFF] from-[#E1E5FF] fs-base text-[#005AFF]">
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
      <div className="w-full">
        {/* ===========  top container =========== */}
        <div className="w-full mb-5 flex  items-start justify-between flex-wrap gap-5">
          <div>
            <h2 className="fs-xl-lh-normal mb-1.5">Muhammad I.</h2>
            <p className="fs-base mb-1.5">
              Senior UI UX Designer | Product Designer | SaaS | Figma
            </p>
            <div className="flex items-center gap-4 flex-wrap md:flex-nowrap  md:min-w-[440px] w-full">
              <p className="fs-base flex items-center gap-2 text-[#FF9314]">
                <TopRatedSVG /> <span>Top rated</span>
              </p>
              <p className="text-[12px] tracking-[0.24px] leading-normal flex items-center gap-1.5 py-1.5 px-[14px] border border-[#005AFF] rounded-[20px]">
                <ThunderSVG />
                <span>Available Now</span>
              </p>
              <p className="fs-base flex items-center gap-2 text-[#9EAB0C]">
                <CrownSVG /> <span>98% job sucess</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <button className="btn-gradient-light-blue ">
              <HeartSVG />
            </button>
            <button className="fs-md py-2 md:py-3 lg:py-4 px-[20px] md:px-[30px] lg:px-10 rounded-[30px] md:rounded-[100px] text-white bg-[#005AFF]">
              Invite
            </button>

            <button className="fs-md  py-2 md:py-3 lg:py-4 px-[20px] md:px-[30px] lg:px-10 rounded-[30px] md:rounded-[100px] bg-[#dde3e766] text-[#525966cc]">
              Hire
            </button>
          </div>
        </div>

        {/* ===========  bottom container =========== */}

        <div className="w-full">
          <div className="flex items-center flex-wrap gap-y-2.5 w-full mb-[30px]">
            <p className="fs-base flex items-center gap-1 mr-[30px]">
              <LocationSVG />
              <span>Pakistan</span>
            </p>
            <p className="fs-base mr-[60px]">
              $ <span>40.00/hr</span>
            </p>
            <p className="fs-base">
              $ <span>5k+ earned </span>
            </p>
          </div>

          {/* skills container  */}
          <div className="flex gap-[14px] flex-wrap">
            <p className="fs-md skill-btn-large">Application Design</p>
            <p className="fs-md skill-btn-large">Website Design</p>
            <p className="fs-md skill-btn-large">Prototyping</p>
            <p className="fs-md skill-btn-large">Website Copywriting</p>
            <p className="fs-md skill-btn-large">Product Description</p>
          </div>
          {coverLetter ? (
            <div className="full mt-5 md:mt-[30px]">
              <p className="fs-base">
                <span className="text-[#005AFF]">Cover letter</span>{" "}
                <span>
                  - Already working on a similar project using the GPT-4 Model
                  which has access to the website to get statistics. You may
                  check out the sample article.
                </span>
                <Link
                  className="text-wrap inline-flex flex-wrap"
                  target="_blank"
                  href="https://docs.google.com/document/d/1JRbwokohV-mWN78ggLOYU62VBU2nLH1cORqdMOLJNEU/edit"
                >
                  {" "}
                  https://docs.google.com<span>/document/d/</span>
                  <span>1JRbwokohV-</span>
                  <span>mWN78ggLOY</span>
                  <span>U62VBU2n</span>
                  <span>LH1cORq</span>
                  <span>dMOLJNEU</span>/edit{" "}
                </Link>
                <span>Hi, I hope you are having a good day.</span>
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default FreelancersDetailsCard;
