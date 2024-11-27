"use client";
import SquareActiveInactiveCheckboxes from "@/components/shared/checkbox/SquareActiveInactiveCheckboxes";
import { screeningQuestions } from "@/staticData/JobPost";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

const WriteYourOwnQuestion = () => {
  // ======= state to mange functionality =======
  const [expand, setExpand] = useState(false);
  const [charLeft, setCharLeft] = useState("50,000");
  const [description, setDescription] = useState("");
  const [selectedQuestions, setSelectedQuestions] = useState([""]);

  //   ==== handlers ======
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    let TOTAL_CHAR = 50000;
    let remainingCH = (TOTAL_CHAR - text.length).toString();
    if (remainingCH.length > 3) {
      remainingCH = remainingCH
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    setCharLeft(remainingCH);
    setDescription(text);
  };

  const handleSelect = (item: string) => {
    if (selectedQuestions.indexOf(item) === -1) {
      setSelectedQuestions([...selectedQuestions, item]);
    } else {
      const remainingItems = selectedQuestions.filter(
        (question) => question !== item
      );
      setSelectedQuestions(remainingItems);
    }
  };

  return (
    <div className={`job-scope-dropdown !px-0 !py-0 !border-none `}>
      <button
        onClick={() => setExpand(!expand)}
        className="skillsBtnActive flex items-center gap-4 justify-between text-[#005AFF]"
      >
        <span className="text-2xl">+</span>
        <span className="fs-md">Write your own question</span>
      </button>
      <div
        className={` flex flex-col gap-[10px]  mt-0 h-auto max-h-0 overflow-hidden ${
          expand && "!max-h-[9999px]  mt-[18px] rounded-[20px] pt-[14px]"
        }`}
      >
        <div className="flex items-center gap-4">
          <textarea
            onChange={handleInputChange}
            placeholder="Let your coworkers know why you're inviting them?"
            className={`custom_scrollbar bg-white min-h-[200px] resize-none fs-base w-full border border-[#E6E6E6] px-[14px] py-2.5 rounded-[10px] focus:outline-none focus:border-blue-500`}
            value={description}
          />
          <Image
            onClick={() => setExpand(false)}
            src="/svgs/dustbin.svg"
            width={24}
            height={28}
            alt="Dustbin icon"
            className=""
          />
        </div>
        <div className="flex justify-between  gap-3 mr-[32px]">
          <button
            className={`fs-md py-2.5 px-5 md:px-[30px] lg:px-10 border-[#0000001a] rounded-[100px] ${
              description ? "bg-[#005AFF] text-white" : "bg-[#dde3e766]"
            }`}
            onClick={() => {
              setDescription("");
              setExpand(false);
            }}
          >
            Save Question
          </button>
          <dfn className="not-italic text-end block text-[12px] ">
            {charLeft} characters left
          </dfn>
        </div>
      </div>

      <h3 className="fs-lg-lh-md my-6">Suggested</h3>
      <ul className="flex flex-col gap-[18px]">
        {screeningQuestions.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <button onClick={() => handleSelect(item)}>
              <SquareActiveInactiveCheckboxes
                active={selectedQuestions.indexOf(item) !== -1}
              />
            </button>{" "}
            <span className="fs-md">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WriteYourOwnQuestion;
