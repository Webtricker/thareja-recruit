import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <div className="w-full min-w-[164px] flex items-center justify-between gap-2.5">
      <Link href="/" className="logo-container">
        <Image
          alt="Logo image"
          width={40}
          height={40}
          className="min-w-10"
          src="/logo.svg"
        />
      </Link>
      <span className="hidden lg:inline-block w-[1px] h-[30px] bg-[#DDE3E7]"></span>
      <Link href="#" className="hidden lg:inline-block">
        Help Center
      </Link>
    </div>
  );
};

export default HeaderLogo;
