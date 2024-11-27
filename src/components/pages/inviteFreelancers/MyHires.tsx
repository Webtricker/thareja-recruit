import FreelancerInvitationModalWrapper from "@/components/shared/modal/FreelancerInvitationModal";
import FreelancersProfileModal from "@/components/shared/modal/FreelancersProfileModal";
import FreelancersDetailsCard from "./FreelancersDetailsCard";

const MyHires = () => {
  return (
    <div className="w-full flex flex-col gap-[30px]">
      <FreelancersDetailsCard />
      <FreelancersDetailsCard />
      <FreelancersDetailsCard />
      <FreelancersDetailsCard />
      <FreelancersDetailsCard />
      <FreelancersDetailsCard />
      <FreelancersDetailsCard />
      <FreelancersDetailsCard />
      <FreelancersDetailsCard />
      <FreelancersDetailsCard />
      <FreelancersDetailsCard />
      <FreelancersDetailsCard />
      <FreelancersDetailsCard />

      {/* ======== Freelancer invite modal ========= */}
      <FreelancerInvitationModalWrapper />

      {/* ======== Freelancer profile modal ========= */}
      <FreelancersProfileModal />
    </div>
  );
};

export default MyHires;
