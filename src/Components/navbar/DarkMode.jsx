import React, { useEffect, useState } from "react";
import light from "../../assets/website/light-mode-button.png";
import dark from "../../assets/website/dark-mode-button.png";
export const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.setItem("theme", "light"));
  const ele = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      ele.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      ele.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });
  return (
    <>
      <div className="relative select-none  z-999 ">
        <img
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          src={light}
          alt="light-mode"
          className={`w-[50px] transition-all z-10 right-0 duration-300 cursor-pointer absolute ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          src={dark}
          alt="light-mode"
          className="w-[50px]"
        />
      </div>
    </>
  );
};
