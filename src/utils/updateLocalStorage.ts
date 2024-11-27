import { TBrowsingInfo, TJoinUser, TUser } from "@/types/common";

export const getUserDataFromLocal = (): TUser | null => {
  try {
    const userInfo = localStorage.getItem("rt-user") || null;
    if (userInfo) {
      return JSON.parse(userInfo) as TUser;
    }
  } catch (error) {
    console.error("Error retrieving user data from local storage:", error);
  }
  return null;
};

export const setUserToLocal = (user: TUser): boolean => {
  try {
    const userInfo = JSON.stringify(user);
    if (userInfo) {
      localStorage.setItem("rt-user", userInfo);
    }
  } catch (error) {
    console.error("Error setting user data to local storage:", error);
  }
  return true;
};

export const deleteFromLocal = (): boolean => {
  try {
    localStorage.removeItem("rt-user");
    return true;
  } catch (error) {
    console.error("Error deleting user data from local storage:", error);
  }
  return false;
};

export const getPreviousBrowsingInfo = (): TBrowsingInfo | null => {
  try {
    const browsingInfo = localStorage.getItem("rt-browsingInfo") || null;
    if (browsingInfo) {
      const info: TBrowsingInfo = JSON.parse(browsingInfo);
      return info;
    }
  } catch (error) {
    console.error("Error retrieving browsing info from local storage:", error);
    return null;
  }
  return null;
};

export const setPreviousBrowsingInfo = (
  userId: string,
  lastVisitedUrl: string
) => {
  try {
    const newInfo: TBrowsingInfo = { userId, lastVisitedUrl };
    localStorage.setItem("rt-browsingInfo", JSON.stringify(newInfo));
    return newInfo;
  } catch (error) {
    console.error("Error retrieving browsing info from local storage:", error);
    return false;
  }
};

export const updatePreviousBrowsingInfo = (lastVisitedUrl: string) => {
  try {
    const prevData = localStorage.getItem("rt-browsingInfo");
    const browsingInfo = prevData ? JSON.parse(prevData) : null;
    if (browsingInfo) {
      const newInfo: TBrowsingInfo = {
        userId: browsingInfo.userId,
        lastVisitedUrl,
      };
      localStorage.setItem("rt-browsingInfo", JSON.stringify(newInfo));
      return true;
    }
  } catch (error) {
    console.error("Error retrieving browsing info from local storage:", error);
  }
  return false;
};

export const getUserTypeFromLocalStorage = (): TJoinUser => {
  let cachedUserType: TJoinUser | null = null;
  try {
    cachedUserType =
      (localStorage.getItem("rt-user-type") as TJoinUser) || null;
  } catch (error) {
    console.error("Error retrieving browsing info from local storage:", error);
  }
  return cachedUserType;
};

export const setUserTypeToLocalStorage = (val: TJoinUser): boolean => {
  try {
    if (val) {
      localStorage.setItem("rt-user-type", val);
    } else {
      localStorage.removeItem("rt-user-type");
    }
    return true;
  } catch (error) {
    console.error("Error retrieving browsing info from local storage:", error);
  }
  return false;
};
