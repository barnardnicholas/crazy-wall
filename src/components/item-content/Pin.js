import React from "react";
import pinRed from "../../assets/img/pin_red_100x107.png";

const hues = {
  red: 0,
  green: 90,
  blue: 180,
  yellow: 270,
};

const Pin = (props) => {
  const { pinAngle, pinColor, pinTop, pinLeft, id } = props;
  return (
    <div
      id={`pin-${id}`}
      className={`pin bg-contain pin-${id}`}
      style={{
        filter: `hue-rotate(${hues[pinColor]}deg)`,
        transform: `rotate(${pinAngle}deg)`,
        top: pinTop,
        left: pinLeft,
      }}
    ></div>
  );
};

export default Pin;
