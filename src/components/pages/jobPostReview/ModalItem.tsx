import Image from "next/image";

const ModalItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-6">
      <div className="">
        <h6 className="text-[22px] text-[#30353E]">{title}</h6>
        <p className="text-lg text-[#525966] ">{description}</p>
      </div>

      <button className="text-[#005AFF] border border-[#005AFF] rounded-full flex items-center justify-center w-10 h-10">
        <Image
          className=""
          src={"/svgs/edit-pen.svg"}
          width={21}
          height={21}
          alt=""
        />
      </button>
    </div>
  );
};

export default ModalItem;
