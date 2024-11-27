import { ServiceCard } from "./Card";
import {
  AccountProfileSVG,
  AppGridSVG,
  PaymentCardSVG,
  PaymentIssueSVG,
  PinSVG,
  ProfileLayoutSVG,
  ProfileVisibilitySVG,
  ProgressChartSVG,
  ProjectCatalogSVG,
  ProjectDocumentSVG,
  RecruitAPISVG,
  RoketSVG,
  RotateLockSVG,
  RoundDollarSVG,
  StartWorkingSVG,
  SuitcaseSVG,
  TrustSafteySVG,
} from "./Icons";

export const FreelancerTabContent = () => {
  return (
    <>
      <div className="w-full gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mb-[50px] md:mb-[60px]">
        <ServiceCard
          title="Get Started"
          des="How it Works, Getting Started, Fees & Protection"
        >
          <RoketSVG />
        </ServiceCard>

        <ServiceCard title="Build Your Profile" des="Settings, Programs, Stats">
          <ProfileLayoutSVG />
        </ServiceCard>

        <ServiceCard
          title="Find a Project"
          des="Search, Send Proposals, Interviews Accept Offers"
        >
          <ProjectDocumentSVG />
        </ServiceCard>

        <ServiceCard
          title="Start Working"
          des="Messages, Work Diary, Contracts, Feedback"
        >
          <StartWorkingSVG />
        </ServiceCard>

        <ServiceCard
          title="Get Paid"
          des="Get Paid, Payment Options, Reports, Earnings, Taxes"
        >
          <PaymentCardSVG />
        </ServiceCard>

        <ServiceCard title="Payment Issues" des="Timing, Issues, Refunds">
          <PaymentIssueSVG />
        </ServiceCard>

        <ServiceCard
          title="Account"
          des="Account Settings, Service Options, Identity Verification"
        >
          <AccountProfileSVG />
        </ServiceCard>

        <ServiceCard title="Apps" des="Mobile App, Desktop App, Time Tracker">
          <AppGridSVG />
        </ServiceCard>

        <ServiceCard
          title="Trust & Safety"
          des="Terms of Service, Online Safety, Personal Data"
        >
          <TrustSafteySVG />
        </ServiceCard>

        <ServiceCard title="Recruit API" des="Development Resources">
          <RecruitAPISVG />
        </ServiceCard>

        <ServiceCard title="Project Catalog" des="Pre-packaged projects">
          <ProjectCatalogSVG />
        </ServiceCard>
      </div>

      <h2 className="fs-4xl mb-7 md:mb-8">Access your account</h2>
      <div className="w-full gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mb-[50px] md:mb-[60px]">
        <ServiceCard
          title="Reset Profile Visibility"
          des="Change your profile to public"
        >
          <ProfileVisibilitySVG />
        </ServiceCard>

        <ServiceCard title="Build Your Profile" des="Settings, Programs, Stats">
          <PaymentIssueSVG />
        </ServiceCard>

        <ServiceCard
          title="Find a Project"
          des="Search, Send Proposals, Interviews Accept Offers"
        >
          <RotateLockSVG />
        </ServiceCard>

        <ServiceCard
          title="Start Working"
          des="Messages, Work Diary, Contracts, Feedback"
        >
          <ProgressChartSVG />
        </ServiceCard>
      </div>
    </>
  );
};

export const ClientTabContent = () => {
  return (
    <>
      <div className="w-full gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mb-[50px] md:mb-[60px]">
        <ServiceCard
          title="Get Started"
          des="How it Works, Getting Started, Fees & Protection"
        >
          <RoketSVG />
        </ServiceCard>

        <ServiceCard title="Find a Freelancer" des="Post a Job, Find Talent">
          <ProfileLayoutSVG />
        </ServiceCard>

        <ServiceCard
          title="Make a Hire"
          des="Evaluate Proposals, Interview Freelancers, Send an Offer"
        >
          <StartWorkingSVG />
        </ServiceCard>

        <ServiceCard title="Manage Your Project" des="Contracts, Feedback">
          <ProjectDocumentSVG />
        </ServiceCard>

        <ServiceCard
          title="Pay for Work"
          des="Billing, Make Payments, Reports, Invoices, Disputes"
        >
          <PaymentCardSVG />
        </ServiceCard>

        <ServiceCard title="Service Options" des="Basic, Pro, Enterprise">
          <PaymentIssueSVG />
        </ServiceCard>

        <ServiceCard
          title="Account"
          des="Account Settings, Service Options, Identity Verification"
        >
          <AccountProfileSVG />
        </ServiceCard>

        <ServiceCard title="Apps" des="Mobile App, Desktop App, Time Tracker">
          <AppGridSVG />
        </ServiceCard>

        <ServiceCard
          title="Trust & Safety"
          des="Terms of Service, Online Safety, Personal Data"
        >
          <TrustSafteySVG />
        </ServiceCard>

        <ServiceCard title="Recruit API" des="Development Resources">
          <RecruitAPISVG />
        </ServiceCard>

        <ServiceCard title="Project Catalog" des="Pre-packaged projects">
          <ProjectCatalogSVG />
        </ServiceCard>
      </div>

      <h2 className="fs-4xl mb-7 md:mb-8">Access your account</h2>
      <div className="w-full gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mb-[50px] md:mb-[60px]">
        <ServiceCard
          title="Update Billing"
          des="Change or update your billing methods"
        >
          <RoundDollarSVG />
        </ServiceCard>

        <ServiceCard
          title="Manage Contracts"
          des="Update or manage active contracts"
        >
          <SuitcaseSVG />
        </ServiceCard>

        <ServiceCard title="Close Account" des="Permanently close your account">
          <PinSVG />
        </ServiceCard>

        <ServiceCard title="Reset Password" des="Change your account password">
          <RotateLockSVG />
        </ServiceCard>
      </div>
    </>
  );
};
