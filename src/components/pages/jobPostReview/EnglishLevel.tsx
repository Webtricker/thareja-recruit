import RoundActiveInactiveCheckbox from "@/components/shared/checkbox/RoundActiveInactiveCheckbox";
import { useState } from "react";
const data: string[] = [
  "Any level",
  "Conversational or better",
  "Fluent or better",
  "Native or bilingual only",
];

const EnglishLevel = () => {
  const [selected, setSelected] = useState<string | null>("Any level");

  //   Handlers
  const handleSelect = (item: string) => {
    setSelected(item);
  };
  return (
    <div className="w-full 2xl:max-w-[332px] py-4 px-5 2xl:py-[20px] 2xl:px-[28px] bg-white border border-[#005aff1a] rounded-[12px]">
      <h4 className="fs-lg-lh-md mb-5">English level</h4>
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

export default EnglishLevel;
