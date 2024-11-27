import {
  BannerCard,
  Offers,
  PopularOffers,
} from "@/components/pages/appsAndOffers/Cards";
import Container from "@/components/shared/wrapper/Container";

const AppsAndOffersPage = () => {
  return (
    <div className="px-5 md:px-[40px] text-[#30353E] w-full relative pt-[130px] pb-[100px] 2xl:pb-[120px]">
      <Container className="mx-auto !max-w-[1518px] h-full flex flex-col">
        <h1 className="fs-5xl mb-3">Apps and offers</h1>
        <p className="fs-base">
          Boost your productivity with new AI apps. Get exclusive discounts and
          free trials on top industry tools.
        </p>
        <h3 className="fs-xl-lh-normal mt-[30px] lg:mt-10 mb-5">
          Exclusive app for Freelancer Plus
        </h3>

        <BannerCard />
        <PopularOffers />
        <Offers />
      </Container>
    </div>
  );
};

export default AppsAndOffersPage;
