import { useMemo, useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
import { type Theme } from "../../types/types";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );
  return <ThemeContext value={value}>{props.children}</ThemeContext>;
};
