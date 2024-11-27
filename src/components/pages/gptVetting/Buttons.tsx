"use client";
import { setOpenInviteCandidateModal } from "@/redux/features/GptVettilngSlice/GptVettingFreelancerTableSlice";
import { useDispatch } from "react-redux";
import {
  CircleInfoSVG,
  InviteCandidateSMSSVG,
  QuickDemoVideoSVG,
} from "./Icons";

export function CustomizeContentButton() {
  return (
    <button className="flex items-center gap-[14px] bg-[#005aff05]  btn-medium btn-border-blue fs-md">
      <span>Customise content</span>
      <CircleInfoSVG />
    </button>
  );
}

export function ManageAccessButton() {
  return (
    <button className="flex items-center gap-[14px] bg-[#005aff05]  btn-medium btn-border-blue fs-md">
      Manage access
    </button>
  );
}

export function QuickDemoButton() {
  return (
    <button className="flex items-center gap-[14px] bg-[#005aff05]  btn-medium btn-border-blue fs-md">
      <QuickDemoVideoSVG />
      <span>Quick demo</span>
    </button>
  );
}

export function InviteCandidateButton() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(setOpenInviteCandidateModal(true))}
      className="flex items-center gap-[14px] bg-[#005AFF] btn-medium btn-bg-blue fs-md"
    >
      <InviteCandidateSMSSVG />
      <span>Invite a candidate</span>
    </button>
  );
}
