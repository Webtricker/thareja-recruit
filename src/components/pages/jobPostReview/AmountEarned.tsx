import RoundActiveInactiveCheckbox from "@/components/shared/checkbox/RoundActiveInactiveCheckbox";
import { useState } from "react";
const data: string[] = [
  "Any amount earned",
  "$100+ earned",
  "$1k+ earned",
  "$10 earned",
];

const AmountEarned = () => {
  const [selected, setSelected] = useState<string | null>(null);

  //   Handlers
  const handleSelect = (item: string) => {
    setSelected(item);
  };
  return (
    <div className="mt-[22px] w-full 2xl:max-w-[382px] py-4 px-5 2xl:py-[20px] 2xl:px-[28px] bg-white border border-[#005aff1a] rounded-[12px]">
      <h4 className="jobpost-details-label">Amount earned</h4>
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
            <span className="text-[18px] md:text-[20px]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AmountEarned;
