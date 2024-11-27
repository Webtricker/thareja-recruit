"use client";

import { toggleConctactFormModal } from "@/redux/features/contact/directContactsSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { ShareProfileSVG } from "./Icons";

export const ShareProfileButton = () => {
  return (
    <button className="text-[#005AFF] rounded-[100px] border border-[#005AFF] fs-md py-2.5 md:py-3 px-5 md:px-8 lg:py-[16px] lg:px-[40px]  flex items-center gap-[14px]">
      <ShareProfileSVG />
      <span>Share profile</span>
    </button>
  );
};

export const CreateContractButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleClick = () => {
    // router.push("/direct-contacts");
    dispatch(toggleConctactFormModal(true));
  };
  return (
    <button onClick={handleClick} className="fs-md btn-large btn-bg-blue ">
      Create contract
    </button>
  );
};
