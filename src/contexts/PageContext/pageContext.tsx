import { createContext } from "react";

export type PageContextTypes = {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

const initialValue: PageContextTypes = {
  page: "main",
  setPage: () => {},
};

export const pageContext = createContext<PageContextTypes>(initialValue);
