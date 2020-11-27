import React from "react";
import {
  calcThreadAngle,
  calcThreadLength,
  getPinOffset,
} from "../../utils/utils";
import * as schema from "../../data/item-schema";
import threadRed from "../../assets/img/thread_red.png";

const defaultWidth = 7; // thread width in px

const testThreadStyle = {
  top: 0,
  left: 0,
  width: 0,
  height: `${defaultWidth}px`,
  // backgroundColor: "red",
  backgroundSize: `auto 100%`,
  backgroundRepeat: `repeat-x`,
  backgroundImage: `url(${threadRed})`,
  backgroundPosition: `center`,
  pointerEvents: "none",
  position: "absolute",
  transform: `rotate(0deg)`,
  transformOrigin: `0 50%`,
};

const testThreadShadowStyle = {
  top: 0,
  left: 0,
  width: 0,
  height: `${defaultWidth}px`,
  backgroundColor: "rgba(0,0,0,0.5)",
  pointerEvents: "none",
  position: "absolute",
  transform: `rotate(0deg)`,
  transformOrigin: `0 50%`,
};

const Thread = (props) => {
  const thisStartItem = { ...schema[props.startItem.type], ...props.startItem };
  const thisEndItem = { ...schema[props.endItem.type], ...props.endItem };
  const pinOffsetStart = getPinOffset(thisStartItem);
  const pinOffsetEnd = getPinOffset(thisEndItem);
  const startTop = pinOffsetStart.top;
  const startLeft = pinOffsetStart.left;

  let angle = calcThreadAngle(
    pinOffsetStart.top,
    pinOffsetStart.left,
    pinOffsetEnd.top,
    pinOffsetEnd.left
  );
  let length = calcThreadLength(
    pinOffsetStart.top,
    pinOffsetStart.left,
    pinOffsetEnd.top,
    pinOffsetEnd.left
  );
  const newStyle = {
    top: `${startTop + defaultWidth / 2}px`,
    left: `${startLeft}px`,
    transform: `rotate(${angle}deg)`,
    width: `${length}px`,
  };
  const newShadowStyle = {
    top: `${startTop + defaultWidth}px`,
    left: `${startLeft}px`,
    transform: `rotate(${angle}deg)`,
    width: `${length}px`,
  };
  return (
    <>
      <div
        className="test-thread-shadow"
        style={{ ...testThreadShadowStyle, ...newShadowStyle }}
      ></div>
      <div
        className="test-thread"
        style={{ ...testThreadStyle, ...newStyle }}
      ></div>
    </>
  );
};

export default Thread;
