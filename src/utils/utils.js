// Move item to top of pile (end of array)
const moveToFront = (items, item) => {
  // const thisIndex = items.map((i) => i.id).indexOf(item.id);
  // const otherItems = items.filter((i) => i.id != item.id);
  return [...items.filter((i) => i.id != item.id), item];
};

// Move item to bottom of pile (beginning of array)
const moveToBack = (items, item) => {
  // const thisIndex = items.map((i) => i.id).indexOf(item.id);
  // const otherItems = items.filter((i) => i.id != item.id);
  return [item, ...items.filter((i) => i.id != item.id)];
};

// module.exports = { moveToFront, moveToBack };
export { moveToFront, moveToBack };
