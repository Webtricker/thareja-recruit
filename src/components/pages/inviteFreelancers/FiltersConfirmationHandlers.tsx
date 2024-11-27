import {
  resetAdvancedFilters,
  setExpandAdvancedFilter,
} from "@/redux/features/jobpost/InviteFreeLancersActiveStages";
import { useDispatch } from "react-redux";
import { CancelSVG } from "./Icons";

const FiltersConfirmationHandlers = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full  gap-5 flex items-center mt-[41px]">
      <button
        onClick={() => {
          dispatch(setExpandAdvancedFilter(false));
        }}
        className="bg-[#005AFF] text-white fs-md py-2.5 md:py-[13px] px-5 rounded-[100px]"
      >
        Apply filters
      </button>
      <button
        onClick={() => {
          dispatch(resetAdvancedFilters("RESET"));
          dispatch(setExpandAdvancedFilter(false));
        }}
        className="fs-md gap-[14px] py-2.5 md:py-[13px] px-5 rounded-[100px] border border-[#005AFF] flex items-center text-[#005AFF]"
      >
        {" "}
        <CancelSVG /> <span>Clear all filters</span>
      </button>
    </div>
  );
};

export default FiltersConfirmationHandlers;
