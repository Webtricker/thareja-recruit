import { PreviewProfileSubmitBtn } from "@/components/pages/previewProfile/Buttons";
import {
  CardWrapper,
  EducationCard,
  ProfileCard,
  SkillsCard,
  TittleAndDescriptionCard,
  WorkHistoryCard,
} from "@/components/pages/previewProfile/Cards";
import EducationModal from "@/components/pages/previewProfile/modals/EditEducationModal";
import EditHourlyRateModal from "@/components/pages/previewProfile/modals/EditHourlyRateModal";
import EditLanguagesModal from "@/components/pages/previewProfile/modals/EditLanguagesModal";
import EditProfileOverviewModal from "@/components/pages/previewProfile/modals/EditProfileOverviewModal";
import EditProfilePhotoModal from "@/components/pages/previewProfile/modals/EditProfilePhotoModal";
import EditSkillsModal from "@/components/pages/previewProfile/modals/EditSkillsModal";
import EditTitleModal from "@/components/pages/previewProfile/modals/EditTItleModal";
import WorkHistoryModal from "@/components/pages/previewProfile/modals/EditWorkHistoryModal";
import Container from "@/components/shared/wrapper/Container";
import Image from "next/image";

const PreviewProfilePage = () => {
  return (
    <main className="text-[#30353E] px-5 md:px-[40px] w-full bg-[#FFF] relative pt-[130px] pb-[100px] lg:pb-[120px] lg:pt-[159px]">
      <Container className="flex flex-col mx-auto h-full !max-w-[1518px]">
        <h1 className="fs-5xl ">Preview Profile</h1>

        {/* ========== 
                    top gradient border card 
                                        ======= */}
        <div
          className={`w-full my-8 md:my-9 lg:my-10 p-[1px] rounded-[20px] md:rounded-[30px] bg-gradient-to-r from-[#01D18F] to-[#005AFF]`}
        >
          <CardWrapper
            key="TOP_SECTION_CARD"
            style="w-full bg-[#FAFCFF] flex justify-between gap-10 flex-wrap-reverse md:flex-nowrap xl:px-10 2xl:px-[50px] 2xl:py-10 !rounded-[19px] md:!rounded-[29px]"
          >
            <div className="flex-grow max-w-[928px]">
              <h2 className="fs-4xl">Looking good, Muhammad!</h2>
              <p className="fs-lg-lh-normal my-5 md:my-6 lg:my-7">
                Make any edits you want, then submit your profile. You can make
                more changes after it&apos;s live.
              </p>

              <PreviewProfileSubmitBtn key="TOP_BTN" />

            </div>
            <div className="w-full md:max-w-[180px] flex items-center justify-center mdjustify-end">
              <Image
                height={180}
                width={180}
                src="/svgs/profile/preview-profile-and-edit.svg"
                alt="preview profile svg"
                className="max-w-[180px]"
              />
            </div>
          </CardWrapper>
        </div>

        {/* =============
                       profile  edit container starts   
                                                ======= */}

        <div className="w-full flex flex-col lg:flex-row items-start gap-5 md:gap-7 lg:gap-[30px]">
          
          <ProfileCard />

          <div className="w-full flex flex-col gap-6">
            <TittleAndDescriptionCard />
            <SkillsCard />
            <WorkHistoryCard />
            <EducationCard />
          </div>
        </div>
      </Container>

      {/*=========== modals ============= */}
      <EditProfilePhotoModal />
      <EditLanguagesModal />
      <EditTitleModal />
      <EditHourlyRateModal />
      <EditProfileOverviewModal />
      <EditSkillsModal />
      <WorkHistoryModal />
      <EducationModal />


    </main>
  );
};

export default PreviewProfilePage;
