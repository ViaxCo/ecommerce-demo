import { useContext } from "react";
import { GlobalContext } from "./GlobalState";

// Custom hook
export const useGlobalContext = () => {
  const globalContext = useContext(GlobalContext);

  if (!globalContext) {
    throw new Error("useGlobalContext has to be used within <GlobalContext.Provider>");
  }

  return globalContext;
};
