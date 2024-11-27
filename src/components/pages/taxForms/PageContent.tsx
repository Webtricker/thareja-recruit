import Link from "next/link";
import { RecruitCommunityCard, WBBENCard } from "./Cards";

const TaxformsPageContent = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* ====== main content starts ======== */}
      <div className="w-full">
        <h3 className="fs-3xl mb-2.5">Tax forms</h3>
        <p className="fs-base">
          For more details, such as your tax residence and identification, go to{" "}
          <Link href="/settings/tax-information" className="text-[#005AFF]">
            tax information.
          </Link>
        </p>
      </div>
      <h3 className="fs-3xl mb-2.5">W-BBEN</h3>
      <WBBENCard />
      <RecruitCommunityCard />

      {/* ======= modals ============ */}
    </div>
  );
};

export default TaxformsPageContent;
