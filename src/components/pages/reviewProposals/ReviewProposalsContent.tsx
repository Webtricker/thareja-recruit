"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import AllProposals from "./AllProposals";
import ArchivedProposals from "./ArchivedProposals";
import ProposalMessaged from "./ProposalMessaged";
import ShortListed from "./ShortListed";

const ReviewProposalsContent = () => {
  const active = useSelector(
    (state: RootState) => state.reviewJobProposalsActiveStages.activeTabBtn
  );
  switch (active) {
    case "PROPOSALS":
      return <AllProposals />;
    case "SHORT_LISTED":
      return <ShortListed />;
    case "MESSAGE":
      return <ProposalMessaged />;
    case "ARCHIVED":
      return <ArchivedProposals />;
    default:
      return <></>;
  }
};

export default ReviewProposalsContent;
