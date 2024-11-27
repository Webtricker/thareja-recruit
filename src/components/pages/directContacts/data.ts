export type HowItWorksCardType = {
  index: number;
  des: string;
};

export const howItWorksCardData: HowItWorksCardType[] = [
  {
    index: 1,
    des: "Create and send a contract to your non-Recruit client.",
  },
  {
    index: 2,
    des: "Your client creates an account to accept the contract and deposits funds in",
  },
  {
    index: 3,
    des: "You’ll get paid when you complete the work.",
  },
];

type WhyUseDirectContactCardData = {
  id: number;
  iconUrl: string;
  des: string;
};
export const whyUseDirectContactCardData: WhyUseDirectContactCardData[] = [
  {
    id: 21,
    iconUrl: "/svgs/direct-contacts/On-small-freelancer-fee.svg",
    des: "One small freelancer fee",
  },
  {
    id: 22,
    iconUrl: "/svgs/direct-contacts/Get-paid-securely.svg",
    des: "Get paid securely",
  },
  {
    id: 23,
    iconUrl: "/svgs/direct-contacts/Easy-for-clients.svg",
    des: "Easy for clients",
  },
  {
    id: 24,
    iconUrl: "/svgs/direct-contacts/Dispute-assistance.svg",
    des: "Dispute assistance",
  },
];
