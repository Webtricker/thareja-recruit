import { TeamInfoCard } from "./Cards";
import { TeamDropdown } from "./SelectItems";

const MyTeamPageContent = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* ====== main content starts ======== */}
      <div className="w-full">
        <h3 className="fs-3xl">Default team</h3>
        <p className="mt-2.5 text-base">
          This team will be used for offers sent by clients directly
        </p>
      </div>
      <TeamDropdown />

      <TeamInfoCard />
      <div className="w-full flex flex-col gap-6"></div>
    </div>
  );
};

export default MyTeamPageContent;
