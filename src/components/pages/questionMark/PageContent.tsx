import Link from "next/link";
import { RecruitServiceMiddleBanner, TopBanner } from "./Card";
import { TabSwitcher } from "./DynamicComponents";
import { RecomendedTopicLinks } from "./StaticData";

const PageContent = () => {
  return (
    <div className="w-full">
      <TopBanner />

      <div className="w-full mt-[50px] lg:mt-[60px]">
        <h2 className="fs-4xl mb-7 md:mb-8">
          Choose an account type for personalised service
        </h2>
        <TabSwitcher />
      </div>

      {/* ========= middle banner =========== */}
      <RecruitServiceMiddleBanner />

      <div className="w-full">
        <h2 className="fs-4xl mb-7 md:mb-8">
          A few recommended topics for you
        </h2>

        <div className="w-full md:grid-cols-2 grid 2xl:grid-cols-3 md:gap-5 gap-y-10 lg:gap-10 justify-between mb-[100px] lg:mb-[120px]">
          {RecomendedTopicLinks.map((item) => (
            <div key={item.id}>
              <Link
                className="fs-xl-lh-normal mb-2 underline text-[#005AFF]"
                href={item.href}
              >
                {item.label}
              </Link>
              <p className="fs-base">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageContent;
