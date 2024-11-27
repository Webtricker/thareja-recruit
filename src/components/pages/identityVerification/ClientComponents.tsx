"use client";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

import ActiveInActiveCheckboxes from "@/components/shared/checkbox/ActiveInActiveCheckboxes";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import {
  setActiveIdentityVerificationCompletedStep,
  setShowSelfiComponent,
} from "@/redux/features/settings/identityVerificationSlice";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "./Buttons";
import { GovernmentIssuePhotoIdModal } from "./Modals";

const AppearsOnCamera = () => {
  const { stepCompleted } = useSelector(
    (state: RootState) => state.settingsIdentifyVerificationSlice
  );

  const dispatch = useDispatch();

  //  handlers
  const handleTakeSelfie = () => {
    dispatch(setActiveIdentityVerificationCompletedStep(1));
    dispatch(setShowSelfiComponent(true));
  };

  return (
    <div className="w-full flex gap-5">
      <div className="w-full max-w-10  flex flex-col items-center">
        <ActiveInActiveCheckboxes
          active={stepCompleted > 0 ? true : false}
          key="TAKE_SELFI_ACTIVE_INACTIVE_CHECKBOX"
        />
        <div
          className={`w-[0.1px] ml-[0.1px] border-l border-[1.5px] border-dashed flex-grow ${
            stepCompleted > 0 ? "border-[#005AFF]" : "border-[#A8B7C1]"
          }`}
        ></div>
      </div>
      <div className="flex-grow flex gap-5 flex-wrap xl:flex-nowrap">
        <div className="flex-grow pb-0  xl:pb-[51px] ">
          <p className="fs-md mb-2">Appear on camera</p>
          <p className="fs-base">
            To show us it’s really you, take an automatic selfie or join a video
            chat.
          </p>
        </div>
        <div className="w-auto flex items-center min-w-[180px] mb-5 xl:mb-0">
          {stepCompleted === 0 ? (
            <Link
              className="fs-md btn-large btn-bg-blue"
              href="/selfie-instruction"
            >
              Take Selfie
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

const GovermentIssuedPhotoId = () => {
  const { stepCompleted } = useSelector(
    (state: RootState) => state.settingsIdentifyVerificationSlice
  );

  const fileUploadInputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  //   handlers
  const handlePhotoIdUpload = () => {
    const KEY = "OPEN_GOVERRMENT_ISSUE_ID_UPLOAD_MODAL";
    dispatch(toggleModal(KEY));
  };

  return (
    <div className="w-full flex gap-5">
      <div className="w-full max-w-10  flex flex-col items-center">
        <ActiveInActiveCheckboxes
          active={stepCompleted > 1 ? true : false}
          key="TAKE_SELFI_ACTIVE_INACTIVE_CHECKBOX"
        />
        <div
          className={`w-[0.1px] ml-[0.1px] border-l border-[1.5px] border-dashed flex-grow ${
            stepCompleted > 1 ? "border-[#005AFF]" : "border-[#A8B7C1]"
          }`}
        ></div>
      </div>
      <div className="flex-grow flex gap-5 flex-wrap xl:flex-nowrap">
        <div className="flex-grow pb-0  xl:pb-[51px] relative">
          <p className="fs-md mb-2">Show us a government-issued photo ID</p>
          <p className="fs-base">
            We’ll check that the country where your ID is from matches the
            country in your profile.
          </p>
        </div>
        <div className="w-auto flex items-center mb-5 xl:mb-0">
          {stepCompleted === 1 ? (
            <Button
              text="Upload"
              clickHandler={handlePhotoIdUpload}
              key="UPLOAD_ID_BTN"
              style="btn-bg-blue"
            />
          ) : (
            <></>
          )}
        </div>

        <GovernmentIssuePhotoIdModal />
      </div>
    </div>
  );
};

const SubmitForIdentityReview = () => {
  const { stepCompleted } = useSelector(
    (state: RootState) => state.settingsIdentifyVerificationSlice
  );

  const dispatch = useDispatch();

  //   handlers
  const handleSubmit = () => {
    dispatch(setActiveIdentityVerificationCompletedStep(3));
  };

  return (
    <div className="w-full flex gap-5">
      <div className="w-full max-w-10  flex flex-col items-center">
        <ActiveInActiveCheckboxes
          active={stepCompleted > 2 ? true : false}
          key="TAKE_SELFI_ACTIVE_INACTIVE_CHECKBOX"
        />
      </div>
      <div className="flex-grow flex gap-5 md:flex-wrap xl:flex-nowrap">
        <div className="flex-grow ">
          <p className="fs-md mb-2">Submit for identity review</p>
          <p className="fs-base">
            If we can’t instantly verify you, we’ll start a manual review
            process.
          </p>
        </div>
        {/* <div className="w-auto flex items-center ">
          {stepCompleted === 2 ? (
            <Button
              text="Submit"
              clickHandler={handleSubmit}
              key="IDENTITY_VERIFICATION_SUBMIT_BTN"
              style="btn-bg-blue"
            />
          ) : (
            <></>
          )}
        </div> */}
      </div>
    </div>
  );
};

export const IdentityVerificationSteps = () => {
  return (
    <div className="w-full my-6 md:my-7 lg:my-8 xl:my-[34px]">
      <AppearsOnCamera />
      <GovermentIssuedPhotoId />
      <SubmitForIdentityReview />
    </div>
  );
};
