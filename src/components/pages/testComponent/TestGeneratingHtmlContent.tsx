import Image from "next/image";

const TestGeneratingHtmlContent = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[595px] border mx-auto">
        <Image
          src="/img/profile/invitation-client-profile-static.png"
          width={100}
          height={100}
          className="min-w-[100px] min-h-[100px]"
          alt="Client image"
        />
      </div>
    </div>
  );
};

export default TestGeneratingHtmlContent;
