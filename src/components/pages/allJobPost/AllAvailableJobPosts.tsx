import JobsPagination from "@/components/shared/pagination/JobsPagination";
import { draftPostedJob, postedJobs } from "@/staticData/JobPost";
import { useState } from "react";
import ClosedJob from "./ClosedJob";
import DrafJob from "./DrafJob";

const AllAvailableJobPosts = () => {
  const pagination = true; // later we will the value .
  const totalPage = 10; // later we will the value .
  const [currentPage, setCurrentPage] = useState(1);

  //   ===== btn style =====
  const btnStyle = ` flex items-center justify-center gap-[15px] py-[12px] md:py-[16px] px-5 rounded-[100px] border border-[#005AFF] bg-[#005AFF] text-white`;
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-[18px]">
        {/* ==============
                GET ALL CLOSED JOB POST FROM DATABASE AND RENDER THEME HERE 
                                                            =================*/}
        {postedJobs &&
          postedJobs.map((item) => (
            <ClosedJob postedJob={item} key={item.id} />
          ))}

        {/* ==============
                GET ALL DRAFT JOB POST FROM DATABASE AND RENDER THEME HERE 
                                                            =================*/}
        {draftPostedJob &&
          draftPostedJob.map((item) => (
            <DrafJob drafJob={item} key={item.id} />
          ))}
      </div>

      {/* ====== PAGINATION: Render pagination if the job data contains more than 7 jobs 
            NEXT & PREV page will trigger data fetching from the backend based on the current page
            & current page showing data amount. 
                                            ======*/}

      {pagination ? (
        <JobsPagination
          currentPage={currentPage}
          totalPage={totalPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default AllAvailableJobPosts;
