export type JobScale = {
  type: "LARGE" | "MEDIUM" | "SMALL";
  label: string;
  des: string;
};
export const jobScale: JobScale[] = [
  {
    type: "LARGE",
    label: "Large",
    des: "Longer term or complex initiatives (ex. design and build a full website)",
  },
  {
    type: "MEDIUM",
    label: "Medium",
    des: "Well-defined projects (ex. a landing page)",
  },
  {
    type: "SMALL",
    label: "Small",
    des: "Quick and straightforward tasks (ex. update text and images on a webpage)",
  },
];

export type JobDuration = {
  type: "LONG" | "MEDIUM" | "SHORT";
  label: string;
};

export const jobDuration: JobDuration[] = [
  {
    type: "LONG",
    label: "3 to 6 months",
  },
  {
    type: "MEDIUM",
    label: "1 to 3 months",
  },
  {
    type: "SHORT",
    label: "Less than 1 month",
  },
];

export type JobExperience = {
  type: "ENTRY" | "INTERMEDIATE" | "EXPERT";
  label: string;
  des: string;
};

export const jobExperience: JobExperience[] = [
  {
    type: "ENTRY",
    label: "Entry",
    des: "Looking for someone relatively new to this field",
  },
  {
    type: "INTERMEDIATE",
    label: "Intermediate",
    des: "Looking for someone relatively new to this field",
  },
  {
    type: "EXPERT",
    label: "Expert",
    des: "Looking for comprehensive and deep expertise in this field",
  },
];

type WorkingSchedule = {
  type: "FULL_TIME" | "CONTRACTUAL";
  label: string;
};
export const workingSchedule: WorkingSchedule[] = [
  {
    type: "FULL_TIME",
    label:
      "After a trial period, you can pay a one-time fee to convert the contract.",
  },
  { type: "CONTRACTUAL", label: "No, not at this time" },
];

// static data have to change it
export const screeningQuestions: string[] = [
  "Describe your recent experience with similiar projects",
  "Please list any certifications related to this project",
  "Include a link to your GitHub profile and /or website",
  "What freameworks have you worked with?",
  "Describe your approach to testing and improving QA",
];

export type AllJobPostContractFreelancer = {
  id?: string;
  name: string;
  location: string;
  localTime: string;
  contractStartingDate: string;
  contractEndingDate: string;
  status: string;
  totalWorkingTime: string;
  totalEarning: string;
  lastActivityDay: string;
  lastActivityMonth: string;
  lastActivityDate: string;
  workingRate: string;
  weeklyLimit: string;
};

export const allJobPostContractFreelancers: AllJobPostContractFreelancer[] = [
  {
    id: "flsdfj3saker03jr20",
    name: "Nico E",
    location: "India",
    localTime: "12:38 AM",
    contractStartingDate: "Nov 20, 2023",
    contractEndingDate: "present",
    status: "Active",
    totalWorkingTime: "18:50",
    totalEarning: "113:00",
    lastActivityDay: "Yesterday",
    lastActivityMonth: "May",
    lastActivityDate: "23",
    workingRate: "6:00",
    weeklyLimit: "40",
  },
  {
    id: "f2340jf230su7r23jfsd",
    name: "Nico E",
    location: "India",
    localTime: "12:38 AM",
    contractStartingDate: "Nov 20, 2023",
    contractEndingDate: "present",
    status: "Active",
    totalWorkingTime: "18:50",
    totalEarning: "113:00",
    lastActivityDay: "Yesterday",
    lastActivityMonth: "May",
    lastActivityDate: "23",
    workingRate: "6:00",
    weeklyLimit: "40",
  },
  {
    id: "f092cef9dfj2cv_ff8",
    name: "Nico E",
    location: "India",
    localTime: "12:38 AM",
    contractStartingDate: "Nov 20, 2023",
    contractEndingDate: "present",
    status: "Active",
    totalWorkingTime: "18:50",
    totalEarning: "113:00",
    lastActivityDay: "Yesterday",
    lastActivityMonth: "May",
    lastActivityDate: "23",
    workingRate: "6:00",
    weeklyLimit: "40",
  },
];

