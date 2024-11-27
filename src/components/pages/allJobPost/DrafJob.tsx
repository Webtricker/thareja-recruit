"use client";
import { SET_EXPAND } from "@/redux/features/rootModyfier/Modyfier";
import { RootState } from "@/redux/store";
import { DraftPostedJob } from "@/staticData/JobPost";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "./JobCard";
import ThreeDot from "./ThreeDot";

type PropsType = {
  drafJob: DraftPostedJob;
};
const DrafJob = ({ drafJob }: PropsType) => {
  const dispatch = useDispatch();
  const ACTIVE_KEY = `ACTIVE_ID_FOR_ALL_DRAFT_JOBS_DROP_DOWN_${drafJob.id}`;
  // =============== Initial states ========
  const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);

  return (
    <JobCard>
      <div className="job-post-info w-full relative rounded-[20px] flex-col lg:flex-row flex justify-between ">
        <div className="post-item">
          <h2 className="w-[88%] lg:w-auto text-[24px] lg:text-[34px] leading-[noraml] tracking-[-1.02px] text-[#30353E]">
            {drafJob.title}
          </h2>
          <p className="text-[18px]  lg:text-[22px] leading-[normal] text-[#525966]">
            Created {drafJob.createdAt}
          </p>
          <p className="text-[18px]  lg:text-[22px] pt-10 leading-[normal] text-[#30353E]">
            {drafJob.status}
          </p>
        </div>
        <div className="mt-5 lg:mt-[0]">
          <div className="w-full flex gap-5 items-center ">
            <Link
              href="/job-post-review"
              className="md:w-[208px] w-full rounded-[100px] text-[#005AFF] border border-[#005AFF] text-[20px] py-[12px] md:py-[16px] text-center"
            >
              Edit Draft
            </Link>
            <button
              onClick={(e) => {
                // e.stopPropagation();
                dispatch(SET_EXPAND(EXPAND !== ACTIVE_KEY ? ACTIVE_KEY : null));
              }}
              className={`bg-transparent absolute top-0 right-0 lg:relative`}
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

export default DrafJob;
