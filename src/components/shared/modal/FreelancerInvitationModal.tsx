"use client";
import { setActiveInviteModal } from "@/redux/features/jobpost/InviteFreeLancersActiveStages";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SquareActiveInactiveCheckboxes from "../checkbox/SquareActiveInactiveCheckboxes";
import XMarkBlack from "../icons/XMarkBlack";
import { GradienRoundCheckMarkSVG } from "./Icons";

type PropsType = {
  className?: string;
};
const InviteFreelancer = ({ className }: PropsType) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  // ======= toggle confirm message modal =====
  const [activeInviteConfirmModal, setActiveInviteConfirmModal] =
    useState(false);

  const activeInviteModal = useSelector(
    (state: RootState) => state.inviteFreelancersActiveStages.activeInviteModal
  );

  const hideModal = () => {
    document.body.style.overflowY = "auto";
    dispatch(setActiveInviteModal(false));
  };

  //  ========== hidden overflow of body ========
  useEffect(() => {
    if (activeInviteModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [activeInviteModal]);
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        hideModal();
      }}
      className="text-[#30353E]  w-full flex items-center justify-center h-full fixed top-0 left-0 bg-[#17171791] overflow-x-hidden z-[99999999999999999]"
    >
      {/* ====== Invite freelancer confirmation modal ====== */}
      {activeInviteConfirmModal ? (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setActiveInviteConfirmModal(true);
          }}
          className="custom_scrollbar flex flex-col items-center freelancer_profile_scrollbar relative  p-5 md:p-6 lg:py-[50px] lg:px-[32px] w-full lg:max-w-[514px] overflow-y-auto bg-white rounded-[20px]  lg:rounded-[30px] z-[99999999999999999]"
        >
          <GradienRoundCheckMarkSVG />
          <h3 className="fs-xl-lh-lg text-center mt-[30px]">
            Muhammad l. is invited for the job UX/UI Designer
          </h3>
        </div>
      ) : (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="custom_scrollbar freelancer_profile_scrollbar relative  p-5 md:p-6 lg:py-[50px] lg:px-[32px] w-full lg:max-w-[758px] overflow-y-auto bg-white rounded-[20px]  lg:rounded-[30px] z-[999999999999999999]"
        >
          {/* ===== top title ======  */}
          <div className="bg-[#005aff08] mb-5 md:mb-[28px] rounded-[12px] py-[10px] px-4 md:px-[18px] w-full flex items-center justify-between gap-5">
            <h3 className="fs-xl-lh-lg text-[#30353E]">
              Invite coworkers to your Upwork team
            </h3>
            <button
              onClick={(e) => {
                e.stopPropagation();
                hideModal();
              }}
            >
              <XMarkBlack />
            </button>
          </div>

          {/* ========= body ======= */}
          <div className="w-full">
            <label className="fs-md mb-2.5 block" htmlFor="coworkers-email">
              Email Addresses
            </label>
            <input
              type="text"
              name="coworkers-email"
              id=""
              placeholder="Comma - sepreted emails"
              className={`mb-[28px] leading-[25px] text-[18px] w-full border border-[#0000001a] px-[14px] py-2.5 rounded-[10px] focus:outline-none focus:border-blue-500`}
            />
          </div>

          <div className="w-full mb-5">
            <label className="fs-md mb-2.5 block" htmlFor="personal-message">
              Add a personal message (optional)
            </label>
            <textarea
              name="personal-message"
              id=""
              placeholder="Let your coworkers know why you’re inviting them"
              className={`min-h-[180px] resize-none leading-[25px] text-[18px] w-full border border-[#0000001a] px-[14px] py-2.5 rounded-[10px] focus:outline-none focus:border-blue-500`}
            >
              {/*  */}
            </textarea>
          </div>

          <div className="w-full flex items-center gap-[15px] mb-10 lg:mb-[72px]">
            <button onClick={() => setChecked(!checked)}>
              <SquareActiveInactiveCheckboxes active={checked} />
            </button>
            <p className="fs-md ">
              Also allow these coworkers to hire and pray with this account.
            </p>
          </div>

          {/* ==== modal cancel and save button */}
          <div className="w-full flex items-center justify-end gap-[14px]">
            <button
              className="btn bg-transparent hover:bg-transparent text-[#005AFF]"
              onClick={(e) => {
                e.stopPropagation();
                hideModal();
              }}
            >
              Cancel
            </button>
            <button
              className="btn-large bg-[#005AFF] text-white"
              onClick={(e) => {
                e.stopPropagation();
                setActiveInviteConfirmModal(true);
              }}
            >
              Invite
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const FreelancerInvitationModalWrapper = () => {
  const active = useSelector(
    (state: RootState) => state.inviteFreelancersActiveStages.activeInviteModal
  );
  if (active) return <InviteFreelancer />;
  return <></>;
};

export default FreelancerInvitationModalWrapper;
