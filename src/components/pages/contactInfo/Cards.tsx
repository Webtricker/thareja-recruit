import {
  EditAccountButton,
  EditLocationButton,
  NewAgencyAccountButton,
  NewClientAccountButton,
} from "./Buttons";

export const AccountDetailsCard = () => {
  return (
    <div className="relative w-full p-5 lg:p-[30px] border border-[#00000024] rounded-[20px]">
      <h3 className="fs-xl-lh-normal mb-6">Account</h3>
      <h4 className="fs-lg-lh-normal mb-2.5">User ID</h4>
      <p className="fs-base mb-[22px] text-[#525966]">123456789</p>
      <h4 className="fs-lg-lh-normal mb-2.5">Name</h4>
      <p className="fs-base mb-[22px] text-[#525966]">Muhammad l.</p>
      <h4 className="fs-lg-lh-normal mb-2.5">Email</h4>
      <p className="fs-base mb-[24px]">m*******123@gmail.com</p>
      <p className="text-[#FF0000] fs-sm">Close my account</p>

      {/* ========= edit button ======== */}
      <EditAccountButton />
    </div>
  );
};

export const AdditionalAccountsCard = () => {
  return (
    <div className="relative w-full p-5 lg:p-[30px] border border-[#00000024] rounded-[20px]">
      <h3 className="fs-xl-lh-normal mb-6">Additional accounts</h3>
      <p className="fs-base mb-[24px]">
        Creating a new account allows you to use Recruit in different ways,
        while still having just one login.
      </p>
      <h4 className="fs-lg-lh-normal mb-2.5">Client Account</h4>
      <p className="fs-base mb-[22px]">
        Hire, manage and pay as a different company. Each client company has its
        own freelancers, payment methods and reports.
      </p>

      <div className="w-full">
        {" "}
        <NewClientAccountButton />
      </div>
      <h4 className="fs-lg-lh-normal mb-2.5 mt-6">Agency Account</h4>
      <p className="fs-base mb-[22px]">
        Find jobs and earn money as manager of a team of freelancers.
      </p>
      <NewAgencyAccountButton />
    </div>
  );
};

export const LocationCard = () => {
  return (
    <div className="relative w-full p-5 lg:p-[30px] border border-[#00000024] rounded-[20px]">
      <h3 className="fs-xl-lh-normal mb-6">Location</h3>
      <h4 className="fs-lg-lh-normal mb-2.5">Time Zone</h4>
      <p className="fs-base mb-[22px] text-[#525966]">
        (GMT+5:30) Thursday, 4 July 2024, 11:32 am
      </p>
      <h4 className="fs-lg-lh-normal mb-2.5 mt-6">Address</h4>
      <div className="w-full text-[#525966] mb-[22px]">
        <p className="fs-base">2464 Royal Ln. </p>
        <p className="fs-base">Mesa, </p>
        <p className="fs-base ">New Jersey 45463</p>
      </div>
      <h4 className="fs-lg-lh-normal mb-2.5">Phone</h4>
      <p className="fs-base mb-[22px] text-[#525966]">1234567890</p>

      {/* ========= edit button ======== */}
      <EditLocationButton />
    </div>
  );
};
