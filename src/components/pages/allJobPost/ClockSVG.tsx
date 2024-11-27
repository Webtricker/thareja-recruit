type PropsType = {
  className?: string;
};
const ClockSVG = ({ className }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M22 12.5C22 18.02 17.52 22.5 12 22.5C6.48 22.5 2 18.02 2 12.5C2 6.98 6.48 2.5 12 2.5C17.52 2.5 22 6.98 22 12.5Z"
        stroke="#525966"
        strokeWidth="1.5"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7109 15.68L12.6109 13.83C12.0709 13.51 11.6309 12.74 11.6309 12.11V8.01"
        stroke="#525966"
        strokeWidth="1.5"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ClockSVG;
