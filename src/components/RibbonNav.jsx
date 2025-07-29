import React from "react";
import "./RibbonNav.css";

export default function RibbonNav() {
  const menuItems = [
    "Movies",
    "Stream",
    "Events",
    "Plays",
    "Sports",
    "Corporates",
    "Activities",
  ];

  return (
    <div className="ribbon-nav">
      <ul className="ribbon-list">
        {menuItems.map((item) => (
          <li key={item} className="ribbon-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
