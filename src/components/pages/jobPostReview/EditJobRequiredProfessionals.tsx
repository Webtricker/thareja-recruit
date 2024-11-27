import {
  setActiveRequiredProfessionals,
  setPostReviewActiveEditField,
} from "@/redux/features/jobpost/JobReviewSlice";
import { setRequiredProfessionals } from "@/redux/features/jobpost/jobPostSlice";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ActiveCheckboxSVG,
  InActiveCheckboxSVG,
} from "../getStartedWithoutAi/Icons";
import { MinusSVG, PlusSVG } from "./Icons";
import JobReviewModalButtons from "./JobReviewModalButtons";
import JobReviewModalTitle from "./JobReviewModalTitle";

const EditJobRequiredProfessionals = () => {
  const dispatch = useDispatch();
  const activeRequiredProfessionals = useSelector(
    (state: RootState) => state.jobReviews.activeRequiredProfessionals
  );
  const [person, setPerson] = useState(2);

  const handleCloseModal = () => {
    dispatch(setPostReviewActiveEditField(null));
  };
  const handleSaveData = () => {
    dispatch(setPostReviewActiveEditField(null));
  };

  const updatePerson = (val: "INCREASE" | "DECREASE") => {
    if (val == "DECREASE" && person > 2) {
      setPerson(person - 1);
    }
    if (val == "INCREASE") {
      setPerson(person + 1);
    }
  };

  return (
    <div className="w-full max-w-[774px] min-h-[250px] h-auto rounded-[20px] md:rounded-[30px] bg-white shadow-md relative p-[20px] md:p-[50px] md:px-[32px]">
      <JobReviewModalTitle
        handler={handleCloseModal}
        label="Edit number of professionals needed (optional)"
      />

      <div className="w-full">
        <div className="flex items-center gap-[10px] mb-[30px]">
          {activeRequiredProfessionals === "ONE_PERSON" ? (
            <button>
              <ActiveCheckboxSVG />
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(setActiveRequiredProfessionals("ONE_PERSON"));
                dispatch(setRequiredProfessionals("One person"));
              }}
            >
              <InActiveCheckboxSVG />
            </button>
          )}
          <h4 className="fs-md">One person.</h4>
        </div>
        <div className="flex items-center gap-[10px]">
          {activeRequiredProfessionals === "MANY_PERSON" ? (
            <button>
              <ActiveCheckboxSVG />
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(setActiveRequiredProfessionals("MANY_PERSON"));
                dispatch(setRequiredProfessionals("More than one person"));
              }}
            >
              <InActiveCheckboxSVG />
            </button>
          )}
          <h4 className="fs-md">More than one person</h4>
        </div>

        {activeRequiredProfessionals === "MANY_PERSON" && (
          <div
            className={`flex gap-2.5 max-w-[100px] justify-between items-center  mt-5 2.5 p-2.5 px-3 rounded-[6px] border border-[#005aff33]`}
          >
            <button
              className="cursor-pointer"
              onClick={() => updatePerson("DECREASE")}
            >
              <MinusSVG />
            </button>
            <span className="fs-md">{person}</span>
            <button
              className="cursor-pointer"
              onClick={() => updatePerson("INCREASE")}
            >
              <PlusSVG />
            </button>
          </div>
        )}
      </div>

      {/* Save & Cancel button */}
      <div className="w-full mt-10">
        <JobReviewModalButtons
          key="EDIT_NUMBER_OF_PROFESSIONALS_FIELD"
          cancleHandler={handleCloseModal}
          saveHandler={handleSaveData}
        />
      </div>
    </div>
  );
};

export default EditJobRequiredProfessionals;
