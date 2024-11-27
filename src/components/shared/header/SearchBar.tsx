"use client";
import Image from "next/image";
import { useState } from "react";
import Alert from "../modal/Alert";
// type PropsType = {
//   activeDropDown: number | null;
// };
const SearchBar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex items-center gap-3 w-full">
        <Image
          onClick={() => setShow(true)}
          src="/svgs/search.svg"
          alt="search"
          width={20}
          height={20}
        />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full "
        />
      </div>
      {show && (
        <Alert hide={setShow} message="This feature is not avaialble yet" />
      )}
    </>
  );
};

export default SearchBar;
