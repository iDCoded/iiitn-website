import { createContext, useContext, useState,  ReactNode } from "react";

// Create a Context with an undefined default value
const GlobalDependencyContext = createContext<number | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  // Generate a new unique ID on every reload
  const [globalDependency] = useState(() => Date.now());

  return (
    <GlobalDependencyContext.Provider value={globalDependency}>
      {children}
    </GlobalDependencyContext.Provider>
  );
};

export const useGlobalDependency = () => {
  const context = useContext(GlobalDependencyContext);
  if (context === undefined) {
    throw new Error("useGlobalDependency must be used within a GlobalProvider");
  }
  return context;
};
