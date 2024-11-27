import FilterIcon from "./FilterIcon";
import SearchSVG from "./SearchSVG";
import SortByDate from "./SortByDate";
import SortByOrder from "./SortByOrder";

const AllContractsFilter = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-[18px]">
      {/* ====== search & filter functionality ======== */}
      <div className="flex items-center  w-full gap-2 md:gap-2.5 lg:max-w-[40%] xl:max-w-[50%] 2xl:max-w-[720px]">
        <div className="flex items-center gap-5 w-full border border-[#A8B7C1] px-5 rounded-[100px] focus:border-[#005AFF]">
          <SearchSVG />
          <input
            type="text"
            placeholder="Search by contract, freelancers, or agency name"
            className="w-full text-[18px] md:text-[20px] bg-transparent py-2 md:py-2.5 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button className="text-[#005AFF]  flex items-center justify-between gap-2.5 text-[18px] md:text-[20px] tracking-[0.4px] px-[14px] py-2 md:py-2.5 border border-[#005AFF] rounded-[10px] ">
          <FilterIcon />
          <span>Filters</span>
        </button>
      </div>

      {/* ====== More functionality ======== */}
      <div className="flex items-center gap-5 flex-wrap md:flex-nowrap">
        <label htmlFor="short_by" className="fs-md">
          Short by
        </label>
        <SortByDate />
        <SortByOrder />
      </div>
    </div>
  );
};

export default AllContractsFilter;
