import Link from "next/link";

const CoverLetter = () => {
  return (
    <>
      <h2 className="fs-4xl ">Cover letter</h2>
      <p className="fs-base">
        <span>
          Already working on a similar project using the GPT-4 Model which has
          access to the website to get statistics. You may check out the sample
          article.
        </span>
        <Link
          className="text-wrap inline-flex flex-wrap text-[#005AFF] mx-1.5"
          target="_blank"
          href="https://docs.google.com/document/d/1JRbwokohV-mWN78ggLOYU62VBU2nLH1cORqdMOLJNEU/edit"
        >
          {" "}
          https://docs.google.com<span>/document/d/</span>
          <span>1JRbwokohV-</span>
          <span>mWN78ggLOY</span>
          <span>U62VBU2n</span>
          <span>LH1cORq</span>
          <span>dMOLJNEU</span>/edit{" "}
        </Link>
        <span className="block">Hi,</span>I hope you are having a good day. I am
        excited to apply for the position of Blog Content Creator for your
        website. With a strong foundation in content creation, Al utilization,
        and web management, I am well-prepared to meet and exceed your
        expectations.
      </p>
      <p className="fs-base">
        <span className="block">Key Qualifications:</span>
        Content Generation: I have extensive experience in content creation
        using ChatGPT-4 and am skilled at producing engaging and informative
        blog posts. I am committed to following your detailed guidelines to
        ensure consistency and quality.
      </p>

      <p className="fs-base">
        <span className="inline">
          Below are the Al-generated articles using GPT-4 I optimized for search
          engines.
        </span>
        <Link
          className="text-wrap inline text-[#005AFF] mx-1.5"
          target="_blank"
          href="https://techsforhome.com/smart-home-issues-troubleshooting-common-problems/"
        >
          {" "}
          https://techsforhome.com/<span>/smart-home-issues</span>
          <span>-troubleshooting</span>
          <span>-common-problems/</span>
        </Link>
      </p>
    </>
  );
};

export default CoverLetter;
