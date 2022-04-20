import React from "react";
import "./SidebarOption.css";

export const SidebarOption = ({ text, Icon, id, active }) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <a href={`/#${id}`}>
        <h2>{text}</h2>
      </a>
    </div>
  );
};
