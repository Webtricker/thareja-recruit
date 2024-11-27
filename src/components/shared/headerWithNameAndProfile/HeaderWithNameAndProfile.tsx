import Image from "next/image";

type Props = {
  className: string;
};
const HeaderWithNameAndProfile = ({ className }: Props) => {
  return (
    <div
      id="main_header"
      className={`fixed top-0  w-full z-[9999] left-0 px-5 md:px-[40px] py-[24px] md:py-[28px] xl:py-[34px] 2xl:py-[44px] ${className}
         `}
    >
      <div className="max-w-[1720px] mx-auto flex items-center justify-between w-full">
        <h2 className="fs-4xl text-[#005AFF]">Recruit</h2>
        <div>
          <Image
            width={42}
            height={42}
            src="/img/profile/gpt-vetting-header-profile.svg"
            alt="profile"
            className="rounded-full w-[42px] h-[42px] sm:w-12 sm:h-12 lg:w-14 lg:h-14"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderWithNameAndProfile;
