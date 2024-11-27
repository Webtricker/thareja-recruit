"use client";
import { ModalCloseSVG } from "@/components/shared/modal/Icons";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalCancelBtn, ModalUpdateBtn } from "./Buttons";
import { PrivacyPolicySVG } from "./Icons";
import { PhoneNumberInput, TimezoneAndCountry } from "./SelectItems";

// ContactForm
const AccountUpdateModalBody = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target);
    dispatch(toggleModal(null));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex-grow fs-md pl-2.5 custom_scrollbar"
    >
      <p className="flex items-center gap-[14px] mb-[28px] text-[#005AFF]">
        <PrivacyPolicySVG /> <span>Read our policy on name changes</span>
      </p>

      <div className="w-full mb-[28px] md:flex gap-6">
        <div className="w-full mb-[28px] md:mb-0">
          <label htmlFor="firstName" className="fs-md mb-2.5 block">
            First name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter first name"
            className="w-full px-[14px] py-2.5 border border-[#0000001a] rounded-[6px] focus:outline-none  focus:border-[#005AFF]"
          />
        </div>
        <div className="w-full">
          <label htmlFor="lastName" className="fs-md mb-2.5 block">
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter last name"
            className="w-full px-[14px] py-2.5 border border-[#0000001a] rounded-[6px] focus:outline-none  focus:border-[#005AFF]"
          />
        </div>
      </div>
      <div className="w-full">
        <label htmlFor="email" className="fs-md mb-2.5 block">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="w-full px-[14px] py-2.5 border border-[#0000001a] rounded-[6px] focus:outline-none  focus:border-[#005AFF]"
        />
      </div>

      {/* ======== modal footer ======= */}
      {/* ======== modal footer ======= */}
      <div className="w-full flex items-center justify-end mt-[50px] lg:mt-[72px] pr-[5px]">
        <ModalCancelBtn text="Cancel" />
        <ModalUpdateBtn text="Update" />
      </div>
    </form>
  );
};

// ========= success message modal =================
export function AccountUpdateModal() {
  const dispatch = useDispatch();
  const active = useSelector(
    (state: RootState) => state.modalToggler.activeModalID
  );

  const KEY = "OPEN_SETTINGS_CONTACT_INFO_ACOUNT_UPDATE_MODAL";

  //   reset all state
  const hideModal = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    // dispatch(resetAll("RESET"));
    dispatch(toggleModal(null));
    document.body.style.overflowY = "auto";
  };

  //  ========== hidden overflow of body ========
  useEffect(() => {
    if (active) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [active]);

  if (active !== KEY) return <></>;
  return (
    <div
      onClick={hideModal}
      className="w-full h-full fixed top-0 px-5 left-0 flex justify-center items-center bg-[#17171791] overflow-hidden z-[999999999]"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          console.log("open modal");
          dispatch(toggleModal(KEY));
        }}
        className={`w-full max-w-[844px] duration-300 h-auto max-h-[90vh] flex flex-col relative py-10 md:py-[50px] px-1.5 pr-[11px] md:px-2.5 md:pr-[15px] lg:px-[22px] lg:pr-[27px] bg-white rounded-[20px] lg:rounded-[30px]  z-[999999999999999999]`}
      >
        {/* ===== modal header ====== */}
        <div className="w-full pl-2.5 pr-[5px]">
          <div className="w-full flex justify-between items-center mb-[28px] rounded-[12px] bg-[#005aff08] py-2.5 px-[18px]">
            <h2 className="fs-xl-lh-lg">Account</h2>
            <button
              onClick={hideModal}
              className="text-gray-500 hover:text-gray-700 text-[27px]"
            >
              <ModalCloseSVG />
            </button>
          </div>
        </div>

        {/* ========== modal body ========== */}
        <AccountUpdateModalBody />
      </div>
    </div>
  );
}

