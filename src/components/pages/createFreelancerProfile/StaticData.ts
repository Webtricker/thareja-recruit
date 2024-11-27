import { generateYears } from "@/utils/UtilityFN";

export const staticStartingYears = generateYears(40);
export const staticEndingYears = generateYears(40, 4);

export const proficiencyLevelData = [
  {
    level: "Basic",
    des: "I write clearly in this langu...",
  },
  {
    level: "Conversational",
    des: "I write and speak clearly i...",
  },
  {
    level: "Fluent",
    des: "I write and speak this lang...",
  },
  {
    level: "Native or Bilingual",
    des: "I write and speak this lang...",
  },
];

// ====== static skills =======
export const staticSkills = [
  "Wireframing",
  "User Experience Design",
  "Web Design",
  "Prototyping",
];

//  service data
export const serviceLists: string[] = [
  "Accounting & Consulting",
  "Admin Support",
  "Customer Service",
  "Data Science & Analytics",
  "Design & Creative",
  "Engineering & Architecture",
  "IT & Networking",
  "Legal",
  "Sales & Marketing",
  "Translation",
  "Web, Mobile & Software Devselected",
  "Writing",
];

// ======= suggested services ========
export const suggestServiceLists = ["Web & Mobile Design"];
