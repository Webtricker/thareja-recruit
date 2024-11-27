import FilterIcon from "./FilterIcon";
import SearchSVG from "./SearchSVG";

const AllJobFilters = () => {
  return (
    <div className="flex gap-[16px] mb-[18px] items-center z-50">
      <div className="flex items-center gap-5 w-full border border-[#A8B7C1] px-5 rounded-[100px] focus:border-[#005AFF]">
        <SearchSVG />
        <input
          type="text"
          placeholder="Search job posting"
          className="w-full text-[18px] md:text-[20px] bg-transparent py-2 md:py-2.5 focus:outline-none focus:border-blue-500"
        />
      </div>
      <button className="text-[#005AFF] flex items-center justify-between gap-2.5 text-[18px] md:text-[20px] tracking-[0.4px] px-[14px] py-2 md:py-2.5 border border-[#005AFF] rounded-[10px] ">
        <FilterIcon />
        <span>Filters</span>
      </button>
    </div>
  );
};

export default AllJobFilters;
