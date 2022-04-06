import React from "react";

const SideItem = ({ name, active, handleActive }) => {
  return (
    <button
      className={`side-item ${active ? "active" : ""}`}
      onClick={handleActive}
    >
      {name}
    </button>
  );
};

export default SideItem;
