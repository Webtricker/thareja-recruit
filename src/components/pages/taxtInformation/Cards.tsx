import Link from "next/link";
import {
  Button,
  EditAdditionalTaxInformationBtn,
  EditTaxIdentificationNumberBtn,
  EditTaxpayerIdentificationButton,
  EditTaxResidenceButton,
} from "./Buttons";

export const TaxResidenceCard = () => {
  return (
    <div className="relative w-full p-5 lg:p-[30px] border border-[#00000024] rounded-[20px]">
      <div className="w-full flex justify-between gap-10 ">
        <div className="flex-grow md:flex items-center gap-5 flex-wrap">
          <h3 className="fs-xl-lh-normal mb-5 md:mb-0 max-w-[300px] md:max-w-[99999px]">
            Tax residence
          </h3>
          <Button text="Completed" style="btn-border-blue" />
        </div>
        <EditTaxResidenceButton />
      </div>

      <p className="fs-base mb-[22px] text-[#525966] mt-6">
        Your tax residence information is part of the Recruit W-9 or W-8 form
        process. This address will be displayed on invoices.
      </p>
      <h4 className="fs-lg-lh-normal mb-2.5">Address</h4>
      <div className="w-full text-[#525966]">
        <p className="fs-base">2464 Royal Ln. </p>
        <p className="fs-base">Mesa, </p>
        <p className="fs-base ">New Jersey 45463</p>
      </div>
    </div>
  );
};

export const TaxpayerIdentificationCard = () => {
  return (
    <div className="relative w-full p-5 lg:p-[30px] border border-[#00000024] rounded-[20px]">
      <div className="w-full flex justify-between gap-10 ">
        <div className="flex-grow md:flex items-center gap-5 flex-wrap">
          <h3 className="fs-xl-lh-normal mb-5 md:mb-0 max-w-[300px] md:max-w-[99999px]">
            Taxpayer identification
          </h3>
          <Button text="Completed" style="btn-border-blue" />
        </div>
        <EditTaxpayerIdentificationButton />
      </div>

      <div className="w-full flex flex-col gap-[22px] mt-6">
        <p className="fs-base">
          Your taxpayer identification information will be included as an
          Recruit W-9 or W-8 series substitute form.
        </p>
        <div className="w-full">
          <h4 className="fs-lg-lh-normal mb-2.5">Legal name of taxpayer</h4>
          <p className="fs-base text-[#525966]">Muhammad l.</p>
        </div>
        <div className="w-full">
          <h4 className="fs-lg-lh-normal mb-2.5">Federal tax classification</h4>
          <p className="fs-base text-[#525966]">Individual</p>
        </div>
        <div className="w-full">
          <h4 className="fs-lg-lh-normal mb-2.5">Country of citizenship</h4>
          <p className="fs-base text-[#525966]">New Jersey</p>
        </div>
        <div className="w-full">
          <h4 className="fs-lg-lh-normal mb-2.5">Date of birth</h4>
          <p className="fs-base text-[#525966]">01/12/2000</p>
        </div>
      </div>
    </div>
  );
};

export const TaxIdentificationNumberCard = () => {
  return (
    <div className="relative w-full p-5 lg:p-[30px] border border-[#00000024] rounded-[20px]">
      <div className="w-full flex justify-between gap-10 ">
        <div className="flex-grow md:flex items-center gap-5 flex-wrap">
          <h3 className="fs-xl-lh-normal mb-5 md:mb-0 max-w-[300px] md:max-w-[99999px]">
            Tax identification number
          </h3>
          <Button text="Completed" style="btn-border-blue" />
        </div>
        <EditTaxIdentificationNumberBtn />
      </div>

      <div className="w-full flex flex-col gap-[22px] mt-6">
        <p className="fs-base">
          Please provide your{" "}
          <Link href="#" className="text-[#005AFF]">
            tax identification number
          </Link>{" "}
          (TIN). If you don&apos;t have a TIN, consult a local tax professional
          or your tax advisor. For more details,{" "}
          <Link href="#" className="text-[#005AFF] underline">
            read our help article
          </Link>
          .
        </p>
        <div className="w-full">
          <h4 className="fs-lg-lh-normal mb-2.5">
            Tax identification number submitted
          </h4>
          <p className="fs-base text-[#525966]">**********12E</p>
        </div>
        <div className="w-full">
          <h4 className="fs-lg-lh-normal mb-2.5">Signer of certificate</h4>
          <p className="fs-base text-[#525966]">Muhammad l.</p>
        </div>
        <div className="w-full">
          <h4 className="fs-lg-lh-normal mb-2.5">Date</h4>
          <p className="max-w-[154px] fs-md btn-large bg-[#dde3e766] 2xl:px-6 !rounded-[10px]">
            15/12/2023
          </p>
        </div>
      </div>
    </div>
  );
};

export const AdditionalTaxInformationCard = () => {
  return (
    <div className="relative w-full p-5 lg:p-[30px] border border-[#00000024] rounded-[20px]">
      <div className="w-full flex justify-between gap-10 ">
        <div className="flex-grow md:flex items-center gap-5 flex-wrap">
          <h3 className="fs-xl-lh-normal mb-5 md:mb-0 max-w-[300px] md:max-w-[99999px]">
            Goods and services tax (GST)
          </h3>
          <Button text="Completed" style="btn-border-blue" />
        </div>
        <EditAdditionalTaxInformationBtn />
      </div>

      <div className="w-full flex flex-col gap-[22px] mt-6">
        <p className="fs-base">
          If you&apos;re registered for GST, submit your ID and we&apos;ll stop
          collecting that tax right away. If you&apos;re not registered,
          we&apos;re required by law to collect GSTIN for specific transactions.
        </p>
        <div className="w-full">
          <h4 className="fs-lg-lh-normal mb-2.5">GSTIN submitted</h4>
          <p className="fs-base text-[#525966] mb-2.5">50AATDE5289B4V0</p>
          <p className="fs-base text-[#525966]">
            I confirm that I&apos;m registered for GST in India and I&apos;m
            providing a valid GSTIN.
          </p>
        </div>
      </div>
    </div>
  );
};
