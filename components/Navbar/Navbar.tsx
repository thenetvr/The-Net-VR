"use client";

import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // is mobile use effect
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 960);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // handle menu click
  const handleMenuClick = () => {
    const navEl = document.querySelector(".navbar-demo");
    const spanEls = document.querySelectorAll("#pencet span");
    const menuEl = document.querySelector("#menu");
    const homeEl = document.querySelector("#home-container");
    if (menuEl == null || navEl == null || spanEls == null || homeEl == null)
      return;
    if (isOpen) {
      setIsOpen(false);
      navEl.classList.remove("open-nav");
      spanEls.forEach((el) => el.classList.remove("change-color"));
      menuEl.classList.remove("Diam");
      setTimeout(() => homeEl.classList.add("z-10"), 800);
    } else {
      navEl.classList.add("open-nav");
      spanEls.forEach((el) => el.classList.add("change-color"));
      menuEl.classList.add("Diam");
      setIsOpen(true);
      homeEl.classList.remove("z-10");
    }
  };

  return (
    <header className="w-full flex justify-between navbar-demo">
      {isMobile && (
        <div id="menu-icon-container">
          <div id="menu" onClick={handleMenuClick}>
            <div id="pencet">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      )}
      <div className="nav-bar md:justify-around justify-center">
        <ul>
          <li>
            <a href="#">Contact</a>
            <a href="#">Influencer Program</a>
            <a href="#">Net VR Theater</a>
            <a href="#">News</a>
            <a href="#">The Team</a>
            <a href="#">Creators</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
