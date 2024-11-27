import Image from "next/image";
import { FileSVG } from "./Icons";

type PropsType = {
  messageList: (
    | {
        type: "TEXT";
        message: string;
        name?: undefined;
        size?: undefined;
      }
    | {
        type: "FILE";
        name: string;
        size: string;
        message?: undefined;
      }
  )[];
  imgUrl: string | null;
  name: string;
  messageDeliveryDate: string;
  messageDeliveryTime: string;
  imgAlt: string;
  status: "ACTIVE" | "INACTIVE";
};

export const OtherUsersMessage = (props: PropsType) => {
  return (
    <>
      {/* <div className="w-full flex items-center my-5 gap-2.5">
        <span className="flex-grow h-[1px] bg-[#DDE3E7]"></span>
        <p className="text-[#A8B7C1] fs-base">{props.messageDeliveryDate}</p>
      </div> */}
      <div
        className={`hover:bg-[#F5F8FF] mr-auto border border-[#005aff1a] cursor-pointer rounded-[20px] p-5 inline-flex items-start justify-between gap-5`}
      >
        <div className="relative w-full  max-w-[70px] md:max-w-[80px]">
          {props.imgUrl ? (
            <Image
              src={props.imgUrl}
              width={107}
              height={107}
              alt="Profile"
              className="p-0.5 rounded-full w-[70px] md:min-w-20 md:min-h-20 md:w-[80px]  h-[70px] md:h-[80px] border-[2px] border-[#01D18F]"
            />
          ) : (
            <div className="flex items-center justify-center bg-white p-1.5 rounded-full w-[70px] md:w-[80px]  h-[70px] md:h-[80px] border-[2px] border-[#01D18F]">
              <span className="fs-md text-[#525966]">{props.imgAlt}</span>
            </div>
          )}

          <span className="absolute z-50 right-1.5 bottom-1.5  lg:right-[3.84px] lg:bottom-[3.84px] w-4 h-4 md:w-[19.31px] md:h-[19.31px] rounded-full border-[1px] border-white bg-[#01D18F] "></span>
        </div>
        <div className="w-full max-w-[648px]">
          <div className="flex items-center gap-5 mb-2">
            <h5 className="fs-lg-lh-normal">{props.name}</h5>
            <p className="fs-sm text-[#A8B7C1]">{props.messageDeliveryTime}</p>
          </div>

          {/* ======  single text / file / emojy etc ====== */}
          <div className="w-full">
            {props.messageList.map((list, indx) => {
              if (list.type === "TEXT") {
                return (
                  <p key={indx} className="fs-base mb-2.5">
                    {list.message}
                  </p>
                );
              }
              // other condition goes here for emojy file image video etc.
              if (list.type === "FILE") {
                return (
                  <div
                    key={indx}
                    className="md:min-w-[300px] inline-flex items-center gap-[14px] p-2.5 rounded-[10px] bg-[#FBFCFF] border border-[#97BCFF]"
                  >
                    <div className="p-2.5 rounded-[6px]">
                      <FileSVG />
                    </div>
                    <div className="w-full">
                      <p className="fs-base">{list.name}</p>
                      <p className="fs-xs">{list.size}</p>
                    </div>
                  </div>
                );
              }
              return <></>;
            })}
          </div>
          {/* <p className="fs-base mb-[2px]">
            {list.lastMessage}
          </p> */}
        </div>
      </div>
    </>
  );
};

export const CurrentUsersMessage = (props: PropsType) => {
  return (
    <>
      {/* <div className="w-full flex items-center gap-2.5 my-5">
        <p className="text-[#A8B7C1] fs-base">{props.messageDeliveryDate}</p>
        <span className="flex-grow h-[1px] bg-[#DDE3E7]"></span>
      </div> */}

      <div className="w-full flex justify-end ">
        <div
          className={`hover:bg-[#F5F8FF] border border-[#005aff1a] cursor-pointer rounded-[20px] p-5 inline-flex items-start justify-between gap-5`}
        >
          <div className="w-full flex flex-col items-end max-w-[648px]">
            <div className="flex items-center gap-5 mb-2">
              <p className="text-[#A8B7C1]">{props.messageDeliveryTime}</p>
              <h5 className="fs-lg-lh-normal">{props.name}</h5>
            </div>

            {/* ======  single text / file / emojy etc ====== */}
            <div className="w-full flex flex-col items-end">
              {props.messageList.map((list, indx) => {
                if (list.type === "TEXT") {
                  return (
                    <p key={indx} className="text-right fs-base mb-2.5">
                      {list.message}
                    </p>
                  );
                }
                // other condition goes here for emojy file image video etc.
                if (list.type === "FILE") {
                  return (
                    <div
                      key={indx}
                      className="md:min-w-[300px] flex items-center gap-[14px] p-2.5 rounded-[10px] bg-[#FBFCFF] border border-[#97BCFF]"
                    >
                      <div className="p-2.5 rounded-[6px]">
                        <FileSVG />
                      </div>
                      <div className="w-full">
                        <p className="fs-base">{list.name}</p>
                        <p className="fs-xs">{list.size}</p>
                      </div>
                    </div>
                  );
                }
                return <></>;
              })}
            </div>
            {/* <p className="fs-base mb-[2px]">
        {list.lastMessage}
      </p> */}
          </div>
          <div className="relative w-full  max-w-[70px] md:max-w-[80px]">
            {props.imgUrl ? (
              <Image
                src={props.imgUrl}
                width={107}
                height={107}
                alt="Profile"
                className="p-0.5 rounded-full w-[70px] md:w-[80px]  h-[70px] md:h-[80px] border-[2px] border-[#01D18F]"
              />
            ) : (
              <div className="flex items-center justify-center bg-white p-1.5 rounded-full w-[70px] md:w-[80px]  h-[70px] md:h-[80px] border-[2px] border-[#01D18F]">
                <span className="fs-md text-[#525966]">{props.imgAlt}</span>
              </div>
            )}

            <span className="absolute z-50 right-1.5 bottom-1.5  lg:right-[3.84px] lg:bottom-[3.84px] w-4 h-4 md:w-[19.31px] md:h-[19.31px] rounded-full border-[1px] border-white bg-[#01D18F] "></span>
          </div>
        </div>
      </div>
    </>
  );
};
