import Image from "next/image";

type PropsType = {
  message: string;
  hide: any;
};
const Alert = ({ message, hide }: PropsType) => {
  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-[#b3b3b391] backdrop-blur-[5px] flex items-center justify-center p-10 z-[99999]">
      <div className="w-full max-w-[500px] min-h-[250px] rounded-[20px] bg-white shadow-md flex items-center justify-center relative p-6">
        <Image
          width={10}
          height={10}
          className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] absolute top-5 right-5 cursor-pointer"
          src="/svgs/x-icon.svg"
          alt="cancel icon"
          onClick={() => hide("")}
        />
        <h3 className="md:text-xl text-center">
          {message}{" "}
          <Image
            src="/svgs/Smile.svg"
            width={20}
            height={20}
            alt="smile image"
            className="inline"
          />
        </h3>
      </div>
    </div>
  );
};

export default Alert;
