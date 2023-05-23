import { useState } from "react";
import * as React from "react";

export type riskLevelType = {
  riskLevel: String | "לא זוהתה";
  setRiskLevel: any;
};
export const Context = React.createContext<riskLevelType | null>(null);

export const GlobalContext = ({ children }: any) => {
  const [riskLevel, setRiskLevel] = useState("");
  return (
    <Context.Provider value={{ riskLevel, setRiskLevel }}>
      {children}
    </Context.Provider>
  );
};
