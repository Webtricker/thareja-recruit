import SquareActiveInactiveCheckboxes from "@/components/shared/checkbox/SquareActiveInactiveCheckboxes";
import { AddPlusSVG } from "@/components/shared/icons/Icons";
import { useState } from "react";

const AddCoWorkers = () => {
  // ======= states =========
  const [expand, setExpand] = useState(false);
  const [givePermission, setGivePermission] = useState(false);
  return expand ? (
    <div>
      {/*===== Email field */}
      <div className="w-full mb-5">
        <h4 className="fs-lg-lh-md">Email addresses</h4>
        <input
          className="w-full outline-none focus:outline-none border border-[#005aff1a] mt-[10px] rounded-[10px] py-2.5 md:py-[14px] px-6 text-[18px] md:text-[20px]"
          type="text"
          placeholder="Comma - sepreted emails"
        />
      </div>
      {/*===== message field */}
      <div className="w-full mb-5">
        <h4 className="fs-lg-lh-md">Add a personal message (optional)</h4>
        <textarea
          className="min-h-[170px] resize-none w-full outline-none focus:outline-none border border-[#005aff1a] mt-[10px] rounded-[10px] py-[14px] px-6 text-[18px] md:text-[20px]"
          placeholder="Let your coworkers know why you're inviting them"
        ></textarea>
      </div>
      <p className="fs-md flex items-center gap-[15px]">
        <button onClick={() => setGivePermission(!givePermission)}>
          <SquareActiveInactiveCheckboxes active={givePermission} />
        </button>{" "}
        <span>
          Also allow these coworkers to hire and pay with this account.
        </span>
      </p>
    </div>
  ) : (
    <div>
      <p className="fs-md mb-[18px]">Share with coworkers</p>
      <button
        onClick={() => setExpand(!expand)}
        className="skillsBtnActive flex items-center gap-4 justify-between text-[#005AFF]"
      >
        <AddPlusSVG />
        <span className="fs-md">Add coworkers</span>
      </button>
    </div>
  );
};

export default AddCoWorkers;
