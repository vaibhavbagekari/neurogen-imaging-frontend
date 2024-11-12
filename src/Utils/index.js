import Cookies from "js-cookie";

export const setIsApprovedUser = (isApproved) => {
  setCookie("isApprovedUser", isApproved, 1, true)
}

export const setUser = (user) => {
  delete user.is_approved
  setCookie("user", user, 1, true);
};

const setCookie = (key, value, expiresInDays, isJson = false) => {
  if (isJson) {
    value = JSON.stringify(value);
  }
  Cookies.set(key, value, { expires: expiresInDays, sameSite: "Strict" });
};

export const removeCookie = (key) => {
  Cookies.remove(key);
};

export const getUser = () => {
  return getCookie("user", true);
};

export const getIsApprovedUser= () =>{
  return getCookie("isApprovedUser", true)
}

export const getCookie = (key, isJson) => {
  let value = Cookies.get(key);
  if (isJson && value) {
    return JSON.parse(value);
  }
  return value;
};

export const getInitials = (fullName) => {
  if (!fullName) return "";
  const namesArray = fullName.split(" ");
  const initials = namesArray.map((name) => name.charAt(0).toUpperCase());
  return initials.join("");
};

