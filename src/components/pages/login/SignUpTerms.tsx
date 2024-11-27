"use client";
import {
  FormData,
  UserAction,
} from "@/app/(public pages)/(sign-in-sign-up)/sign-up/page";
import ActiveInActiveCheckboxes from "@/components/shared/checkbox/ActiveInActiveCheckboxes";
import Link from "next/link";
import { Dispatch } from "react";

type PropsType = {
  formData: FormData;
  dispatchFormData: Dispatch<UserAction>;
};
const SignUpTerms = ({ formData, dispatchFormData }: PropsType) => {
  return (
    <div className="w-full mb-[30px] md:mb-[40px]">
      <div className="flex items-center gap-[15px] mb-[24px] text-[15px] md:text-[18px] leading-normal tracking-[0.36px]">
        <button
          className=" md:mt-1 lg:mt-0.5"
          type="button"
          onClick={() =>
            dispatchFormData({
              type: "SET_EMAIL_NOTIFY",
              payload: !formData.sendEmailNotify,
            })
          }
        >
          <ActiveInActiveCheckboxes
            key="SIGN_IN_TEMRS_CHECKBOX"
            active={formData.sendEmailNotify}
            className="cursor-pointer w-5 min-w-5 max-h-5 max-w-5 lg:min-w-6 h-5 lg:w-6 lg:h-6 lg:max-w-6 lg:max-h-6"
          />
        </button>
        <span
          className="fs-base"
          // onClick={() => setSendTipsEmails(!sendTipsEmails)}
        >
          Send me emails with tips on how to find talent that fits my needs.
        </span>
      </div>

      <div className="flex items-start justify-start gap-[15px] text-[15px] md:text-[18px] leading-normal tracking-[0.36px]">
        <button
          className=" md:mt-1 lg:mt-0.5"
          type="button"
          onClick={() =>
            dispatchFormData({
              type: "SET_TERMS_AND_CONDITIONS",
              payload: !formData.atsTermAndCondition,
            })
          }
        >
          <ActiveInActiveCheckboxes
            key="SIGN_IN_TEMRS_CHECKBOX"
            active={formData.atsTermAndCondition}
            className="cursor-pointer w-5 min-w-5 max-h-5 max-w-5 lg:min-w-6 h-5 lg:w-6 lg:h-6 lg:max-w-6 lg:max-h-6"
          />
        </button>
        <span
          // onClick={() => setAgreeTerms(!agreeTerms)}
          className="fs-base"
        >
          Yes, Understand and agree to the{" "}
          <Link
            href="/terms-of-service"
            className="underline hover:no-underline text-[#005AFF]"
          >
            Recruit Terms of Service
          </Link>{" "}
          . Including the{" "}
          <Link
            href="/user-agreement"
            className="underline hover:no-underline text-[#005AFF]"
          >
            User Agreement
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy-policy"
            className="underline hover:no-underline text-[#005AFF]"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </div>
    </div>
  );
};

export default SignUpTerms;
