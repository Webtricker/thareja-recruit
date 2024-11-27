import Link from "next/link";
import { MyProfilePreferences } from "./ClientComponents";
import { CategoryUpdateModal } from "./ModalContent";
import {
  APIpreference,
  LinkedAccounts,
  SelectedCategories,
  SetProfileJobExperienceLevel,
  SpecialisedProfiles,
} from "./ServerComponents";

const MyProfilePageContent = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* ====== main content starts ======== */}
      <div className="w-full mb-4 lg:mb-6 flex items-center justify-between gap-5 flex-wrap">
        <h3 className="fs-3xl">My profile</h3>
        <Link href="#" className="text-[#005AFF] fs-base">
          View my profile as others see it.
        </Link>
      </div>

      <div className="w-full flex flex-col gap-6">
        <MyProfilePreferences />
      </div>

      <div className="w-full flex flex-col gap-6">
        <SetProfileJobExperienceLevel />
        <SelectedCategories />
        <SpecialisedProfiles />
        <LinkedAccounts />
        <APIpreference />
      </div>
      {/* ======= modals ============ */}
      <CategoryUpdateModal />
    </div>
  );
};

export default MyProfilePageContent;