export type PostedJobs = {
  id: string;
  title: string;
  createdAt: string;
  closedDate: string;
  proposals: number;
  messaged: number;
  hired: number;
};

export const postedJobs: PostedJobs[] = [
  {
    id: "2434234234dfsdf3dss",
    title: "UX/UI Design",
    createdAt: "2 days ago by you",
    closedDate: "June 3, 2024",
    proposals: 0,
    messaged: 0,
    hired: 0,
  },
  {
    id: "2434sfd3ewdss",
    title: "UX/UI Design",
    createdAt: "2 days ago by you",
    closedDate: "June 3, 2024",
    proposals: 0,
    messaged: 0,
    hired: 0,
  },
  {
    id: "fsdf3isdjjg782ndf",
    title: "UX/UI Design",
    createdAt: "2 days ago by you",
    closedDate: "June 3, 2024",
    proposals: 0,
    messaged: 0,
    hired: 0,
  },
  {
    id: "0028jddk2ofdfo3wf3dss",
    title: "UX/UI Design",
    createdAt: "2 days ago by you",
    closedDate: "June 3, 2024",
    proposals: 0,
    messaged: 0,
    hired: 0,
  },
  {
    id: "df2397fj2l0fkf3dss",
    title: "UX/UI Design",
    createdAt: "2 days ago by you",
    closedDate: "June 3, 2024",
    proposals: 0,
    messaged: 0,
    hired: 0,
  },
  {
    id: "fkw_fjr_rt92kf_3dss",
    title: "UX/UI Design",
    createdAt: "2 days ago by you",
    closedDate: "June 3, 2024",
    proposals: 0,
    messaged: 0,
    hired: 0,
  },
  {
    id: "fdkdf-fe_vdw9-jsdf3dss",
    title: "UX/UI Design",
    createdAt: "2 days ago by you",
    closedDate: "June 3, 2024",
    proposals: 0,
    messaged: 0,
    hired: 0,
  },
];

export type DraftPostedJob = {
  id: string;
  title: string;
  createdAt: string;
  status: string;
};

export const draftPostedJob: DraftPostedJob[] = [
  {
    id: "fj_fd0ru230uJ-f23j_f3g",
    title: "Recruiter Needed for Staff and Contractor Recruit...",
    createdAt: "4 days ago by you",
    status: "Draft-",
  },
  {
    id: "hlwi_f0_J_-f23j_f3g",
    title: "Recruiter Needed for Staff and Contractor Recruit...",
    createdAt: "4 days ago by you",
    status: "Draft-",
  },
  {
    id: "fj_fd0r_23434fJ-f23j_f3g",
    title: "Recruiter Needed for Staff and Contractor Recruit...",
    createdAt: "4 days ago by you",
    status: "Draft-",
  },
  {
    id: "ffh89jsk-###_kkj-f23j_f3g",
    title: "Recruiter Needed for Staff and Contractor Recruit...",
    createdAt: "4 days ago by you",
    status: "Draft-",
  },
];

type ViewJobPostJobDetails = {
  postDate: string;
  jobLocation: string;
  recruiterMessage: string;
  weekWorkingLimit: string;
  projectLength: string;
  experienceLavel: string;
  budgetType: string;
  budget: string;
  projectType: string;
  requiredSkills: string[];
};
export const viewJobPostJobDetails: ViewJobPostJobDetails = {
  postDate: "2 quarters ago",
  jobLocation: "worldwide",
  recruiterMessage:
    "I need help hiring a recruiter to help me recruit staff or contractor in india & in the United States",
  weekWorkingLimit: "Less than 30 hrs/week",
  projectLength: "3 to 6 months",
  experienceLavel: "intermediate",
  budgetType: "Hourly",
  budget: "$15:00 - $40.00",
  projectType: "One-time project",
  requiredSkills: ["Mobile App Design", "Website Design", "Prototyping"],
};
