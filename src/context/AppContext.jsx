import React, { createContext, useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const { getToken } = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      setAuthToken(token);
      console.log("Fetched Token:", token);  
    };
    fetchToken();
  }, []); 

  const value = {
    isVisible,
    setIsVisible,
    authToken,  
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
