import DownArrowSVG from "@/components/shared/header/DownArrowSVG";
import { setJobPost_RTS_Skills } from "@/redux/features/jobpost/jobPostSlice";
import { setJobPostErrors } from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlusSVG } from "../getStartedWithoutAi/Icons";
import SelectedRecruitAndTalentSourcingSkills from "./SelectedRecruitAndTalentSourcingSkills";

const ReviewRecruitingAndTalentSourcingSkills = () => {
  const dispatch = useDispatch();
  const prevSelectedSkills = useSelector(
    (state: RootState) => state.jobPosting.recruitingAndTalendSourcingSkills
  );
  // TODO: have to add more skills and it should be
  // skills for selected job title
  const skills = [
    "Wireframing",
    "User Experience Design",
    "Web Design",
    "Prototyping",
    "Mockup",
    "User Flow",
    "User Interface Design",
    "Mobile App Design",
    "Interaction Design",
    "Responsive Design",
    "Flinto",
    "Framer",
    "IPhone UI Design",
  ];

  const filteredSkills: string[] = prevSelectedSkills
    ? skills.filter((skill) => prevSelectedSkills.indexOf(skill) === -1)
    : skills;

  const handleAddSkill = (skill: string) => {
    dispatch(setJobPost_RTS_Skills([...prevSelectedSkills, skill]));
    dispatch(setJobPostErrors(null));
  };

  //   dropdown collapse state
  const [expand, setExpand] = useState(false);
  useEffect(() => {
    setExpand(false);
  }, []);

  return (
    <>
      <div className="w-full">
        {expand && <SelectedRecruitAndTalentSourcingSkills />}
        <div
          onClick={() => setExpand(!expand)}
          className="flex items-center gap-4 justify-between"
        >
          <h4 className="jobpost-details-label">
            Recruiting & Talent Sourcing Skills
          </h4>

          <DownArrowSVG className={`${expand && "rotate-180"}`} />
        </div>
        <div
          className={`btn-item flex gap-[12px] flex-wrap  mt-0 h-auto max-h-0 overflow-hidden ${
            expand && "!max-h-[9999px] pt-5 "
          }`}
        >
          {filteredSkills.map((skill) => (
            <button
              onClick={() => handleAddSkill(skill)}
              key={skill}
              className={`skillsBtn hover:border-[#005AFF]`}
            >
              <span>{skill}</span>
              <PlusSVG />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewRecruitingAndTalentSourcingSkills;
