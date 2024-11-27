import Image from "next/image";
import ModalItem from "./ModalItem";

const JobPostReview = () => {
  return (
    <div className="my-20">
      <Image src="/svgs/logo-line.svg" width={58} height={58} alt="" />

      <div className="flex items-center justify-between flex-wrap mt-3">
        <h1 className="text-6xl tracking-[-1.8px]">
          Congrats, your job is ready to review!
        </h1>
        <button className={` bg-[#005AFF] text-white fs-md btn-large`}>
          Post this Job
        </button>
      </div>

      <div className="my-10 py-8 md:py-12 space-y-6 md:space-y-9  border border-black/15 rounded-2xl">
        <div className="px-8 md:px-12 flex items-center justify-between flex-wrap gap-6">
          <h3 className="text-4xl tracking-[-1.8px]">
            Experienced UI/UX Designer with Prototyping Skills
          </h3>
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
        <hr />

        <div className="px-8 md:px-12 flex items-center justify-between flex-wrap gap-6">
          <div className="flex-1">
            <p>
              We are seeking an experienced UI/UX designer with a minimum of 5
              years of experience and a strong background in prototyping. As a
              UI/UX designer, you will be responsible for creating visually
              appealing and user-friendly interfaces for our web and mobile
              applications. Your main tasks will include wireframing,
              prototyping, and designing interactive layouts. The ideal
              candidate should possess strong skills in Adobe Creative Suite,
              Sketch, or similar design tools.
              <br />
              <br />
              <p className="">Responsibilities:</p>
              <ul className="">
                <li className="">- Designing visually appealing and user</li>
                <li className="">- Friendly interfaces</li>
                <li className="">- Creating wireframes and prototypes</li>
                <li className="">
                  - Collaborating with cross-functional teams to gather
                  requirements
                </li>
                <li className="">
                  - Conducting user research and usability testing
                </li>
                <li className="">
                  - Implementing design changes based on feedback
                </li>
              </ul>
              <br />
              <br />
              <p className="">Requirements:</p>
              <ul className="">
                <li className="">
                  - Minimum 5 years of experience as a UI/UX designer
                </li>
                <li className="">
                  - Strong background in prototyping- Proficiency in Adobe
                  Creative Suite, Sketch, or similar design tools
                </li>
                <li className="">
                  - Excellent communication and collaboration skills. This is a
                  medium
                </li>
                <li className="">
                  - Sized project that will require a commitment of 1 to 3
                  months.
                </li>
              </ul>
              <br />
              <br />
              We are looking for an expert level UI/UX designer who can bring
              their expertise to our team and help us create a seamless user
              experience.
            </p>
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
        <hr />
        <div className="px-8 md:px-12  space-y-8">
          <ModalItem title="Category" description="Prototyping" />
          <ModalItem
            title="Skills"
            description="Interaction Design, Mobile App Design, User Experience Design, User Interface Design, User Flow"
          />
          <ModalItem
            title="Scope"
            description="Medium, 1 to 3 months, Expert level"
          />
          <ModalItem title="Location preferences" description="Worldwide" />
          <ModalItem title="Budget" description="$20.00 - $45.00 /hr" />
          <ModalItem
            title="Professional needed (optional)"
            description="One person"
          />
        </div>
        <hr />

        {/* accordion */}
        {/* accordion end */}

        {/* action button */}
        <div className="px-8 md:px-12 flex items-center justify-between gap-6 mt-10">
          <button
            // onClick={}
            className="text-[#005AFF] text-xl font-light"
          >
            Cancel
          </button>
          <button
            // onClick={}
            className={` bg-[#005AFF] text-white text-xl font-light py-2 px-6 rounded-full `}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobPostReview;
