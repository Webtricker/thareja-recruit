import LinearGradientRoundedCheckbox from "@/components/shared/common/LinearGradientRoundedCheckbox";
import { setActiveCategory } from "@/redux/features/jobpost/InviteFreeLancersActiveStages";
import { setCategory } from "@/redux/features/jobpost/InviteFreeLancersFilteres";
import { RootState } from "@/redux/store";
import { categoryItems } from "@/staticData/InviteFreeLancers";
import { useDispatch, useSelector } from "react-redux";

const Category = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(
    (state: RootState) => state.inviteFreelancersActiveStages.activeCategory
  );

  return (
    <div className="p-5 bg-white w-full md:max-w-[370px] md:p-6 lg:p-7 rounded-[12px] border border-[#005aff24]">
      <h3 className="mb-4 md:mb-5 fs-lg-lh-normal">Category</h3>
      <ul className="flex flex-col gap-[14px]">
        {categoryItems.map((item, indx) => (
          <li
            key={indx}
            onClick={() => {
              dispatch(setActiveCategory(indx + 1));
              dispatch(setCategory(item));
            }}
            className="fs-md flex items-center gap-2.5 cursor-pointer"
          >
            <LinearGradientRoundedCheckbox
              active={activeCategory === indx + 1}
            />{" "}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
