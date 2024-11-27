"use client";

const page = () => {
  const handleClick = (date: Date) => {
    console.log(date);
    console.log("clicked");
  };

  return (
    <div className="w-full py-[159px] bg-slate-100">
      <div className="w-full"></div>
    </div>
  );
};

export default page;
