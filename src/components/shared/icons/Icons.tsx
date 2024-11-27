export const GradientCheckboxSquareActive = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="22"
        height="22"
        rx="3"
        stroke="url(#paint0_linear_5816_16072)"
        strokeWidth="2"
      />
      <rect x="3.5" y="4" width="17" height="16" rx="1" fill="#005AFF" />
      <path
        d="M7.53225 11.4823L7.53227 11.4823L10.3466 14.5526L16.4678 7.87503C16.7383 7.57992 17.1817 7.57996 17.4523 7.87501L17.4523 7.87505C17.7159 8.16272 17.7159 8.62287 17.4523 8.91056L17.4523 8.91059L10.8391 16.125C10.7757 16.1943 10.6997 16.25 10.6151 16.2882C10.5304 16.3265 10.439 16.3464 10.3465 16.3463M7.53225 11.4823L10.3466 16.1963M7.53225 11.4823C7.26167 11.1873 6.81834 11.1872 6.54782 11.4823M7.53225 11.4823L6.65837 11.5837M10.3465 16.3463L10.3466 16.1963M10.3465 16.3463C10.3465 16.3463 10.3466 16.3463 10.3466 16.3463V16.1963M10.3465 16.3463C10.1657 16.3462 9.98767 16.2705 9.85439 16.1251L6.54782 12.5178L6.65835 12.4164L6.54779 12.5178C6.28406 12.2302 6.28407 11.7699 6.54782 11.4823M10.3466 16.1963C10.2084 16.1963 10.0702 16.1386 9.96497 16.0237L6.65837 12.4164C6.44721 12.1862 6.44721 11.8139 6.65837 11.5837M6.54782 11.4823C6.54781 11.4823 6.5478 11.4823 6.54779 11.4823L6.65837 11.5837M6.54782 11.4823L6.65837 11.5837"
        fill="white"
        stroke="white"
        strokeWidth="0.3"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5816_16072"
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
  );
};

export const GradientCheckboxSquareInactive = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        x="1"
        y="1"
        width="22"
        height="22"
        rx="3"
        stroke="url(#paint0_linear_8055_32645)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_8055_32645"
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
  );
};

export const ClockSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M22.5 12.5C22.5 18.02 18.02 22.5 12.5 22.5C6.98 22.5 2.5 18.02 2.5 12.5C2.5 6.98 6.98 2.5 12.5 2.5C18.02 2.5 22.5 6.98 22.5 12.5Z"
        stroke="#525966"
        strokeWidth="1.5"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.2089 15.68L13.1089 13.83C12.5689 13.51 12.1289 12.74 12.1289 12.11V8.00999"
        stroke="#525966"
        strokeWidth="1.5"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const RoundGradientActiveInactiveSVG = ({
  active,
  className,
}: {
  active: boolean;
  className?: string;
}) => {
  return active ? (
    <svg
      className={className}
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
        stroke="url(#paint0_linear_8305_25915)"
        strokeWidth="2.3"
      />
      <circle cx="12" cy="12" r="8" fill="#01D18F" />
      <defs>
        <linearGradient
          id="paint0_linear_8305_25915"
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
      className={className}
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

export const SearchIconSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M9.60384 19.0339C4.42284 19.0339 0.208008 14.819 0.208008 9.63802C0.208008 4.45702 4.42284 0.242188 9.60384 0.242188C14.7848 0.242188 18.9997 4.45702 18.9997 9.63802C18.9997 14.819 14.7848 19.0339 9.60384 19.0339ZM9.60384 1.61719C5.18092 1.61719 1.58301 5.21419 1.58301 9.63802C1.58301 14.0619 5.18092 17.6589 9.60384 17.6589C14.0268 17.6589 17.6247 14.0609 17.6247 9.63802C17.6247 5.2151 14.0277 1.61719 9.60384 1.61719Z"
        fill="#545454"
      />
      <path
        d="M19.2286 19.9512C19.1383 19.9514 19.0489 19.9337 18.9655 19.8991C18.8821 19.8645 18.8064 19.8136 18.7428 19.7495L16.9094 17.9162C16.7805 17.7872 16.708 17.6123 16.708 17.4299C16.708 17.2475 16.7805 17.0726 16.9094 16.9436C17.0384 16.8146 17.2133 16.7422 17.3957 16.7422C17.5781 16.7422 17.753 16.8146 17.882 16.9436L19.7154 18.7769C19.8117 18.873 19.8774 18.9956 19.904 19.129C19.9307 19.2624 19.9171 19.4008 19.8651 19.5265C19.8131 19.6523 19.7249 19.7597 19.6118 19.8353C19.4986 19.9109 19.3647 19.9513 19.2286 19.9512Z"
        fill="#545454"
      />
    </svg>
  );
};

