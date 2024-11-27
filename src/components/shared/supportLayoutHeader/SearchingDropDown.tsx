import {
  setActiveDropDownMenu,
  setSearchingCategory,
} from "@/redux/features/hambergerMenuSlice.ts/mainHeaderSlice";
import { RootState } from "@/redux/store";
import { searchingDropdownData } from "@/staticData/DropDown";
import { useDispatch, useSelector } from "react-redux";
import DownArrowSVG from "./DownArrowSVG";

const SearchingDropDown = () => {
  const dispatch = useDispatch();
  const activeDropDown = useSelector(
    (state: RootState) => state.headerMenus.activeDropDownMenu
  );
  const searchCategory = useSelector(
    (state: RootState) => state.headerMenus.searchingCategory
  );

  let categoryLable;
  searchingDropdownData.forEach((item) => {
    if (item.activeIdentity === searchCategory) {
      categoryLable = item.label;
    }
  });
  return (
    <div
      onMouseEnter={() => dispatch(setActiveDropDownMenu("SEARCH"))}
      onMouseLeave={() => dispatch(setActiveDropDownMenu(null))}
      className="drop-down-links"
    >
      <label htmlFor="" className="dropdown-label">
        {categoryLable}
        <DownArrowSVG
          className={activeDropDown === "SEARCH" ? "rotate-180" : ""}
        />
      </label>
      {activeDropDown === "SEARCH" && (
        <ul className="drop-down-content">
          {
            //TODO: Have to modify into link based on requirements.
            //TODO: Have to modify into link based on requirements.
            searchingDropdownData.map((item) => (
              <li
                onClick={() => {
                  dispatch(setSearchingCategory(item.activeIdentity));
                  dispatch(setActiveDropDownMenu(null));
                }}
                key={item.activeIdentity}
              >
                {item.label}
              </li>
            ))
          }
        </ul>
      )}
    </div>
  );
};

export default SearchingDropDown;
