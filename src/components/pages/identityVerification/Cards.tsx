import SettingsContentCardWrapper from "@/components/shared/card/SettingsCardWrapper";
import Image from "next/image";
import Link from "next/link";
import { IdentityVerificationSteps } from "./ClientComponents";
import { PrivacyLockSVG } from "./Icons";

export const IdentityVerifiedCard = () => {
  return (
    <SettingsContentCardWrapper>
      <div className="w-full">
        <h4 className="w-full fs-lg-lh-normal mb-2 flex items-center gap-[14px]">
          You verified your identity{" "}
          <Image
            className="w-6 h-auto"
            src="/svgs/settings/verified-icon.svg"
            width={24}
            height={24}
            alt="Verified icon"
          />
        </h4>
        <p className="fs-base">
          You’ve completed an important part of establishing trust in our global
          work marketplace.
        </p>
        <IdentityVerificationSteps />
        <div className="w-full p-3 lg:p-[14px] flex items-center gap-3 bg-[#dde3e766] rounded-[10px]">
          <PrivacyLockSVG />
          <p className="fs-base">
            We encrypt your data and will securely share it with our ID
            verification partner and any government that requires reporting
            income.{" "}
            <Link href="#" className="text-[#005AFF]">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </SettingsContentCardWrapper>
  );
};
