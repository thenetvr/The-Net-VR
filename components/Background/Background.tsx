"use client";

import React, { useEffect } from "react";
import "./Background.css";

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Background() {
  useEffect(() => {
    setInterval(() => {
      let spread = 0;
      let delay = 0;
      // created and customized one bubble
      const listEls = document.querySelectorAll(".bubbles > li");
      listEls.forEach((listEl) => {
        // 3 - 98
        const left = randomIntFromInterval(spread, spread + 10);
        spread = spread == 90 ? 0 : spread + 10;
        listEl.style.left = `${left}vw`;
        // 1 - 10
        listEl.style["animation-delay"] = `${delay}s`;
        delay += 0.4;
        // 10 - 20
        const duration = randomIntFromInterval(3, 30);
        listEl.style.animation = `animate ${duration}s linear infinite`;
      });
    }, 30000);
  }, []);

  return (
    <div className="box">
      <ul className="bubbles">
        {Array.from(Array(10).keys()).map((key, idx) => (
          <li key={idx}></li>
        ))}
      </ul>
    </div>
  );
}
