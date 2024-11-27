import Image from "next/image";
import { ReactNode } from "react";
import { DollarTagBlueSVG, DollarTagSVG } from "./Icons";
import { offersData, popularOffersData } from "./data";

// ========= Banner card ===========
export function BannerCard() {
  return (
    <div className="w-full p-[1px] rounded-[30px] bg-gradient-to-r from-[#01D18F] to-[#005AFF] mt-6 mb-5">
      <div className="w-full flex flex-col-reverse lg:flex-row overflow-hidden lg:items-center justify-between gap-[50px]  bg-white rounded-[30px] h-full">
        {/*  ======= content container  ======= */}
        <div className="flex-grow mx-5 md:mx-6 lg:mr-0 lg:ml-7 xl:ml-10 2xl:ml-[50px] my-5">
          <h5 className="fs-lg-lh-normal text-[#525966] mb-2.5">
            Recruit Chat Pro
          </h5>
          <h2 className="fs-4xl ">
            Use AI to do your work faster. Generate ideas, draft contect, and
            more with Uma and GPT-4o.
          </h2>
          <div className="flex items-center w-full gap-3 mt-6 mb-5 flex-wrap gap-y-5">
            <button className="fs-md btn-large text-white bg-[#005AFF] ">
              Get Recruit Chat Pro
            </button>
            <button className="fs-md py-2.5 md:py-3 px-5 md:px-8 lg:py-[16px] lg:px-[40px] text-[#005AFF] ">
              Learn more
            </button>
          </div>

          <div className="">
            <DollarTagSVG className="float-left mr-2" />
            <p className="fs-base break-words">
              Included with Freelancers Plus ($20/month)
            </p>
          </div>
        </div>

        {/* ========= banner image contianer ======== */}
        <div className="w-auto min-w-[388px] h-full">
          <Image
            height={360}
            width={388}
            className="w-full lg:h-full"
            src="/svgs/app-and-offers-banner.svg"
            alt="App and offers banner"
          />
        </div>
      </div>
    </div>
  );
}

type CardContentPropsType = {
  title: string;
  trial: string;
  description: string;
  imgUrl: string;
};
// ========= Card Content ===========
const CardContent = (props: CardContentPropsType) => {
  return (
    <div className="w-full flex gap-5 items-start">
      <Image
        height={60}
        width={60}
        className="w-auto h-auto"
        src={props.imgUrl}
        alt={props.title}
      />

      <div className="flex-grow w-full">
        <h4 className="fs-lg-lh-normal">{props.title}</h4>

        <div className="w-full my-2 5 flex items-center gap-1">
          <DollarTagBlueSVG className="min-w-[18.235px]" />{" "}
          <p className="fs-base text-[#005AFF]">{props.trial}</p>
        </div>

        <p className="fs-base text-[#525966]">{props.description}</p>
      </div>
    </div>
  );
};

// =========== features ===========
const Features = () => {
  return (
    <div className="mt-5 w-full flex items-center gap-5 md:gap-1 flex-wrap gap-y-5 md:justify-between">
      <span className="fs-base inline-block py-2 px-4 rounded-[20px] border border-[#0000000f] bg-[#005aff08]">
        Web, Mobile & Software Dev
      </span>
      <span className="fs-base inline-block py-2 px-4 rounded-[20px] border border-[#0000000f] bg-[#005aff08]">
        IT & Net...
      </span>
      <span className="fs-base inline-block py-2 px-4 rounded-[20px] border border-[#0000000f] bg-[#005aff08]">
        +8
      </span>
    </div>
  );
};

// ========== card ============
// const AppCard = (props:PropsType)=>{
const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="offer-card-shadow  cursor-pointer w-full max-w-[486px] py-5 md:py-6 px-5 rounded-[20px] hover:border-transparent border border-[#005aff33] bg-[#FBFCFF]">
      {children}
    </div>
  );
};

// =========== Popular offers for Web, Mobile & Software Dev ========
export function PopularOffers() {
  return (
    <div className="w-full my-10  md:my-14 lg:my-16 xl:my-20">
      <h5 className="fs-lg-lh-normal mb-[25px] md:mb-[30px]">
        Popular offers for Web, Mobile & Software Dev
      </h5>
      <div className="w-full flex gap-[30px] 2xl:gap-3  2xl:justify-between flex-wrap gap-y-[30px]">
        {popularOffersData.map((data) => (
          <Card key={data.id}>
            <CardContent
              title={data.title}
              trial={data.trial}
              description={data.description}
              imgUrl={data.imgUrl}
            />
            <Features />
          </Card>
        ))}
      </div>
    </div>
  );
}

const OfferCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="offer-card-shadow w-full max-w-[486px] py-5 md:py-6 px-5 rounded-[20px]">
      {children}
    </div>
  );
};

// ========== All offers =================
export function Offers() {
  return (
    <div className="w-full my-10  md:my-14 lg:my-16 xl:my-20">
      <h5 className="fs-lg-lh-normal mb-[25px] md:mb-[30px] pb-2.5 border-b border-[#DDE3E7]">
        All offers
      </h5>
      <div className="w-full flex gap-3 justify-between flex-wrap gap-y-[30px]">
        {offersData.map((data) => (
          <OfferCard key={data.id}>
            <CardContent
              title={data.title}
              trial={data.trial}
              description={data.description}
              imgUrl={data.imgUrl}
            />
          </OfferCard>
        ))}
      </div>
    </div>
  );
}
