type PropsType = {
  className: string;
};
const DownArrowSVG = ({ className }: PropsType) => {
  return (
    <svg
      className={`duration-300 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M19.9201 9.45001L13.4001 15.97C12.6301 16.74 11.3701 16.74 10.6001 15.97L4.08008 9.45001"
        stroke="#292D32"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownArrowSVG;
