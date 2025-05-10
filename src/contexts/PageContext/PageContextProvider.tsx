import { useState } from "react";
import { pageContext } from "./pageContext";

type PageContextProviderProps = {
  children: React.ReactNode;
};

export function PageContextProvider({ children }: PageContextProviderProps) {
  const [page, setPage] = useState("main");

  return (
    <pageContext.Provider value={{ page, setPage }}>
      {children}
    </pageContext.Provider>
  );
}
