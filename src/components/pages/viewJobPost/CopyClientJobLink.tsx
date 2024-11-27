"use client";

import { toast } from "react-toastify";

const CopyClientJobLink = () => {
  const textToCopy = "https://www.Recruit.com/jobs/~01a6b2754649a76e5d";
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast.success("copy successful");
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        toast.error("couldn't copy the link");
        console.error("Failed to copy text: ", err);
      });
  };
  return (
    <>
      <p
        className={`overflow-hidden mb-2 py-3 md:py-2.5 px-[18px] md:px-5 rounded-[8px] bg-[#dde3e766] text-[#525966cc] fs-base`}
      >
        https://www.Recruit.com/jobs/~...
        {/* https://www.Recruit.com/jobs/~01a6b2754649a76e5d */}
      </p>

      <button
        onClick={copyToClipboard}
        className="text-[#005AFF] mb-2 fs-lg-lh-lg"
      >
        Copy link
      </button>
    </>
  );
};

export default CopyClientJobLink;
