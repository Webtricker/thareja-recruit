export type Contract = {
  contractName: string | null;
  clientEmail: string | null;
  totalAmount: number | null;
  freelancerInfo: {
    name: string | null;
    email: string | null;
    profileUrl: string | null;
  };
  milestone: {
    name: string | null;
    amount: number | null;
    endDate: string | null;
  };
  createdAt: number;
};

export const staticContractData: Contract = {
  clientEmail: "muhammad123@gmail.com",
  contractName: "UX/UI Designer",
  createdAt: new Date().getTime(),
  freelancerInfo: {
    name: "John Doe",
    email: "johndoe@gmail.com",
    profileUrl: null,
  },
  milestone: {
    name: "UX/UI Designer",
    amount: 10,
    endDate: null,
  },
  totalAmount: 10,
};
