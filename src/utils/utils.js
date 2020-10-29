const moveToFront = (items, item) => {
  const thisIndex = items.map((i) => i.id).indexOf(item.id);
  const otherItems = items.filter((i) => i.id != item.id);
  return [...otherItems, item];
};

const moveToBack = (items, item) => {
  const thisIndex = items.map((i) => i.id).indexOf(item.id);
  const otherItems = items.filter((i) => i.id != item.id);
  return [item, ...otherItems];
};

module.exports = { moveToFront, moveToBack };
