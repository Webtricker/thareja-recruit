"use client";
import { useEffect } from "react";

const AddBlueBGToMainHeader = () => {
  useEffect(() => {
    const mainHeader = document.getElementById("main_header");
    if (mainHeader) {
      mainHeader.style.backgroundColor = "#FBFCFF";
    }
  });
  return <></>;
};

export default AddBlueBGToMainHeader;