export const AddPlusSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="-19.5"
        y="-15"
        width="243"
        height="59"
        rx="29.5"
        stroke="#005AFF"
      />
      <path
        d="M7 14.5H21"
        stroke="#005AFF"
        strokeWidth="1.5"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 21.5V7.5"
        stroke="#005AFF"
        strokeWidth="1.5"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CalendarSquare = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8 2V5"
        stroke="#525966"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 2V5"
        stroke="#525966"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 9.08997H20.5"
        stroke="#525966"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
        stroke="#525966"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.6937 13.7H15.7027"
        stroke="#525966"
        strokeWidth="2"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.6937 16.7H15.7027"
        stroke="#525966"
        strokeWidth="2"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9945 13.7H12.0035"
        stroke="#525966"
        strokeWidth="2"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9945 16.7H12.0035"
        stroke="#525966"
        strokeWidth="2"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.29529 13.7H8.30427"
        stroke="#525966"
        strokeWidth="2"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.29529 16.7H8.30427"
        stroke="#525966"
        strokeWidth="2"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EditPenSVG = ({ style = "" }: { style?: string }) => {
  return (
    <svg
      className={style}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M18.749 1.75113C17.6675 0.671498 15.916 0.671498 14.8345 1.75113L13.8546 2.73642L3.42358 13.1619L3.40142 13.1842C3.3961 13.1896 3.3961 13.1953 3.39033 13.1953C3.37925 13.2119 3.36262 13.2284 3.35176 13.245C3.35176 13.2505 3.346 13.2505 3.346 13.2561C3.33491 13.2727 3.32959 13.2838 3.31829 13.3004C3.31297 13.306 3.31296 13.3113 3.30738 13.3171C3.30184 13.3337 3.29629 13.3448 3.29058 13.3614C3.29058 13.3667 3.28525 13.3667 3.28525 13.3725L0.970856 20.3319C0.937574 20.4289 0.932384 20.5334 0.955884 20.6333C0.979384 20.7332 1.03062 20.8244 1.10369 20.8965C1.20836 20.9999 1.34969 21.0576 1.49682 21.0572C1.55694 21.0561 1.61653 21.0468 1.67399 21.0295L8.62804 18.7096C8.63341 18.7096 8.63341 18.7096 8.63913 18.7043C8.65664 18.6991 8.67336 18.6916 8.68883 18.6819C8.69306 18.6814 8.69701 18.6795 8.70009 18.6766C8.71654 18.6655 8.73871 18.6542 8.75533 18.6431C8.77178 18.6322 8.78859 18.6156 8.80521 18.6045C8.81075 18.5987 8.81612 18.5987 8.81612 18.5934C8.82188 18.5878 8.83297 18.5825 8.83846 18.5713L20.2493 7.16034C21.329 6.0788 21.329 4.32734 20.2493 3.24593L18.749 1.75113ZM8.45092 17.4084L4.59748 13.5552L14.2422 3.91049L18.0956 7.76375L8.45092 17.4084ZM4.05471 14.5794L7.42117 17.9457L2.36612 19.6287L4.05471 14.5794ZM19.4688 6.38516L18.8819 6.97763L15.0283 3.12405L15.6209 2.53172C16.2691 1.88401 17.3199 1.88401 17.9683 2.53172L19.4742 4.03764C20.1176 4.68881 20.1152 5.7371 19.4688 6.38516Z"
        fill="#005AFF"
      />
    </svg>
  );
};
