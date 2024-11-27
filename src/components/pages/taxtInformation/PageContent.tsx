import {
  AdditionalTaxInformationCard,
  TaxIdentificationNumberCard,
  TaxpayerIdentificationCard,
  TaxResidenceCard,
} from "./Cards";
import {
  GoodsAndServicesModal,
  TaxIdentificationNumberModal,
  TaxprayerIdentificationModal,
  TaxResidenceModal,
} from "./Modals";

const TaxinfoPageContent = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* ====== main content starts ======== */}
      <div className="w-full">
        <h3 className="fs-3xl mb-2.5">Tax information</h3>
        <p className="fs-base">
          This information is required in order to confirm if you are a U.S. or
          non-U.S. taxpayer and whether or not Recruit is required to with hold
          taxes from your earnings. Add your tax information now to avoid delays
          in getting paid.
        </p>
      </div>
      <TaxResidenceCard />
      <TaxpayerIdentificationCard />
      <TaxIdentificationNumberCard />
      <AdditionalTaxInformationCard />

      {/* ======= modals ============ */}
      <TaxResidenceModal />
      <TaxprayerIdentificationModal />
      <TaxIdentificationNumberModal />
      <GoodsAndServicesModal />
    </div>
  );
};

export default TaxinfoPageContent;
