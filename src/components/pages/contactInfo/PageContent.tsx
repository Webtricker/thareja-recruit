import {
  AccountDetailsCard,
  AdditionalAccountsCard,
  LocationCard,
} from "./Cards";
import { AccountUpdateModal, LocationUpdateModal } from "./Modals";

const PageContent = () => {
  return (
    <div className="w-full ">
      <h3 className="fs-3xl mb-5 md:hidden">Contact Info</h3>

      {/* ====== main content starts ======== */}
      <div className="w-full flex flex-col gap-6">
        <AccountDetailsCard />
        <AdditionalAccountsCard />
        <LocationCard />
      </div>

      {/* ==== modals ==== */}
      <AccountUpdateModal />
      <LocationUpdateModal />
    </div>
  );
};

export default PageContent;
