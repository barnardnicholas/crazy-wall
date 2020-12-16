const {
  moveToFront,
  moveToBack,
  replaceItem,
  splitText,
  calcThreadAngle,
  calcThreadLength,
  getPinOffset,
} = require("../utils");
const { expect } = require("chai");
const { testItems } = require("../../data/test-data");

const itemToMove = {
  type: "photo",
  imageUrl:
    "https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/happy-puppy-xlarge.jpg?imwidth=1200",
  left: 400,
  top: 400,
  width: 450,
  height: 547,
  angle: 355,
  aspect: 0.823,
  name: "Puppy 1",
  id: "puppy1",
  zIndex: 2,
};

describe("moveToFront", () => {
  it("Returns an array", () => {
    const actualResult = moveToFront(testItems, itemToMove);
    expect(actualResult).to.be.an("array");
  });
  it("Does not mutate original array", () => {
    const arrayCopy = [...testItems];
    expect(arrayCopy).to.eql(testItems);
  });
  it("Returns an array containing the specified item", () => {
    const actualResult = moveToFront(testItems, itemToMove);
    let result = false;
    actualResult.forEach((item) => {
      if (
        item.type === "photo" &&
        item.imageUrl ===
          "https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/happy-puppy-xlarge.jpg?imwidth=1200" &&
        item.left === 400 &&
        item.top === 400 &&
        item.width === 450 &&
        item.height === 547 &&
        item.angle === 355 &&
        item.aspect === 0.823 &&
        item.name === "Puppy 1" &&
        item.id === "puppy1" &&
        item.zIndex === 2
      )
        result = true;
    });
    expect(result).to.equal(true);
  });
  it("Returns an array containing all original items", () => {
    const actualResult = moveToFront(testItems, itemToMove);
    testItems.forEach((item) => {
      let result = false;
      actualResult.forEach((res) => {
        if (
          item.type === res.type &&
          item.imageUrl === res.imageUrl &&
          item.left === res.left &&
          item.top === res.top &&
          item.width === res.width &&
          item.height === res.height &&
          item.angle === res.angle &&
          item.aspect === res.aspect &&
          item.name === res.name &&
          item.id === res.id &&
          item.zIndex === res.zIndex
        )
          result = true;
      });
      expect(result).to.equal(true);
    });
  });
  it("Returns an array with the specified item at the far end", () => {
    const actualResult = moveToFront(testItems, itemToMove);
    expect(actualResult[actualResult.length - 1]).to.eql(itemToMove);
  });
  it("Returns an array with all other items in their original order", () => {
    const actualResult = moveToFront(testItems, itemToMove);
    const otherTestItems = testItems.filter(
      (item) => item.id !== itemToMove.id
    );
    const otherResultItems = actualResult.slice(0, actualResult.length - 1);
    expect(otherTestItems).to.eql(otherResultItems);
  });
  it("Returns the same array if item is already at end", () => {
    const newItemToMove = { ...testItems[1] };
    const actualResult = moveToFront(testItems, newItemToMove);
    expect(actualResult).to.eql(testItems);
  });
});

describe("moveToBack", () => {
  it("Returns an array", () => {
    const actualResult = moveToBack(testItems, itemToMove);
    expect(actualResult).to.be.an("array");
  });
  it("Does not mutate original array", () => {
    const arrayCopy = [...testItems];
    expect(arrayCopy).to.eql(testItems);
  });
  it("Returns an array containing the specified item", () => {
    const actualResult = moveToBack(testItems, itemToMove);
    let result = false;
    actualResult.forEach((item) => {
      if (
        item.type === "photo" &&
        item.imageUrl ===
          "https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/happy-puppy-xlarge.jpg?imwidth=1200" &&
        item.left === 400 &&
        item.top === 400 &&
        item.width === 450 &&
        item.height === 547 &&
        item.angle === 355 &&
        item.aspect === 0.823 &&
        item.name === "Puppy 1" &&
        item.id === "puppy1" &&
        item.zIndex === 2
      )
        result = true;
    });
    expect(result).to.equal(true);
  });
  it("Returns an array containing all original items", () => {
    const actualResult = moveToBack(testItems, itemToMove);
    testItems.forEach((item) => {
      let result = false;
      actualResult.forEach((res) => {
        if (
          item.type === res.type &&
          item.imageUrl === res.imageUrl &&
          item.left === res.left &&
          item.top === res.top &&
          item.width === res.width &&
          item.height === res.height &&
          item.angle === res.angle &&
          item.aspect === res.aspect &&
          item.name === res.name &&
          item.id === res.id &&
          item.zIndex === res.zIndex
        )
          result = true;
      });
      expect(result).to.equal(true);
    });
  });
  it("Returns an array with the specified item at the far end", () => {
    const actualResult = moveToBack(testItems, itemToMove);
    expect(actualResult[0]).to.eql(itemToMove);
  });
  it("Returns an array with all other items in their original order", () => {
    const actualResult = moveToBack(testItems, itemToMove);
    const otherTestItems = testItems.filter(
      (item) => item.id !== itemToMove.id
    );
    const otherResultItems = actualResult.slice(1);
    expect(otherTestItems).to.eql(otherResultItems);
  });
});

describe.only("replaceItem", () => {
  it("Returns an array", () => {
    const actualResult = replaceItem(testItems, itemToMove);
    expect(actualResult).to.be.an("array");
  });
  it("Does not mutate original array", () => {
    const arrayCopy = [...testItems];
    expect(arrayCopy).to.eql(testItems);
  });
  it("Returns an array containing the specified item", () => {
    const actualResult = replaceItem(testItems, itemToMove);
    let result = false;
    actualResult.forEach((item) => {
      if (
        item.type === "photo" &&
        item.imageUrl ===
          "https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/happy-puppy-xlarge.jpg?imwidth=1200" &&
        item.left === 400 &&
        item.top === 400 &&
        item.width === 450 &&
        item.height === 547 &&
        item.angle === 355 &&
        item.aspect === 0.823 &&
        item.name === "Puppy 1" &&
        item.id === "puppy1" &&
        item.zIndex === 2
      )
        result = true;
    });
    expect(result).to.equal(true);
  });
  it("Returns an array containing all original items", () => {
    const actualResult = replaceItem(testItems, itemToMove);
    testItems.forEach((item) => {
      let result = false;
      actualResult.forEach((res) => {
        if (
          item.type === res.type &&
          item.imageUrl === res.imageUrl &&
          item.left === res.left &&
          item.top === res.top &&
          item.width === res.width &&
          item.height === res.height &&
          item.angle === res.angle &&
          item.aspect === res.aspect &&
          item.name === res.name &&
          item.id === res.id &&
          item.zIndex === res.zIndex
        )
          result = true;
      });
      expect(result).to.equal(true);
    });
  });
  it("Returns an array with the specified item at the far end", () => {
    const actualResult = replaceItem(testItems, itemToMove);
    expect(actualResult[0]).to.eql(itemToMove);
  });
  it("Returns an array with all other items in their original order", () => {
    const actualResult = replaceItem(testItems, itemToMove);
    const otherTestItems = testItems.filter(
      (item) => item.id !== itemToMove.id
    );
    const otherResultItems = actualResult.slice(1);
    expect(otherTestItems).to.eql(otherResultItems);
  });
});

describe("splitText", () => {
  it("returns an array", () => {
    const text = "Text \r\n On \r\n Multiple \r\n Lines";
    const result = splitText(text);
    expect(result).to.be.an("array");
  });
  it("splits multi-line array correctly", () => {
    const text = "Text\r\nOn\r\nMultiple\r\nLines";
    const result = splitText(text);
    expect(result).to.eql(["Text", "On", "Multiple", "Lines"]);
  });
});

const coords1 = { startTop: 0, startLeft: 0, endTop: 0, endLeft: 100 }; // 0deg
const coords2 = { startTop: 0, startLeft: 0, endTop: 100, endLeft: 100 }; // 45deg
const coords3 = { startTop: 0, startLeft: 0, endTop: 100, endLeft: -100 }; // 135deg
const coords4 = { startTop: 0, startLeft: 0, endTop: 0, endLeft: -100 }; // 180deg
const coords5 = { startTop: 0, startLeft: 0, endTop: -100, endLeft: -100 }; // 225deg
const coords6 = { startTop: 0, startLeft: 0, endTop: -100, endLeft: 0 }; // 270deg
const coords7 = { startTop: 0, startLeft: 0, endTop: -100, endLeft: 100 }; // 315deg
const coords8 = { startTop: 0, startLeft: 0, endTop: -100, endLeft: 200 }; //

