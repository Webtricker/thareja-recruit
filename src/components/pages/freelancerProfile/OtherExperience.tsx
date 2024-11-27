"use client";
import { useState } from "react";

type SkillType = {
  title: string;
  des: string;
  description: string;
  role?: string;
};

const otherSkillDetails: SkillType[] = [
  {
    title: "SEO Text",
    des: "Hello, I'm Taras, a dedicated UX/UI Designer with a strong focus on AI projects and startups. With a keen eye for detail and a passion for innovation, I specialize in creating seamless user experiences that align with your brand's vision and goals.  My appr...",
    description:
      "Hello, I'm Taras, a dedicated UX/UI Designer with a strong focus on AI projects and startups. With a keen eye for detail and a passion for innovation, I specialize in creating seamless user experiences that align with your brand's vision and goals.  More description will be here from the databse",
  },
  {
    title: "SEO Keywords",
    des: "UI/UX, UI Design, UX Design, User Interface Design, Material Design, eCommerce app design, User experience design, iOS, website design, Wireframing, Mobile Design, platform design, Website, Head of Design, Creative, Android, Productive, iPad Design, Guide...",
    description:
      "UI/UX, UI Design, UX Design, User Interface Design, Material Design, eCommerce app design, User experience design, iOS, website design, Wireframing, Mobile Design, platform design, Website, Head of Design, Creative, Android, Productive, iPad Design, Guide, More description will be here from the databse",
  },
  {
    title:
      "Krupa 2019 — the biggest interface design conference in Eastern Europe",
    des: "Don Norman Nielsen...",
    description:
      "Don Norman Nielsen, More description will be here from the databse",
    role: "Top Speakers:",
  },
];

type PropsType = {
  skill: SkillType;
};
const Card = ({ skill }: PropsType) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="w-full ">
      <h3 className="fs-xl-lh-lg">{skill.title}</h3>

      {skill.role ? <p className="fs-md my-2.5">{skill.role}</p> : <></>}
      <p className="fs-md">
        {!showMore ? skill.des : skill.description}
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-[#005AFF] ml-2"
        >
          {showMore ? "less" : "more"}
        </button>
      </p>
    </div>
  );
};

//  ============= root component =================
const OtherExperience = () => {
  return (
    <div className="mt-10 md:mt-[50px] w-full  p-5 py-6 md:p-[40px] lg:p-[50px] border border-[#005aff08 ] rounded-[20px] ">
      <h2 className="fs-4xl ">Other experiences</h2>
      {otherSkillDetails.map((skill) => (
        <>
          {/* ========== seperator ============= */}
          <span className="w-full h-[1px] block my-6 md:my-7 lg:my-[30px] bg-[#0059ff33]"></span>
          <Card key={skill.title} skill={skill} />
        </>
      ))}
    </div>
  );
};

export default OtherExperience;
