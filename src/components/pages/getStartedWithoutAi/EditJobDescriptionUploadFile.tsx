import { setJobPostAttachedFile } from "@/redux/features/jobpost/jobPostSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WarningSVG from "../login/WarningSVG";

const EditJobDescriptionUploadFile = () => {
  const dispatch = useDispatch();
  const uploadedFile = useSelector(
    (state: RootState) => state.jobPosting.attachedFile
  );
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);

  //   TODO: Have to delete this state
  const [show, setShow] = useState(false);

  //   reference
  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target?.files?.[0]; // Access the first selected file

    if (selectedFile) {
      const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100 MB in bytes
      if (selectedFile.size > MAX_FILE_SIZE) {
        setFileError("File size exceeds 100MB limit!");
        setFileName("");
        dispatch(setJobPostAttachedFile(null));
        return;
      }

      const MAX_FILENAME_LENGTH = 32; // Adjust as needed
      let truncatedName = selectedFile.name;
      if (selectedFile.name.length > MAX_FILENAME_LENGTH) {
        // Truncate filename and add "..."
        truncatedName =
          selectedFile.name.substring(0, MAX_FILENAME_LENGTH - 3) + "...";
      }

      const ONEKB = 1024;
      const ONEMB = 1024 * 1024;
      let fileSize = selectedFile.size;
      if (!fileSize) return;

      if (fileSize >= ONEMB) {
        const totalMB = (fileSize / ONEMB).toFixed(2);
        setFileName(`${truncatedName} (${totalMB} MB)`);
      } else if (fileSize >= ONEKB) {
        const calculatedSize = fileSize / ONEKB;
        const totalKB = Math.ceil(calculatedSize);
        setFileName(`${truncatedName} (${totalKB} KB)`);
      } else {
        setFileName(`${truncatedName} (${fileSize} B)`);
      }
      setFileError("");

      // set the file into the store.
      dispatch(setJobPostAttachedFile(selectedFile));
    }
  };
  return (
    <div className="mb-[40px] md:mb-[50px] lg:mb-[72px]">
      {/* input contianer starts */}
      <input
        onChange={handleFileInput}
        type="file"
        ref={fileInput}
        className="absolute top-0 left-0 opacity-0 pointer-events-none"
      />
      <button
        onClick={() => fileInput?.current?.click()}
        className="flex items-center gap-[10px] py-[10px] px-[20px] md:py-3 md:px-[28px] rounded-[100px] border border-[#005AFF] text-[#005AFF] bg-[#005aff05]"
      >
        <Image
          src="/svgs/input-file.svg"
          width={12.3}
          height={24.5}
          alt="File icon"
          className=""
        />
        <span className="fs-md">Attach file</span>
      </button>

      {fileError && (
        <p className="text-[#FF0000] fs-base flex items-center gap-[6px] mt-[7px] md:mt-[12px] mb-[7px] md:mb-[12px]">
          <WarningSVG /> {fileError}
        </p>
      )}
      {/* input contianer ends */}
      <p className="block pt-[14px] font-[300] fs-base">
        {" "}
        Max file size: 100 MB{" "}
      </p>
      {/* file naem */}
      {uploadedFile && (
        <div className=" inline-flex items-center gap-[14px] mt-6 py-[10px] px-5 border border-[#A8B7C1] rounded-[10px]">
          <Image
            src="/svgs/input-file.svg"
            width={12.3}
            height={24.5}
            alt="File icon"
            className=""
          />
          <span>{fileName}</span>
          <button onClick={() => dispatch(setJobPostAttachedFile(null))}>
            <Image
              src="/svgs/dustbin.svg"
              width={24}
              height={26}
              alt="Dustbin Icon"
              className=""
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default EditJobDescriptionUploadFile;
