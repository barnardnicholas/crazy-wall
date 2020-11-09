const testItems = [
  {
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
  },
  {
    type: "photo",
    imageUrl:
      "https://www.ardengrange.com/sites/admin/plugins/elfinder/files/ardengrange/Nutrition%20and%20Advice%20section/Fact%20Sheets%20section/Canine%20Fact%20Sheets/Puppy%20section/Puppy%20guide%20images/Scruffy%20pup.jpg",
    left: 600,
    top: 400,
    width: 450,
    height: 547,
    angle: 25,
    aspect: 0.823,
    name: "Puppy 2",
    id: "puppy2",
    zIndex: 1,
  },
];

export const resetData = {
  lastInteraction: 0,
  dataLoaded: false,
  activeItem: null,
  zoomFactor: 1,
  centerX: 691,
  centerY: 432,
  items: [
    {
      type: "photo",
      imageUrl:
        "https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/happy-puppy-xlarge.jpg?imwidth=1200",
      left: -457,
      top: -384,
      width: 180, // 9cm x 20px = 180px
      height: 219, //10.94cm x 20px = 218.8px
      angle: 355,
      aspect: 0.823,
      name: "Puppy 1",
      id: "puppy1",
      zIndex: 2,
      pinAngle: 180,
      pinColor: "red",
      pinTop: "10px",
      pinLeft: "calc(50% - 10px)",
    },
    {
      type: "photo",
      imageUrl:
        "https://www.ardengrange.com/sites/admin/plugins/elfinder/files/ardengrange/Nutrition%20and%20Advice%20section/Fact%20Sheets%20section/Canine%20Fact%20Sheets/Puppy%20section/Puppy%20guide%20images/Scruffy%20pup.jpg",
      left: 197,
      top: -365,
      width: 180,
      height: 219,
      angle: 25,
      aspect: 0.823,
      name: "Puppy 2",
      id: "puppy2",
      zIndex: 1,
      pinAngle: 90,
      pinColor: "green",
      pinTop: "10px",
      pinLeft: "calc(50% - 10px)",
    },
    {
      type: "note",
      text:
        "Lorem ipsum dolor sit amet, usu mazim iuvaret in, ne eos virtute aliquid, nullam veritus imperdiet duo no. Iusto democritum at eam, pri omnis populo an. Id erat errem ullamcorper vel, vim in regione intellegat.",
      left: -424,
      top: 17,
      width: 300, // 15cm x 20px = 300px
      height: 417, // 20.83cm x 20px = 416.6px
      angle: 5,
      aspect: 0.72,
      name: "Note",
      id: "note1",
      zIndex: 1,
      pinAngle: 53,
      pinColor: "yellow",
      pinTop: "20px",
      pinLeft: "calc(50% - 10px)",
    },
    {
      type: "postit",
      text: "Lorem ipsum dolor sit amet",
      left: -95,
      top: -282,
      width: 152, //7.6cm x 20px = 152px
      height: 150, //7.52cm x 20px = 150.4px
      angle: 350,
      aspect: 1.01,
      name: "Post-It",
      id: "postit1",
      zIndex: 1,
      pinAngle: 20,
      pinColor: "red",
      pinTop: "8%",
      pinLeft: "calc(50% - 10px)",
    },
  ],
  lines: [["pin-puppy1", "pin-puppy2"]],
};

// module.exports = { testItems, resetData };
