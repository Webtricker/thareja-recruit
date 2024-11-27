// src/redux/features/types.ts

export interface Skill {
  name: string;
  level: string;
}

export interface Candidate {
  name: string;
  email: string;
}

export interface CandidateFormState {
  predefinedSkills: boolean;
  skills: Skill[];
  candidates: Candidate[];
}

export interface ModalState {
  isOpen: boolean;
}

// Define the ButtonProps interface for the Button component
export interface ButtonProps {
  svgSrc: string;
  text: string;
  buttonClassName: string;
  onClick?: () => void;
}

// Define the PropsType for JobsPagination component
export interface JobsPaginationProps {
  currentPage: number;
  totalPage: number;
  setCurrentPage: (page: number) => void;
}
