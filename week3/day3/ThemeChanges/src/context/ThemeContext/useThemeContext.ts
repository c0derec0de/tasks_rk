import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const useThemeContext = () => {
  const data = useContext(ThemeContext);

  if (!data) {
    throw new Error("Error of loading data");
  }

  return data;
};
