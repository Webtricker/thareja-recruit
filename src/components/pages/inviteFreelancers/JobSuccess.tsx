import LinearGradientRoundedCheckbox from "@/components/shared/common/LinearGradientRoundedCheckbox";
import { setActiveJobSuccess } from "@/redux/features/jobpost/InviteFreeLancersActiveStages";
import { setJobSuccess } from "@/redux/features/jobpost/InviteFreeLancersFilteres";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import TopRatedPlusSVG, {
  ExportSVG,
  RaisingTalentSVG,
  TopRatedSVG,
} from "./Icons";

const JobSuccess = () => {
  const dispatch = useDispatch();
  const activeJobSuccess = useSelector(
    (state: RootState) => state.inviteFreelancersActiveStages.activeJobSuccess
  );
  return (
    <div className="p-5 bg-white w-full md:max-w-[260px] md:p-6 lg:p-7 rounded-[12px] border border-[#005aff24]">
      <h3 className="mb-4 md:mb-5 fs-lg-lh-normal">Job Success</h3>
      <ul className="flex flex-col gap-[14px]">
        <li
          onClick={() => {
            dispatch(setActiveJobSuccess(1));
            dispatch(setJobSuccess("Any job success"));
          }}
          className="fs-md flex items-center gap-2.5 cursor-pointer"
        >
          <LinearGradientRoundedCheckbox active={activeJobSuccess === 1} />{" "}
          <span>Any job success</span>
        </li>
        <li
          onClick={() => {
            dispatch(setActiveJobSuccess(2));
            dispatch(setJobSuccess("80% & up"));
          }}
          className="fs-md flex items-center gap-2.5 cursor-pointer"
        >
          <LinearGradientRoundedCheckbox active={activeJobSuccess === 2} />{" "}
          <span>80% & up</span>
        </li>
        <li
          onClick={() => {
            dispatch(setActiveJobSuccess(3));
            dispatch(setJobSuccess("90% & up"));
          }}
          className="fs-md flex items-center gap-2.5 cursor-pointer"
        >
          <LinearGradientRoundedCheckbox active={activeJobSuccess === 3} />{" "}
          <span>90% & up</span>
        </li>
        <li
          onClick={() => {
            dispatch(setActiveJobSuccess(4));
            dispatch(setJobSuccess("Top rated plus"));
          }}
          className="fs-base  flex items-center gap-2.5 cursor-pointer"
        >
          <LinearGradientRoundedCheckbox active={activeJobSuccess === 4} />{" "}
          <span className="text-[#FF1694]">
            <TopRatedPlusSVG />
            Top rated plus
          </span>
        </li>
        <li
          onClick={() => {
            dispatch(setActiveJobSuccess(5));
            dispatch(setJobSuccess("Top rated"));
          }}
          className="fs-base  flex items-center gap-2.5 cursor-pointer"
        >
          <LinearGradientRoundedCheckbox active={activeJobSuccess === 5} />{" "}
          <span className="text-[#FF9314]">
            <TopRatedSVG />
            Top rated
          </span>
        </li>
        <li
          onClick={() => {
            dispatch(setActiveJobSuccess(6));
            dispatch(setJobSuccess("Rasing talent"));
          }}
          className="fs-base  flex items-center gap-2.5 cursor-pointer"
        >
          <LinearGradientRoundedCheckbox active={activeJobSuccess === 6} />{" "}
          <span className="text-[#9104FF]">
            <RaisingTalentSVG />
            Rasing talent
          </span>
        </li>

        <li
          onClick={() => {
            dispatch(setActiveJobSuccess(7));
            dispatch(setJobSuccess("Export"));
          }}
          className="fs-base  flex items-center gap-2.5 cursor-pointer"
        >
          <LinearGradientRoundedCheckbox active={activeJobSuccess === 7} />{" "}
          <span className="text-[#067964]">
            <ExportSVG />
            Export
          </span>
        </li>
      </ul>
    </div>
  );
};

export default JobSuccess;
