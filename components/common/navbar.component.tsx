"use client";

import { APP_NAME } from "../../utils/constants";
import { useLottie } from "lottie-react";
import * as toggleThemeButton from "../../public/assets/lottiefiles/toggle-dark-mode-light-mode-themes.json";
import { useDarkTheme } from "../hooks/use-dark-theme.hook";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
  const pathName = usePathname();

  const {
    View: ThemeToggleBtn,
    playSegments,
    setSpeed,
  } = useLottie(
    {
      animationData: toggleThemeButton,
      loop: false,
      autoplay: false,
      seamless: true,
    },
    {}
  );
  setSpeed(2);

  const { isDarkModeOn, setDarkTheme, removeDarkTheme } = useDarkTheme({
    onDarkModeActive: () => {
      playSegments([0, 80], true);
    },
    onDarkModeRemove: () => {
      playSegments([80, 0], true);
    },
  });

  const handleThemeToggleBtnClick = () => {
    /**
     * This logic is opposite
     * If isDarkModeOn is already true then I know that user is trying to toggle dark mode -> light mode
     * else user is trying to toggle light mode -> dark mode
     */
    if (isDarkModeOn) return removeDarkTheme();

    return setDarkTheme();
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-sm">
      <section className="font-bold cursor-pointer">
        <Link href={"/"}>{APP_NAME}</Link>
      </section>
      <section className="flex gap-5 items-center">
        <Link
          href="/registration"
          className={`${
            pathName === "/registration" && "text-primary"
          } hover:font-semibold`}
        >
          Register
        </Link>
        <Link
          href="/login"
          className={`${
            pathName === "/login" && "text-primary"
          } hover:font-semibold`}
        >
          Login
        </Link>
        <span className="cursor-pointer" onClick={handleThemeToggleBtnClick}>
          {ThemeToggleBtn}
        </span>
      </section>
    </nav>
  );
};
