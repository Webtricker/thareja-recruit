import LinearGradientRoundedCheckbox from "@/components/shared/common/LinearGradientRoundedCheckbox";
import { setActiveLastActivity } from "@/redux/features/jobpost/InviteFreeLancersActiveStages";
import { setLastActivity } from "@/redux/features/jobpost/InviteFreeLancersFilteres";
import { RootState } from "@/redux/store";
import { lastActivityItems } from "@/staticData/InviteFreeLancers";
import { useDispatch, useSelector } from "react-redux";

const LastActivity = () => {
  const dispatch = useDispatch();
  const activeLastActivity = useSelector(
    (state: RootState) => state.inviteFreelancersActiveStages.activeLastActivity
  );
  return (
    <div className="w-full">
      {/*  ============= last activity =========== */}
      <div className="p-5 bg-white w-full md:max-w-[245px] md:p-6 lg:p-7 rounded-[12px] border border-[#005aff24]">
        <h3 className="mb-4 md:mb-5 fs-lg-lh-normal">Last Activity</h3>
        <ul className="flex flex-col gap-[14px]">
          {lastActivityItems.map((item, indx) => (
            <li
              key={indx}
              onClick={() => {
                dispatch(setActiveLastActivity(indx + 1));
                dispatch(setLastActivity(item));
              }}
              className="fs-md flex items-center gap-2.5 cursor-pointer"
            >
              <LinearGradientRoundedCheckbox
                active={activeLastActivity === indx + 1}
              />{" "}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ============= all category Dropdown  =========== */}
      <div></div>
    </div>
  );
};

export default LastActivity;
