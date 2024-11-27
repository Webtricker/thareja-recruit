"use client";
import { SearchIconSVG } from "../icons/Icons";
type SearchInputProps = {
  iconStyle?: string;
  inputStyle?: string;
  containerStyle?: string;
  placeholder?: string;
  changeHandler: Function;
};
export const SearchInput = ({
  changeHandler,
  placeholder,
  containerStyle,
  inputStyle,
  iconStyle,
}: SearchInputProps) => {
  console.log(placeholder);
  return (
    <div
      className={`duration-300 flex focus-within:border-[#005AFF] items-center gap-5 w-full border border-[#A8B7C1] px-5 rounded-[100px]  ${containerStyle}`}
    >
      <SearchIconSVG className={iconStyle} />
      <input
        onChange={(e) => {
          e.preventDefault();
          changeHandler(e.target.value);
        }}
        type="text"
        placeholder={placeholder === undefined ? "Search..." : placeholder}
        className={`w-full fs-md bg-transparent py-2 md:py-2.5 focus:outline-none focus:border-blue-500 ${inputStyle}`}
      />
    </div>
  );
};
