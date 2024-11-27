import Image from "next/image";

type PropsType = {
  className?: string;
};
const GlobeSVG = ({ className }: PropsType) => {
  return (
    <Image
      className={`w-[49.216px] h-[49.216px] ${className}`}
      src="/svgs/globe.svg"
      width={49}
      height={49}
      alt="Globe icon"
    />
  );
};

export default GlobeSVG;
