import Image from "next/image";
import { CreditCardSVG } from "./PaymentIcons";

const PaymentCards = () => {
  return (
    <div className="full grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-8 md:gap-10 2xl:gap-10">
      <div className="w-full rounded-[20px] p-[1px]  bg-gradient-to-r to-[#005AFF] from-[#01D18F]">
        <div className="p-5  min-h-[346px] bg-white md:pl-[30px] md:pr-6 md:pb-[30px] rounded-[19px]">
          <CreditCardSVG className="max-h-[140px] max-w-[140px]" />
          <div className="w-full mt-5 md:mt-8 lg:mt-10">
            <p className="mb-2.5 fs-lg-lh-normal text-[#525966]">Payments</p>
            <h3 className="fs-xl-lh-lg">
              Everything you need to know about payments
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full rounded-[20px] p-[1px]  bg-gradient-to-r to-[#005AFF] from-[#01D18F]">
        <div className="p-5  min-h-[346px] bg-white md:pl-[30px] md:pr-6 md:pb-[30px] rounded-[19px]">
          <Image
            src="/svgs/Debit-card.svg"
            alt="payment card icon"
            width={140}
            height={140}
            className="max-h-[140px] max-w-[140px]"
          />

          <div className="w-full mt-5 md:mt-8 lg:mt-10">
            <p className="mb-2.5 fs-lg-lh-normal text-[#525966]">Payments</p>
            <h3 className="fs-xl-lh-lg">
              How to set up your preferred billing method
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full rounded-[20px] p-[1px]  bg-gradient-to-r to-[#005AFF] from-[#01D18F]">
        <div className="p-5  min-h-[346px] bg-white md:pl-[30px] md:pr-6 md:pb-[30px] rounded-[19px]">
          <Image
            src="/svgs/lego-man-site-ground.svg"
            alt="Community  icon"
            width={152}
            height={163}
            className="max-h-[140px] max-w-[140px]"
          />

          <div className="w-full mt-5 md:mt-8 lg:mt-10">
            <p className="mb-2.5 fs-lg-lh-normal text-[#525966]">Payments</p>
            <h3 className="fs-xl-lh-lg">
              Keep yourself and others safe on Recruit
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCards;
