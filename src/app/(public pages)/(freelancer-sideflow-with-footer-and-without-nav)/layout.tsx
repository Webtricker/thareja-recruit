import Footer from "@/components/shared/footer/footer";
import HeaderWithNameAndProfile from "@/components/shared/headerWithNameAndProfile/HeaderWithNameAndProfile";
import React from "react";

export default function FreelancerSideflowGetStartedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderWithNameAndProfile className="!bg-white" />
      {children}
      <Footer />
    </>
  );
}
