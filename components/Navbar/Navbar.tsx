"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">The Net VR</div>
        <div className="menu-icon" onClick={() => setShowNavbar(!showNavbar)}>
          Hamburger Icon
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul className="text-center gap-4">
            <li className="mr-0">
              <Link href="/">Home</Link>
            </li>
            <li className="mr-0">
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className="mr-0">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="mr-0">
              <Link href="/about">About</Link>
            </li>
            <li className="mr-0">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
