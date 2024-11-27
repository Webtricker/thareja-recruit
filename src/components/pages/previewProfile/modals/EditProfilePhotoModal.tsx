"use client"
import { BtnLarge } from "@/components/shared/Buttons/Buttons";
import { CustomModal, CustomModalHeader } from "@/components/shared/modal/Modal";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { setProfileSrc } from "@/redux/features/onboarding/createFreelancerProfileSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

 const EditProfilePhotoModal = () => {

    const dispatch = useDispatch();
    const KEY = "SHOW_PREVIEW_PROFILE_PHOTO_UPLOAD_MODAL";
  
    const {profileSrc} = useSelector((state:RootState)=>state.createFreelancerProfile);
  
    // state
    // const [profileImg, setProfileImg] = useState(profileSrc?profileSrc:"/svgs/profile/preview-profile-image.svg");
  
    // TODO: Have to remove this.
    const [profileImg, setProfileImg] = useState(profileSrc?profileSrc:"/svgs/profile/preview-profile-image.svg");
  
    //   reference
    const fileInputRef = useRef<HTMLInputElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
  
    //   handlers
    const handleChangeImage = () => {
      if (!fileInputRef.current) return;
      fileInputRef.current.click();
    };
  
    const handleSaveImage = () => {
      dispatch(toggleModal(null));
      dispatch(setProfileSrc(profileImg))
      document.body.style.overflowY = "auto";
    };
  
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]; // Get the first selected file
  
      if (!file) {
        return;
      }
      setProfileImg(URL.createObjectURL(file));
    };
    return (
      <CustomModal
        containerStyle="!max-w-[776px] xl:px-8"
        key={KEY}
        activeKey={KEY}
      >
        <CustomModalHeader title="Edit photo" />
        <div className="w-full mt-6 md:mt-7">
          <p className="fs-md mb-6 md:mb-7 lg:mb-[30px]">
            Show clients the best version of yourself!
          </p>
          <div className="w-full flex flex-wrap gap-5 items-center mb-[50px] md:mb-[60px] lg:mb-[72px]">
            <Image
              ref={imgRef}
              height={150}
              width={150}
              className="rounded-full w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]"
              src={profileImg}
              alt="Profile image"
            />
            <div className="w-full max-w-[532px]">
              <p className="fs-md">
                Must be an actual photo of you. Logos, clip-art, group photos, and
                digitally-altered images are not allowed.
                <Link className="text-[#005AFF] underline" href="#">
                   Opens in new window Learn more
                </Link>
              </p>
            </div>
          </div>
        </div>
  
        <div className="relative w-full flex flex-wrap items-center justify-center md:justify-end gap-[14px]">
          <input
            ref={fileInputRef}
            type="file"
            onChange={changeHandler}
            accept="image/*"
            className="pointer-events-none top-0 left-0 absolute opacity-0 invisible"
          />
          <BtnLarge
            style="btn-border-blue"
            handler={handleChangeImage}
            key="CHANGE_PROFILE_IMAGE_BTN"
            text="Change image"
          />
          <BtnLarge
            style="btn-bg-blue"
            handler={handleSaveImage}
            text="Save photo"
            key="SAVE_PROFILE_IMAGE_BTN"
          />
        </div>
      </CustomModal>
    );
  };
  export default EditProfilePhotoModal;