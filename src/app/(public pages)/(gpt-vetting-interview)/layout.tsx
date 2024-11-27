import HeaderWithNameAndProfile from "@/components/shared/headerWithNameAndProfile/HeaderWithNameAndProfile";
import React from "react";

export default function GptVettingInterviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="shadow-md bg-white sticky top-0 z-50">
        <HeaderWithNameAndProfile className="bg-[#FBFCFF] " />
      </header>

      {children}
    </>
  );
}
