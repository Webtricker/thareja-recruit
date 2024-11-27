type PropsType = {
  className?: string;
};
const ActiveCheckboxSVG = ({ className }: PropsType) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12.5"
        r="10.85"
        stroke="url(#paint0_linear_6664_3530)"
        strokeWidth="2.3"
      />
      <circle cx="12" cy="12.5" r="8" fill="#01D18F" />
      <defs>
        <linearGradient
          id="paint0_linear_6664_3530"
          x1="-1.54078e-07"
          y1="1.3"
          x2="26.8373"
          y2="5.73636"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#01D18F" />
          <stop offset="1" stop-color="#005AFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ActiveCheckboxSVG;
