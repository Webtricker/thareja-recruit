"use client";
import { SearchIconSVG } from "@/components/shared/icons/Icons";
import { useState } from "react";
import { Button } from "./Buttons";
import { ClientTabContent, FreelancerTabContent } from "./StaticComponents";

export const Search = () => {
  return (
    <div className="w-full max-w-[500px] border border-[#A8B7C1] rounded-[100px] flex items-center my-7 md:my-8 justify-between overflow-hidden">
      <input
        type="text"
        placeholder="Search"
        className="flex-grow  fs-md bg-transparent py-2 md:py-2.5 pl-5  focus:outline-none focus:border-blue-500"
      />
      <SearchIconSVG className="mr-5 min-w-[24px] max-w-[24px]" />
    </div>
  );
};

export const ButtonsPopular = () => {
  return (
    <div className="flex-grow flex gap-3 flex-wrap">
      <Button style="bg-[#005AFF] text-white" text="Connects" />
      <Button style="bg-[#005AFF] text-white" text="Work Diary" />
      <Button style="bg-[#005AFF] text-white" text="Get Paid" />
    </div>
  );
};

export const CheckStatusPageButton = () => {
  return <Button text="Check Status Page" style="bg-white text-[#005AFF]" />;
};

// =========== Tab ===========
export const TabSwitcher = () => {
  const [active, setActive] = useState<"FREELANCER" | "CLIENT">("FREELANCER");
  // ======= handelars ========
  return (
    <>
      <div className="w-full flex justify-start relative mb-8">
        <div className="w-auto bg-white h-full z-20">
          <button
            onClick={() => setActive("FREELANCER")}
            className={` border-b fs-base ${
              active === "FREELANCER"
                ? "text-[#005AFF] border-[#005AFF] mx-1"
                : "border-[#A8B7C1] pr-2.5"
            }`}
          >
            Freelancer
          </button>
        </div>
        <div className="w-auto bg-white z-20">
          <button
            onClick={() => setActive("CLIENT")}
            className={` border-b fs-base ${
              active === "CLIENT"
                ? "text-[#005AFF] border-[#005AFF] mx-1"
                : "border-[#A8B7C1] pl-2.5"
            }`}
          >
            Client
          </button>
        </div>
        <div className="border-b z-10 border-[#A8B7C1] w-full h-1 absolute bottom-0 left-0"></div>
      </div>
      {"FREELANCER" === active ? (
        <FreelancerTabContent />
      ) : (
        <ClientTabContent />
      )}
    </>
  );
};
