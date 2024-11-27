"use client";
import SquareActiveInactiveCheckboxes from "@/components/shared/checkbox/SquareActiveInactiveCheckboxes";
import DownArrowSVG from "@/components/shared/header/DownArrowSVG";
import {
  RoundGradientActiveInactiveSVG,
  SearchIconSVG,
} from "@/components/shared/icons/Icons";
import { ModalCloseSVG } from "@/components/shared/modal/Icons";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { SET_EXPAND } from "@/redux/features/rootModyfier/Modyfier";
import { RootState } from "@/redux/store";
import { countryData } from "@/staticData/InviteFreeLancers";
import { DropdownCountry } from "@/types/dropdownTypes";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalCancelBtn, ModalUpdateBtn } from "./Buttons";

// Tax residence modal starts =====
const TaxresidenceModalBody = () => {
  const dispatch = useDispatch();
  const expand = useSelector((state: RootState) => state.modyfier.EXPAND);

  //   initial states
  const [countries, setCountries] = useState<DropdownCountry[]>(countryData);
  const [selected, setSelected] = useState<DropdownCountry | null>(null);

  //   modal, dropdown, activation keys
  const COUNTRY_DROPDOWN_KEY = "ACTIVE_TEXT_RESIDENCE_COUNTRY_DROPDOWN_KEY";

  // handlers ====
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target);
    dispatch(toggleModal(null));
  };

  const handleCountrySelect = (item: DropdownCountry) => {};
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    if (!countryData?.length) return;
    const filtered = countryData.filter((country) =>
      country.name.toLowerCase().includes(searchValue)
    );
    setCountries(filtered);
  };

  return (
    <div className="px-2.5 custom_scrollbar overflow-y-auto w-full">
      <p className="fs-base mb-7">
        Your tax residence information is part of the Recruit W-9 or W-8 form
        process. This address will be displayed on invoices.
      </p>

      <Link href="#" className="text-[#005AFF] mb-2.5 block">
        Use my profile address
      </Link>
      <Link href="#" className="text-[#005AFF] block mb-7">
        Use my billing address
      </Link>

      <form onSubmit={handleSubmit} className="w-full h-auto flex-grow  fs-md ">
        {/* ==== country ======= */}
        <div className="w-full mb-7 ">
          <label htmlFor="country" className="fs-md mb-2.5 block w-full">
            Country
          </label>
          <div className="relative w-full">
            <div
              onClick={(event) => {
                event.stopPropagation();
                dispatch(SET_EXPAND(COUNTRY_DROPDOWN_KEY));
              }}
              className={`w-full flex items-center px-[14px] py-2.5 border border-[#0000001a] rounded-[6px] focus:outline-none  justify-between gap-5 ${
                expand === COUNTRY_DROPDOWN_KEY ? "pointer-events-none" : ""
              }`}
            >
              <span>{selected?.name ? selected?.name : "Select country"}</span>
              <DownArrowSVG
                className={`duration-200 ${
                  expand === COUNTRY_DROPDOWN_KEY ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`country-container-shadow flex flex-col absolute top-[100%] left-0 bg-white rounded-[10px] overflow-hidden  mt-0 max-h-0 ${
                expand === COUNTRY_DROPDOWN_KEY &&
                "w-full !max-h-[250px] z-[9999999999] border border-[#0000001a]  mt-2 p-5"
              }`}
            >
              <div className="border rounded-[100px] flex items-center relative">
                <SearchIconSVG className="pointer-events-none absolute top-[50%] left-5 translate-y-[-50%]" />
                <input
                  onClick={(event) => {
                    event.stopPropagation();
                    dispatch(SET_EXPAND(COUNTRY_DROPDOWN_KEY));
                  }}
                  onChange={handleChange}
                  className="pl-[48px] rounded-[100px] py-[10px] focus:outline-none outline-none w-full"
                  type="text"
                  placeholder="Search country"
                />
              </div>

              {/*  ============ timezone lists ==========   */}
              <ul className=" custom_scrollbar flex flex-col gap-[14px] overflow-y-auto flex-grow mt-3">
                {countries?.length ? (
                  countries.map((item: DropdownCountry) => (
                    <li
                      className="cursor-pointer fs-sm flex items-center gap-2.5"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected(item);
                        handleCountrySelect(item);
                      }}
                      key={item.name}
                    >
                      <Image
                        height={24}
                        width={16}
                        src={item.flag}
                        alt="Flag image"
                        className="min-w-6 h-auto w-6"
                      />
                      <span>{item.name}</span>
                    </li>
                  ))
                ) : (
                  <li
                    className={`flex items-center cursor-pointer py-1.5 px-5 my-0.5 gap-[11px]`}
                  >
                    No country found.
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* ==== address fields ======= */}
        <div className="w-full mb-7">
          <label htmlFor="address" className="fs-md mb-2.5 block">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
            className="w-full px-[14px] py-2.5 border border-[#0000001a] rounded-[6px] focus:outline-none  focus:border-[#005AFF]"
          />
        </div>

        {/* ====== address 2 ===== */}
        <div className="w-full mb-7">
          <label htmlFor="address2" className="fs-md mb-2.5 block">
            Address 2 (Apartment, suite, etc)
          </label>
          <input
            type="text"
            id="address2"
            name="address2"
            placeholder="Enter address 2"
            className="w-full px-[14px] py-2.5 border border-[#0000001a] rounded-[6px] focus:outline-none  focus:border-[#005AFF]"
          />
        </div>

        {/* ==== city & state field ======= */}
        <div className="w-full md:flex mb-7 md:gap-6">
          <div className="w-full mb-7 md:mb-0">
            <label htmlFor="city" className="fs-md mb-2.5 block">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Enter city"
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
              placeholder="Enter State/Province"
              className="w-full px-[14px] py-2.5 border border-[#0000001a] rounded-[6px] focus:outline-none  focus:border-[#005AFF]"
            />
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="state" className="fs-md mb-2.5 block">
            ZIP/Postal code
          </label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="Enter State/Province"
            className="w-full px-[14px] py-2.5 border border-[#0000001a] rounded-[6px] focus:outline-none  focus:border-[#005AFF]"
          />
        </div>

        {/* ======== modal footer ======= */}
        <div className="w-full flex items-center justify-end mt-[50px] lg:mt-[72px] pr-[5px]">
          <ModalCancelBtn text="Cancel" />
          <ModalUpdateBtn text="Save" />
        </div>
      </form>
    </div>
  );
};

// ========= success message modal =================
export function TaxResidenceModal() {
  const dispatch = useDispatch();
  const active = useSelector(
    (state: RootState) => state.modalToggler.activeModalID
  );

  const KEY = "OPEN_SETTINGS_TAX_INFO_TAX_RESIDENCE_UPDATE_MODAL";

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
          dispatch(toggleModal(KEY));
        }}
        className={`w-full max-w-[844px] duration-300 h-auto max-h-[90vh] flex flex-col relative py-10 md:py-[50px] px-1.5 md:px-2.5 lg:px-[22px] bg-white rounded-[20px] lg:rounded-[30px]  z-[999999999999999999]`}
      >
        {/* ===== modal header ====== */}
        <div className="w-full px-2.5">
          <div className="w-full flex justify-between items-center mb-7 rounded-[12px] bg-[#005aff08] py-2.5 px-[18px]">
            <h2 className="fs-xl-lh-lg">Tax residence</h2>
            <button
              onClick={hideModal}
              className="text-gray-500 hover:text-gray-700 text-[27px]"
            >
              <ModalCloseSVG />
            </button>
          </div>
        </div>

        {/* ========== modal body ========== */}
        <TaxresidenceModalBody />
      </div>
    </div>
  );
}

// =============== Taxprayer identification modal starts ============
const TaxprayerModalBody = () => {
  const dispatch = useDispatch();
  //   initial states

  // handlers ====
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target);
    dispatch(toggleModal(null));
  };

  return (
    <div className="px-2.5 custom_scrollbar overflow-y-auto w-full">
      <p className="fs-base mb-7">
        Your taxpayer identification information will be included as an Recruit
        W-9 or W-8 series substitute form.
      </p>

      <form onSubmit={handleSubmit} className="w-full h-auto flex-grow  fs-md ">
        {/* ==== taxprayer name ======= */}
        <div className="w-full mb-7 ">
          <label htmlFor="legalName" className="fs-md mb-2.5 block w-full">
            Legal name of taxpayer
          </label>
          <input
            type="text"
            id="legalName"
            name="legalName"
            placeholder="Enter taxprayer name"
            className="w-full px-[14px] py-2.5 border border-[#0000001a] rounded-[6px] focus:outline-none  focus:border-[#005AFF]"
          />
        </div>

        {/* ==== federal tax classification fields ======= */}
        <div className="w-full mb-7">
          <label htmlFor="taxClassification" className="fs-md mb-2.5 block">
            Federal tax classification
          </label>
          <input
            type="text"
            id="taxClassification"
            name="taxClassification"
            placeholder="Enter tax classification"
            className="w-full px-[14px] py-2.5 border border-[#0000001a] rounded-[6px] focus:outline-none  focus:border-[#005AFF]"
          />
        </div>

        {/* ====== citizenship  ===== */}
        <div className="w-full mb-7">
          <label htmlFor="citizenship" className="fs-md mb-2.5 block">
            Country of citizenship
          </label>
          <input
            type="text"
            id="citizenship"
            name="citizenship"
            placeholder="Enter citizenship"
            className="w-full px-[14px] py-2.5 border border-[#0000001a] rounded-[6px] focus:outline-none  focus:border-[#005AFF]"
          />
        </div>

        {/* ==== date of birth field ======= */}

        <div className="w-full">
          <label htmlFor="dateOfBirth" className="fs-md mb-2.5 block">
            Date of birth
          </label>
          <input
            type="text"
            id="=dateOfBirth"
            name="=dateOfBirth"
            placeholder="Enter date of birth"
            className="w-full px-[14px] py-2.5 border border-[#0000001a] rounded-[6px] focus:outline-none  focus:border-[#005AFF]"
          />
        </div>
        {/* ======== modal footer ======= */}
        <div className="w-full flex items-center justify-end mt-[50px] lg:mt-[72px] pr-[5px]">
          <ModalCancelBtn text="Cancel" />
          <ModalUpdateBtn text="Save" />
        </div>
      </form>
    </div>
  );
};

// ========= success message modal =================
export function TaxprayerIdentificationModal() {
  const dispatch = useDispatch();
  const active = useSelector(
    (state: RootState) => state.modalToggler.activeModalID
  );

  const KEY = "OPEN_SETTINGS_TAX_INFO_TAX_PRAYER_UPDATE_MODAL";

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
          dispatch(toggleModal(KEY));
        }}
        className={`w-full max-w-[844px] duration-300 h-auto max-h-[90vh] flex flex-col relative py-10 md:py-[50px] px-1.5 md:px-2.5 lg:px-[22px] bg-white rounded-[20px] lg:rounded-[30px]  z-[999999999999999999]`}
      >
        {/* ===== modal header ====== */}
        <div className="w-full px-2.5">
          <div className="w-full flex justify-between items-center mb-7 rounded-[12px] bg-[#005aff08] py-2.5 px-[18px]">
            <h2 className="fs-xl-lh-lg">Taxpayer identification</h2>
            <button
              onClick={hideModal}
              className="text-gray-500 hover:text-gray-700 text-[27px]"
            >
              <ModalCloseSVG />
            </button>
          </div>
        </div>

        {/* ========== modal body ========== */}
        <TaxprayerModalBody />
      </div>
    </div>
  );
}

// ========= tax identification number modal =========
export function TaxIdentificationNumberModal() {
  const dispatch = useDispatch();
  const active = useSelector(
    (state: RootState) => state.modalToggler.activeModalID
  );

  const KEY = "OPEN_SETTINGS_TAX_INFO_TAX_IDENTIFICATION_NUMBER_UPDATE_MODAL";

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

  // handlers ====
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target);
    dispatch(toggleModal(null));
  };

  if (active !== KEY) return <></>;
  return (
    <div
      onClick={hideModal}
      className="w-full h-full fixed top-0 px-5 left-0 flex justify-center items-center bg-[#17171791] overflow-hidden z-[999999999]"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          dispatch(toggleModal(KEY));
        }}
        className={`w-full max-w-[844px] duration-300 h-auto max-h-[90vh] flex flex-col relative py-10 md:py-[50px] px-1.5 md:px-2.5 lg:px-[22px] bg-white rounded-[20px] lg:rounded-[30px]  z-[999999999999999999]`}
      >
        {/* ===== modal header ====== */}
        <div className="w-full px-2.5">
          <div className="w-full flex justify-between items-center mb-7 rounded-[12px] bg-[#005aff08] py-2.5 px-[18px]">
            <h2 className="fs-xl-lh-lg">Taxpayer identification</h2>
            <button
              onClick={hideModal}
              className="text-gray-500 hover:text-gray-700 text-[27px]"
            >
              <ModalCloseSVG />
            </button>
          </div>
        </div>

        <div className="px-2.5 custom_scrollbar overflow-y-auto w-full">
          <p className="fs-base mb-7">
            Please provide your{" "}
            <Link href="#" className="text-[#005AFF]">
              tax identification number
            </Link>{" "}
            (TIN). If you don&apos;t have a TIN, consult a local tax
            professional or your tax advisor. For more details,{" "}
            <Link href="#" className="text-[#005AFF]">
              read our help article
            </Link>
            .
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full h-auto flex-grow  fs-md "
          >
            {/* ====  Tax identification number submitted field ======= */}
            <div className="w-full mb-7 ">
              <label
                htmlFor="taxIdentificationNumber"
                className="fs-md mb-2.5 block w-full"
              >
                Tax identification number submitted
              </label>
              <input
                type="text"
                id="=taxIdentificationNumber"
                name="=taxIdentificationNumber"
                placeholder="Enter tax identification number"
                className="w-full px-[14px] py-2.5 border border-[#0000001a] rounded-[6px] focus:outline-none  focus:border-[#005AFF]"
              />
            </div>

            {/* ==== fSigner of certificate fields ======= */}
            <div className="w-full mb-7">
              <label
                htmlFor="certificateSignature"
                className="fs-md mb-2.5 block"
              >
                Signer of certificate
              </label>
              <input
                type="text"
                id="certificateSignature"
                name="certificateSignature"
                placeholder="Enter certificate signature"
                className="w-full px-[14px] py-2.5 border border-[#0000001a] rounded-[6px] focus:outline-none  focus:border-[#005AFF]"
              />
            </div>
            {/* ======== modal footer ======= */}
            <div className="w-full flex items-center justify-end mt-[50px] lg:mt-[72px] pr-[5px]">
              <ModalCancelBtn text="Cancel" />
              <ModalUpdateBtn text="Save" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// ========= goods and services tax modal =========
export function GoodsAndServicesModal() {
  const dispatch = useDispatch();
  const active = useSelector(
    (state: RootState) => state.modalToggler.activeModalID
  );

  //   initial state
  const [registered, setRegistered] = useState(false);
  const [haveGSTIN, setHaveGSTIN] = useState(false);

  const KEY = "OPEN_SETTINGS_TAX_INFO_GOODS_AND_SERVICES_UPDATE_MODAL";

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

  // handlers ====
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target);
    dispatch(toggleModal(null));
  };

  if (active !== KEY) return <></>;
  return (
    <div
      onClick={hideModal}
      className="w-full h-full fixed top-0 px-5 left-0 flex justify-center items-center bg-[#17171791] overflow-hidden z-[999999999]"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          dispatch(toggleModal(KEY));
        }}
        className={`w-full max-w-[844px] duration-300 h-auto max-h-[90vh] flex flex-col relative py-10 md:py-[50px] px-1.5 md:px-2.5 lg:px-[22px] bg-white rounded-[20px] lg:rounded-[30px]  z-[999999999999999999]`}
      >
        {/* ===== modal header ====== */}
        <div className="w-full px-2.5">
          <div className="w-full flex justify-between items-center mb-7 rounded-[12px] bg-[#005aff08] py-2.5 px-[18px]">
            <h2 className="fs-xl-lh-lg">Goods and services tax (GST)</h2>
            <button
              onClick={hideModal}
              className="text-gray-500 hover:text-gray-700 text-[27px]"
            >
              <ModalCloseSVG />
            </button>
          </div>
        </div>

        <div className="px-2.5 custom_scrollbar overflow-y-auto w-full">
          <p className="fs-base mb-7">
            If you&apos;re registered for GST, submit your ID and we&apos;ll
            stop collecting that tax right away. If you&apos;re not registered,
            we&apos;re required by law to collect GSTIN for specific
            transactions.
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full h-auto flex-grow  fs-md "
          >
            {/* ====  Tax identification number submitted field ======= */}
            <div className="w-full mb-7 ">
              <div className="flex items-center gap-2.5 w-full">
                <button onClick={() => setHaveGSTIN(false)} type="button">
                  <RoundGradientActiveInactiveSVG
                    active={!haveGSTIN}
                    key="HAVE_GSTIN"
                  />
                </button>
                <p className="fs-base">I don&apos;t have a GSTIN</p>
              </div>
              <div className="flex items-center gap-2.5 w-full mt-2.5">
                <button onClick={() => setHaveGSTIN(true)} type="button">
                  <RoundGradientActiveInactiveSVG
                    active={haveGSTIN}
                    key="DONT_HAVE_GSTIN"
                  />
                </button>
                <p className="fs-base">I have a GSTIN</p>
              </div>
            </div>

            {/* ====  GSTIN (no hyphens, periods, or spaces) fields ======= */}
            {haveGSTIN && (
              <div className="w-full mb-7">
                <label htmlFor="gstin" className="fs-md mb-2.5 block">
                  GSTIN (no hyphens, periods, or spaces)
                </label>
                <input
                  type="text"
                  id="gstin"
                  name="gstin"
                  placeholder="Enter your GSTIN"
                  className=" w-full px-[14px] py-2.5 border border-[#0000001a] rounded-[6px] focus:outline-none  focus:border-[#005AFF]"
                />
                <p className="fs-base mt-2.5 mb-7">
                  Your GSTIN has 15 charecters. It can start and end with a
                  letter or number, and should look like this: 50AATDE5289B4V0
                </p>

                <div className="flex items-center gap-2.5 w-full">
                  <button
                    onClick={() => setRegistered(!registered)}
                    type="button"
                  >
                    <SquareActiveInactiveCheckboxes
                      active={registered}
                      key="GST_REGISTERED_AGREEMENT"
                    />
                  </button>
                  <p className="fs-base">
                    By checking this box, I confirm that i&apos;m registered for
                    GST in India and i&apos;m providing a valid GSTIN
                  </p>
                </div>
              </div>
            )}
            {/* ======== modal footer ======= */}
            <div className="w-full flex items-center justify-end mt-[50px] lg:mt-[72px] pr-[5px]">
              <ModalCancelBtn text="Cancel" />
              <ModalUpdateBtn text="Save" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
