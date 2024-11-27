import { IdentityVerifiedCard } from "./Cards";

const IdentityVerificationPageContent = () => {
  return (
    <div className="w-full">
      <h3 className="fs-3xl mb-5 md:mb-6">Identity verification</h3>

      {/* ====== main content starts ======== */}
      <IdentityVerifiedCard />
    </div>
  );
};

export default IdentityVerificationPageContent;
