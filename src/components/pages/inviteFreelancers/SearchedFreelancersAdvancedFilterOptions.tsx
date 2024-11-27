import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Category from "./Category";
import DropDownCategories from "./DropDownCategories";
import EarnedAmount from "./EarnedAmount";
import EnglishLavel from "./EnglishLavel";
import FiltersConfirmationHandlers from "./FiltersConfirmationHandlers";
import HourlyRate from "./HourlyRate";
import HoursBilled from "./HoursBilled";
import JobSuccess from "./JobSuccess";
import LastActivity from "./LastActivity";
import OtherLanguages from "./OtherLanguages";
import SearchLocation from "./SearchLocation";
import TalentType from "./TalentType";

const SearchedFreelancersAdvancedFilterOptions = () => {
  const expandAdvancedFilter = useSelector(
    (state: RootState) =>
      state.inviteFreelancersActiveStages.expandAdvancedFilter
  );
  return (
    expandAdvancedFilter && (
      <div className={`duration-200 mb-10 w-full h-auto`}>
        <div className="w-full flex flex-wrap-reverse md:grid  md:grid-cols-2 lg:grid-cols-3 2xl:flex lg:flex-wrap justify-between gap-5 ">
          <div className="w-full 2xl:w-[23.71%] 2xl:min-w-[370px]">
            <EarnedAmount />
          </div>
          <div className="w-full 2xl:w-[18%] lg:min-w-[270px]">
            <JobSuccess />
          </div>
          <div className="w-full 2xl:w-[23%] lg:min-w-[320px]">
            <HourlyRate />
          </div>

          <div className="w-full 2xl:w-[18%] lg:min-w-[280px]">
            <HoursBilled />
          </div>
          <div className="w-full 2xl:w-[23.71%] 2xl:min-w-[370px]">
            <Category />
            <DropDownCategories />
            <SearchLocation />
          </div>
          <div className="w-full 2xl:w-[18%] lg:min-w-[270px]">
            <EnglishLavel />
            <OtherLanguages />
          </div>
          <div className="w-full 2xl:w-[23%] lg:min-w-[320px]">
            <TalentType />
          </div>
          <div className="w-full 2xl:w-[18%] lg:min-w-[280px]">
            <LastActivity />
          </div>
        </div>
        <FiltersConfirmationHandlers />
      </div>
    )
  );
};

export default SearchedFreelancersAdvancedFilterOptions;
