import {
  setActiveCategorID,
  setActiveCategoryDropdown,
  setActiveSpecialtyID,
  setPostReviewActiveEditField,
} from "@/redux/features/jobpost/JobReviewSlice";
import {
  setJobCategory,
  setSpecialty,
} from "@/redux/features/jobpost/jobPostSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import CategoryDropdown from "./CategoryDropdown";
import JobReviewModalButtons from "./JobReviewModalButtons";
import JobReviewModalTitle from "./JobReviewModalTitle";
import SpecialtyDropdown from "./SpecialtyDropdown";

const EditCategory = () => {
  const dispatch = useDispatch();

  //  ========== STATE to handle changes
  const [selectedCategory, setSelectedCategory] = useState<{
    id: number;
    category: string;
  } | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<{
    id: number;
    specialty: string;
  } | null>(null);

  // =======CLOSE & SAVE handler
  const handleCloseModal = () => {
    dispatch(setPostReviewActiveEditField(null));
    dispatch(setActiveCategoryDropdown(null));
  };
  const handleSaveData = () => {
    dispatch(setPostReviewActiveEditField(null));
    dispatch(setActiveCategoryDropdown(null));

    if (selectedCategory) {
      dispatch(setActiveCategorID(selectedCategory?.id));
      dispatch(setJobCategory(selectedCategory?.category));
    }

    if (selectedSpecialty) {
      dispatch(setActiveSpecialtyID(selectedSpecialty?.id));
      dispatch(setSpecialty(selectedSpecialty?.specialty));
    }
  };

  // ====== CATEGORY dropdown handler
  const handleSelectCategory = (id: number, category: string) => {
    setSelectedCategory({ id, category });
    dispatch(setActiveCategoryDropdown(null));
  };

  // ====== SPECIALTY dropdown handler
  const handleSelectSpecialty = (id: number, specialty: string) => {
    setSelectedSpecialty({ id, specialty });
    dispatch(setActiveCategoryDropdown(null));
  };

  return (
    <div className=" w-full max-w-[776px] max-h-[95%] min-h-[250px] py-[20px] h-full md:h-auto rounded-[20px] md:rounded-[30px] bg-white shadow-md ">
      <div className="overflow-y-auto relative px-[20px] md:px-[32px] md:py-[30px] max-h-[100%] w-full h-full">
        <JobReviewModalTitle handler={handleCloseModal} label="Edit category" />

        {/*======== CATEGORY & SPECIALTY DROP DOWN STARTS
                                          ===============*/}
        <div className="w-full mb-[30px] md:mb-[50px] 2xl:mb-[72px]">
          <h4 className="mb-[10px] fs-md">Category</h4>
          <CategoryDropdown handler={handleSelectCategory} />

          <h4 className="mt-[28px] mb-[10px] fs-md">Specialty</h4>
          <SpecialtyDropdown handler={handleSelectSpecialty} />
        </div>

        {/* Save & Cancel button */}
        <JobReviewModalButtons
          key="EDIT_CATEGORYIES_FIELD"
          cancleHandler={handleCloseModal}
          saveHandler={handleSaveData}
        />
      </div>
    </div>
  );
};

export default EditCategory;
