"use client";
import ActiveInActiveCheckboxes from "@/components/shared/checkbox/ActiveInActiveCheckboxes";
import { setProfileExperienceLevel } from "@/redux/features/settings/settingsMyProfileSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

type TCardItem = {
  level: string;
  des: string;
};
type ExperienceSelectorProps = {
  className?: string;
  item: TCardItem;
};
export const ExperienceSelector = ({
  className,
  item,
}: ExperienceSelectorProps) => {
  const dispatch = useDispatch();
  const { level, des } = useSelector(
    (state: RootState) => state.settingsMyProfile.activeExperienceLevel
  );

  const active = level === item.level;
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        console.log("btn clicked");
        dispatch(setProfileExperienceLevel(item));
      }}
      className={`cursor-pointer w-full min-h-[168px] border rounded-[20px] p-5 md:p-6 lg:px-7 xl:px-8 2xl:px-[30px] ${className} ${
        active
          ? "my-profile-experience-card border-transparent"
          : "border-[#00000024]"
      }`}
    >
      <div className="w-full flex justify-end mb-1.5">
        <ActiveInActiveCheckboxes active={active} />
      </div>
      <p className="fs-md mb-2.5">{item.level}</p>
      <p className="fs-base ">{item.des}</p>
    </div>
  );
};
