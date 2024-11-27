import { Dispatch, SetStateAction } from "react";
import RightArrowSVG from "./RightArrowSVG";

type PropsType = {
  className?: string;
  currentPage: number;
  totalPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};
const JobsPagination = ({
  className,
  currentPage,
  totalPage,
  setCurrentPage,
}: PropsType) => {
  //   ===== btn style =====
  const btnStyle = ` flex items-center justify-center gap-[15px] py-2 md:py-[12px] lg:py-[16px] px-5 rounded-[100px] border border-[#005AFF] bg-[#005AFF] text-white`;
  return (
    <div className="w-full flex flex-wrap gap-5  items-center justify-between mt-[28px]">
      {/* <div className="w-full md:w-4/6 bg-red-100 flex items-center justify-between"> */}
      {/* ======= Render Prev Page conditionaly */}
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        className={`${btnStyle} ${
          currentPage > 1 ? "" : "opacity-0 pointer-events-none"
        }`}
      >
        <RightArrowSVG className="rotate-180 w-[20px] md:w-[24px] lg:w-[27px]" />
        <span className="fs-md">Prev Page</span>
      </button>
      {/* ======= Render Next Page conditionaly */}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        className={` my-5 md:my-0 ${btnStyle} ${
          currentPage !== totalPage ? "" : "opacity-0 pointer-events-none"
        }`}
      >
        <span className="fs-md">Next Page</span>
        <RightArrowSVG className="w-[20px] md:w-[24px] lg:w-[27px]" />{" "}
      </button>
      {/* </div> */}

      {/* ==== page info ==== */}
      <div className="w-full justify-center md:justify-end md:w-auto text-[#005AFF] fs-md flex items-center gap-2.5">
        <span>Page</span>
        <span className=" w-10 md:w-[50px] h-7 md:h-[32px] flex items-center justify-center border border-[#005AFF] rounded-[10px] text-black">
          {currentPage}
        </span>
        <span>of {totalPage}</span>
      </div>
    </div>
  );
};

export default JobsPagination;
