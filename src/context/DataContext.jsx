import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [sharedDataBrother, setSharedDataBrother] = useState("no data from brother");
  const [sharedDataSister, setSharedDataSister] = useState("no data from sister");

  const updateSharedDataBrother = (data) => {
    setSharedDataBrother(data);
  };
  const updateSharedDataSister = (data) => {
    setSharedDataSister(data);
  };

  return (
    <DataContext.Provider
      value={{
        sharedDataBrother,
        updateSharedDataBrother,
        sharedDataSister,
        updateSharedDataSister,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
