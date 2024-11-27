import LinearGradientRoundedCheckbox from "@/components/shared/common/LinearGradientRoundedCheckbox";
import { setActiveHourlyBilled } from "@/redux/features/jobpost/InviteFreeLancersActiveStages";
import { setHoursBilled } from "@/redux/features/jobpost/InviteFreeLancersFilteres";
import { RootState } from "@/redux/store";
import { hoursBilledItems } from "@/staticData/InviteFreeLancers";
import { useDispatch, useSelector } from "react-redux";

const HoursBilled = () => {
  const dispatch = useDispatch();
  const activeHourlyBilled = useSelector(
    (state: RootState) => state.inviteFreelancersActiveStages.activeHourlyBilled
  );

  return (
    <div className="p-5 bg-white w-full md:max-w-[280px] md:p-6 lg:p-7 rounded-[12px] border border-[#005aff24]">
      <h3 className="mb-4 md:mb-5 fs-lg-lh-normal">Hours billed</h3>
      <ul className="flex flex-col gap-[14px]">
        {hoursBilledItems.map((item, indx) => (
          <li
            key={indx}
            onClick={() => {
              dispatch(setActiveHourlyBilled(indx + 1));
              dispatch(setHoursBilled(item));
            }}
            className="fs-md flex items-center gap-2.5 cursor-pointer"
          >
            <LinearGradientRoundedCheckbox
              active={activeHourlyBilled === indx + 1}
            />{" "}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HoursBilled;
