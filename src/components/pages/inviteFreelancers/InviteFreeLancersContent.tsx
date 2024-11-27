"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import InvitedFreelancers from "./InvitedFreelancers";
import MyHires from "./MyHires";
import SavedFreelancers from "./SavedFreelancers";
import SearchedFreelancers from "./SearchedFreelancers";

const InviteFreeLancersContent = () => {
  const active = useSelector(
    (state: RootState) => state.inviteFreelancersActiveStages.activeTabBtn
  );
  switch (active) {
    case "SEARCH":
      return <SearchedFreelancers />;
    case "INVITE":
      return <InvitedFreelancers />;
    case "HIRE":
      return <MyHires />;
    case "SAVED":
      return <SavedFreelancers />;
    default:
      return <></>;
  }
};

export default InviteFreeLancersContent;
