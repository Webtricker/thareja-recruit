"use client";

import SquareActiveInactiveCheckboxes from "@/components/shared/checkbox/SquareActiveInactiveCheckboxes";
import {
  setActiveComponents,
  setContractToHireAgreement,
} from "@/redux/features/onboarding/freelancerGetStartedSlice";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type PropsType = {
  text: string;
  style?: string;
  clickHandler?: Function;
};

export const Button = ({ text, clickHandler, style }: PropsType) => {
  const handleClick = () => {
    clickHandler && clickHandler();
  };
  return (
    <button
      onClick={handleClick}
      className={`btn-large min-w-fit fs-md ${style}`}
    >
      {text}
    </button>
  );
};

export const GetStartedButton = () => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(setActiveComponents("WORKING_EXPERIENCE"));
  };
  return (
    <Button
      text="Get started"
      style="text-white bg-[#005AFF] "
      clickHandler={clickHandler}
    />
  );
};

export const BackButton = () => {
  const dispatch = useDispatch();
  const activeComponent = useSelector(
    (state: RootState) => state.freelancerOnboarding.activeComponent
  );
  const clickHandler = () => {
    switch (activeComponent) {
      case "WORKING_EXPERIENCE":
        return dispatch(setActiveComponents("GET_STARTED"));

      case "FREELANCING_GOAL":
        return dispatch(setActiveComponents("WORKING_EXPERIENCE"));
      case "WORKING_TYPE":
        return dispatch(setActiveComponents("FREELANCING_GOAL"));
      default:
        return;
    }
  };
  return (
    <Button
      text="Back"
      style="text-[#005AFF] border-transparent"
      clickHandler={clickHandler}
    />
  );
};

export const NextStepButtons = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const activeComponent = useSelector(
    (state: RootState) => state.freelancerOnboarding.activeComponent
  );
  const [nextButtonText, setNextButtonText] = useState("Next Step");
  const clickHandler = () => {
    switch (activeComponent) {
      case "WORKING_EXPERIENCE":
        return dispatch(setActiveComponents("FREELANCING_GOAL"));

      case "FREELANCING_GOAL":
        return dispatch(setActiveComponents("WORKING_TYPE"));
      case "WORKING_TYPE":
        // complete the query and navigate to create-freelancer-profile page
        router.push("/create-freelancer-profile");
      default:
        return;
    }
  };

  useEffect(() => {
    if (
      "WORKING_TYPE" === activeComponent &&
      "Next, create a profile" !== nextButtonText
    ) {
      setNextButtonText("Next, create a profile");
    } else {
      "Next Step" !== nextButtonText && setNextButtonText("Next Step");
    }
  }, [activeComponent]);
  return (
    <>
      <Button
        text="Skip for now"
        style="text-[#005AFF]  border-transparent"
        clickHandler={clickHandler}
      />
      <Button
        text={nextButtonText}
        style="!bg-[#005AFF] !text-white border-transparent"
        clickHandler={clickHandler}
      />
    </>
  );
};

export const OpenToContractButton = () => {
  const dispatch = useDispatch();
  const agree = useSelector(
    (state: RootState) =>
      state.freelancerOnboarding.agreeToContractToHireOpportunity
  );

  const clickHandler = () => {
    dispatch(setContractToHireAgreement(!agree));
  };
  return (
    <button onClick={clickHandler}>
      <SquareActiveInactiveCheckboxes active={agree} />
    </button>
  );
};
