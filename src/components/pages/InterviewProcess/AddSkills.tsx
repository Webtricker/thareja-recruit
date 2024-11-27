import PowerdByRecruit from "@/components/shared/copyRight/PowerdByRecruit";
import { StartTestButton } from "./Buttons";
import { SkillsForm } from "./SkillsForm";

const AddSkills = () => {
  return (
    <>
      <h1 className="text-center fs-3xl mb-[23px] mx-auto">
        Add your top skills
      </h1>
      <p className="text-center fs-md leading_normal tracking-[0.4px] max-w-[615px] mx-auto block ">
        Add your top skills and make sure to accurately rate yourself on each
        skill. Choose specific skills (ex; React, Node.js, Quickbooks, Project
        management ,etc.)
      </p>

      <SkillsForm />

      <p className="text-center fs-md leading_normal tracking-[0.4px] max-w-[615px] mx-auto block ">
        Please note that this test is timed, with an approximate collection of 2
        minutes per question and the timer will start as soon as you see the
        question
      </p>

      <StartTestButton />
      <p className="text-center fs-md leading_normal tracking-[0.4px] max-w-[615px] mx-auto block my-5">
        Note: please do not refresh the page or you’ll lose the data.
      </p>
      <PowerdByRecruit />
    </>
  );
};

export default AddSkills;