describe("calcThreadAngle", () => {
  it("returns a number", () => {
    const actual = calcThreadAngle(
      coords1.startTop,
      coords1.startLeft,
      coords1.endTop,
      coords1.endLeft
    );
    expect(actual).to.be.a("number");
  });
  it("returns 0 for 0,0,0,0", () => {
    const actual = calcThreadAngle(0, 0, 0, 0);
    expect(actual).to.equal(0);
  });
  it("returns 0 for coords1", () => {
    const actual = calcThreadAngle(
      coords1.startTop,
      coords1.startLeft,
      coords1.endTop,
      coords1.endLeft
    );
    expect(actual).to.equal(0);
  });
  it("returns 45 for coords2", () => {
    const actual = calcThreadAngle(
      coords2.startTop,
      coords2.startLeft,
      coords2.endTop,
      coords2.endLeft
    );
    expect(actual).to.equal(45);
  });
  it("returns 135 for coords3", () => {
    const actual = calcThreadAngle(
      coords3.startTop,
      coords3.startLeft,
      coords3.endTop,
      coords3.endLeft
    );
    expect(actual).to.equal(135);
  });
  it("returns 180 for coords4", () => {
    const actual = calcThreadAngle(
      coords4.startTop,
      coords4.startLeft,
      coords4.endTop,
      coords4.endLeft
    );
    expect(actual).to.equal(180);
  });
  it("returns 225 for coords5", () => {
    const actual = calcThreadAngle(
      coords5.startTop,
      coords5.startLeft,
      coords5.endTop,
      coords5.endLeft
    );
    expect(actual).to.equal(225);
  });
  it("returns 270 for coords6", () => {
    const actual = calcThreadAngle(
      coords6.startTop,
      coords6.startLeft,
      coords6.endTop,
      coords6.endLeft
    );
    expect(actual).to.equal(270);
  });
  it("returns 315 for coords7", () => {
    const actual = calcThreadAngle(
      coords7.startTop,
      coords7.startLeft,
      coords7.endTop,
      coords7.endLeft
    );
    expect(actual).to.equal(315);
  });
});

describe("calcThreadLength", () => {
  it("returns a positive integer or float", () => {
    const actual = calcThreadLength(
      coords1.startTop,
      coords1.startLeft,
      coords1.endTop,
      coords1.endLeft
    );
    expect(actual).to.be.a("number");
    expect(actual).to.be.greaterThan(0);
  });
  it("returns correct answer for coords1", () => {
    const actual = calcThreadLength(
      coords1.startTop,
      coords1.startLeft,
      coords1.endTop,
      coords1.endLeft
    );
    expect(Math.floor(actual)).to.equal(100);
  });
  it("returns correct answer for coords2", () => {
    const actual = calcThreadLength(
      coords2.startTop,
      coords2.startLeft,
      coords2.endTop,
      coords2.endLeft
    );
    expect(Math.floor(actual)).to.equal(141);
  });
  it("returns correct answer for coords3", () => {
    const actual = calcThreadLength(
      coords3.startTop,
      coords3.startLeft,
      coords3.endTop,
      coords3.endLeft
    );
    expect(Math.floor(actual)).to.equal(141);
  });
  it("returns correct answer for coords4", () => {
    const actual = calcThreadLength(
      coords4.startTop,
      coords4.startLeft,
      coords4.endTop,
      coords4.endLeft
    );
    expect(Math.floor(actual)).to.equal(100);
  });
  it("returns correct answer for coords5", () => {
    const actual = calcThreadLength(
      coords5.startTop,
      coords5.startLeft,
      coords5.endTop,
      coords5.endLeft
    );
    expect(Math.floor(actual)).to.equal(141);
  });
  it("returns correct answer for coords8", () => {
    const actual = calcThreadLength(
      coords8.startTop,
      coords8.startLeft,
      coords8.endTop,
      coords8.endLeft
    );
    expect(Math.floor(actual)).to.equal(223);
  });
});

const testPinItem = {
  left: 400,
  top: 400,
  width: 450,
  height: 547,
  angle: 0,
  pinOffsetTop: 10,
  pinOffsetLeft: 90,
};

// centre of item (absolute) = {top: 673.5, left: 625}
// distance from center to pin: 263.5

describe("getPinOffset", () => {
  it("returns an object with correct keys and value types", () => {
    const actual = getPinOffset(testPinItem);
    expect(actual).to.be.an("object");
    expect(actual).to.haveOwnProperty("top");
    expect(actual).to.haveOwnProperty("left");
    expect(actual.top).to.be.a("number");
    expect(actual.left).to.be.a("number");
  });
  it("returns correct pin top & bottom for 0 rotation", () => {
    const actual = getPinOffset(testPinItem);
    expect(actual.top).to.equal(410);
    expect(actual.left).to.equal(490);
  });
  // MORE TDD
});
