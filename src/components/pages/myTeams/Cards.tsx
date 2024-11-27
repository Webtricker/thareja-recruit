import SettingsContentCardWrapper from "@/components/shared/card/SettingsCardWrapper";

export const TeamInfoCard = () => {
  return (
    <SettingsContentCardWrapper>
      <h2 className="fs-lg-lh-normal mb-2.5">My team</h2>
      <p className="fs-base mb-[30px] lg:mb-[34px]">
        Teams are used to group contract by department or manager.
      </p>
      <div className="w-full grid md:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-5 lg:gap-6">
        <div className="w-full">
          <h2 className="fs-xl-lh-normal py-2.5 md:py-[14px] px-4 md:px-[18px] rounded-[6px] bg-[#005aff0a] ">
            Team Name
          </h2>
          <ul className="w-full px-4 md:px-[18px] flex flex-col gap-5 mt-5">
            <li className="fs-base">ABC Technologies LLP</li>
            <li>
              <span className="w-full h-[1px] block bg-[#DDE3E7]"></span>
            </li>
            <li className="fs-base">Fun Tastic Ventures</li>
            <li>
              <span className="w-full h-[1px] block bg-[#DDE3E7]"></span>
            </li>
            <li className="fs-base">BuildCatalyst</li>
            <li>
              <span className="w-full h-[1px] block bg-[#DDE3E7]"></span>
            </li>
            <li className="fs-base">GlowGrid</li>
            <li>
              <span className="w-full h-[1px] block bg-[#DDE3E7]"></span>
            </li>
            <li className="fs-base">Farm With Crowdee</li>
          </ul>
        </div>
        <div className="w-full">
          <h2 className="fs-xl-lh-normal py-2.5 md:py-[14px] px-4 md:px-[18px] rounded-[6px] bg-[#005aff0a]">
            Role
          </h2>
          <ul className="w-full px-4 md:px-[18px] flex flex-col gap-5 mt-5">
            <li className="fs-base">Team Leader</li>
            <li>
              <span className="w-full h-[1px] block bg-[#DDE3E7]"></span>
            </li>
            <li className="fs-base">Designer</li>
            <li>
              <span className="w-full h-[1px] block bg-[#DDE3E7]"></span>
            </li>
            <li className="fs-base">Manager</li>
            <li>
              <span className="w-full h-[1px] block bg-[#DDE3E7]"></span>
            </li>
            <li className="fs-base">Team Leader</li>
            <li>
              <span className="w-full h-[1px] block bg-[#DDE3E7]"></span>
            </li>
            <li className="fs-base">Designer</li>
          </ul>
        </div>
      </div>
    </SettingsContentCardWrapper>
  );
};
