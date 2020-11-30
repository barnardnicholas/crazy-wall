import React from "react";
import "../App.css";

const gradient = [
  { red: 0, green: 0, blue: 0, opacity: 0, radius: 0 },
  { red: 0, green: 0, blue: 0, opacity: 0.5, radius: 66 },
  { red: 0, green: 0, blue: 0, opacity: 0.9, radius: 100 },
];

const gradComp =
  "radial-gradient(circle, " +
  gradient
    .map(
      (g, i) =>
        `rgba(${g.red},${g.green},${g.blue}, ${g.opacity}) ${g.radius}%${
          i < gradient.length - 1 ? ", " : ""
        }`
    )
    .join("") +
  ")";

const gradientStyle = {
  backgroundImage: gradComp,
};

const Overlay = () => {
  return (
    <>
      <div className="gradient-overlay" style={gradientStyle}></div>
    </>
  );
};

export default Overlay;
