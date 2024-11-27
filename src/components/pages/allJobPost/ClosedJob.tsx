"use client";
import { SET_EXPAND } from "@/redux/features/rootModyfier/Modyfier";
import { RootState } from "@/redux/store";
import { PostedJobs } from "@/staticData/JobPost";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "./JobCard";
import ThreeDot from "./ThreeDot";

type PropsType = {
  postedJob: PostedJobs;
};
const ClosedJob = ({ postedJob }: PropsType) => {
  const dispatch = useDispatch();
  const ACTIVE_KEY = `ACTIVE_ID_FOR_ALL_CLOSED_JOBS_DROP_DOWN_${postedJob.id}`;
  // =============== Initial states ========
  const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);
  return (
    <JobCard className="flex">
      <div className="job-post-info relative w-full lg:gap-5 rounded-[20px] flex-col lg:flex-row flex justify-between">
        <div className="post-item w-full lg:w-auto">
          <h2 className="w-[88%] lg:w-auto text-[24px] lg:text-[34px] leading-[noraml] tracking-[-1.02px] text-[#30353E]">
            {postedJob.title}
          </h2>
          <p className="text-base md:text-[18px] lg:text-[22px] leading-[normal] text-[#525966]">
            Created {postedJob.createdAt}
          </p>
          <p className="text-base md:text-[18px]  lg:text-[22px] pt-5 pb-10 md:pb-0  md:pt-10 leading-[normal] text-[#30353E]">
            Closed - {postedJob.closedDate}
          </p>
        </div>
        <div className="post-item">
          <div className=" flex items-center justify-between w-[200px] py-2 md:py-5 lg:py-0 md:pb-[15px]">
            <span className="text-[18px]  lg:text-[22px] leading-[normal] text-[#525966]">
              Proposals
            </span>
            <dfn className="not-italic text-[18px] lg:text-[20px] leading-[40px] text-[#525966] text-left">
              {postedJob.proposals}
            </dfn>
          </div>
          <div className=" flex items-center justify-between w-[200px] py-2 md:py-5 lg:py-0 md:pb-[15px]">
            <span className="text-[18px] lg:text-[22px] leading-[normal] text-[#525966]">
              Messaged
            </span>
            <dfn className="not-italic text-[18px] lg:text-[20px] leading-[40px] text-[#525966]">
              {postedJob.messaged}
            </dfn>
          </div>
          <div className=" flex items-center justify-between w-[200px] py-2 md:py-5 lg:py-0 md:pb-[15px]">
            <span className="text-[18px]  lg:text-[22px] leading-[normal] text-[#525966]">
              Hired
            </span>
            <dfn className="not-italic text-[18px] lg:text-[20px] leading-[40px] text-[#525966]">
              {postedJob.hired}
            </dfn>
          </div>
        </div>

        <div className="mt-5 lg:mt-[0]">
          <div className="w-full flex gap-5 items-center">
            <Link
              href="job-post-review"
              className="md:w-[208px] w-full rounded-[100px] text-[#005AFF] border border-[#005AFF] text-[20px] py-[12px] md:py-[16px] text-center"
            >
              Reuse Posting
            </Link>
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(SET_EXPAND(EXPAND !== ACTIVE_KEY ? ACTIVE_KEY : null));
              }}
              className={`bg-transparent absolute top-0 right-0 lg:relative `}
            >
              <ThreeDot />
              {EXPAND === ACTIVE_KEY && (
                <div className="dropdown_shadow overflow-hidden absolute max-h-[250px]  w-[340px] bg-white z-40 top-[50px] lg:top-[55px] right-0 py-4 px-1 rounded-[20px] border border-[#0000001a]">
                  <ul className="dropdown_scrollbar overflow-y-auto w-full h-full max-h-[200px]">
                    <li className=" duration-200 text-left fs-base py-1.5 px-4">
                      View proposals
                    </li>
                    <li className=" duration-200 text-left fs-base py-1.5 px-4">
                      Invite freelancers
                    </li>
                    <li className=" duration-200 text-left fs-base py-1.5 px-4">
                      Make private
                    </li>
                    <li className=" duration-200 text-left fs-base py-1.5 px-4">
                      Upgrade to featured
                    </li>
                    <li className=" duration-200 text-left fs-base py-1.5 px-4">
                      View job posting
                    </li>
                    <li className=" duration-200 text-left fs-base py-1.5 px-4">
                      Edit posting
                    </li>
                    <li className=" duration-200 text-left fs-base py-1.5 px-4">
                      Reuse posting
                    </li>
                    <li className=" duration-200 text-left fs-base py-1.5 px-4">
                      Remove posting
                    </li>
                  </ul>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </JobCard>
  );
};

export default ClosedJob;
