import { ContactForm } from "../directContacts/Modals";
import { CreateContractButton, ShareProfileButton } from "./Buttons";
import TabSwitcher from "./Tab";

const PageContent = () => {
  return (
    <div className="w-full ">
      <div className="w-full flex gap-5 flex-wrap items-center justify-between mb-[30px]">
        <h1 className="fs-5xl text-[#30353E]">Apps and offers</h1>

        <div className="max-w-[525px] w-full flex flex-wrap gap-y-5 items-center justify-end gap-[14px]">
          <ShareProfileButton />
          <CreateContractButton />
        </div>
      </div>

      {/* ========== tab switcher ======== */}
      <TabSwitcher />

      {/* ========= Contact form modal ========= */}
      <ContactForm />
    </div>
  );
};

export default PageContent;
