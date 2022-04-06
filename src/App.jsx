import { useState } from "react";
import "./App.css";
import Range from "./component/Range";
import SideItem from "./component/SideItem";

const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Invert",
    property: "invert",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Saturate",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Hue-rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Blur",
    property: "Blur",
    value: 0,
    range: {
      min: 0,
      max: 5,
    },
    unit: "px",
  },
];
function App() {
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedOption = options[selectedIndex];

  const handleRange = ({ target }) => {
    setOptions((prevOption) => {
      return prevOption.map((option, index) => {
        if (index !== selectedIndex) return option;
        return { ...option, value: target.value };
      });
    });
  };

  const handleImageStyle = () => {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });
    return { filter: filters.join(" ") };
  };

  return (
    <div className="container">
      <div className="image-container" style={handleImageStyle()}></div>
      <div className="sidebar-container">
        {options.map((option, index) => (
          <SideItem
            key={index}
            name={option.name}
            active={index === selectedIndex}
            handleActive={() => setSelectedIndex(index)}
          />
        ))}
      </div>
      <Range
        value={selectedOption.value}
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        handleRange={handleRange}
      />
    </div>
  );
}

export default App;
