import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link href="/" className="logo-container">
      <Image
        alt="Logo image"
        width={40}
        height={40}
        className=""
        src="/logo.svg"
      />
    </Link>
  );
};

export default HeaderLogo;
