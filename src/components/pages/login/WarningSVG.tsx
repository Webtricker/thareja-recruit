type PropsType = {
  className?: string;
};
const WarningSVG = ({ className }: PropsType) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8.00065 14.6663C11.6673 14.6663 14.6673 11.6663 14.6673 7.99967C14.6673 4.33301 11.6673 1.33301 8.00065 1.33301C4.33398 1.33301 1.33398 4.33301 1.33398 7.99967C1.33398 11.6663 4.33398 14.6663 8.00065 14.6663Z"
        stroke="#FF0000"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 5.33301V8.66634"
        stroke="#FF0000"
        strokeWidth="1.2"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99609 10.667H8.00208"
        stroke="#FF0000"
        strokeWidth="1.6"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WarningSVG;
