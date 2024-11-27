"use client";
import {
  FormData,
  UserAction,
} from "@/app/(public pages)/(sign-in-sign-up)/sign-up/page";
import { Dispatch, useState } from "react";
import CloseEyeSVG from "./CloseEyeSVG";
import OpenEyeSVG from "./OpenEyeSVG";
import WarningSVG from "./WarningSVG";

type PropsType = {
  dispatchFormData: Dispatch<UserAction>;
  formData: FormData;
};
const SignUpPassword = ({ formData, dispatchFormData }: PropsType) => {
  const [show, setShow] = useState(false);
  return (
    <div className="password-container mb-[24px] md:mb-[28px]">
      <label htmlFor="password" className="login-form-label">
        Password
      </label>
      <div className="w-full relative">
        <input
          type={show ? "text" : "password"}
          className="login-form-input border border-[#0000001a]"
          placeholder="Password (8 more character)"
          onChange={(e) =>
            dispatchFormData({
              type: "SET_PASSWORD",
              payload: { value: e.target.value, error: "" },
            })
          }
          value={formData.password.value}
        />
        {show ? (
          <OpenEyeSVG setShow={setShow} />
        ) : (
          <CloseEyeSVG setShow={setShow} />
        )}
      </div>
      {formData.password.error && (
        <p className="text-[#FF0000] fs-sm flex items-center gap-[6px] mt-[7px] md:mt-[10px]">
          <WarningSVG /> {formData.password.error}
        </p>
      )}
    </div>
  );
};

export default SignUpPassword;
