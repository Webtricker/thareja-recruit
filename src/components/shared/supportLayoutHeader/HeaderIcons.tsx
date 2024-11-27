"use client";
import Image from "next/image";
import { useState } from "react";
import Alert from "../modal/Alert";

const HeaderIcons = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Image
        onClick={() => setShow(true)}
        src="/svgs/user.svg"
        alt="user"
        className="hidden lg:block"
        width={24}
        height={24}
      />

      {show && (
        <Alert hide={setShow} message="This feature is not avaialble yet" />
      )}
    </>
  );
};

export default HeaderIcons;
