import { CountrySelectorDropDown } from "@/components/shared/dropdown/CountrySelector";
import { RootState } from "@/redux/store";
import { DropdownCountry } from "@/types/dropdownTypes";
import { useDispatch, useSelector } from "react-redux";
type Country = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: any;
  };
};

type SortedCountry = {
  name: string;
  flag: string;
};
const Location = () => {
  const dispatch = useDispatch();
  const ACTIVE_KEY = "JOB_POST_REVIEW_ADVANCED_PREFERENCES_COUNTRY_DROP_DOWN";
  // =============== Initial states ========
  const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);

  //   ======== Change handler =======
  const handleCountrySelect = (country: DropdownCountry) => {
    console.log(country);
  };
  return (
    <div className="w-full max-w-[465px]">
      <h4 className="jobpost-details-label">Location</h4>
      <CountrySelectorDropDown
        parentStyle="mb-5"
        labelStyle="!rounded-1.5 !py-1.5 !px-[14px] !bg-white text-[#525966]"
        activeKey={ACTIVE_KEY}
        expand={EXPAND}
        key={ACTIVE_KEY}
        clickHandler={handleCountrySelect}
        defaultLabel="Add regions or countries"
      />
      <p className="text-[12px] tracking-[0.24px] mt-3 ">
        These location preferences will be displayed to all candidates, but
        anyone can submit proposals.
      </p>
    </div>
  );
};

export default Location;
