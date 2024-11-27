import HeaderWithNameAndProfile from "@/components/shared/headerWithNameAndProfile/HeaderWithNameAndProfile";
import React from "react";

export default function FreelancerSideflowGetStartedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderWithNameAndProfile className="!bg-white 2xl:!py-[34px]" />
      {children}
    </>
  );
}
