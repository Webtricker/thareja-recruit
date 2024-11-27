import {
  CurrentComponentIndex,
  JobBudgetDetails,
  JobTitleInput,
  RequiredSkillsSelector,
} from "./ClientComponents";
import {
  JobDuration,
  JobExperienceLavel,
  JobScale,
  JobWorkSchedule,
} from "./Dropdown";
import JobDescriptionMessage from "./JobDescriptionMessage";
import JobFileUploadInput from "./JobFileUploadInput";

// ======= title component ======
export const JobTitle = () => {
  return (
    <div className=" w-full max-w-[1302px] mx-auto block lg:flex gap-10 justify-between">
      <div className="left-job-content ">
        <CurrentComponentIndex />
        <h1 className="leading-none text-[35px] md:text-10 tracking-[-1.2px] my-5 w-full">
          Let&apos;s start with a strong title.
        </h1>
        <p className="fs-base ">
          This helps your job post stand out to the right candidates. It’s the
          first thing they’ll see, so make it count!
        </p>
      </div>

      <div className="right-item w-full lg:max-w-[600px]">
        {/* Search Bar Section */}
        <div className="search-bar w-full">
          <h2 className="fs-lg-lh-lg mb-2.5">
            Write a title for your job post
          </h2>
          <JobTitleInput />
        </div>
        {/* Order List Section */}
        <div className="order-list mt-[34px]">
          <h4 className="fs-base">Example titles</h4>
          <ul className=" w-full py-4 list-disc px-5">
            <li className="fs-base">
              Build responsive WordPress site with booking/payment functionality
            </li>
            <li className="fs-base">
              {" "}
              Graphic designer needed to design ad creative for multiple
              campaigns
            </li>
            <li className="fs-base">
              {" "}
              Facebook ad specialist needed for product launch
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// ======== required skills ========
export const JobPostRequiredSkills = () => {
  return (
    <div className=" block max-w-[1302px] mx-auto lg:flex gap-10 justify-between">
      <div className="left-job-content ">
        <CurrentComponentIndex />
        <h1 className="fs-4xl mt-5 text-[#30353E]">
          What are the main skills required for your work?
        </h1>
      </div>
      <div className="right-item my-14 w-full lg:w-[694px]">
        <h2 className="fs-lg-lh-lg mb-[14px]">Search skills or add your own</h2>
        <RequiredSkillsSelector />
      </div>
    </div>
  );
};

// ======= Job scope ========
export const JobPostScope = () => {
  return (
    <div className="w-full max-w-[1302px] mx-auto block lg:flex gap-10 justify-between">
      <div className="left-job-content mb-10">
        <CurrentComponentIndex />
        <h1 className="fs-4xl mt-5 text-[#30353E]">
          Next, estimate the scope of your work.
        </h1>
        <p className="fs-base">
          Consider the size of your project and the time it will take.
        </p>
      </div>

      <div className="right-item flex flex-col gap-[28px] w-full lg:w-[600px]">
        <JobScale />
        <JobDuration />
        <JobExperienceLavel />
        <JobWorkSchedule />
      </div>
    </div>
  );
};

// ======= job budget ========
export const JobPostWithoutAiJobBudget = () => {
  return (
    <div className="w-full max-w-[1487px] mx-auto block ">
      <div className="left-job-content mb-10 !w-full">
        <CurrentComponentIndex />
        <h1 className="fs-4xl mt-4 text-[#30353E]">
          Tell us your budget or your best guess.
        </h1>
        <p className="fs-base mt-4">
          Consider the size of your project and the time it will take.
        </p>
      </div>

      <JobBudgetDetails />
    </div>
  );
};

// ======= job description =========
export const JobPostDescription = () => {
  return (
    <div className="w-full max-w-[1302px] mx-auto block lg:flex gap-10 justify-between">
      <div className="left-job-content ">
        <CurrentComponentIndex />
        <h1 className="fs-4xl text-[#30353E] my-5">Start the conversation.</h1>
        <p className="fs-base tracking-[0.4px] mb-3">Talent are looking for:</p>

        <ul className="w-full list-disc ml-8 ">
          <li className="text-[18px]">
            Clear expectations about your task or deliverables
          </li>
          <li className="text-[18px]">
            The skills required for your work Good communication
          </li>
          <li className="text-[18px]">
            Details about how you or your team like to work
          </li>
        </ul>
      </div>

      <div className="right-item w-full lg:w-[600px] mt-5 lg:mt-0">
        <JobDescriptionMessage />
        <JobFileUploadInput />
      </div>
    </div>
  );
};
