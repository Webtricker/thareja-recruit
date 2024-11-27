import Link from "next/link";

type PropsType = {
  label: string;
  listStyle?: string;
  linkStyle?: string;
  href: string;
};
const FooterLink = ({ label, linkStyle, listStyle, href }: PropsType) => {
  return (
    <li className={listStyle}>
      <Link className={`fs-md text-[#F8F9FA] ${linkStyle}`} href={href}>
        {label}
      </Link>
    </li>
  );
};

export default FooterLink;
