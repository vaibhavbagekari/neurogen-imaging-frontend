import { useState, useEffect, createContext } from "react";
import * as Utils from "../Utils/index";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [isApprovedUser, setIsApprovedUser] = useState(false)

  const login = (user) => {
    Utils.setIsApprovedUser(user.is_approved)
    setIsApprovedUser(user.is_approved)
    Utils.setUser(user);
    setUser(user);
  };

  const logout = () => {
    Utils.removeCookie("user");
    setUser("");
    Utils.removeCookie("isApprovedUser")
    setIsApprovedUser("")
  };

  const values = {
    user,
    setUser,
    isApprovedUser,
    setIsApprovedUser,
    login,
    logout,
  };

  useEffect(() => {
    const user = Utils.getUser();
    setUser(user);
    const isApproved = Utils.getIsApprovedUser()
    setIsApprovedUser(isApproved)
  }, []);

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContextProvider;