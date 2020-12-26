import React from "react";
import * as utils from "../../utils/utils";
import * as schema from "../../data/item-schema";

// Pin size 20px x 20px

const hues = {
  red: 0,
  green: 90,
  blue: 180,
  yellow: 270,
};

const Pin = (props) => {
  // const { pinAngle, pinColor, pinTop, pinLeft, id } = props;
  const thisItem = { ...schema[props.item.type], ...props.item };
  const { pinAngle, pinColor, id } = thisItem;
  const pinOffset = utils.getPinOffset(thisItem);
  return (
    <div
      id={`pin-${id}`}
      className={`pin bg-contain pin-${id}`}
      style={{
        filter: `hue-rotate(${hues[pinColor]}deg)`,
        transform: `rotate(${pinAngle}deg)`,
        top: `${pinOffset.top - 10}px`,
        left: `${pinOffset.left - 10}px`,
      }}
    >
      <div className="pin-body"></div>
    </div>
  );
};

export default Pin;
