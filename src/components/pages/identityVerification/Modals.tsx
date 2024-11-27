import { CustomModal } from "@/components/shared/modal/Modal";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { setActiveIdentityVerificationCompletedStep } from "@/redux/features/settings/identityVerificationSlice";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { WarningSVG } from "../getStartedWithoutAi/Icons";
import { Button } from "./Buttons";

export const GovernmentIssuePhotoIdModal = () => {
  const dispatch = useDispatch();
  const KEY = "OPEN_GOVERRMENT_ISSUE_ID_UPLOAD_MODAL";
  //   const uploadedFile = useSelector(
  //     (state: RootState) => state.jobPosting.attachedFile
  //   );
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);

  //   TODO: Have to delete this state
  const [show, setShow] = useState(false);

  //   reference
  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("changed");
    console.log(e.target);
    const selectedFile = e.target?.files?.[0];
    console.log(selectedFile);
    if (selectedFile) {
      const MAX_FILE_SIZE = 100 * 1024 * 1024;
      if (selectedFile.size > MAX_FILE_SIZE) {
        setFileError("File size exceeds 100MB limit!");
        setFileName("");

        // set the file to redux store
        return;
      }

      const MAX_FILENAME_LENGTH = 32; // Adjust as needed
      let truncatedName = selectedFile.name;
      console.log(truncatedName);
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
      //   dispatch(setJobPostAttachedFile(selectedFile));
    }
  };

  //   handlers
  const handleBack = () => {
    setFileError("");
    dispatch(toggleModal(null));
  };
  const handleUpload = () => {
    if (!fileName) {
      setFileError("Please select a file");
      return;
    }
    dispatch(setActiveIdentityVerificationCompletedStep(2));
    dispatch(toggleModal(null));
  };

  console.log(fileName);
  return (
    <CustomModal
      containerStyle="w-full !max-w-[758px] !py-7 md:!py-[50px] !px-5 md:!px-[32px] !rounded-[20px] md:!rounded-[30px] !relative"
      activeKey={KEY}
    >
      <div className="w-full mb-[50px] md:mb-[72px]">
        {/* TODO: have to update the link according to need */}
        <Link href="#" className="text-[#005AFF] fs-md pb-5 block">
          See examples of effective descriptions
        </Link>

        {/* input contianer starts */}
        <input
          onChange={handleFileInput}
          type="file"
          ref={fileInput}
          className="absolute top-0 left-0 opacity-0 pointer-events-none"
        />
        <button
          onClick={() => fileInput?.current?.click()}
          className="inline-flex max-w-[187px] items-center gap-[10px] py-[10px] px-[20px] md:py-3 md:px-[28px] rounded-[100px] border border-[#005AFF] text-[#005AFF] bg-[#005aff05]"
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
        {fileName && (
          <div className=" inline-flex items-center gap-[14px] mt-6 py-[10px] px-5 border border-[#A8B7C1] rounded-[10px]">
            <Image
              src="/svgs/input-file.svg"
              width={12.3}
              height={24.5}
              alt="File icon"
              className=""
            />
            <span>{fileName}</span>
            <button
              //   onClick={() => dispatch(setJobPostAttachedFile(null))}
              onClick={() => setFileName("")}
            >
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

      <div className="w-full flex items-center justify-end gap-[14px]">
        <Button
          text="Back"
          style="fs-md text-[#005AFF]"
          clickHandler={handleBack}
          key="FILE_UPLOAD_BACK_BUTTON"
        />
        <Button
          text="Upload"
          style="fs-md btn-bg-blue"
          clickHandler={handleUpload}
          key="FILE_UPLOAD_SUBMIT_BUTTON"
        />
      </div>
    </CustomModal>
  );
};
