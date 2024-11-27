const customStyles = `
 <style>
        /* Custom styles */
        body {
          font-family: Arial, sans-serif;
        }
        .w-full {
          width: 100%;
        }
        .border {
          border: 1px solid #DDE3E7;
        }
        .p-4 {
          padding: 1rem;
        }
        .lg\:p-7 {
          padding: 1.75rem;
        }
        .xl\:p-8 {
          padding: 2rem;
        }
        .flex {
          display: flex;
        }
        .justify-between {
          justify-content: space-between;
        }
        .flex-wrap {
          flex-wrap: wrap;
        }
        .gap-5 {
          gap: 1.25rem;
        }
        .gap-2\.5 {
          gap: 0.625rem;
        }
        .w-\[134px\] {
          width: 134px;
        }
        .w-\[146px\] {
          width: 146px;
        }
        .text-base {
          font-size: 1rem;
        }
        .md\:text-\[18px\] {
          font-size: 18px;
        }
        .leading-\[25px\] {
          line-height: 25px;
        }
        .text-\[#A8B7C1\] {
          color: #A8B7C1;
        }
        .text-right {
          text-align: right;
        }
        .bg-\[#DDE3E7\] {
          background-color: #DDE3E7;
        }
        .block {
          display: block;
        }
        .my-6 {
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .md\:my-7 {
          margin-top: 1.75rem;
          margin-bottom: 1.75rem;
        }
        .lg\:my-\[30px\] {
          margin-top: 30px;
          margin-bottom: 30px;
        }
        .rounded-\[20px\] {
          border-radius: 20px;
        }
        .bg-\[#FBFCFF\] {
          background-color: #FBFCFF;
        }
        .border-\[#EDF4FF\] {
          border-color: #EDF4FF;
        }
        .text-\[#525966\] {
          color: #525966;
        }
        .text-\[#01D18F\] {
          color: #01D18F;
        }
        .text-\[18px\] {
          font-size: 18px;
        }
        .text-\[20px\] {
          font-size: 20px;
        }
        .text-\[22px\] {
          font-size: 22px;
        }
        .mt-6 {
          margin-top: 1.5rem;
        }
        .md\:mt-7 {
          margin-top: 1.75rem;
        }
        .flex-grow {
          flex-grow: 1;
        }
        .border-\[#005AFF\] {
          border-color: #005AFF;
        }
        .py-2\.5 {
          padding-top: 0.625rem;
          padding-bottom: 0.625rem;
        }
        .md\:py-3 {
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
        }
        .px-5 {
          padding-left: 1.25rem;
          padding-right: 1.25rem;
        }
        .lg\:py-\[16px\] {
          padding-top: 16px;
          padding-bottom: 16px;
        }
        .rounded-\[100px\] {
          border-radius: 100px;
        }
        .tracking-\[0\.4px\] {
          letter-spacing: 0.4px;
        }
        .bg-gradient-to-r {
          background-image: linear-gradient(to right, #01D18F, #005AFF);
        }
        .rounded-\[8px\] {
          border-radius: 8px;
        }
        .rounded-\[7\.5px\] {
          border-radius: 7.5px;
        }
        .py-5 {
          padding-top: 1.25rem;
          padding-bottom: 1.25rem;
        }
        .px-6 {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
    </style>
`;

interface TestSkill {
  name: string;
  experience: string;
  rating: "GOOD" | "AVERAGE" | "BAD" | null | undefined;
}

