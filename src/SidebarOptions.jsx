import React from "react";
import "./css/sidebarOptions.css";
const SidebarOptions = ({ Icon, title, number, isactive }) => {
  return (
    <div className={`sidebarOptions ${isactive && "sidebarOptions--active"}`}>
      <Icon />
      <h4>{title}</h4>
      <p>{number}</p>
    </div>
  );
};

export default SidebarOptions;
