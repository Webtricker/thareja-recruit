"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import InvitedFreelancers from "./InvitedFreelancers";
import MyHires from "./MyHires";
import SavedFreelancers from "./SavedFreelancers";
import SearchedFreelancers from "./SearchedFreelancers";

const PageContent = () => {
  const active = useSelector(
    (state: RootState) => state.inviteFreelancersActiveStages.activeTabBtn
  );
  if (active === "SEARCH") return <SearchedFreelancers />;
  if (active === "INVITE") return <InvitedFreelancers />;
  if (active === "HIRE") return <MyHires />;
  if (active === "SAVED") return <SavedFreelancers />;
  return <></>;
};

export default PageContent;
