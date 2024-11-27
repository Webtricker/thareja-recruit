import FreelancersProfileModal from "@/components/shared/modal/FreelancersProfileModal";
import SavedFreelancersCard from "./SavedFreelancersCard";

const SavedFreelancers = () => {
  return (
    <div className="w-full flex flex-col gap-[30px]">
      <SavedFreelancersCard />

      {/* ======== Freelancer profile modal ========= */}
      <FreelancersProfileModal />
    </div>
  );
};

export default SavedFreelancers;
