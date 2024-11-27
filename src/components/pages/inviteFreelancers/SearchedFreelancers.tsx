import FreelancerInvitationModalWrapper from "@/components/shared/modal/FreelancerInvitationModal";
import FreelancersProfileModal from "@/components/shared/modal/FreelancersProfileModal";
import {
  setActiveAvailableNow,
  setExpandAdvancedFilter,
} from "@/redux/features/jobpost/InviteFreeLancersActiveStages";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import FilterIcon from "../allJobPost/FilterIcon";
import SearchSVG from "../allJobPost/SearchSVG";
import FreelancersDetailsCard from "./FreelancersDetailsCard";
import SearchedFreelancersAdvancedFilterOptions from "./SearchedFreelancersAdvancedFilterOptions";

const SearchedFreelancers = () => {
  const dispatch = useDispatch();
  const activeAvailableNow = useSelector(
    (state: RootState) => state.inviteFreelancersActiveStages.activeAvailableNow
  );
  const expandFilters = useSelector(
    (state: RootState) =>
      state.inviteFreelancersActiveStages.expandAdvancedFilter
  );

  const activeInviteModal = useSelector(
    (state: RootState) => state.inviteFreelancersActiveStages.activeInviteModal
  );
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap items-center  w-full gap-2.5 md:gap-[20px] lg:gap-[30px]">
        <div className="flex items-center gap-5 w-full border border-[#A8B7C1] px-5 rounded-[100px] focus:border-[#005AFF]">
          <SearchSVG />
          <input
            type="text"
            placeholder="Search by contract, freelancers, or agency name"
            className="w-full text-[18px] md:text-[20px] bg-transparent py-2 md:py-2.5 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex items-center gap-3 w-auto min-w-[200px]">
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(setActiveAvailableNow(!activeAvailableNow));
            }}
            className={`duration-200 relative w-[50px] h-[31px] border border-[#a8b7c1db] rounded-full flex items-center ${
              activeAvailableNow && "bg-[#01D18F]"
            }`}
          >
            <span
              className={`duration-200 top-[2.5px] absolute w-[25px] h-[25px] rounded-full bg-[#A8B7C1] ${
                activeAvailableNow ? "right-0.5 bg-white" : "left-0.5"
              }`}
            ></span>
          </button>
          <span className="fs-md">Available now</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setExpandAdvancedFilter(!expandFilters));
          }}
          className="text-[#005AFF]  flex items-center justify-between gap-2.5 text-[18px] md:text-[20px] tracking-[0.4px] px-[14px] py-2 md:py-2.5 border border-[#005AFF] rounded-[10px] "
        >
          <FilterIcon />
          <span>Filters</span>
        </button>
      </div>
      <h3 className="mt-5 mb-10 text-[#005AFF] fs-xl-lh-lg">Advanced Search</h3>
      <SearchedFreelancersAdvancedFilterOptions />

      <div className="flex flex-col gap-[30px]">
        <FreelancersDetailsCard />
        <FreelancersDetailsCard />
        <FreelancersDetailsCard />
        <FreelancersDetailsCard />
        <FreelancersDetailsCard />
        <FreelancersDetailsCard />
        <FreelancersDetailsCard />
        <FreelancersDetailsCard />
        <FreelancersDetailsCard />
        <FreelancersDetailsCard />
      </div>

      {/* ======== Freelancer invite modal ========= */}
      <FreelancerInvitationModalWrapper />

      {/* ======== Freelancer profile modal ========= */}
      <FreelancersProfileModal />
    </>
  );
};

export default SearchedFreelancers;
