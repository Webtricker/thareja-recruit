"use client";
import { SearchInput } from "@/components/shared/input/SearchInput";
import { setPostReviewActiveEditField } from "@/redux/features/jobpost/JobReviewSlice";
import { setJobPostRequiredSkills } from "@/redux/features/jobpost/jobPostSlice";
import { setJobPostErrors } from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlusSVG, XmarkSVG } from "../getStartedWithoutAi/Icons";
import { staticSkills } from "../getStartedWithoutAi/StaticData";
import WarningSVG from "../login/WarningSVG";
import JobReviewModalButtons from "./JobReviewModalButtons";
import JobReviewModalTitle from "./JobReviewModalTitle";
import ReviewIndustrySkills from "./ReviewIndustrySkills";
import ReviewRecruitingAndTalentSourcingSkills from "./ReviewRecruitingAndTalentSourcingSkills";

const EditJobSkills = () => {
  const dispatch = useDispatch();

  // ======= REDUX STATES VALUE
  const prevSelectedJobSkills = useSelector(
    (state: RootState) => state.jobPosting.requiredSkills
  );

  // ===========job posting error
  const error = useSelector(
    (state: RootState) => state.jobPostingStages.errors
  );

  // ========STATES starts========
  const [selectedJobSkills, setSelectedJobSkills] = useState(
    prevSelectedJobSkills
  );

  // ====== filter / short / find / search functionality

  // ========STATES ends========
  const [searchedSkills, setSearchedSkills] = useState<string[]>([]);

  // =====  handlers =======
  const handleCloseModal = () => {
    dispatch(setPostReviewActiveEditField(null));
  };
  const handleSaveData = () => {
    dispatch(setPostReviewActiveEditField(null));
    dispatch(setJobPostRequiredSkills(selectedJobSkills));
    dispatch(setJobPostErrors(null));
  };

  const handleRemove = (skill: string) => {
    setSelectedJobSkills(selectedJobSkills.filter((item) => item !== skill));
    setSearchedSkills([...searchedSkills, skill]);
  };

  const handleAddSkill = (skill: string) => {
    setSelectedJobSkills([...selectedJobSkills, skill]);
    dispatch(setJobPostErrors(null));
    setSearchedSkills(searchedSkills.filter((item) => item !== skill));
  };

  const handleSearch = (val: string) => {
    const filterSearchSkills = staticSkills.filter((skill) =>
      skill.toLowerCase().includes(val.toLowerCase())
    );
    setSearchedSkills(filterSearchSkills);
  };

  // component side effects & data fetching ====
  useEffect(() => {
    // get the data from the server
    setSearchedSkills(staticSkills);
  }, []);

  return (
    <div className=" w-full max-w-[776px] max-h-[95%] min-h-[250px] py-[20px] h-full rounded-[20px] md:rounded-[30px] bg-white shadow-md ">
      <div className="overflow-y-auto relative px-[20px] md:px-[32px] md:py-[30px] max-h-[100%] w-full h-full">
        <JobReviewModalTitle handler={handleCloseModal} label="Edit skills" />

        {/* =========skills select container starts 
                                    ===============*/}

        <div className="w-full mb-[40px] md:mb-[50px] lg:mb-[60px] 2xl:mb-[72px]">
          {/* ==========Review required job skills starts*/}
          <h3 className="fs-lg-lh-md mb-4">Search skills or add your own</h3>
          <SearchInput
            changeHandler={handleSearch}
            containerStyle="!px-6 !rounded-[100px] !gap-4 !bg-[#005aff05] !border-[#0000001a]"
            inputStyle="!rounded-[100px]"
            placeholder="Search skills or add your own"
          />

          {selectedJobSkills.length ? (
            <div className="w-full mt-7">
              <p className={`text-xl `}>Selected skills</p>
              <div className="selected-skills flex gap-[12px] pt-[20px] flex-wrap">
                {selectedJobSkills.map((skill) => (
                  <button
                    onClick={() => handleRemove(skill)}
                    key={skill}
                    className="jobpost-skill-btn !border-[#005AFF]"
                  >
                    <span>{skill}</span>
                    <XmarkSVG />
                  </button>
                ))}
              </div>
            </div>
          ) : null}
          {
            // Render error if no skill selected
            error?.field === "SKILLS" ? (
              <p className="text-[#FF0000] flex items-center gap-[6px] mt-[7px] md:mt-[10px]">
                <WarningSVG />
                {error.message}
              </p>
            ) : null
          }

          {searchedSkills.length ? (
            <div className="py-6 md:py-7">
              <p className="text-xl">Popular skills for UX/UI Design</p>
              <div className="btn-item flex gap-[12px] pt-5 flex-wrap">
                {searchedSkills.map((skill) => (
                  <button
                    onClick={() => handleAddSkill(skill)}
                    key={skill}
                    className={`jobpost-skill-btn hover:border-[#005AFF]`}
                  >
                    <span>{skill}</span>
                    <PlusSVG />
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {/* ==========Review required job skills ends*/}
          <ReviewIndustrySkills />
          <ReviewRecruitingAndTalentSourcingSkills />
        </div>

        {/* =========skills select container starts 
                                    ===============*/}
        {/* Save & Cancel button */}
        <JobReviewModalButtons
          key="EDIT_SKILLS_FIELD"
          cancleHandler={handleCloseModal}
          saveHandler={handleSaveData}
        />
      </div>
    </div>
  );
};

export default EditJobSkills;
