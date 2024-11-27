import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import CompletedJobDetails from "./CompletedJobDetails";
import InProgressJobDetails from "./InProgressJobDetails";

const WorkHistoryContent = () => {
  const active = useSelector(
    (state: RootState) => state.freelancerProfileActiveStages.activeTabBtn
  );
  return active === "COMPLETED_JOBS" ? (
    <CompletedJobDetails />
  ) : (
    <InProgressJobDetails />
  );
};

export default WorkHistoryContent;
