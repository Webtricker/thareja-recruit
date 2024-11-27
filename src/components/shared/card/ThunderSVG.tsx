import Image from "next/image";

type PropsType = {
  className?: string;
};
const ThunderSVG = ({ className }: PropsType) => {
  return (
    <Image
      className={className}
      src="/svgs/thunder-icon.svg"
      width={18}
      height={18}
      alt="Thunder icon"
    />
  );
};

export default ThunderSVG;
