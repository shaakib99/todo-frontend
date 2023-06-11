import { useEffect, useState } from "react";

export const useDarkTheme = (options: {
  onDarkModeActive?: Function;
  onDarkModeRemove?: Function;
}) => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  const onDarkModeActive = options?.onDarkModeActive || function () {};
  const onDarkModeRemove = options?.onDarkModeRemove || function () {};

  // useEffect(() => {
  //   const darkThemeMedia = window?.matchMedia("(prefers-color-scheme: dark)");

  //   if (darkThemeMedia.matches) setDarkTheme();

  //   darkThemeMedia.addEventListener("change", (event) => {
  //     if (event.matches) setDarkTheme();
  //     else removeDarkTheme();
  //   });

  //   return () => darkThemeMedia.removeEventListener("change", () => {});
  // }, []);

  const setDarkTheme = () => {
    setIsDarkModeOn(true);
    document.body.classList.add("dark-theme");
    return onDarkModeActive();
  };

  const removeDarkTheme = () => {
    setIsDarkModeOn(false);
    document.body.classList.remove("dark-theme");
    return onDarkModeRemove();
  };

  return { isDarkModeOn, setDarkTheme, removeDarkTheme };
};
