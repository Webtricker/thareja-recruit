import Conversation from "@/components/pages/message/Conversation";
import People from "@/components/pages/message/People";
import UserProfile from "@/components/pages/message/UserProfile";

const MessagePage = () => {
  return (
    //  px-5 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[120px]
    // h-[100px] md:h-[150px] lg:h-[185px]
    <div className="text-[#30353E] pt-[100px] lg:pt-[130px] 2xl:pt-[185px] w-full mx-auto max-w-[1920px] h-[100dvh] flex flex-col">
      <div className=" relative w-full gap-2.5 justify-between px-5 md:px-[30px] 2xl:px-[60px] flex h-full">
        <People />
        <Conversation />
        <UserProfile />
      </div>
    </div>
  );
};

export default MessagePage;
