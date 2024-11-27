"use client";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import HowItWorks from "./HowItWorks";

const Hero = () => {
  const { loggedInUser } = useSelector((state: RootState) => state.auth);
  const userName = loggedInUser?.firstName
    ? loggedInUser.firstName
    : loggedInUser?.lastName
    ? loggedInUser?.lastName
    : "";
  return (
    <div className="flex flex-col gap-7 lg:gap-10  w-full">
      <Image
        alt="home hero"
        src="/home/home-hero.svg"
        width={104}
        height={114.78}
      />

      <div className="w-full">
        <h1 className="fs-5xl mb-5 max-w-[612px] w-full">
          Welcome, {userName}! Let’s start with your first job post.
        </h1>
        <p className="fs-md mb-7 lg:mb-[50px]  max-w-[390px] w-full">
          It’s the fastest way to meet top talent. Get help from AI and be done
          in no time.
        </p>
        <div className="inline-flex flex-col">
          <Link
            href={"/get-started-using-ai"}
            className="fs-md text-white bg-[#005AFF]  rounded-full py-3 px-6 mb-5"
          >
            Get started using AI
          </Link>
          <Link
            href="/get-started-without-ai"
            className="fs-md inline text-[#005AFF] "
          >
            I’ll do it without AI
          </Link>
        </div>
        <HowItWorks />
      </div>
    </div>
  );
};

export default Hero;
