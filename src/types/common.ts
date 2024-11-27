export interface topWarningPropsType {
  warning: string;
}

// ======== use type  ========
export type TUser = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  verified: boolean;
  loginToken: string;
  type: string;
  createdAt: string;
  deleted: boolean;
};

export type TBrowsingInfo = {
  userId: string;
  lastVisitedUrl: string;
};

export type TJoinUser = "CLIENT" | "FREELANCER" | null;
