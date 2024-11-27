"use client";
import ContractModal from "@/components/shared/modal/ContractModal";
import { setActiveTabBtn } from "@/redux/features/contact/allContractsSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { AllContractCard } from "./Cards";

// ========== Archive Tab content =========================
const ArchivedTabContent = () => {
  const activeContracts = useSelector(
    (state: RootState) => state.allContracts.activeContracts
  );
  return (
    <div className="w-full flex flex-col gap-y-5 pb-10">
      {activeContracts.length ? (
        activeContracts.map((item, _i) => (
          <AllContractCard index={_i} data={item} key={item.createdAt} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

// ========== Active Tab content =========================
const ActiveTabContent = () => {
  const activeContracts = useSelector(
    (state: RootState) => state.allContracts.activeContracts
  );
  return (
    <div className="w-full flex flex-col gap-y-5 pb-10">
      {activeContracts.length ? (
        activeContracts.map((item, _i) => (
          <AllContractCard index={_i} data={item} key={item.createdAt} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

// ========== Tab content =========================
const TabContent = () => {
  const active = useSelector(
    (state: RootState) => state.allContracts.activeTabBtn
  );
  //   ======= handelars ========
  if (active === "ACTIVE") {
    return <ActiveTabContent />;
  }
  return <ArchivedTabContent />;
};

// ======== root compoonent ============
const TabSwitcher = () => {
  const dispatch = useDispatch();
  const active = useSelector(
    (state: RootState) => state.allContracts.activeTabBtn
  );
  // ======= handelars ========
  return (
    <>
      <div className="w-full flex justify-start relative mb-8">
        <div className="w-auto bg-white h-full z-20">
          <button
            onClick={() => dispatch(setActiveTabBtn("ACTIVE"))}
            className={` border-b fs-base ${
              active === "ACTIVE"
                ? "text-[#005AFF] border-[#005AFF] mx-1"
                : "border-[#A8B7C1] pr-2.5"
            }`}
          >
            Active
          </button>
        </div>
        <div className="w-auto bg-white z-20">
          <button
            onClick={() => dispatch(setActiveTabBtn("ARCHIVED"))}
            className={` border-b fs-base ${
              active === "ARCHIVED"
                ? "text-[#005AFF] border-[#005AFF] mx-1"
                : "border-[#A8B7C1] pl-2.5"
            }`}
          >
            Archived
          </button>
        </div>
        <div className="border-b z-10 border-[#A8B7C1] w-full h-1 absolute bottom-0 left-0"></div>
      </div>
      <TabContent />

      {/* ========= Contact form modal ========= */}
      <ContractModal />
    </>
  );
};

export default TabSwitcher;
