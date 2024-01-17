import { createContext } from "react";

export type themeContextProps = {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export const themeContext = createContext<themeContextProps | null>(null);
