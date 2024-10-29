import React, { useEffect, useState, createContext } from "react";
import * as Utils from "../Utils";

// Create UserContext
export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [user, setUser]= useState(null)
  
  const login = (user) => {
    Utils.setUser(user);
    setUser(user);
  };

  const logout = () => {
    Utils.removeCookie("user");
    setUser(null);
  };

  const value = {
    user,
    setUser,
    login,
    logout,
  };

  useEffect(() => {
    const storedUser = Utils.getUser();
    setUser(storedUser);
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
