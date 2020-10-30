import React from "react";
import pinRed from "../../assets/img/pin_red_100x107.png";

const hues = {
  red: 0,
  green: 90,
  blue: 180,
  yellow: 270,
};

const Pin = (props) => {
  let color;
  if (!props.color) color = "red";
  else color = props.color;
  const { angle } = props || 0;
  return (
    <div
      className="pin bg-contain"
      style={{
        filter: `hue-rotate(${hues[color]})`,
        transform: `rotate(${angle}deg)`,
      }}
    ></div>
  );
};

export default Pin;
