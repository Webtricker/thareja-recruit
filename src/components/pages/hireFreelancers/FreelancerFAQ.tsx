import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { DownArrowSVG } from "./Icons";

const AutomaticWeeklyPaymentsForTalent = () => {
  const [to, setTo] = useState("0.00");
  const [active, setActive] = useState(false);
  const handleToInput = (e: ChangeEvent<HTMLInputElement>) => {
    const val: any = e.target.value.split("$");
    if (e.target.value !== "$" && isNaN(val[1] - 1)) return;
    // const hourlyBudget = `${from} - ${val[1]}`;
    setTo(val[1]);
    // dispatch(setJobBudget(hourlyBudget));
  };
  return (
    <div className="w-full px-6 md:px-[35px] lg:px-[50px]">
      <label
        onClick={() => setActive(!active)}
        className="fs-lg-lh-md flex items-center justify-between gap-5"
      >
        <span>Add automatic weekly payments for the talent (optional)</span>
        <DownArrowSVG
          className={`min-w-[24px] max-w-[24px] lg:max-w-[34px] lg:min-w-[34px] duration-200 ${
            active && "rotate-180"
          }`}
        />
      </label>
      {active && (
        <div className="w-full flex flex-col gap-6 mt-5 lg:mt-[30px] p-5 md:p-6 lg:p-7 xl:p-[30px] rounded-[20px] border bg-[#005aff05] border-[#005aff1a]">
          <p className=" fs-lg-lh-normal">
            Weekly payments are on top of the talent’s hours billed. (Think of
            it like a retainer, a set amount paid on a regular and recurring
            basis.)
          </p>
          <Link href="#" className="text-[#005AFF] fs-lg-lh-normal">
            How does it work?
          </Link>
          <p className=" fs-lg-lh-normal">
            Set an automatic weekly payment for Muhammad (optional)
          </p>
          <div className="input-item flex gap-[10px] items-center">
            <input
              id="milestone-amount-1"
              type="text"
              onChange={handleToInput}
              aria-describedby="currency-hourly-6"
              placeholder="$0.00"
              // value={`$${to}`}
              className="fs-lg-lh-normal max-w-[300px] border border-gray-300 rounded-[6px] p-[10px] focus:outline-none focus:border-[#005AFF] text-end"
            />
          </div>
        </div>
      )}
    </div>
  );
};

const HourlyContactWorkDropdown = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="w-full px-6 md:px-[35px] lg:px-[50px]">
      <label
        onClick={() => setActive(!active)}
        className="fs-lg-lh-md flex items-center justify-between gap-5"
      >
        <span>How do hourly contracts work? </span>
        <DownArrowSVG
          className={` min-w-[24px] max-w-[24px] lg:max-w-[34px] lg:min-w-[34px] duration-200 ${
            active && "rotate-180"
          }`}
        />
      </label>
      {active && (
        <div className="w-full mt-5 lg:mt-[30px] p-5 md:p-6 lg:p-7 xl:p-[30px] rounded-[20px] border bg-[#005aff05] border-[#005aff1a]">
          <p className=" fs-lg-lh-normal mb-10">
            Before work begins, agree on a certain hourly rate and weekly limit
            (if appropriate) with your talent. The Work Diary captures snapshots
            of your talent&apos;s screen every 10 minutes, helping to verify
            that work has been completed as invoiced. You can review these
            screenshots before you pay your talent.
          </p>
          <p className=" fs-lg-lh-normal">
            Every Monday you&apos;ll be invoiced for the previous week&apos;s
            hours based on your talents&apos; Work Diaries{" "}
            <Link href="#" className="text-[#005AFF]">
              (taxes and fees may apply)
            </Link>
            . Your default billing method is charged automatically for the
            balance due. If there&apos;s an issue, you have until Friday to file
            a dispute.
          </p>
        </div>
      )}
    </div>
  );
};

const ContractInitialFeeDropDown = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="w-full px-6 md:px-[35px] lg:px-[50px]">
      <label
        onClick={() => setActive(!active)}
        className="fs-lg-lh-md flex items-center justify-between gap-5"
      >
        <span>What is a contract initiation fee? </span>
        <DownArrowSVG
          className={`min-w-[24px] max-w-[24px] lg:max-w-[34px] lg:min-w-[34px] duration-200 ${
            active && "rotate-180"
          }`}
        />
      </label>
      {active && (
        <div className="w-full mt-5 lg:mt-[30px] p-5 md:p-6 lg:p-7 xl:p-[30px] rounded-[20px] border bg-[#005aff05] border-[#005aff1a]">
          <p className=" fs-lg-lh-normal">
            This is a one-time fee of up to $9.95 for each new Marketplace and
            Project Catalog contract. For hourly contracts, you&apos;ll pay this
            fee when you make the first payment to the freelancer. For fixed-
            price contracts, you&apos;ll pay this fee when you fund the contract
            or first milestone.
          </p>
        </div>
      )}
    </div>
  );
};

// ============ root component ============
const FreelancerFAQ = () => {
  return (
    <div className="py-6 md:py-[35px] lg:py-10 border border-[#0000001f] rounded-[20px]">
      <AutomaticWeeklyPaymentsForTalent />

      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-6 md:my-7 lg:my-[34px] bg-[#0000001f]"></span>
      <HourlyContactWorkDropdown />
      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-6 md:my-7 lg:my-[34px] bg-[#0000001f]"></span>
      <ContractInitialFeeDropDown />
    </div>
  );
};

export default FreelancerFAQ;
