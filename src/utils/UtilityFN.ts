export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export function generatePDF(htmlContent: string, fileName: string): void {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const div = document.createElement("div");
  div.innerHTML = htmlContent;
  document.body.appendChild(div);

  // Calculate A4 page dimensions in pixels with margins
  const margin = 10; // 40mm margin
  const a4Width = 210 - margin * 2; // A4 width in mm minus margins
  const a4Height = 297 - margin * 2; // A4 height in mm minus margins

  html2canvas(div, {
    scale: 1.5, // Increase scale to improve quality
    width: div.scrollWidth,
    height: div.scrollHeight,
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const imgWidth = a4Width;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Calculate horizontal offset to center the content
    const offsetX = (doc.internal.pageSize.getWidth() - imgWidth) / 2;
    let position = margin;

    doc.addImage(imgData, "PNG", offsetX, position, imgWidth, imgHeight);

    if (imgHeight > a4Height) {
      let heightLeft = imgHeight - a4Height;

      while (heightLeft > 0) {
        position = -(heightLeft - a4Height + margin);
        doc.addPage();
        doc.addImage(imgData, "PNG", offsetX, position, imgWidth, imgHeight);
        heightLeft -= a4Height;
      }
    }

    doc.save(`${fileName}.pdf`);
    document.body.removeChild(div);
  });
}

export const formateCalendarSelectedDate = (date: string) => {
  const fullDate = new Date(date);
  const m = fullDate.getMonth();
  const y = fullDate.getFullYear();
  const d = fullDate.getDate();
  const formatedDated = `${m < 9 ? "0" : ""}${m + 1}-${
    d < 10 ? "0" : ""
  }${d}-${y}`;

  return formatedDated;
};

// ======== get the difference between previous date time and current time ==============
export function getFormattedTimeDifference(previousDateTime: number) {
  // Convert the provided date-time to a Date object
  const previousDate = new Date(previousDateTime);
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const diffInMs = currentDate.getTime() - previousDate.getTime();

  // Convert milliseconds to seconds, minutes, hours, and days
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  // Calculate remaining hours and minutes
  const remainingHours = diffInHours % 24;
  const remainingMinutes = diffInMinutes % 60;

  // Format the output based on the conditions
  if (diffInDays > 0) {
    return `${diffInDays} day(s), ${remainingHours} hour(s), ${remainingMinutes} min`;
  } else if (diffInHours > 0) {
    return `${diffInHours} hour(s), ${remainingMinutes} min`;
  } else if (diffInMinutes > 0) {
    // return `${diffInMinutes} minute(s)`;
    return `${diffInMinutes} min`;
  } else {
    return `Less than a minute ago`;
  }
}

// ============== contract ==============
export const formateDate = (dateTime: number) => {
  const date = new Date(dateTime);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric", // Corrected type
    month: "long", // Corrected type
    day: "numeric", // Corrected type
  };
  return date.toLocaleDateString("en-US", options);
};

// ======= get month name and 10 recent year list.===========
export const getMonthsAndYears = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const years: string[] = [];

  const currentYear = new Date(Date.now()).getFullYear();
  const nextYear = currentYear + 1;
  let year = currentYear - 20; // get previous 20 years

  while (nextYear !== year) {
    const _strYear = year + "";
    years.push(_strYear);
    year++;
  }

  return { years, months };
};

// ========== validate text input and check only for number ==========
export const validateTextInputAsNumber = (
  input: string
): string | undefined => {
  if (input === "$") return "empty_input";
  if (input.length === 1 && !isNaN(parseInt(input, 10))) return input;
  const val: any = input.split("$");
  if (!isNaN(val[1] - 1)) return val[1];
};

export function formatNumber(num: string) {
  if (num.includes(".") && num.split(".")[1]?.length > 2) {
    let pos = num.indexOf(".") + 3;
    let trimNum = num.slice(0, pos);
    return trimNum;
  }
  return num;
}

export const getCalculatedHourlyPrice = (num: string, percentage: number) => {
  let basePrice = num;
  if (num.includes(".") && num.indexOf(".") === num.length - 1) {
    basePrice = num + "00";
  }

  //======calculate fee ==========
  let fee = parseFloat(basePrice) * percentage;
  let feeStr = fee + "";
  if (feeStr.includes(".") && feeStr.split(".")[1]?.length > 2) {
    let pos = feeStr.indexOf(".") + 3;
    feeStr = feeStr.slice(0, pos);
  }

  return feeStr;
};



/* ======= function to generate years ===========*/
export const generateYears=(len:number,yearToAdd:number=0):number[]=> {
  // return [2023,2024,2025,2026]
  const inputYear = new Date().getFullYear() + yearToAdd;
  const years = [];
  for (let i = 1; i <= len; i++) {
        years.push(inputYear - i);
  }
  return years;
}



/* ====== get remaining characters in numbers type: string==========*/
export const getRemainingCharacters = (char:string, totalChar:number=50000):string=>{
  let remainingCH = (totalChar - char.length).toString();
      if (remainingCH.length > 3) {
        remainingCH = remainingCH
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
  return remainingCH;
}