// Move item to top of pile (end of array)
const moveToFront = (items, item) => {
  return [...items.filter((i) => i.id !== item.id), item];
};

// Move item to bottom of pile (beginning of array)
const moveToBack = (items, item) => {
  return [item, ...items.filter((i) => i.id !== item.id)];
};

// module.exports = { moveToFront, moveToBack };
export { moveToFront, moveToBack };
