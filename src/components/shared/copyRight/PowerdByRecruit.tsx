import Link from "next/link";

const PowerdByRecruit = () => {
  return (
    <p className="fs-lg-lh-lg pb-16 lg:pb-[93px]">
      Powered by{" "}
      <Link href="/" className="text-[#005AFF]">
        {" "}
        Recruit
      </Link>
    </p>
  );
};

export default PowerdByRecruit;
