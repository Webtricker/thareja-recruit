type PropsType = {
  className?: string;
};
const LocationSVG = ({ className }: PropsType) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M12.0009 13.93C13.724 13.93 15.1209 12.5331 15.1209 10.81C15.1209 9.08687 13.724 7.69 12.0009 7.69C10.2777 7.69 8.88086 9.08687 8.88086 10.81C8.88086 12.5331 10.2777 13.93 12.0009 13.93Z"
        stroke="#525966"
        strokeWidth="1.3"
      />
      <path
        d="M3.61971 8.99C5.58971 0.329998 18.4197 0.339999 20.3797 9C21.5297 14.08 18.3697 18.38 15.5997 21.04C13.5897 22.98 10.4097 22.98 8.38971 21.04C5.62971 18.38 2.46971 14.07 3.61971 8.99Z"
        stroke="#525966"
        strokeWidth="1.3"
      />
    </svg>
  );
};

export default LocationSVG;
