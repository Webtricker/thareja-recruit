type PropsType = {
  cancleHandler: () => void;
  saveHandler: () => void;
};
const JobReviewModalButtons = ({ cancleHandler, saveHandler }: PropsType) => {
  return (
    <div className="w-full flex gap-2.5 items-center justify-end ">
      <button
        className="fs-md btn-large text-[#005AFF]"
        onClick={cancleHandler}
      >
        Cancel
      </button>
      <button className="fs-md btn-large btn-bg-blue" onClick={saveHandler}>
        Save
      </button>
    </div>
  );
};

export default JobReviewModalButtons;
