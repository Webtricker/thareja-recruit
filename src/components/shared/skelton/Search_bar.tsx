const SearchSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M9.60286 19.0319C4.42186 19.0319 0.207031 14.8171 0.207031 9.6361C0.207031 4.4551 4.42186 0.240265 9.60286 0.240265C14.7839 0.240265 18.9987 4.4551 18.9987 9.6361C18.9987 14.8171 14.7839 19.0319 9.60286 19.0319ZM9.60286 1.61526C5.17995 1.61526 1.58203 5.21226 1.58203 9.6361C1.58203 14.0599 5.17995 17.6569 9.60286 17.6569C14.0258 17.6569 17.6237 14.059 17.6237 9.6361C17.6237 5.21318 14.0267 1.61526 9.60286 1.61526Z"
        fill="#545454"
      />
      <path
        d="M19.2276 19.9493C19.1373 19.9495 19.0479 19.9318 18.9645 19.8972C18.8811 19.8625 18.8054 19.8117 18.7418 19.7476L16.9085 17.9143C16.7795 17.7853 16.707 17.6104 16.707 17.428C16.707 17.2456 16.7795 17.0707 16.9085 16.9417C17.0374 16.8127 17.2124 16.7403 17.3948 16.7403C17.5771 16.7403 17.7521 16.8127 17.881 16.9417L19.7144 18.775C19.8107 18.8711 19.8764 18.9936 19.903 19.1271C19.9297 19.2605 19.9162 19.3989 19.8641 19.5246C19.8121 19.6504 19.7239 19.7578 19.6108 19.8334C19.4977 19.909 19.3637 19.9493 19.2276 19.9493Z"
        fill="#545454"
      />
    </svg>
  );
};

const FilterSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
    >
      <path
        d="M31.168 9.20834H22.668"
        stroke="#005AFF"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.4987 9.20834H2.83203"
        stroke="#005AFF"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1654 14.1667C16.9038 14.1667 19.1237 11.9467 19.1237 9.20833C19.1237 6.46992 16.9038 4.25 14.1654 4.25C11.427 4.25 9.20703 6.46992 9.20703 9.20833C9.20703 11.9467 11.427 14.1667 14.1654 14.1667Z"
        stroke="#005AFF"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.1667 24.7917H25.5"
        stroke="#005AFF"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.332 24.7917H2.83203"
        stroke="#005AFF"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.8333 29.75C22.5717 29.75 24.7917 27.5301 24.7917 24.7917C24.7917 22.0532 22.5717 19.8333 19.8333 19.8333C17.0949 19.8333 14.875 22.0532 14.875 24.7917C14.875 27.5301 17.0949 29.75 19.8333 29.75Z"
        stroke="#005AFF"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Search_bar = () => {
  return (
    <div className="flex items-center  w-full gap-2 md:gap-2.5 lg:max-w-[40%] xl:max-w-[50%] 2xl:max-w-[720px]">
      <div className="flex items-center gap-5 w-full border border-[#A8B7C1] px-5 rounded-[100px] focus:border-[#005AFF]">
        <SearchSVG />
        <input
          type="text"
          placeholder="Search by contract, freelancers, or agency name"
          className="w-full fs-md bg-transparent py-2 md:py-2.5 focus:outline-none focus:border-blue-500"
        />
      </div>
      <button className="text-[#005AFF] ">
        <FilterSVG />
      </button>
    </div>
  );
};

export default Search_bar;
