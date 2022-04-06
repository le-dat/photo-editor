import React from "react";

const Range = ({ value, min, max, handleRange }) => {
  return (
    <div className="range-container">
      <input
        type="range"
        className="range"
        value={value}
        min={min}
        max={max}
        onChange={handleRange}
      />
    </div>
  );
};

export default Range;
