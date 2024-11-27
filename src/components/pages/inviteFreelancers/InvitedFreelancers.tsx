import FreelancersProfileModal from "@/components/shared/modal/FreelancersProfileModal";
import InvitedFreelancersCard from "./InvitedFreelancersCard";

const InvitedFreelancers = () => {
  return (
    <div className="w-full flex flex-col gap-[30px]">
      <InvitedFreelancersCard />
      <InvitedFreelancersCard />
      <InvitedFreelancersCard />
      <InvitedFreelancersCard />
      <InvitedFreelancersCard />

      {/* ======== Freelancer profile modal ========= */}
      <FreelancersProfileModal />
    </div>
  );
};

export default InvitedFreelancers;
