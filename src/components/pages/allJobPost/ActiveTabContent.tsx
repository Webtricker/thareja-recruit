"use client";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import AllJobContracts from "./AllJobContracts";
import AllJobPost from "./AllJobPost";
const ActiveTabContent = () => {
  const dispatch = useDispatch();
  const active = useSelector(
    (state: RootState) => state.allJobPostActiveStages.activeTabBtn
  );
  //   ======= handelars ========
  return active === "ALL_CONTRACTS" ? <AllJobContracts /> : <AllJobPost />;
};

export default ActiveTabContent;
