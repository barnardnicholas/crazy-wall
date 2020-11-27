import React from "react";
import {
  calcThreadAngle,
  calcThreadLength,
  getPinOffset,
} from "../../utils/utils";
import * as schema from "../../data/item-schema";

const testThreadStyle = {
  top: 0,
  left: 0,
  width: 100,
  height: "5px",
  backgroundColor: "red",
  position: "absolute",
  transform: `rotate(0deg)`,
  transformOrigin: `0 50%`,
};

const Thread = (props) => {
  // const { startTop, startLeft, endTop, endLeft, startItem, endItem } = props;
  const thisStartItem = { ...schema[props.startItem.type], ...props.startItem };
  const thisEndItem = { ...schema[props.endItem.type], ...props.endItem };
  const pinOffsetStart = getPinOffset(thisStartItem);
  const pinOffsetEnd = getPinOffset(thisEndItem);
  // console.log(props.startItem);
  const startTop = pinOffsetStart.top;
  const startLeft = pinOffsetStart.left;
  const endTop = pinOffsetEnd.top;
  const endLeft = pinOffsetEnd.left;

  let angle = calcThreadAngle(
    pinOffsetStart.top,
    pinOffsetStart.left,
    pinOffsetEnd.top,
    pinOffsetEnd.left
  );
  // console.log(angle);
  let length = calcThreadLength(
    pinOffsetStart.top,
    pinOffsetStart.left,
    pinOffsetEnd.top,
    pinOffsetEnd.left
  );
  const newStyle = {
    top: `${startTop}px`,
    left: `${startLeft}px`,
    transform: `rotate(${angle}deg)`,
    width: `${length}px`,
  };
  return (
    <div
      className="test-thread"
      style={{ ...testThreadStyle, ...newStyle }}
    ></div>
  );
};

export default Thread;
