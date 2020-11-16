const { moveToFront, moveToBack, splitText } = require("../utils");
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
