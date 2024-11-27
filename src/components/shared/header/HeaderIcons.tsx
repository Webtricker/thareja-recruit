"use client";
import Image from "next/image";
import { useState } from "react";
import Alert from "../modal/Alert";

const HeaderIcons = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="hidden lg:flex items-center justify-end gap-5 w-full max-w-[156px]">
        <Image
          onClick={() => setShow(true)}
          className="px-[6px]"
          src="/svgs/question.svg"
          alt="user"
          width={24}
          height={24}
        />
        <Image
          onClick={() => setShow(true)}
          src="/svgs/heart.svg"
          alt="user"
          width={24}
          height={24}
        />
        <Image
          onClick={() => setShow(true)}
          src="/svgs/notification.svg"
          alt="notification"
          width={24}
          height={24}
        />
        <Image
          onClick={() => setShow(true)}
          src="/svgs/user.svg"
          alt="user"
          width={24}
          height={24}
        />
      </div>

      {show && (
        <Alert hide={setShow} message="This feature is not avaialble yet" />
      )}
    </>
  );
};

export default HeaderIcons;
