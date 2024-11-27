"use client";
import Divider from "@/components/pages/login/Divider";
import SignUpPassword from "@/components/pages/login/SignUpPassword";
import SignUpTerms from "@/components/pages/login/SignUpTerms";
import WarningSVG from "@/components/pages/login/WarningSVG";
import { CountrySelectorDropDown } from "@/components/shared/dropdown/CountrySelector";
import Alert from "@/components/shared/modal/Alert";
import Container from "@/components/shared/wrapper/Container";
import { useSignupMutation } from "@/redux/features/auth/authApiSlice";
import { updateUserType } from "@/redux/features/auth/authSlice";
import { RootState } from "@/redux/store";
import { SortedCountry } from "@/types/dropdownTypes";
import { getUserTypeFromLocalStorage } from "@/utils/updateLocalStorage";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export type FormData = {
  firstName: { value: string; error: string };
  lastName: { value: string; error: string };
  email: { value: string; error: string };
  password: { value: string; error: string };
  country: { value: string; error: string };
  sendEmailNotify: boolean;
  atsTermAndCondition: boolean;
};

export type UserAction =
  | { type: "SET_FIRST_NAME"; payload: { value: string; error: string } }
  | { type: "SET_LAST_NAME"; payload: { value: string; error: string } }
  | { type: "SET_EMAIL"; payload: { value: string; error: string } }
  | { type: "SET_PASSWORD"; payload: { value: string; error: string } }
  | { type: "SET_COUNTRY"; payload: { value: string; error: string } }
  | { type: "SET_EMAIL_NOTIFY"; payload: boolean }
  | { type: "SET_TERMS_AND_CONDITIONS"; payload: boolean };

// Reducer function
const formReducer: React.Reducer<FormData, UserAction> = (state, action) => {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return { ...state, firstName: action.payload };
    case "SET_LAST_NAME":
      return { ...state, lastName: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_COUNTRY":
      return { ...state, country: action.payload };
    case "SET_EMAIL_NOTIFY":
      return { ...state, sendEmailNotify: action.payload };
    case "SET_TERMS_AND_CONDITIONS":
      return { ...state, atsTermAndCondition: action.payload };
    default:
      return state;
  }
};

const initialData = {
  firstName: { value: "", error: "" },
  lastName: { value: "", error: "" },
  email: { value: "", error: "" },
  password: { value: "", error: "" },
  country: { value: "", error: "" },
  sendEmailNotify: true,
  atsTermAndCondition: false,
};

const SignUpPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [googleMessage, setGoogleMessage] = useState("");
  const [appleMessage, setAppleMessage] = useState("");
  const [formData, dispatchFormData] = useReducer(formReducer, initialData);

  // redux data
  const exapndKey = useSelector((state: RootState) => state.modyfier.EXPAND);
  const { userType } = useSelector((state: RootState) => state.auth);
  const [signup, { isLoading, error }] = useSignupMutation();

  // static data
  const DROPDOWN_ACTIVE_KEY = "OPEN_SIGN_UP_FORM_COUNTRY_SELECTOR_DROPDOWN";

  //  handlers
  const handleCountrySelect = (item: SortedCountry) => {
    console.error(item.flag);
    dispatchFormData({
      type: "SET_COUNTRY",
      payload: { value: item.name, error: "" },
    });
  };
  const handleGoogleLogin = () => {
    setGoogleMessage("Google authentication service in progress");
  };

  const handleappleLogin = () => {
    setAppleMessage("Apple authentication service in progress");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // check for first name
    if (!formData.firstName.value) {
      return dispatchFormData({
        type: "SET_FIRST_NAME",
        payload: { value: "", error: "First name is required" },
      });
    }

    // check for last name
    if (!formData.lastName.value) {
      return dispatchFormData({
        type: "SET_LAST_NAME",
        payload: { value: "", error: "Last name is required" },
      });
    }

    // check for email
    if (!formData.email.value) {
      return dispatchFormData({
        type: "SET_EMAIL",
        payload: { value: "", error: "Email is required" },
      });
    }

    const EmailRegEx = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;
    if (!EmailRegEx.test(formData.email.value)) {
      return dispatchFormData({
        type: "SET_EMAIL",
        payload: {
          value: formData.email.value,
          error: "Invalid email address",
        },
      });
    }

    // check for password
    if (!formData.password.value) {
      return dispatchFormData({
        type: "SET_PASSWORD",
        payload: { value: "", error: "Password is required" },
      });
    }

    if (formData.password.value.length < 8) {
      return dispatchFormData({
        type: "SET_PASSWORD",
        payload: {
          value: formData.password.value,
          error: "Password must be at least 8 characters long.",
        },
      });
    }

    // check for Country
    if (!formData.country.value) {
      return dispatchFormData({
        type: "SET_COUNTRY",
        payload: { value: "", error: "Please select a country" },
      });
    }

    // register new user
    try {
      const { data } = await signup({
        firstName: formData.firstName.value,
        lastName: formData.lastName.value,
        email: formData.email.value,
        password: formData.password.value,
        country: formData.country.value,
        sendEmailNotify: formData.sendEmailNotify,
        atsTermAndCondition: formData.atsTermAndCondition,
        type: userType === "CLIENT" ? "client" : "freelancer",
      }).unwrap();

      const { loginUser } = data;
      console.log(loginUser);
      if (loginUser?.status === 200) {
        // set login info and redirect to home;
        // setUserToLocal(loginUser.User);
        // dispatch(updateLogedInUser(loginUser.User));
        // setPreviousBrowsingInfo(loginUser?.User?._id, "/");
        // router.push("/");
      } else {
        dispatchFormData({
          type: "SET_PASSWORD",
          payload: {
            value: formData.password.value,
            error: loginUser?.message,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
    // router.push("/");
  };

  // get user type from local storage if user refresh page.
  useEffect(() => {
    const userType = getUserTypeFromLocalStorage();
    if (userType) {
      dispatch(updateUserType(userType));
    }
  }, [dispatch]);

  return (
    <Container className="pt-5 px-4 pb-[56.5px]">
      <div className="form-contianer w-full max-w-[780px] mx-auto">
        <h1 className="fs-5xl text-center mb-8 md:mb-[36px] xl:mb-[50px]">
          Sign up to hire talent
        </h1>
        <div className="third-party-login md:grid md:grid-cols-2 md:gap-[15px]">
          {/* apple login button */}
          <button
            onClick={handleappleLogin}
            className="duration-300 hover:border-[#005AFF] btn-medium border border-transparent apple-login-btn mb-5 md:mb-0  flex items-center justify-center gap-[14px] bg-[#005aff14] w-full"
          >
            <Image
              width={28}
              height={28}
              src="/svgs/apple-login.svg"
              alt="Google icon"
              className="w-[19.5px] h-[24.08px] rounded-full"
            />
            <span className="fs-md">Continue with apple</span>
          </button>
          {appleMessage && (
            <Alert hide={setAppleMessage} message={appleMessage} />
          )}

          {/* google login button */}
          <button
            onClick={handleGoogleLogin}
            className="duration-300 hover:border-[#005AFF] border border-transparent google-login-btn flex items-center justify-center gap-[14px] bg-[#005aff14] w-full btn-medium"
          >
            <Image
              width={28}
              height={28}
              src="/svgs/google-login.svg"
              alt="Google icon"
              className="bg-white md:p-2 w-[19.5px] h-[24.08px] md:w-[44px] md:h-[44px] rounded-full"
            />
            <span className="fs-md">Continue with goggle</span>
          </button>
          {googleMessage && (
            <Alert hide={setGoogleMessage} message={googleMessage} />
          )}
        </div>
        <Divider />

        {/* form contianer */}
        <form
          onSubmit={handleSubmit}
          action=""
          className="form-container w-full"
        >
          <div className="name-container md:grid md:grid-cols-2 gap-[20px] mb-[24px] md:mb-[28px]">
            <div className="first-name-container mb-[28px] md:mb-0">
              <label htmlFor="firstName" className="login-form-label">
                First name
              </label>
              <input
                type="text"
                className="login-form-input border border-[#0000001a]"
                placeholder="Enter first name"
                value={formData.firstName.value}
                onChange={(e) =>
                  dispatchFormData({
                    type: "SET_FIRST_NAME",
                    payload: { value: e.target.value, error: "" },
                  })
                }
              />
              {formData.firstName.error && (
                <p className="text-[#FF0000] fs-sm flex items-center gap-[6px] mt-[7px] md:mt-[10px]">
                  <WarningSVG /> {formData.firstName.error}
                </p>
              )}
            </div>
            <div className="last-name-container">
              <label htmlFor="lastName" className="login-form-label">
                Last name
              </label>
              <input
                type="text"
                className="login-form-input border border-[#0000001a]"
                placeholder="Enter last name"
                onChange={(e) =>
                  dispatchFormData({
                    type: "SET_LAST_NAME",
                    payload: { value: e.target.value, error: "" },
                  })
                }
                value={formData.lastName.value}
              />
              {formData.lastName.error && (
                <p className="text-[#FF0000] fs-sm flex items-center gap-[6px] mt-[7px] md:mt-[10px]">
                  <WarningSVG /> {formData.lastName.error}
                </p>
              )}
            </div>
          </div>

          {/* Email container */}
          <div className="email-address-container mb-[24px] md:mb-[28px]">
            <label htmlFor="email" className="login-form-label">
              Work email address
            </label>
            <input
              type="text"
              className="login-form-input border border-[#0000001a]"
              placeholder="Enter work email address"
              onChange={(e) =>
                dispatchFormData({
                  type: "SET_EMAIL",
                  payload: { value: e.target.value, error: "" },
                })
              }
              value={formData.email.value}
            />
            {formData.email.error && (
              <p className="text-[#FF0000] fs-sm flex items-center gap-[6px] mt-[7px] md:mt-[10px]">
                <WarningSVG /> {formData.email.error}
              </p>
            )}
          </div>

          {/* Password container */}

          <SignUpPassword
            formData={formData}
            dispatchFormData={dispatchFormData}
          />
          {/* Country container */}
          <div className="country-container mb-[24px] md:mb-[28px]">
            <label htmlFor="country" className="login-form-label">
              Country
            </label>
            <CountrySelectorDropDown
              activeKey={DROPDOWN_ACTIVE_KEY}
              clickHandler={handleCountrySelect}
              defaultLabel="Select country"
              expand={exapndKey}
              dropdownContainerStyle="!top-[105%] !left-0 lg:!max-h-[290px] "
              position="ABSOLUTE"
              key={DROPDOWN_ACTIVE_KEY}
            />
            {formData.country.error && (
              <p className="text-[#FF0000] fs-sm flex items-center gap-[6px] mt-[7px] md:mt-[10px]">
                <WarningSVG /> {formData.country.error}
              </p>
            )}
          </div>

          <SignUpTerms
            formData={formData}
            dispatchFormData={dispatchFormData}
          />
          {/* sign up buttons */}
          <div className="flex flex-col items-center">
            <input
              className={`fs-md duration-300 mb-3 xl:mb-5 btn-large  
              ${
                formData.atsTermAndCondition
                  ? "bg-[#005AFF] text-white"
                  : "bg-[#dde3e766] text-[#525966cc] pointer-events-none"
              }`}
              disabled={isLoading || !formData.atsTermAndCondition}
              value={
                isLoading ? "Creating your account..." : "Create my account"
              }
              type="submit"
            />

            <p className="fs-md">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="underline hover:no-underline text-[#005AFF]"
              >
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default SignUpPage;
