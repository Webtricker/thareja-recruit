import { allJobPostContractFreelancers } from "@/staticData/JobPost";
import ContractCard from "./ContractCard";

const AllJobContractsContent = () => {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-[18px] z-10">
      {allJobPostContractFreelancers.map((item) => (
        <ContractCard
          key={item.id}
          person={item}
          activeKey={`OPEN_ALL_JOB_POST_CARD_THREE_DOT_DROP_DOWN_${item.id}`}
        />
      ))}
    </div>
  );
};

export default AllJobContractsContent;
