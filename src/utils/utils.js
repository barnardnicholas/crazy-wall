// Move item to top of pile (end of array)
const moveToFront = (items, item) => {
  return [...items.filter((i) => i.id !== item.id), item];
};

// Move item to bottom of pile (beginning of array)
const moveToBack = (items, item) => {
  return [item, ...items.filter((i) => i.id !== item.id)];
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

function rotate(cx, cy, x, y, angle) {
  var radians = (Math.PI / 180) * angle,
    cos = Math.cos(radians),
    sin = Math.sin(radians),
    nx = cos * (x - cx) + sin * (y - cy) + cx,
    ny = cos * (y - cy) - sin * (x - cx) + cy;
  return [nx, ny];
}

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
  const center = { top: top + height / 2, left: left + width / 2 };

  return rotate(
    center.left,
    center.top,
    pinAtZero.left,
    pinAtZero.top,
    item.angle
  );
};

module.exports = {
  moveToFront,
  moveToBack,
  splitText,
  calcThreadAngle,
  calcThreadLength,
  getPinOffset,
};
// export {
//   moveToFront,
//   moveToBack,
//   splitText,
//   calcThreadAngle,
//   calcThreadLength,
//   getPinOffset,
// };
