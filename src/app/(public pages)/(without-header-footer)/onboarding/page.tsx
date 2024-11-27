"use client";

import UserActiveCheckBox from "@/components/pages/onboarding/UserActiveCheckBox";
import { updateUserType } from "@/redux/features/auth/authSlice";
import { RootState } from "@/redux/store";
import {
  getUserTypeFromLocalStorage,
  setUserTypeToLocalStorage,
} from "@/utils/updateLocalStorage";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export type OnboardingUserType = "CLIENT" | "FREELANCER" | null;
const OnboardingPage = () => {
  const dispatch = useDispatch();
  const { userType } = useSelector((state: RootState) => state.auth);

  // handlers
  const handleToggleUserType = (val: "CLIENT" | "FREELANCER") => {
    dispatch(updateUserType(val));
    setUserTypeToLocalStorage(val);
  };

  useEffect(() => {
    const userType = getUserTypeFromLocalStorage();
    if (userType) {
      dispatch(updateUserType(userType));
    }
  }, [dispatch]);
  return (
    <div className="min-w-[100%] flex items-center justify-center min-h-screen pt-[50px] md:pt-[60px] xl:pt-[102px] pb-[50px] md:pb-[60px] xl:pb-[102px] px-5 md:px-[40px]">
      <div className="flex flex-col gap-6 md:gap-[30px] xl:gap-[48px] h-auto w-full  max-w-[950px] rounded-[20px] mx-auto border border-[#DDE3E7] px-[30px] py-[26px] md:px-[44px] md:py-[36px] xl:px-[64px] xl:py-[52px]">
        <h2 className="text-center fs-4xl">Join as a client or freelancer</h2>

        {/* card component */}
        <div className="w-full md:flex md:gap-[30px] xl:gap-[50px]">
          <div
            onClick={() => handleToggleUserType("CLIENT")}
            className="gradient-border mb-[30px] md:mb-0 cursor-pointer w-full md:w-3/6 p-0.5 rounded-[20px] h-auto"
          >
            <div className="card min-h-full bg-white h-full  rounded-[19px] w-full px-5 py-3  md:px-[25px] xl:px-[30px]  2xl:px-[50px] md:py-[15px] xl:py-[30px]">
              <div className="logo-container  mb-[15px] xl:mb-[30px] flex items-start justify-between">
                {/* client logo */}
                <Image
                  alt="Client logo"
                  src="/svgs/client.svg"
                  width={120}
                  height={120}
                  className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]"
                />
                <UserActiveCheckBox
                  target="CLIENT"
                  key={"CLIENT"}
                  userType={userType}
                />
              </div>
              <h3 className="fs-2xl">I’m a client, Hiring for a project</h3>
            </div>
          </div>
          <div
            onClick={() => handleToggleUserType("FREELANCER")}
            className="gradient-border cursor-pointer w-full md:w-3/6 p-0.5 rounded-[20px] h-auto"
          >
            <div className="card min-h-full h-full rounded-[19px] bg-white w-full px-5 py-3  md:px-[25px] xl:px-[30px]  2xl:px-[50px] md:py-[15px] xl:py-[30px]">
              <div className="logo-container  mb-[15px] xl:mb-[30px] flex items-start justify-between">
                {/* client logo */}
                <Image
                  alt="Client logo"
                  src="/svgs/freelancher.svg"
                  width={120}
                  height={120}
                  className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]"
                />
                <UserActiveCheckBox
                  target="FREELANCER"
                  key={"FREELANCER"}
                  userType={userType}
                />
              </div>
              <h3 className="fs-2xl">I’m a freelancer, looking for work</h3>
            </div>
          </div>
        </div>

        {/* action buttons */}
        <div className="w-full flex flex-col justify-center items-center">
          <Link
            href="/sign-up"
            className={`duration-300 mb-3 xl:mb-5 btn-large fs-md
                ${
                  userType !== null
                    ? "bg-[#005AFF] text-white"
                    : "bg-[#dde3e766] text-[#525966cc] pointer-events-none"
                }
                `}
          >
            Join as a {userType === "FREELANCER" ? "freelancer" : "client"}
          </Link>
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
      </div>
    </div>
  );
};

export default OnboardingPage;
