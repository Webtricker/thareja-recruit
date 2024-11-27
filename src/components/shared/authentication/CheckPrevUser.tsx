"use client";

import { getPreviousBrowsingInfo } from "@/utils/updateLocalStorage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CheckPrevUser = () => {
  const router = useRouter();
  useEffect(() => {
    const prevInfo = getPreviousBrowsingInfo();
    if (prevInfo?.userId) {
      router.push("/sign-in");
    }
  }, [router]);
  return <></>;
};

export default CheckPrevUser;
