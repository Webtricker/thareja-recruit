"use client"
import { ChangeEvent, useState } from "react";
import { InputValDeleteSVG } from "../createFreelancerProfile/Icons";

type FormInputProps = {
  label?: string;
  className?: string;
  labelStyle?: string;
  inputStyle?: string;
  inputType: string;
  inputPlaceholder: string;
  changeHandler: Function;
  showClearBtn: boolean;
};
export const FormInput = ({
  label,
  className,
  labelStyle,
  inputStyle,
  inputType,
  inputPlaceholder,
  changeHandler,
  showClearBtn,
}: FormInputProps) => {
  const [val, setVal] = useState("");

  // =========== handlers ===========
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
    changeHandler(e.target.value);
  };

  const handleClear = () => {
    setVal("");
    changeHandler("");
  };
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor="" className={`fs-md mb-1.5 block ${labelStyle}`}>
          {label}
        </label>
      )}
      <div className="w-full relative">
        <input
          type={inputType}
          value={val}
          onChange={handleChange}
          placeholder={inputPlaceholder}
          className={`fs-base w-full flex items-center justify-between gap-5 bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF] ${inputStyle}`}
        />
        {showClearBtn ? (
          <button
            onClick={handleClear}
            className="absolute top-[50%] right-[14px] translate-y-[-50%]"
          >
            <InputValDeleteSVG />
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

// ========== country selector dropdown ===========
