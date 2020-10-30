import React from "react";
import pinRed from "../../assets/img/pin_red_100x107.png";

const hues = {
  red: 0,
  green: 90,
  blue: 180,
  yellow: 270,
};

const Pin = (props) => {
  console.dir(props);
  const { pinAngle, pinColor } = props;
  return (
    <div
      className="pin bg-contain"
      style={{
        filter: `hue-rotate(${hues[pinColor]}deg)`,
        transform: `rotate(${pinAngle}deg)`,
      }}
    ></div>
  );
};

export default Pin;
