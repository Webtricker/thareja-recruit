import LinearGradientRoundedCheckbox from "@/components/shared/common/LinearGradientRoundedCheckbox";
import { setActiveTalentType } from "@/redux/features/jobpost/InviteFreeLancersActiveStages";
import { setTalentType } from "@/redux/features/jobpost/InviteFreeLancersFilteres";
import { RootState } from "@/redux/store";
import { talentTypeItems } from "@/staticData/InviteFreeLancers";
import { useDispatch, useSelector } from "react-redux";

const TalentType = () => {
  const dispatch = useDispatch();
  const activeTalentType = useSelector(
    (state: RootState) => state.inviteFreelancersActiveStages.activeTalentType
  );
  return (
    <div className="p-5 bg-white w-full md:max-w-[320px] md:p-6 lg:p-7 rounded-[12px] border border-[#005aff24]">
      <h3 className="mb-4 md:mb-5 fs-lg-lh-normal">Talent Type</h3>
      <ul className="flex flex-col gap-[14px]">
        {talentTypeItems.map((item, indx) => (
          <li
            key={indx}
            onClick={() => {
              dispatch(setActiveTalentType(indx + 1));
              dispatch(setTalentType(item));
            }}
            className="fs-md flex items-center gap-2.5 cursor-pointer"
          >
            <LinearGradientRoundedCheckbox
              active={activeTalentType === indx + 1}
            />{" "}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TalentType;
