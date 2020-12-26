// Move item to top of pile (end of array)
const moveToFront = (items, item) => {
  return [...items.filter((i) => i.id !== item.id), item];
};

// Move item to bottom of pile (beginning of array)
const moveToBack = (items, item) => {
  return [item, ...items.filter((i) => i.id !== item.id)];
};

// Replace item in place in array
const replaceItem = (items, item) => {
  let itemIndex;
  items.forEach((i, idx) => {
    if (i.id === item.id) itemIndex = idx;
  });
  if (itemIndex === 0) return [item, ...items.filter((i) => i.id !== item.id)];
  else if (itemIndex >= items.length - 1)
    return [...items.filter((i) => i.id !== item.id), item];
  else {
    let itemsBefore = items.slice(0, itemIndex);
    let itemsAfter = items.slice(itemIndex + 1);
    return [...itemsBefore, item, ...itemsAfter];
  }
};

const splitText = (text) => {
  return text.split("\r\n");
};

const calcThreadAngle = (startTop, startLeft, endTop, endLeft) => {
  var dy = endTop - startTop;
  var dx = endLeft - startLeft;
  var theta = Math.atan2(dy, dx); // range (-PI, PI]
  theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
  if (theta < 0) theta = 360 + theta; // range [0, 360)
  return theta;
};

const calcThreadLength = (startTop, startLeft, endTop, endLeft) => {
  var dy = endTop - startTop;
  var dx = endLeft - startLeft;
  return Math.sqrt(Math.pow(dy, 2) + Math.pow(dx, 2));
};

const getPinOffset = (item) => {
  function rotate(cx, cy, x, y, angle) {
    let radians = (Math.PI / 180) * (angle * -1);
    let cos = Math.cos(radians);
    let sin = Math.sin(radians);
    let nx = cos * (x - cx) + sin * (y - cy) + cx;
    let ny = cos * (y - cy) - sin * (x - cx) + cy;
    return { left: nx, top: ny };
  }
  const { top, left, width, height, angle, pinOffsetTop, pinOffsetLeft } = item;
  const pinAtZero = { top: top + pinOffsetTop, left: left + pinOffsetLeft };
  if (angle > 90 && angle < 270) pinAtZero.top = top + height - pinOffsetTop;
  const center = { top: top + height / 2, left: left + width / 2 };

  return rotate(
    center.left,
    center.top,
    pinAtZero.left,
    pinAtZero.top,
    item.angle
  );
};

// module.exports = {
//   moveToFront,
//   moveToBack,
//   replaceItem,
//   splitText,
//   calcThreadAngle,
//   calcThreadLength,
//   getPinOffset,
// };
export {
  moveToFront,
  moveToBack,
  replaceItem,
  splitText,
  calcThreadAngle,
  calcThreadLength,
  getPinOffset,
};