export type TestDetails = {
  name: string;
  title?: string;
  location?: string;
  testOn: string;
  skills: TestSkill[];
};
// =========== html generator ======================
export function GenerateHTML(data: TestDetails): string {
  const staticSoftSkills = [
    { name: "Leadership", experience: "Expert" },
    { name: "Problem-solving", experience: "Expert" },
    { name: "Teamwork", experience: "Expert" },
  ];
  const template = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDF Content</title>
   ${customStyles}
</head>
<body>
    <div class="w-full border border-[#DDE3E7] p-4 lg:p-7 xl:p-8">
        <div class="w-full flex justify-between flex-wrap gap-5">
            <div class="flex">
                <ul class="w-[134px] flex flex-col gap-2.5">
                    <li class="w-20 fs-base text-[#A8B7C1]">Report id:</li>
                    <li class="w-20 fs-base text-[#A8B7C1]">Name:</li>
                    <li class="w-20 fs-base text-[#A8B7C1]">Email:</li>
                </ul>
                <ul class="flex flex-col gap-2.5">
                    <li class="fs-base w-[146px]">004559</li>
                    <li class="fs-base w-[146px]">${data.name}</li>
                    <li class="fs-base w-[146px]">thareja@recruit.ai</li>
                </ul>
            </div>
            <div class="w-auto flex-grow">
                <p class="fs-base text-right block">Date: ${data.testOn}</p>
            </div>
        </div>
        <span class="w-full h-[1px] block my-6 md:my-7 lg:my-[30px] bg-[#DDE3E7]"></span>
        <div class="w-full flex flex-col gap-5">
          
             ${data.skills.map(
               (
                 skill
               ) => `  <div class="flex flex-col gap-2.5 w-full py-5 px-6 rounded-[20px] border border-[#EDF4FF] bg-[#FBFCFF]">
                <p class="fs-base">${skill.name}</p>
                <p class="text-[14px] leading_normal"><span class="#525966">Self rating:</span> ${skill.experience}</p>
                <p class="text-[14px] leading_normal text-[#01D18F]">AI assessment:</p>
                <p class="text-[14px] leading_normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque sollicitudin consequat dui nec Pellentesque ut rhoncus nibh. Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum
                </p>
                <p class="text-[14px] leading_normal"><span class="#525966">Rating by AI: </span>Not experienced</p>
            </div>`
             )}
        </div>
        <span class="w-full h-[1px] block my-6 md:my-7 bg-[#DDE3E7]"></span>
        <div class="w-full flex flex-col gap-5">
            <h5 class="fs-lg-lh-normal">Soft Skills Result</h5>
            <div class="flex flex-col gap-2.5 w-full py-5 px-6 rounded-[20px] border border-[#EDF4FF] bg-[#FBFCFF]">
                <p class="fs-base">Node.Js</p>
                <p class="text-[14px] leading_normal"><span class="#525966">Self rating:</span> intermediate</p>
                <p class="text-[14px] leading_normal text-[#01D18F]">AI assessment:</p>
                <p class="text-[14px] leading_normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque sollicitudin consequat dui nec Pellentesque ut rhoncus nibh. Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum
                </p>
                <p class="text-[14px] leading_normal"><span class="#525966">Rating by AI: </span>Not experienced</p>
            </div>
            ${staticSoftSkills.map(
              (
                skill
              ) => `<div class="flex flex-col gap-2.5 w-full py-5 px-6 rounded-[20px] border border-[#EDF4FF] bg-[#FBFCFF]">
                    <p class="fs-base">${skill.name}</p>
                    <p class="text-[14px] leading_normal"><span class="#525966">Self rating:</span> ${skill.experience}</p>
                    <p class="text-[14px] leading_normal text-[#01D18F]">AI assessment:</p>
                    <p class="text-[14px] leading_normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque sollicitudin consequat dui nec Pellentesque ut rhoncus nibh. Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum
                    </p>
                    <p class="text-[14px] leading_normal"><span class="#525966">Rating by AI: </span>Not experienced</p>
                </div>`
            )}
        </div>
        <span class="w-full h-[1px] block my-6 md:my-7 bg-[#DDE3E7]"></span>
        <h5 class="fs-lg-lh-normal">Did the Candidate Cheat?</h5>
        <p class="text-[14px] leading_normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque sollicitudin consequat dui nec Pellentesque ut rhoncus nibh. Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum
        </p>
        <h5 class="mb-[14px] mt-6 md:mt-7 fs-md leading_normal">Proctoring results</h5>
        <div class="w-[140px] p-[1px] bg-gradient-to-r from-[#01D18F] to-[#005AFF] rounded-[8px]">
            <div class="rounded-[7.5px] py-2.5 px-[14px] bg-[#EDF4FF]">
                <p class="fs-lg-lh-normal mb-1.5">61%</p>
                <p class="text-[16px] leading_normal text-[#525966]">Trust score</p>
            </div>
        </div>
    </div>
</body>
</html>
    `;
  return template;
}
