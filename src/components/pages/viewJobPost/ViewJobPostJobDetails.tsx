import Image from "next/image";
import Link from "next/link";
import CalendarSVG from "./CalendarSVG";
import ClientDetails from "./ClientDetails";
import ClockSVG from "./ClockSVG";
import HourlyClockSVG from "./HourlyClockSVG";
import JobScheduleCard from "./JobScheduleCard";
import PersonSVG from "./PersonSVG";

const ViewJobPostJobDetails = () => {
  const paragraphStyle = "fs-lg-lh-lg";
  return (
    <>
      <section className="w-full flex flex-col lg:flex-row items-start gap-2 justify-between">
        <div className="w-full lg:max-w-[1088px] mb-10 lg:mb-0">
          <div className="md:flex items-center gap-[67px] ">
            <p className={paragraphStyle}>Posted 2 quarters ago</p>
            <p
              className={`flex items-center gap-2.5 mb-1.5 md:mb-0 ${paragraphStyle}`}
            >
              <Image
                width={28}
                height={28}
                className=""
                src="/svgs/location-black.svg"
                alt="Location icon"
              />
              <span>Worldwide</span>
            </p>
          </div>
          <hr className="block my-[30px] md:my-[35px] lg:my-10" />

          <p className={` ${paragraphStyle}`}>
            I need help hiring a recruiter to help me recruit staff or
            contractor in india & in the United States
          </p>

          <hr className="block my-[30px] md:my-[35px] lg:my-10" />

          {/*  ========== job schedules ========== */}
          <div className="flex flex-wrap gap-[30px] md:gap-x-[35px] lg:gap-x-10 ">
            <JobScheduleCard
              key="WEEKLY_HOUR"
              largeText="Less than 30 hrs/week"
              smallText="Less than 30 hrs/week"
              className="w-full md:max-w-[300px]"
            >
              <ClockSVG />
            </JobScheduleCard>
            <JobScheduleCard
              key="WORKING_MONTH"
              largeText="3 to 6 months"
              smallText="Project Length"
              className="w-full md:max-w-[210px]"
            >
              <CalendarSVG />
            </JobScheduleCard>
            <JobScheduleCard
              key="EXPERIENCE_TYPE"
              largeText="Intermediate"
              smallText="I am looking for a mix of experience and value"
              className="w-full md:max-w-[300px]"
            >
              <PersonSVG />
            </JobScheduleCard>
            <JobScheduleCard
              key="HOURLY_RATE"
              largeText="$15.00-$40.00"
              smallText="Hourly"
              className="w-full md:max-w-[225px]"
            >
              <HourlyClockSVG />
            </JobScheduleCard>
          </div>

          {/* ========== job schedules ends ============ */}
          <hr className="block my-[30px] md:my-[35px] lg:my-10" />
          <p className={` ${paragraphStyle}`}>Project Type: One-time project</p>
          <hr className="block my-[30px] md:my-[35px] lg:my-10" />
          {/* ======== Job Required skills ======== */}
          <div className="w-full">
            <p className={`mb-[12px] ${paragraphStyle}`}>
              Skills and Expertise
            </p>
            <div className="flex flex-wrap gap-[14px]">
              <p className="fs-md skill-btn-large">Mobile App Design</p>
              <p className="fs-md skill-btn-large">Website Design</p>
              <p className="fs-md skill-btn-large">Prototyping</p>
            </div>
          </div>
          <hr className="block mt-[30px] md:mt-[35px] lg:mt-10" />
        </div>

        {/* ========= right side client details panel ========= */}
        <ClientDetails />
      </section>

      {/* ========== similiar jobs on upwork ============= */}
      <section className="w-full p-[35px] md:p-[40px] lg:p-[40px] border border-[#005aff99] rounded-[20px] mt-10 md:mt-[50px] lg:mt-[60px]">
        <h2 className="fs-4xl mb-5 md:mb-6 lg:mb-[30px] ">
          Similar Jobs on Recruit
        </h2>
        <p className="fs-md font-normal">
          <Link className="mr-1.5 text-[#005AFF]" href="#">
            UX/UI Design
          </Link>
          <span>
            Hi looking ux ui designer who works in figma please share portfolio
          </span>
        </p>
        <p className="fs-md my-2.5 font-normal">
          <Link className="mr-1.5 text-[#005AFF]" href="#">
            UX/UI
          </Link>
          <span>
            Hello, I am looking for someone who can help me on my website, based
            on UI/UX, graphic design, and etc.
          </span>
        </p>
        <p className="fs-md font-normal">
          <Link className="mr-1.5 text-[#005AFF]" href="#">
            UX/UI designer of our mobile app
          </Link>
          <span>
            Looking for a UI/UX designer to design a clean & simple mobile app
            for us. Other details will be shared during the interview such as
            name of project and field ...
          </span>
        </p>
      </section>
    </>
  );
};

export default ViewJobPostJobDetails;
