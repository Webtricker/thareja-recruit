import Image from "next/image";

type PropsType = {
  className?: string;
};
const SVGIcon = ({ className }: PropsType) => {
  return (
    <Image
      className={className}
      src="/svgs/"
      width={20}
      height={20}
      alt="Globe icon"
    />
  );
};

export default SVGIcon;
