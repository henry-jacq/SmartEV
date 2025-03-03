import React, { createContext, useContext } from "react";

// Create a Context
const AppContext = createContext();

// Define Global Data (e.g., API URLs, other configs)
const globalData = {
  apiUrl: "http://127.0.0.1:5001/peakhours", // Local development URL
  appName: "SmartEV",
  version: "1.0.0",
};

// Context Provider Component
export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={globalData}>{children}</AppContext.Provider>
  );
};

// Custom Hook to use the Context (with error handling)
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
