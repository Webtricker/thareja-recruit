"use client";
import SelectDropdown from "@/components/shared/dropdown/SelectDropdown";
import { teamData } from "./StaticData";

export const TeamDropdown = () => {
  // constrant
  const KEY = "EXPAND_MY_PROFILE_VISIBILITY_DROPDOWN";

  // handlers
  const handleSelect = (val: string) => {};

  return (
    <SelectDropdown
      key={KEY}
      activeKey={KEY}
      clickHandler={handleSelect}
      defaultLabel="No default team"
      items={teamData}
      position="absolute"
      containerStyle="!rounded-[20px]"
      labelStyle="text-[#A8B7C1] !bg-transparent"
    />
  );
};
