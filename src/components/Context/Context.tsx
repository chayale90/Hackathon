import { useState } from "react";
import * as React from "react";

export type globalType = {
  riskLevel: String;
  setRiskLevel: any;
};
export const Context = React.createContext<globalType | null>(null);

export const GlobalContext = ({ children }: any) => {
  const [riskLevel, setRiskLevel] = useState("");

  return (
    <Context.Provider value={{ riskLevel, setRiskLevel }}>
      {children}
    </Context.Provider>
  );
};
