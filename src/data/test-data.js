import * as schema from "./item-schema";

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
    pinOffsetTop: 10,
    pinOffsetLeft: 90,
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
    pinOffsetTop: 10,
    pinOffsetLeft: 90,
  },
];

const resetData = {
  ...schema.board,
  items: [
    {
      ...schema.photo1,
      // type: "photo1",
      left: -457,
      top: -384,
      angle: 355,
      // name: "Puppy 1",
      id: "a7243d6255b",
      // zIndex: 2,
      pinAngle: 180,
      pinColor: "red",
      inputs: [
        {
          label: "Image",
          inputType: "image",
          value:
            "https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/happy-puppy-xlarge.jpg?imwidth=1200",
          alt: "",
        },
        {
          label: "Label",
          inputType: "text",
          value: "Smol pupper",
          maxLength: 20,
        },
      ],
    },
    {
      ...schema.photo1,
      // type: "photo1",
      left: 197,
      top: -365,
      angle: 25,
      // name: "Puppy 2",
      id: "7243d6255b1",
      // zIndex: 1,
      pinAngle: 90,
      pinColor: "green",
      inputs: [
        {
          label: "Image",
          inputType: "image",
          value:
            "https://www.ardengrange.com/sites/admin/plugins/elfinder/files/ardengrange/Nutrition%20and%20Advice%20section/Fact%20Sheets%20section/Canine%20Fact%20Sheets/Puppy%20section/Puppy%20guide%20images/Scruffy%20pup.jpg",
          alt: "",
        },
        {
          label: "Label",
          inputType: "text",
          value: "Other pupper",
          maxLength: 20,
        },
      ],
    },
    {
      ...schema.note1,
      // type: "note1",
      left: -424,
      top: 17,
      angle: 5,
      // name: "Note",
      id: "243d6255b17",
      // zIndex: 1,
      pinAngle: 53,
      pinColor: "yellow",
      inputs: [
        {
          label: "Text",
          maxLength: 200,
          inputType: "textarea",
          value:
            "Lorem ipsum dolor sit amet, usu mazim iuvaret in, ne eos virtute aliquid, nullam veritus imperdiet duo no. Iusto democritum at eam, pri omnis populo an. Id erat errem ullamcorper vel, vim in regione intellegat.",
        },
      ],
    },
    {
      ...schema.postit,
      // type: "postit",
      left: -95,
      top: -282,
      angle: 350,
      // name: "Post-It",
      id: "43d6255b170",
      // zIndex: 1,
      pinAngle: 20,
      pinColor: "red",
      inputs: [
        {
          label: "Text",
          inputType: "text",
          maxLength: 60,
          value: "Lorem ipsum dolor sit amet",
        },
      ],
    },
    {
      ...schema.photo2,
      // type: "photo2",
      id: "3d6255b1704",
      left: 128,
      top: 10,
      // width: 203, // 10.16cm x 20px = 203px
      // height: 305, //15.24cm x 20px = 305px
      angle: 355,
      aspect: 0.666,
      // name: "B&W Photo 1",
      // zIndex: 2,
      pinColor: "red",
      pinTop: "10px",
      pinLeft: "calc(50% - 10px)",
      inputs: [
        {
          label: "Image",
          inputType: "image",
          value:
            "https://www.gannett-cdn.com/presto/2019/06/11/USAT/bafed1d8-eda0-457a-8f6b-8fd4f3c421ec-061019-dobby-1280x720.jpg?crop=459,546,x0,y0&width=300&height=357&format=pjpg&auto=webp",
        },
      ],
    },
    {
      ...schema.newspaperColumn,
      // type: "newspaperColumn",
      left: -50,
      top: 112,
      height: 420, // user-resizeable
      angle: 0,
      // name: "Newspaper Column",
      id: "d6255b1704a",
      // zIndex: 1,
      pinAngle: 70,
      pinColor: "green",
      inputs: [
        {
          label: "Headline",
          inputType: "text",
          value: "Lorem ipsum dolor sit amet",
          maxLength: 20,
        },
        {
          label: "Text",
          inputType: "textarea",
          rows: 10,
          cols: 30,
          maxLength: 400,
          value: [
            "Lorem ipsum dolor sit amet, utroque percipit voluptaria vix an, eum in graeco splendide evertitur, ut vel errem putent. Id sit dico minim habemus, quo augue fastidii ea, ex eos essent adversarium vituperatoribus. In eam tale everti nonumes, vel at iriure equidem rationibus. Fugit omnesque an eum, dico sanctus duo id, est ne autem libris mandamus.",
            "Nec numquam ponderum at. Et possim doctus his, vel recusabo adversarium no, vim ea volutpat elaboraret. Duo no modo blandit percipit, qui falli homero ne, an mazim viderer pro. Cu probo fierent omittantur sea, eum persius disputando ne.",
          ].join("\r\n"),
        },
      ],
    },
    {
      ...schema.newspaperFrontPage1,
      // type: "newspaperFrontPage1",
      left: 345,
      top: -198,
      angle: 345,
      // name: "Newspaper Front Page 1",
      id: "6255b1704a7",
      // zIndex: 1,
      pinAngle: 70,
      pinColor: "green",
      inputs: [
        {
          label: "Headline",
          inputType: "text",
          value: "Lorem ipsum dolor sit amet",
          maxLength: 20,
        },
        {
          label: "Text",
          inputType: "textarea",
          rows: 10,
          cols: 30,
          maxLength: 400,
          value: [
            "Lorem ipsum dolor sit amet, utroque percipit voluptaria vix an, eum in graeco splendide evertitur, ut vel errem putent. Id sit dico minim habemus, quo augue fastidii ea, ex eos essent adversarium vituperatoribus. In eam tale everti nonumes, vel at iriure equidem rationibus. Fugit omnesque an eum, dico sanctus duo id, est ne autem libris mandamus.",
            "Nec numquam ponderum at. Et possim doctus his, vel recusabo adversarium no, vim ea volutpat elaboraret. Duo no modo blandit percipit, qui falli homero ne, an mazim viderer pro. Cu probo fierent omittantur sea, eum persius disputando ne.",
            "Elit consequat vis eu. Habemus electram imperdiet ne mea, cu purto dicat persequeris pri, odio quas integre ea nam. Et usu omittam postulant expetenda. Ut diam probatus philosophia pri. Omnis accusam intellegat eos cu.",
            "Te vitae tibique qui, commodo veritus no vis, te vis odio evertitur adipiscing. Duo an sanctus repudiare, id sea habeo vivendo, sed quod posse congue ei. Eos id oratio adipisci disputationi. Has iudico similique in, ad mea justo recteque. Eos in efficiendi quaerendum concludaturque, per at error tamquam erroribus. Atqui ullum salutandi et vim.",
            "Id quo tollit neglegentur. Wisi solum volumus his in, mei et feugait reprimique",
          ].join("\r\n"),
        },
        {
          label: "Image",
          inputType: "image",
          value:
            "https://cdn.salesfire.co.uk/media/e3a6cf8e-52c6-4c0a-b63b-cd7c08aa1667.jpeg",
        },
      ],
    },
  ],
  threads: [
    ["a7243d6255b", "7243d6255b1"],
    ["7243d6255b1", "d6255b1704a"],
    ["7243d6255b1", "6255b1704a7"],
    ["d6255b1704a", "3d6255b1704"],
    ["43d6255b170", "243d6255b17"],
  ],
};

console.dir(resetData);

// module.exports = { testItems, resetData };
export { testItems, resetData };
