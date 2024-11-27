"use client";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useSelector } from "react-redux";
import FreelancerFAQ from "./FreelancerFAQ";
import HiredFreelancerDetailsCard from "./HiredFreelancerDetailsCard";
import OffersFreelancerCard from "./OffersFreelancerCard";
import PaymentInfo from "./paymentsInfo";
import WorkDescription from "./WorkDescription";

const OfferedFreelancers = () => {
  return (
    <div className="w-full">
      <OffersFreelancerCard />
      <div className="w-full mt-9 md:mt-10">
        <h2 className=" fs-4xl mb-[18px]">Send an offer</h2>
        <Link href="/contact-form" className="text-[#005AFF] fs-xl-lh-lg">
          Contract terms
        </Link>
        <p className=" fs-lg-lh-lg">
          <Link href="/contact-form" className="float-left text-[#005AFF] mr-1">
            Upwork Payment Protection.
          </Link>
          <span>Only pay for the work you authorize.</span>
        </p>
      </div>
      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-6 md:my-7 lg:my-[30px] bg-[#0000001f]"></span>
      <PaymentInfo />
      <FreelancerFAQ />
      <WorkDescription />
      <div className="w-full flex items-center justify-end">
        <button className="fs-md btn-large">Cancel</button>
        <button className="fs-md btn-large btn-bg-blue">Continue</button>
      </div>
    </div>
  );
};

const HiredFreelancers = () => {
  return (
    <div className="w-full">
      <HiredFreelancerDetailsCard />
    </div>
  );
};

//  ============= root component =============
const HireFreelancersContent = () => {
  const active = useSelector(
    (state: RootState) => state.hireFreelancersActiveStages.activeTabBtn
  );
  switch (active) {
    case "OFFERS":
      return <OfferedFreelancers />;
    case "HIRED":
      return <HiredFreelancers />;
  }
};

export default HireFreelancersContent;
