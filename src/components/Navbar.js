import React from "react";
// import tv from "../icons/tv";
import Equal from "../icons/Equal";
import appLogo from "../icons/tv.svg";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="logo-wrapper">
        <img src={appLogo} alt=""></img>
        <h3>MovieBox</h3>
      </div>
      <div className="signin-wrapper">
        <a href="#">Sign in</a>

        <div className="equalwrap">
          <Equal />
        </div>
      </div>
    </div>
  );
}
