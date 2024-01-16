"use client";

import Link from "next/link";
import useHash from "../../utils/useHash";
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Image from "next/image";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const hash = useHash();

  // check scroll position
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar bg-slate-900 transition-all ${
        scrollPosition > 200 ? "bg-opacity-100" : "bg-opacity-30"
      }`}
    >
      <div className="container">
        <div className="logo rounded-xl">
          <Image src="/images/logo.png" alt="logo" width={150} height={150} />
        </div>
        {/* mobile menu */}
        <div
          className="menu-icon"
          onClick={() => {
            setShowNavbar(!showNavbar);
            const bodyEl = document.querySelector(".main-content");
            if (!showNavbar) {
              bodyEl?.classList.add("blur");
            } else {
              bodyEl?.classList.remove("blur");
            }
          }}
        >
          <div className={`burger ${showNavbar && "burger-active"}`}>
            <div className="strip burger-strip-5">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        {/* desktop menu */}
        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul className="text-center gap-4">
            <li className="mr-0 transition-all">
              <Link href="/" className={hash == "" ? "text-teal-300" : ""}>
                Home
              </Link>
            </li>
            <li className="mr-0 transition-all">
              <Link href="#about" className={""}>
                About
              </Link>
            </li>
            <li className="mr-0 transition-all">
              <Link
                href="#our-theaters"
                className={hash == "our-theaters" ? "text-teal-300" : ""}
              >
                Our Theaters
              </Link>
            </li>
            <li className="mr-0 transition-all">
              <Link
                href="#upcoming-events"
                className={hash == "upcoming-events" ? "text-teal-300" : ""}
              >
                Upcoming Events
              </Link>
            </li>
            <li className="mr-0 transition-all">
              <Link
                href="#contact"
                className={hash == "contact" ? "text-teal-300" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
