import ContractModal from "@/components/shared/modal/ContractModal";
import Image from "next/image";
import Link from "next/link";
import { CreateAContactButton, ShareProfileButton } from "./Buttons";
import {
  howItWorksCardData,
  HowItWorksCardType,
  whyUseDirectContactCardData,
} from "./data";

const DirectContacts = () => {
  return (
    <div className="w-full p-[1px] rounded-[30px] bg-gradient-to-r from-[#01D18F] to-[#005AFF]">
      <div className="w-full flex flex-col items-center bg-[#FBFCFF] py-[30px] lg:py-10 rounded-[30px]">
        <Image
          height={140}
          width={218.9}
          src="/svgs/sending-technology-and-information.svg"
          alt="Sending information and technology image"
          className="w-[200px] lg:w-[218px] h-auto  mb-[30px] lg:mb-10"
        />
        <h1 className="fs-4xl mb-[14px]">Direct Contracts</h1>

        <p className="fs-base mb-[30px] text-center">
          Securely create contracts and quickly collect payment for non-Recruit
          projects.
        </p>
        <div className="w-full flex-wrap flex gap-[14px] justify-center items-center">
          <ShareProfileButton />
          <CreateAContactButton />
        </div>
      </div>
    </div>
  );
};

const HowItWorksCard = ({ index, des }: HowItWorksCardType) => {
  return (
    <>
      <div className="w-full max-w-[468px] py-[18px] px-6 flex items-center flex-col gap-2.5">
        <div className="flex items-center justify-center w-[50px] h-[50px] p-[1px] rounded-full bg-gradient-to-r from-[#01D18F] to-[#005AFF]">
          <div className="w-[48px] h-[48px] flex  items-center justify-center bg-[#FBFCFF] rounded-full">
            {index}
          </div>
        </div>
        <p className="text-center fs-md leading_normal tracking-[0.4px]">
          {des}
          {2 == index && (
            <>
              <span className="text-[#005AFF]"> escrow</span>.
            </>
          )}
        </p>
      </div>
      {3 != index && (
        <div className="hidden lg:block w-[1px] h-[144px] bg-[#DDE3E7]"></div>
      )}
    </>
  );
};

const HowItWorks = () => {
  return (
    <div className="w-full">
      <h3 className="text-center fs-2xl mb-[30px] lg:mb-10">How it Works</h3>
      <div className="w-full flex flex-col items-center gap-1 lg:flex-row lg:justify-between  gap-y-8">
        {howItWorksCardData.map((data) => (
          <HowItWorksCard key={data.index} index={data.index} des={data.des} />
        ))}
      </div>
    </div>
  );
};

type WhyUseDirectContactCardProps = {
  imgUrl: string;
  des: string;
};
const WhyUseDirectContactCard = ({
  imgUrl,
  des,
}: WhyUseDirectContactCardProps) => {
  return (
    <div className="flex items-center p-[1px] justify-center w-[330px] h-[240px] rounded-[30px] bg-gradient-to-r from-[#01D18F] to-[#005AFF]">
      <div className="w-full h-full flex flex-col lg:justify-between items-center bg-[#FBFCFF] rounded-[29px] p-5">
        <Image
          height={150}
          width={100}
          src={imgUrl}
          alt={des}
          className=" w-auto h-auto"
        />
        <p className="mt-[35px] lg:mt-0 fs-lg-lh-normal">{des}</p>
      </div>
    </div>
  );
};

const WhyUseDirectContact = () => {
  return (
    <div className="w-full">
      <h3 className="text-center fs-2xl mb-[30px] lg:mb-10">
        Why use Direct Contracts?
      </h3>
      <div className="w-full flex  gap-y-8 gap-8 justify-center 2xl:gap-[39.33px] flex-wrap 2xl:flex-nowrap">
        {whyUseDirectContactCardData.map((data) => (
          <WhyUseDirectContactCard
            key={data.id}
            des={data.des}
            imgUrl={data.iconUrl}
          />
        ))}
      </div>
    </div>
  );
};

// ============ root component ==========
export default function PageContent() {
  return (
    <>
      <DirectContacts />
      <div className="w-full mt-[60px] md:mt-[70px] lg:mt-[80px] px-5 md:px-6 lg:px-8 2xl:px-10 py-6 md:py-8 lg:py-10 2xl:py-[60px] border border-[#00000024] rounded-[20px]">
        <HowItWorks />
        {/* ======= seperator ========= */}
        <div className="w-full h-[1px] block  my-9 lg:my-[44px] bg-[#DDE3E7]"></div>
        <WhyUseDirectContact />
        <div className="w-full h-[1px] block  my-9 lg:my-[44px] bg-[#DDE3E7]"></div>
        <div className="w-full flex flex-col items-center ">
          <h3 className="text-center fs-2xl mb-[30px] lg:mb-10">
            Try Direct Contracts
          </h3>
          <CreateAContactButton />
        </div>
      </div>

      <div className="w-full mt-10 mb-[100px] lg:mb-[120px]">
        <p className="text-center fs-lg-lh-normal">
          Learn more about{" "}
          <Link href="#" className="text-[#005AFF] underline">
            Direct Contracts
          </Link>
        </p>
      </div>

      {/* ========= Contact form modal ========= */}
      <ContractModal />
    </>
  );
}
