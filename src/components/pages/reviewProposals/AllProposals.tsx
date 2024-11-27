import FreelancerInvitationModalWrapper from "@/components/shared/modal/FreelancerInvitationModal";
import FreelancersProfileModal from "@/components/shared/modal/FreelancersProfileModal";
import JobsPagination from "@/components/shared/pagination/JobsPagination";
import { useState } from "react";
import ReviewProposalsFreeLancerCard from "./ReviewProposalsFreeLancerCard";

const PaginationWrapper = () => {
  const pagination = true; // later we will the value .
  const totalPage = 10; // later we will the value .
  const [currentPage, setCurrentPage] = useState(1);
  if (pagination)
    return (
      <JobsPagination
        currentPage={currentPage}
        totalPage={totalPage}
        setCurrentPage={setCurrentPage}
      />
    );
  return <></>;
};

// ====== root component =========
const AllProposals = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <ReviewProposalsFreeLancerCard />
      <ReviewProposalsFreeLancerCard />
      <ReviewProposalsFreeLancerCard />
      <ReviewProposalsFreeLancerCard />
      <ReviewProposalsFreeLancerCard />
      <ReviewProposalsFreeLancerCard />
      <ReviewProposalsFreeLancerCard />
      <ReviewProposalsFreeLancerCard />
      <ReviewProposalsFreeLancerCard />
      <ReviewProposalsFreeLancerCard />
      <ReviewProposalsFreeLancerCard />
      <ReviewProposalsFreeLancerCard />
      <ReviewProposalsFreeLancerCard />
      <ReviewProposalsFreeLancerCard />
      <ReviewProposalsFreeLancerCard />
      <ReviewProposalsFreeLancerCard />
      <ReviewProposalsFreeLancerCard />
      <ReviewProposalsFreeLancerCard />

      {/* ======== Freelancer invite modal ========= */}
      <FreelancerInvitationModalWrapper />

      {/* ======== Freelancer profile modal ========= */}
      <FreelancersProfileModal />

      <PaginationWrapper />
    </div>
  );
};

export default AllProposals;
