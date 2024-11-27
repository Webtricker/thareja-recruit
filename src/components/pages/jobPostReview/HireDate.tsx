import RoundActiveInactiveCheckbox from "@/components/shared/checkbox/RoundActiveInactiveCheckbox";
import { useState } from "react";
const data: string[] = ["1 to 3 days", "One week", "Two weeks", "One month"];

const HireDate = () => {
  const [selected, setSelected] = useState<string | null>("1 to 3 days");

  //   Handlers
  const handleSelect = (item: string) => {
    setSelected(item);
  };
  return (
    <div className="w-full 2xl:max-w-[195px] py-4 px-5 2xl:py-[20px] 2xl:px-[28px] bg-white border border-[#005aff1a] rounded-[12px]">
      <h4 className="fs-lg-lh-md mb-5">Hire date</h4>
      <ul>
        {data.map((item) => (
          <li
            onClick={() => handleSelect(item)}
            className=" cursor-pointer flex items-center gap-2 my-2"
            key={item}
          >
            <button>
              <RoundActiveInactiveCheckbox active={item === selected} />
            </button>
            <span className="fs-md">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HireDate;
