import AllJobFilters from "@/components/pages/allJobPost/AllJobFilters";
import Link from "next/link";
import AllAvailableJobPosts from "./AllAvailableJobPosts";

const AllJobPost = () => {
  return (
    <div className="w-full ">
      <div className="title-top w-full flex  justify-between items-center mb-[28px]">
        <h1 className="fs-5xl text-[#30353E]">All job posts</h1>
        <Link
          href="/get-started-without-ai"
          className="btn-large fs-md btn-bg-blue"
        >
          Post a new job
        </Link>
      </div>
      <AllJobFilters />
      <AllAvailableJobPosts />
    </div>
  );
};

export default AllJobPost;
