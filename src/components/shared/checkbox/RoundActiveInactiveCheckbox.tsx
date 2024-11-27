type PropsType = {
  active: boolean;
};
const RoundActiveInactiveCheckbox = ({ active }: PropsType) => {
  return active ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="10.85"
        stroke="url(#paint0_linear_7289_34492)"
        strokeWidth="2.3"
      />
      <circle cx="12" cy="12" r="8" fill="#01D18F" />
      <defs>
        <linearGradient
          id="paint0_linear_7289_34492"
          x1="-1.54078e-07"
          y1="0.800001"
          x2="26.8373"
          y2="5.23636"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#01D18F" />
          <stop offset="1" stop-color="#005AFF" />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="10.85" stroke="#005AFF" strokeWidth="2.3" />
    </svg>
  );
};

export default RoundActiveInactiveCheckbox;
