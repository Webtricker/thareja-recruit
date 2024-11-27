"use client";
import ThunderSVG from "@/components/shared/card/ThunderSVG";
import SquareActiveInactiveCheckboxes from "@/components/shared/checkbox/SquareActiveInactiveCheckboxes";
import XMarkBlack from "@/components/shared/icons/XMarkBlack";
import { FreelancerProfileHoverDescriptionModal } from "@/components/shared/modal/FreelancersCardHoverModals";
import { setActiveInviteModal } from "@/redux/features/jobpost/InviteFreeLancersActiveStages";
import { setActiveFreelancerProfileModal } from "@/redux/features/profile/FreelancerProfileActiveStages";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  CrownSVG,
  HeartFilledBlueSVG,
  HeartSVG,
  LocationSVG,
  TopRatedSVG,
} from "./Icons";

const InviteFreelancersModalWrapper = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(setActiveInviteModal(true));
        }}
        className="fs-md py-2 md:py-3 lg:py-4 px-[20px] md:px-[30px] lg:px-10 rounded-[30px] md:rounded-[100px] text-white bg-[#005AFF]"
      >
        Invite
      </button>
    </>
  );
};

const ToggleActiveHeartIcon = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <div
      onClick={(event) => {
        event.stopPropagation();
        if (checked) {
          setChecked(false);
        } else {
          setActive(!active);
        }
      }}
      className="relative btn-gradient-light-blue "
    >
      {checked ? <HeartFilledBlueSVG /> : <HeartSVG />}

      <div
        onClick={(event) => {
          event.stopPropagation();
          setActive(true);
        }}
        className={`overflow-hidden w-[250px] max-h-0  absolute top-[140%]  ${
          active &&
          "p-[27px] rounded-[15px] !max-h-[9999px] freelancer-profile-hover-modal-shadow bg-white"
        } `}
      >
        <p className="w-full fs-base mb-[22.5px]">Your list</p>
        <div className="w-full flex items-center justify-start gap-[15px]  mb-[22.5px]">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setChecked(!checked);
            }}
          >
            <SquareActiveInactiveCheckboxes active={checked} />
          </button>
          <p className="w-full fs-base  ">Test</p>
        </div>

        <button
          className="w-full flex items-center gap-[15px]"
          onClick={(e) => {
            e.stopPropagation();
            setActive(false);
            document.body.style.overflowY = "hidden";
            dispatch(setActiveFreelancerProfileModal(true));
          }}
        >
          <XMarkBlack className="w-[13px] h-[13px]" />
          <span className="fs-md ">Create list</span>
        </button>
      </div>
    </div>
  );
};

