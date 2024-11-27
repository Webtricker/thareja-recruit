// import { setJobPostRequiredSkills } from "@/redux/features/jobpost/jobPostSlice";
// import { setJobPostErrors } from "@/redux/features/jobpost/jobPostSteps";
// import { RootState } from "@/redux/store";
// import { useDispatch, useSelector } from "react-redux";
// import SelectedSkills from "../getStartedWithoutAi/SelectedSkills";
// import WarningSVG from "../login/WarningSVG";
// import { PlusSVG } from "./Icons";

// const ReviewRequiredJobSkills = () => {
//   const dispatch = useDispatch();

//   // ======= REDUX STATES VALUE
//   const prevSelectedSkills = useSelector(
//     (state: RootState) => state.jobPosting.requiredSkills
//   );
//   const error = useSelector(
//     (state: RootState) => state.jobPostingStages.errors
//   );

//   // TODO: have to add more skills and it should be
//   // skills for selected job title
//   const skills = [
//     "Wireframing",
//     "User Experience Design",
//     "Web Design",
//     "Prototyping",
//     "Mockup",
//     "User Flow",
//     "User Interface Design",
//     "Mobile App Design",
//     "Interaction Design",
//     "Responsive Design",
//     "Flinto",
//     "Framer",
//     "IPhone UI Design",
//   ];

//   const filteredSkills: string[] = prevSelectedSkills
//     ? skills.filter((skill) => prevSelectedSkills.indexOf(skill) === -1)
//     : skills;

//   const handleAddSkill = (skill: string) => {
//     dispatch(setJobPostRequiredSkills([...prevSelectedSkills, skill]));
//     dispatch(setJobPostErrors(null));
//   };
//   return (
//     <>
//       <SelectedSkills labelStyle="!pt-[28px]" />
//       {
//         // Render error if no skill selected
//         error?.field === "SKILLS" && (
//           <p className="text-[#FF0000] flex items-center gap-[6px] mt-[7px] md:mt-[10px]">
//             <WarningSVG />
//             {error.message}
//           </p>
//         )
//       }
//       <p className="text-xl pt-[24px] md:pt-[34px]">
//         Popular skills for UX/UI Design
//       </p>
//       <div className="btn-item flex gap-[12px] pt-5 flex-wrap mb-[28px]">
//         {filteredSkills.map((skill) => (
//           <button
//             onClick={() => handleAddSkill(skill)}
//             key={skill}
//             className={`skillsBtn hover:border-[#005AFF]`}
//           >
//             <span>{skill}</span>
//             <PlusSVG />
//           </button>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ReviewRequiredJobSkills;
