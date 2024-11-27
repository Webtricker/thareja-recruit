"use client";

interface Skill {
  name: string;
  experience: string;
  rating: "GOOD" | "AVERAGE" | "BAD" | null | undefined;
}

interface TableRowProps {
  name: string;
  title?: string;
  location?: string;
  testOn: string;
  skills: Skill[];
}

// table static data
const userData: TableRowProps[] = [
  {
    name: "All",
    title: "Full Stack Developer",
    location: "United States",
    testOn: "Aug 02,2023",
    skills: [
      { name: "Communication", experience: "junior", rating: undefined },
      { name: "Writing", experience: "Not experienced", rating: null },
      { name: "English", experience: "Not experienced", rating: null },
    ],
  },
  {
    name: "Rohit",
    title: "React Engineer",
    location: "United Sta tes",
    testOn: "Aug 02,2023",
    skills: [{ name: "No", experience: "Not experienced", rating: null }],
  },
  {
    name: "Ritik",
    title: "React",
    location: "",
    testOn: "Aug 02,2023",
    skills: [
      { name: "UX/UI", experience: "Not experienced", rating: null },
      { name: "Angular", experience: "2/10", rating: "BAD" },
    ],
  },
  {
    name: "Rivers",
    title: "",
    location: "",
    testOn: "Aug 02,2023",
    skills: [
      { name: "React", experience: "Not experienced", rating: null },
      { name: "UX/UI", experience: "Not experienced", rating: null },
      { name: "JavaScript", experience: "Not experienced", rating: null },
    ],
  },
  {
    name: "Maria",
    title: "Full Stack Developer",
    location: "",
    testOn: "Aug 02,2023",
    skills: [
      { name: "React", experience: "2/10", rating: "BAD" },
      { name: "Python", experience: "4/10", rating: "AVERAGE" },
      { name: "Product Management", experience: "5/10", rating: "AVERAGE" },
    ],
  },
  {
    name: "Rivers",
    title: "React",
    location: "United States",
    testOn: "Aug 02,2023",
    skills: [{ name: "React.js", experience: "5/10", rating: "AVERAGE" }],
  },
  {
    name: "Test",
    title: "React",
    location: "United States",
    testOn: "Aug 02,2023",
    skills: [
      { name: "React.js", experience: "3/10", rating: "BAD" },
      { name: "React", experience: "2/10", rating: "BAD" },
      { name: "React.js", experience: "2/10", rating: "BAD" },
    ],
  },
];

import { ThreeDotSVG } from "@/components/shared/card/Icons";
import {
  setOpenTestDetailsModal,
  setTestDetails,
} from "@/redux/features/GptVettilngSlice/SkillTest";
import React from "react";
import { useDispatch } from "react-redux";
import Pagination from "./Pagination";
// import MoreButtonSVG from "@/app/../../public/svgs/more.svg";
// import "./Styles.css";

const ReportTableRow: React.FC<TableRowProps> = ({
  name,
  title,
  location,
  testOn,
  skills,
}) => {
  const dispatch = useDispatch();
  return (
    <tr
      onClick={() => {
        dispatch(setTestDetails({ name, title, location, testOn, skills }));
        dispatch(setOpenTestDetailsModal(true));
      }}
      className="px-[14px] duration-200 bg-transparent hover:bg-[#EDF4FF] flex fs-base text-left w-full min-h-[105px]  items-center border-b border-[#DDE3E7]"
    >
      <td data-label="Name" className="w-full max-w-[216px]">
        {name}
      </td>
      <td data-label="Title" className="w-full max-w-[330px]">
        {title}
      </td>
      <td data-label="Location" className="w-full max-w-[270px]">
        {location}
      </td>
      <td data-label="Test On" className="w-full max-w-[270px]">
        {testOn}
      </td>
      <td data-label="Main Tech Stacks" className="w-full max-w-[270px]">
        {skills.map((skill, index) => (
          <p key={index}>
            {skill.name}{" "}
            <span
              className={`
            ${
              skill.rating == null
                ? "text-[#A8B7C1]"
                : skill.rating == "GOOD"
                ? "text-[#01D18F]"
                : skill.rating == "AVERAGE"
                ? "text-[#FFCC48]"
                : skill.rating == "BAD"
                ? "text-[#FF0000]"
                : ""
            }
            `}
            >
              ({skill.experience})
            </span>
          </p>
        ))}
      </td>
      <td data-label="Options" className="w-full max-w-[296px]">
        <button className="p-2.5 block mx-auto rounded-full bg-gradient-to-r to-[#FAFCFF] from-[#E1E5FF] ">
          <ThreeDotSVG />
        </button>
      </td>
    </tr>
  );
};

