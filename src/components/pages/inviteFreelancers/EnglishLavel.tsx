import LinearGradientRoundedCheckbox from "@/components/shared/common/LinearGradientRoundedCheckbox";
import { setActiveEnglishLavel } from "@/redux/features/jobpost/InviteFreeLancersActiveStages";
import { setEnglishLavel } from "@/redux/features/jobpost/InviteFreeLancersFilteres";
import { RootState } from "@/redux/store";
import { englishLevelItems } from "@/staticData/InviteFreeLancers";
import { useDispatch, useSelector } from "react-redux";

const EnglishLavel = () => {
  const dispatch = useDispatch();
  const activeEnglishLavel = useSelector(
    (state: RootState) => state.inviteFreelancersActiveStages.activeEnglishLavel
  );
  return (
    <div className="p-5 bg-white w-full md:max-w-[276px] md:p-6 lg:p-7 rounded-[12px] border border-[#005aff24]">
      <h3 className="mb-4 md:mb-5 fs-lg-lh-normal">English level</h3>
      <ul className="flex flex-col gap-[14px]">
        {englishLevelItems.map((item, indx) => (
          <li
            key={indx}
            onClick={() => {
              dispatch(setActiveEnglishLavel(indx + 1));
              dispatch(setEnglishLavel(item));
            }}
            className="fs-md flex items-center gap-2.5 cursor-pointer"
          >
            <LinearGradientRoundedCheckbox
              active={activeEnglishLavel === indx + 1}
            />{" "}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnglishLavel;