// =========== root component  ==============
const FreelancersDetailsCard = ({}) => {
  // const active = useSelector((state:RootState)=>state.modyfier.EXPAND)
  const dispatch = useDispatch();
  const hanldeClick = () => {
    document.body.style.overflowY = "hidden";
    dispatch(setActiveFreelancerProfileModal(true));
  };

  const [activeModal, setActiveModal] = useState<
    "RATING" | "JOB_SUCCESS" | null
  >(null);

  return (
    <>
      <div
        onClick={hanldeClick}
        className=" relative z-[100]  w-full p-5  md:p-10 md:pt-20 border border-[#005aff33] bg-[#005aff05] rounded-[20px]  flex flex-col lg:flex-row gap-5 md:gap-[30px] items-start"
      >
        <p className="w-auto max-w-[112px] inline absolute top-5 right-5 md:right-0 md:left-10 py-2 px-2.5 rounded-[10px] bg-gradient-to-r to-[#FAFCFF] from-[#E1E5FF] fs-base text-[#005AFF]">
          Best Match
        </p>
        <div className="relative z-[101] w-full h-auto max-w-[94px]">
          <Image
            src="/svgs/freelancer-profile.svg"
            width={84.27}
            height={84.27}
            alt="Profile"
            className="p-[2.86px] rounded-full w-[94.27px] h-[94.27px] border-[2.62px] border-[#01D18F]"
          />
          <span className="absolute z-50 right-[3.24px] bottom-[3.24px] w-[22.69px] h-[22.69px] rounded-full border-[1.62px] border-white bg-[#01D18F]"></span>
        </div>
        <div className="w-full">
          {/* ===========  top container =========== */}
          <div className="w-full mb-5 flex  items-start justify-between flex-wrap gap-5">
            <div>
              <h2 className="fs-xl-lh-normal mb-1.5">Muhammad I.</h2>
              <p className="fs-base mb-1.5">
                Senior UI UX Designer | Product Designer | SaaS | Figma
              </p>
              <div className="flex items-center gap-4 flex-wrap md:flex-nowrap  md:min-w-[440px] w-full">
                <div className="relative w-auto">
                  <p
                    onMouseEnter={() => setActiveModal("RATING")}
                    onMouseLeave={() => setActiveModal(null)}
                    className="cursor-pointer fs-base flex items-center gap-2 text-[#FF9314]"
                  >
                    <TopRatedSVG /> <span>Top rated</span>
                  </p>
                  {/* ===== hover modal ======== */}
                  <FreelancerProfileHoverDescriptionModal
                    active={activeModal === "RATING"}
                    className="w-[270px] top-[180%] left-[-50%]"
                  >
                    <p className="fs-base ">
                      Top Rated talent delivers quality work with stellar
                      feedback.{" "}
                      <Link href="#" className="text-[#005AFF]">
                        Learn more
                      </Link>
                    </p>
                  </FreelancerProfileHoverDescriptionModal>
                </div>
                <p className="text-[12px] tracking-[0.24px] leading-normal flex items-center gap-1.5 py-1.5 px-[14px] border border-[#005AFF] rounded-[20px]">
                  <ThunderSVG />
                  <span>Available Now</span>
                </p>
                <div className="relative w-auto">
                  <p
                    onMouseEnter={() => setActiveModal("JOB_SUCCESS")}
                    onMouseLeave={() => setActiveModal(null)}
                    className=" cursor-pointer fs-base flex items-center gap-2 "
                  >
                    <CrownSVG />{" "}
                    <span className="text-[#9EAB0C]">98% job sucess</span>
                  </p>
                  {/* ===== hover modal ======== */}
                  <FreelancerProfileHoverDescriptionModal
                    active={activeModal === "JOB_SUCCESS"}
                    className="w-[270px] top-[180%] left-[-30%]"
                  >
                    <p className="fs-base ">
                      The percentage of this freelancer&apos;s jobs that
                      resulted in a great client experience.
                      <br />
                      <Link href="#" className="text-[#005AFF]">
                        Learn more
                      </Link>
                    </p>
                  </FreelancerProfileHoverDescriptionModal>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <ToggleActiveHeartIcon />
              <InviteFreelancersModalWrapper />
              <button className="fs-md  btn-large bg-[#dde3e766] text-[#525966cc]">
                Hire
              </button>
            </div>
          </div>

          {/* ===========  bottom container =========== */}

          <div className="w-full">
            <div className="flex items-center flex-wrap gap-y-2.5 w-full mb-[30px]">
              <p className="fs-base flex items-center gap-1 mr-[30px]">
                <LocationSVG />
                <span>Pakistan</span>
              </p>
              <p className="fs-base mr-[60px]">
                $ <span>40.00/hr</span>
              </p>
              <p className="fs-base">
                $ <span>5k+ earned </span>
              </p>
            </div>

            {/* skills container  */}
            <div className="flex gap-[14px] flex-wrap">
              <p className="fs-md skill-btn-large">Application Design</p>
              <p className="fs-md skill-btn-large">Website Design</p>
              <p className="fs-md skill-btn-large">Prototyping</p>
              <p className="fs-md skill-btn-large">Website Copywriting</p>
              <p className="fs-md skill-btn-large">Product Description</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreelancersDetailsCard;
