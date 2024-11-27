import Link from "next/link";

type PropsType = {
  activeId: number;
  jobTitle?: string;
};

const ViewJobPostNavigator = ({ activeId, jobTitle }: PropsType) => {
  // #005AFF
  return (
    <section className="w-full">
      <h1 className="fs-5xl text-[#30353E] mb-[30px] md:mb-[40px]">
        UX/UI Design
      </h1>

      <div className="flex flex-col md:flex-row md:flex-wrap lg:grid lg:grid-cols-2 gap-y-1 md:gap-y-4 2xl:flex 2xl:flex-nowrap mb-[50px] md:mb-[64px] ">
        {/* ======== FIRST LINK STARTS ========= */}
        <Link
          href="/view-job-post"
          className="flex items-center bg-white my-0.5 py-2.5 w-full md:w-[56%] lg:w-full 2xl:w-[27%] lg:min-w-[310px] 2xl:max-w-[410px]  relative"
        >
          <div className="view-jobpost-link-shadow absolute top-[50%] z-50 translate-y-[-50%] left-0 flex items-center justify-center w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-gradient-to-tr from-[#005AFF] to-[#01D18F] rounded-full">
            <div className=" w-[66px] h-[66px] md:w-[74px] md:h-[74px] bg-white rounded-full flex items-center justify-center">
              <span className="text-[25px] md:text-[27px] text-[#005AFF]">
                1
              </span>
            </div>
          </div>
          <div
            className={`rounded-e-[10px] md:rounded-none w-full py-2  z-10  md:py-2.5 md:min-h-[60px] pl-[80px] md:pl-[70px] lg:pl-[80px] mx-5  ${
              activeId === 1
                ? "bg-[#005AFF] text-white"
                : "text-[#005AFF] bg-[#005aff4d] "
            }`}
          >
            <p className="fs-lg-lh-lg !leading-[35px]">View Job Post</p>
          </div>
          <div className="hidden md:block absolute top-[3px] z-40 right-[-45px] md:right-[-15px] w-[75px] -ml-[15px] h-[75px] rounded-full bg-white"></div>
        </Link>
        {/* ======== FIRST LINK ENDS ========= */}

        {/* ======== SECOND LINK STARTS ========= */}
        <Link
          href="/invite-freelancers"
          className="flex items-center bg-white my-0.5 py-2.5 w-full md:w-[44%] lg:w-full 2xl:w-[24%] lg:min-w-[306.75px]  2xl:max-w-[410px]  relative"
        >
          <div className="view-jobpost-link-shadow absolute top-[50%] z-50 translate-y-[-50%] left-0 md:-left-[40px] flex items-center justify-center w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-gradient-to-tr from-[#005AFF] to-[#01D18F] rounded-full">
            <div className="w-[66px] h-[66px] md:w-[74px] md:h-[74px] bg-white rounded-full flex items-center justify-center">
              <span className="text-[25px] md:text-[27px] text-[#005AFF]">
                2
              </span>
            </div>
          </div>
          <div
            className={`w-full rounded-e-[10px] md:rounded-none  py-2  z-10  md:py-2.5 md:min-h-[60px] pl-20 md:pl-[30px] lg:pl-10 mx-5 ${
              activeId === 2
                ? "bg-[#005AFF] text-white"
                : "text-[#005AFF] bg-[#005aff4d] "
            } `}
          >
            <p className="fs-lg-lh-lg !leading-[35px]">Invite Freelancers</p>
          </div>
          <div className="hidden md:block absolute top-[3px] z-40 right-[-45px] 2xl:right-[-15px] w-[75px] -ml-[15px] h-[75px] rounded-full bg-white"></div>
        </Link>
        {/* ======== SECOND LINK ENDS ========= */}

        {/* ======== THIRD LINK STARTS ========= */}
        <Link
          href="/review-proposals"
          className="flex items-center bg-white my-0.5 py-2.5  w-full md:w-[56%] lg:w-full 2xl:w-[24%] lg:min-w-[360px]  2xl:max-w-[410px]  relative"
        >
          <div className="view-jobpost-link-shadow absolute top-[50%] z-50 translate-y-[-50%] left-0 2xl:left-[-40px] flex items-center justify-center w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-gradient-to-tr from-[#005AFF] to-[#01D18F] rounded-full">
            <div className="w-[66px] h-[66px] md:w-[74px] md:h-[74px] bg-white rounded-full flex items-center justify-center">
              <span className="text-[25px] md:text-[27px] text-[#005AFF]">
                3
              </span>
            </div>
          </div>
          <div
            className={`rounded-e-[10px] md:rounded-none w-full py-2  z-10  md:min-h-[60px]  md:py-2.5 pl-20 md:pl-[70px] lg:pl-20 2xl:pl-10 mx-5 ${
              activeId === 3
                ? "bg-[#005AFF] text-white"
                : "text-[#005AFF] bg-[#005aff4d] "
            } `}
          >
            <p className="fs-lg-lh-normal">Review Proposals (60)</p>
            <p className="text-[12px] tracking-[0.24px] leading-[15px]">
              Shortlisted (0)
            </p>
          </div>
          <div className="hidden md:block absolute top-[3px] z-40 right-[-45px] md:right-[-15px] w-[75px] -ml-[15px] h-[75px] rounded-full bg-white"></div>
        </Link>
        {/* ======== THIRD LINK ENDS ========= */}
        {/* ======== FOURTH LINK STARTS ========= */}
        <Link
          href="/hire-freelancers"
          className="flex items-center bg-white my-0.5 py-2.5 w-full md:w-[44%] lg:w-full 2xl:w-[24%] lg:min-w-[202px]  2xl:max-w-[410px]  relative"
        >
          <div className="view-jobpost-link-shadow absolute top-[50%] z-50 translate-y-[-50%] left-0 md:-left-[40px] flex items-center justify-center w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-gradient-to-tr from-[#005AFF] to-[#01D18F] rounded-full">
            <div className=" w-[66px] h-[66px] md:w-[74px] md:h-[74px] bg-white rounded-full flex items-center justify-center">
              <span className="text-[25px] md:text-[27px] text-[#005AFF]">
                4
              </span>
            </div>
          </div>
          <div
            className={`rounded-e-[10px] md:rounded-none w-full py-2  z-10  md:py-2.5 md:min-h-[60px] pl-[80px] md:pl-[30px] lg:pl-10 mx-5 ${
              activeId === 4
                ? "bg-[#005AFF] text-white"
                : "text-[#005AFF] bg-[#005aff4d] "
            }`}
          >
            <p className="fs-lg-lh-lg !leading-[35px]">Hire (1)</p>
          </div>
          <div className="hidden md:block absolute top-[3px] z-40 right-[-45px] 2xl:right-[-30px] w-[75px] -ml-[15px] h-[75px] rounded-full bg-white"></div>
        </Link>
        {/* ======== FOURTH LINK ENDS ========= */}
      </div>
    </section>
  );
};

export default ViewJobPostNavigator;
