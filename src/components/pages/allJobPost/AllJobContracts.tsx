import AllContractsFilter from "./AllContractsFilter";
import AllJobContractsContent from "./AllJobContractsContent";

const AllJobContracts = () => {
  return (
    <div className="w-full ">
      <div className="title-top w-full">
        <h1 className="fs-5xl text-[#30353E]  mb-[28px]">All contracts</h1>
        <div>
          <AllContractsFilter />
          <AllJobContractsContent />
        </div>
      </div>
    </div>
  );
};

export default AllJobContracts;
