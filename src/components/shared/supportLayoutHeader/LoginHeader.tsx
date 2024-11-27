import Image from "next/image";
import Link from "next/link";

const LoginHeader = () => {
  return (
    <div className="w-full pt-[24px] md:pt-[28px] xl:pt-[34px] px-5 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[120px]">
      <div className="w-full max-w-[1920px] mx-auto flex items-center justify-between">
        <div className="login-header-logo">
          {/* logo */}
          <Link href={"/"}>
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
          </Link>{" "}
        </div>
        <div className="login-header-buttons">
          <Link
            href="#"
            className="fs-md text-black mr-3 md:mr-[24px] xl:mr-[32px] "
          >
            Looking for work?
          </Link>
          <Link href="#" className="text-[#005AFF] fs-md">
            Apply as talent
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginHeader;