// ContactForm
const LocationModalBody = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target);
    dispatch(toggleModal(null));
  };

  // handlers ====
  //   const handlePhoneNumber = (val: string) => {};

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-auto flex-grow  fs-md px-2.5 custom_scrollbar overflow-y-auto"
    >
      {/* ==== time zone & country dropwdown fields ======= */}
      <TimezoneAndCountry />

      <p className="fs-base mt-2.5 mb-[28px]">
        We take your privacy seriously. Only your city and country will be
        shared with clients.{" "}
        <Link href="#" className="text-[#005AFF] ">
          Learn more
        </Link>
      </p>

      {/* ==== city & state fields ======= */}
      <div className="w-full mb-[28px] md:flex gap-6">
        <div className="w-full mb-[28px] md:mb-0">
          <label htmlFor="address" className="fs-md mb-2.5 block">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter address"
            className="w-full px-[14px] py-2.5 border border-[#0000001a] rounded-[6px] focus:outline-none  focus:border-[#005AFF]"
          />
        </div>
        <div className="w-full">
          <label htmlFor="address2" className="fs-md mb-2.5 block">
            Address 2 (Apartment, suite, etc)
          </label>
          <input
            type="text"
            id="address2"
            name="address2"
            placeholder="Enter second address"
            className="w-full px-[14px] py-2.5 border border-[#0000001a] rounded-[6px] focus:outline-none  focus:border-[#005AFF]"
          />
        </div>
      </div>

      {/* ==== city & state fields ======= */}
      <div className="w-full mb-[28px] md:flex gap-6">
        <div className="w-full mb-[28px] md:mb-0">
          <label htmlFor="city" className="fs-md mb-2.5 block">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter city name"
            className="w-full px-[14px] py-2.5 border border-[#0000001a] rounded-[6px] focus:outline-none  focus:border-[#005AFF]"
          />
        </div>
        <div className="w-full">
          <label htmlFor="state" className="fs-md mb-2.5 block">
            State/Province
          </label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="Enter state/province name"
            className="w-full px-[14px] py-2.5 border border-[#0000001a] rounded-[6px] focus:outline-none  focus:border-[#005AFF]"
          />
        </div>
      </div>

      {/* ==== postal code field ======= */}
      <div className="w-full mb-[28px]">
        <label htmlFor="postalCode" className="fs-md mb-2.5 block">
          ZIP/Postal code
        </label>
        <input
          type="number"
          id="postalCode"
          name="postalCode"
          placeholder="Enter postal code"
          className="w-full px-[14px] py-2.5 border border-[#0000001a] rounded-[6px] focus:outline-none  focus:border-[#005AFF]"
        />
      </div>

      {/* ==== phone number field ======= */}
      <div className="w-full">
        <label htmlFor="phone" className="fs-md mb-2.5 block">
          Phone
        </label>
        <PhoneNumberInput />
      </div>

      {/* ======== modal footer ======= */}
      <div className="w-full flex items-center justify-end mt-[50px] lg:mt-[72px] pr-[5px]">
        <ModalCancelBtn text="Cancel" />
        <ModalUpdateBtn text="Update" />
      </div>
    </form>
  );
};

// ========= success message modal =================
export function LocationUpdateModal() {
  const dispatch = useDispatch();
  const active = useSelector(
    (state: RootState) => state.modalToggler.activeModalID
  );

  const KEY = "OPEN_SETTINGS_CONTACT_INFO_LOCATION_UPDATE_MODAL";

  //   reset all state
  const hideModal = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    // dispatch(resetAll("RESET"));
    dispatch(toggleModal(null));
    document.body.style.overflowY = "auto";
  };

  //  ========== hidden overflow of body ========
  useEffect(() => {
    if (active) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [active]);

  if (active !== KEY) return <></>;
  return (
    <div
      onClick={hideModal}
      className="w-full h-full fixed top-0 px-5 left-0 flex justify-center items-center bg-[#17171791] overflow-hidden z-[999999999]"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          console.log("open modal");
          dispatch(toggleModal(KEY));
        }}
        className={`w-full max-w-[844px] duration-300 h-auto max-h-[90vh] flex flex-col relative py-10 md:py-[50px] px-1.5 md:px-2.5 lg:px-[22px] bg-white rounded-[20px] lg:rounded-[30px]  z-[999999999999999999]`}
      >
        {/* ===== modal header ====== */}
        <div className="w-full px-2.5">
          <div className="w-full flex justify-between items-center mb-[28px] rounded-[12px] bg-[#005aff08] py-2.5 px-[18px]">
            <h2 className="fs-xl-lh-lg">Location</h2>
            <button
              onClick={hideModal}
              className="text-gray-500 hover:text-gray-700 text-[27px]"
            >
              <ModalCloseSVG />
            </button>
          </div>
        </div>

        {/* ========== modal body ========== */}
        <LocationModalBody />
      </div>
    </div>
  );
}
