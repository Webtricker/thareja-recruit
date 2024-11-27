"use client";

type PropsType = {
  text: string;
  style?: string;
  clickHandler?: Function;
};

export const Button = ({ text, clickHandler, style }: PropsType) => {
  const handleClick = () => {
    clickHandler && clickHandler();
  };
  return (
    <button onClick={handleClick} className={`btn-large  fs-md ${style}`}>
      {text}
    </button>
  );
};

export const ViewDetailsBtn = () => {
  const handleClick = () => {};
  return (
    <Button
      style="2xl:!px-[30px] btn-border-blue"
      text="View"
      clickHandler={handleClick}
    />
  );
};
