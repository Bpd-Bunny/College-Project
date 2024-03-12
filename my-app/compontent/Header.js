"use client";
import React from "react";
import { useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  const [mode, setMode] = useState("dark");
  const [modeIcon, setModeIcon] = useState(MdOutlineDarkMode);
  console.log(mode);
  return (
    <div className="header">
      <div
        className={"dark-mode " + mode}
        onClick={() => {
          setMode(mode === "dark" ? "light" : "dark");
        }}
      >
        <div className="dark-mode-circle">
          {mode === "dark" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
        </div>
      </div>
      <div className="account">
        <div>this is my sccount</div>
      </div>
    </div>
  );
};

export default Header;
