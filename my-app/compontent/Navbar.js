"use client";
// https://react-icons.github.io/react-icons/
import React, { useState } from "react";
import "./component.css";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaMailBulk,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Navbar = () => {
  const [status, setStatus] = useState("");
  console.log(status);

  return (
    <div className="nav-main">
      <div className="nav-head">
        <h1>AI Friend</h1>
        <div
          className={"nav-open-close "+status}
          onClick={() => {
            setStatus(status === "" ? "clicked" : "");
          }}
        >
          <div className="line line-1 "></div>
          <div className="line line-2 "></div>
          <div className="line line-3 "></div>
        </div>
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>History</li>
          {/* <li>Contact</li> */}
          <li>Feedback</li>
          <li>more</li>
        </ul>
      </div>

      <div className="nav-contact">
        <MdOutlineEmail className="nav-container-icon" />
        <FaInstagram className="nav-container-icon" />
        <FaGithub className="nav-container-icon" />
        <FaTwitter className="nav-container-icon" />
      </div>
    </div>
  );
};

export default Navbar;
