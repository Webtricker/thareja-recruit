import Link from "next/link";
import {
  PostaNewJobButton,
  PostaNewJobEmptyButton,
  SaveJobPostButton,
} from "./ClientComponents";
import {
  CheckboxCircle,
  GmailIconOpenSVG,
  IdeaBulbSVG,
  InfoCircleRed,
  InfoCircleSVG,
  MessageDualSVG,
  MoneyHandSVG,
  PlusNewSVG,
  XMarkNormalSVG17,
} from "./Icons";

type HireRequiredCardPropsType = {
  className?: string;
  title: string;
  subtitle: string;
  smallIcon: "INFO_CIRCLE_RED" | "GREEN_CHECKBOX";
  largeIcon: "MONEY_HAND" | "GMAIL_OPEN";
};
const HireRequiredCard = ({
  largeIcon,
  smallIcon,
  subtitle,
  title,
  className,
}: HireRequiredCardPropsType) => {
  return (
    <div
      className={`p-5 w-full flex border border-[#ECF2F0] flex-col gap-5 md:gap-6 lg:gap-[28px] rounded-[20px] duration-200 jobs-hire-require-card-shadow  ${className}`}
    >
      <div className="block mx-auto">
        {largeIcon === "GMAIL_OPEN" ? <GmailIconOpenSVG /> : <MoneyHandSVG />}
      </div>
      <div className="w-full">
        <p className="fs-base text-[#525966] mb-2.5">Required to hire</p>
        <div className="w-full flex gap-2 5">
          {smallIcon === "GREEN_CHECKBOX" ? (
            <CheckboxCircle className="min-w-[37px]" />
          ) : (
            <InfoCircleRed className="min-w-[37px]" />
          )}
          <h3 className="fs-xl-lh-lg">
            <span className="text-black mr-1">{title}</span>
            <span className="text-[#30353E]">{subtitle}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

const PostNewJobCards = () => {
  return (
    <div className=" w-full grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-8 lg:gap-10 ">
      {/* ======== Post a new job card starts =========  */}
      <div className="w-full  min-h-[400px] flex flex-col justify-between p-5 lg:px-6 lg:py-[30px] rounded-[20px] jobpost-card-dotted-border">
        <div className="w-full flex flex-col items-center">
          <PlusNewSVG className="mb-[30px]" />
          <h3 className="mb-[14px] fs-xl-lh-lg">Post a new job</h3>
          <p className="fs-base">
            Create a new job post and get proposals from talent.
          </p>
        </div>

        <PostaNewJobButton />
      </div>

      {/* ======== Learn more card starts =========  */}
      <div className="w-full  min-h-[400px] flex flex-col justify-between p-5 lg:px-6 lg:py-[30px] rounded-[20px] bg-[#FBFCFF] border border-[#005aff33]">
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-5">
            <IdeaBulbSVG />{" "}
            <button>
              <XMarkNormalSVG17 />
            </button>
          </div>
          <div className="w-full h-10 mb-3"></div>
          <p className="fs-base">
            Talent look for clients with verified billing methods. There’s no
            cost until you hire; you’ll only be charged once you approve
            completed work.
          </p>
        </div>

        <Link href="#" className="fs-base mb-2.5 text-[#005AFF]">
          Learn more about payments
        </Link>
      </div>

      {/* ======== Empty card starts =========  */}
      <div className="w-full  min-h-[400px] flex flex-col justify-between p-5 lg:px-6 lg:py-[30px] rounded-[20px] bg-[#FBFCFF] border border-[#005aff33]">
        <div className="w-full flex items-center justify-between mb-5">
          <IdeaBulbSVG />{" "}
          <button>
            <XMarkNormalSVG17 />
          </button>
        </div>
      </div>

      {/* ======== Post a new job card starts =========  */}
      <div className="w-full  min-h-[400px] flex flex-col justify-between p-5 lg:px-6 lg:py-[30px] rounded-[20px] jobpost-card-dotted-border">
        <div className="w-full flex flex-col items-center">
          <MessageDualSVG className="mb-[30px]" />
        </div>

        <PostaNewJobEmptyButton />
      </div>

      {/* =========== */}
    </div>
  );
};

// ========== root component =========
const SaveJobPostContent = () => {
  return (
    <div className="w-full mb-10 xl:mb-11 2xl:mb-[60px]">
      <div className="w-full flex gap-8 gap-y-5 flex-wrap lg:flex-nowrap items-center justify-between mb-10 xl:mb-11 2xl:mb-12">
        <div className="">
          <h1 className="flex items-center gap-2  fs-4xl ">
            <span>Your jobs</span> <InfoCircleSVG />
          </h1>
          <h2 className="fs-4xl ">
            Complete these steps to stand out and hire fast
          </h2>
        </div>
        <SaveJobPostButton />
      </div>
      <div className="max-w-[1020px] mb-[60px] grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-8 lg:gap-10 gap-10">
        <HireRequiredCard
          largeIcon="MONEY_HAND"
          smallIcon="INFO_CIRCLE_RED"
          subtitle="You could start hiring 3X faster."
          title="Add a billing method."
          key="Add a billing method"
        />
        <HireRequiredCard
          largeIcon="GMAIL_OPEN"
          smallIcon="GREEN_CHECKBOX"
          subtitle=" to confirm it’s you."
          title=" Verify your email"
          key=" Verify your email"
        />
      </div>

      {/* ========  post new job cards ======== */}
      <PostNewJobCards />
    </div>
  );
};

export default SaveJobPostContent;