// ========= Report table =================
export const ReportTable = () => {
  return (
    <>
      <div className="h-full overflow-hidden flex-grow p-5 pr-1  gpt-vetting-table-shadow bg-white  rounded-[30px] mb-[18px]">
        <div className="gpt-vetting-table-scrollbar  w-full pr-2.5  h-full overflow-x-auto">
          <table className="w-full block min-w-[1024px] min-h-[400px] lg:min-h-0">
            <thead className="bg-[#EDF4FF] w-full block rounded-[6px]">
              <tr className="flex text-left w-full  fs-md px-[14px] py-2.5 ">
                <th className="w-full max-w-[216px]">Name</th>
                <th className="w-full max-w-[330px]">Title</th>
                <th className="w-full max-w-[270px]">Location</th>
                <th className="w-full max-w-[270px]">Test On</th>
                <th className="w-full max-w-[270px]">Main Tech Stacks</th>
                <th className="w-full max-w-[296px]"></th>
              </tr>
            </thead>
            <tbody className="block text-center w-full mt-5">
              {userData.map((row, index) => (
                <ReportTableRow key={index} {...row} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination />
    </>
  );
};

interface ConnectedTableRowProps {
  name: string;
  title?: string;
  location?: string;
  testOn: string;
  skills: Skill[];
}
const ConnectedTableRow: React.FC<ConnectedTableRowProps> = ({
  name,
  title,
  location,
  testOn,
  skills,
}) => {
  const dispatch = useDispatch();

  return (
    <tr
      onClick={() => {
        dispatch(setTestDetails({ name, title, location, testOn, skills }));
        dispatch(setOpenTestDetailsModal(true));
      }}
      className="px-[14px] duration-200 bg-transparent hover:bg-[#F9FBFF] flex fs-base text-left w-full min-h-[105px]  items-center border-b border-[#DDE3E7]"
    >
      <td data-label="Name" className="w-full max-w-[216px]">
        {name}
      </td>
      <td data-label="Title" className="w-full max-w-[330px]">
        {title}
      </td>
      <td data-label="Location" className="w-full max-w-[270px]">
        {location}
      </td>
      <td data-label="Test On" className="w-full max-w-[270px]">
        {testOn}
      </td>
      <td data-label="Main Tech Stacks" className="w-full max-w-[270px]">
        {skills.map((skill, index) => (
          <p key={index}>
            {skill.name}{" "}
            <span
              className={`
          ${
            skill.rating == null
              ? "text-[#A8B7C1]"
              : skill.rating == "GOOD"
              ? "text-[#01D18F]"
              : skill.rating == "AVERAGE"
              ? "text-[#FFCC48]"
              : skill.rating == "BAD"
              ? "text-[#FF0000]"
              : ""
          }
          `}
            >
              ({skill.experience})
            </span>
          </p>
        ))}
      </td>
      <td data-label="Options" className="w-full max-w-[296px]">
        <p className="text-center fs-base text-[#FF0000]"> Archive</p>
      </td>
    </tr>
  );
};

// ========= Connected table =================
export const ConnectedTable = () => {
  const connectedUsers = userData.slice(0, 3);
  return (
    <>
      <div className="h-full overflow-hidden flex-grow p-5 pr-1  gpt-vetting-table-shadow bg-white  rounded-[30px] mb-[18px]">
        <div className="gpt-vetting-table-scrollbar  w-full pr-2.5  h-full overflow-x-auto">
          <table className="w-full block min-w-[1024px] min-h-[400px] lg:min-h-0">
            <thead className="bg-[#EDF4FF] w-full block rounded-[6px]">
              <tr className="flex text-left w-full  fs-md px-[14px] py-2.5 ">
                <th className="w-full max-w-[216px]">Name</th>
                <th className="w-full max-w-[330px]">Title</th>
                <th className="w-full max-w-[270px]">Location</th>
                <th className="w-full max-w-[270px]">Test On</th>
                <th className="w-full max-w-[270px]">Main Tech Stacks</th>
                <th className="w-full max-w-[296px]"></th>
              </tr>
            </thead>
            <tbody className="block text-center w-full mt-5">
              {connectedUsers.map((row, index) => (
                <ConnectedTableRow key={index} {...row} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <Pagination /> */}
    </>
  );
};

// ========= Connected table =================
export const ArchivedTable = () => {
  // static return; we will fix that later.
  return <p className="text-center mt-10 fs-md">0 Archived list.</p>;
};
