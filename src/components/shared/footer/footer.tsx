import Container from "@/components/shared/wrapper/Container";
import {
  firstLinkLists,
  fourthLinkLists,
  secondLinkLists,
  thirdLinkLists,
} from "@/staticData/footer";
import Image from "next/image";
import Link from "next/link";
import TharejaWhiteTitleSVG from "../icons/TharejaWhiteTitleSVG";
import FacebookSVG from "./FacebookSVG";
import FooterLink from "./FooterLink";
import InstragramSVG from "./InstragramSVG";
import LinkedInSVG from "./LinkedInSVG";
import TwitterSVG from "./TwitterSVG";
type Link = {
  label: string;
  href: string;
};
const Footer = () => {
  const footerLinks: Link[][] = [
    firstLinkLists,
    secondLinkLists,
    thirdLinkLists,
    fourthLinkLists,
  ];
  return (
    <footer className="bg-black py-[60px] md:py-[75px] lg:py-[89px] px-5 md:px-[40px]">
      <Container className=" !max-w-[1608px] ">
        {/*  ========== Top section =========== */}
        <div className="flex gap-10 flex-col 2xl:flex-row">
          <div className="w-full md:max-w-[253.84px] lg:mb-5">
            <Link className="flex items-center gap-[14.83px]" href="/">
              <Image
                className=" w-[60px] md:w-[67.988px] h-[60px] md:h-[66.537px]"
                src="/svgs/Thareja_logo_white.svg"
                width={256}
                height={66}
                alt="Logo"
              />
              <TharejaWhiteTitleSVG />
            </Link>
          </div>

          {/* =========== links container ======== */}
          <div className="w-full 2xl:max-w-[1314.17px] flex flex-wrap lg:flex-nowrap justify-between gap-2 mx-auto 2xl:px-[5.34%]">
            {footerLinks.map((lists, index) => (
              <ul
                key={index}
                className="w-full md:w-[45%] mb-7 lg:w-auto flex flex-col gap-4 md:gap-5 lg:gap-[22px]"
              >
                {lists.map(({ label, href }) => (
                  <FooterLink href={href} label={label} key={label} />
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* ===== Bottom section ============ */}
        <div className="flex items-center justify-end gap-[11.1px] pb-5 md:pb-[28px] lg:pb-[32px] mt-[70px] md:mt-[80px] lg:mt-[100px]">
          <Link className="" href="#">
            <FacebookSVG />
          </Link>
          <Link className="" href="#">
            <InstragramSVG />
          </Link>
          <Link className="" href="#">
            <LinkedInSVG />
          </Link>
          <Link className="" href="#">
            <TwitterSVG />
          </Link>
        </div>
        <hr className="w-full" />
        <p className="text-base md:text-[19.977px] text-center leading-normal text-[#F8F9FA] pt-5 md:pt-[28px] lg:pt-[32px]">
          Copyright &copy; Thareja Inc.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
