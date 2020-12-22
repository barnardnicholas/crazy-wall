export const board = {
  lastInteraction: 0,
  dataLoaded: false,
  activeItem: null,
  editingItem: null,
  centerX: 691,
  centerY: 432,
  zoomFactor: 0.66,
  items: [],
  threads: [],
};

export const inputs = {
  text: {
    label: "Text",
    inputType: "text",
    value: "Lorem ipsum",
    maxLength: 20,
  },
  textArea: {
    label: "Text Area",
    inputType: "textarea",
    rows: 10,
    cols: 30,
    maxLength: 200,
    value:
      "Lorem ipsum dolor sit amet, usu mazim iuvaret in, ne eos virtute aliquid, nullam veritus imperdiet duo no. Iusto democritum at eam, pri omnis populo an. Id erat errem ullamcorper vel, vim in regione intellegat.",
  },
  image: {
    label: "Image",
    inputType: "image",
    value: "src/assets/img/Light-Chequerboard.svg",
  },
};

const item = {
  id: null,
  type: null,
  left: 0,
  top: 0,
  width: 100,
  height: 100,
  angle: 0,
  aspect: 1,
  name: "Item",
  zIndex: 1,
  pinColor: "red",
  zoomable: "",
  pinOffsetTop: 10,
  pinOffsetLeft: 50,
};

export const photo1 = {
  ...item,
  type: "photo1",
  inputs: [
    {
      ...inputs.image,
      label: "Image",
      value: "src/assets/img/Light-Chequerboard.svg",
    },
    {
      ...inputs.text,
      label: "Label",
      maxLength: 20,
    },
  ],
  width: 180, // 9cm x 20px = 180px
  height: 219, //10.94cm x 20px = 218.8px
  aspect: 0.823,
  name: "Puppy 1",
  zIndex: 2,
  pinOffsetTop: 10,
  pinOffsetLeft: 90,
};
export const photo2 = {
  ...item,
  type: "photo2",
  inputs: [
    {
      ...inputs.image,
      label: "Image",
      value: "src/assets/img/Light-Chequerboard.svg",
    },
  ],
  width: 203, // 10.16cm x 20px = 203px
  height: 305, //15.24cm x 20px = 305px
  aspect: 0.666,
  name: "B&W Photo 1",
  zIndex: 2,
  pinOffsetTop: 10,
  pinOffsetLeft: 101.5,
};
export const note1 = {
  ...item,
  type: "note1",
  width: 300, // 15cm x 20px = 300px
  height: 417, // 20.83cm x 20px = 416.6px
  aspect: 0.72,
  name: "Note",
  pinOffsetTop: 20,
  pinOffsetLeft: 150,
  inputs: [
    {
      ...inputs.textArea,
      label: "Text",
      maxLength: 500,
      value:
        "Lorem ipsum dolor sit amet, usu mazim iuvaret in, ne eos virtute aliquid, nullam veritus imperdiet duo no. Iusto democritum at eam, pri omnis populo an. Id erat errem ullamcorper vel, vim in regione intellegat.",
    },
  ],
};
export const postit = {
  ...item,
  type: "postit",
  width: 152, //7.6cm x 20px = 152px
  height: 150, //7.52cm x 20px = 150.4px
  aspect: 1.01,
  name: "Post-It",
  pinOffsetTop: 13,
  pinOffsetLeft: 76,
  inputs: [
    {
      ...inputs.textArea,
      label: "Text",
      maxLength: 70,
      value: "Lorem ipsum dolor sit amet",
    },
  ],
};
export const newspaperColumn = {
  ...item,
  type: "newspaperColumn",
  width: 150,
  height: 420,
  // angle: 0,
  aspect: null,
  name: "Newspaper Column",
  zoomable: "s",
  pinOffsetTop: 5,
  pinOffsetLeft: 75,
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
      maxLength: 1000,
      value: [
        "Lorem ipsum dolor sit amet, utroque percipit voluptaria vix an, eum in graeco splendide evertitur, ut vel errem putent. Id sit dico minim habemus, quo augue fastidii ea, ex eos essent adversarium vituperatoribus. In eam tale everti nonumes, vel at iriure equidem rationibus. Fugit omnesque an eum, dico sanctus duo id, est ne autem libris mandamus.",
        "Nec numquam ponderum at. Et possim doctus his, vel recusabo adversarium no, vim ea volutpat elaboraret. Duo no modo blandit percipit, qui falli homero ne, an mazim viderer pro. Cu probo fierent omittantur sea, eum persius disputando ne.",
      ].join("\r\n"),
    },
  ],
};
export const newspaperFrontPage1 = {
  ...item,
  type: "newspaperFrontPage1",
  width: 640,
  height: 420,
  // angle: 0,
  aspect: 1.524,
  name: "Newspaper Front Page 1",
  pinOffsetTop: 5,
  pinOffsetLeft: 320,
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
      value: "src/assets/img/Light-Chequerboard.svg",
    },
  ],
};

const databaseSchema = {
  users: {
    HPAts2xCsLdT66tshh1Gw0JHHUs4d: {
      uid: "HPAts2xCsLdT66tshh1Gw0JHHUs4d",
      displayName: "Name",
      photoURL:
        "https://s3.eu-west-1.amazonaws.com/bmd-production/uploads/f0c2bbbce63db956ce79a0e8079d2fc3.jpg",
      email: "name@email.com",
      emailVerified: true,
      phoneNumber: "+441619291888",
      isAnonymous: false,
      boards: {
        X7RSpA0CVDmPw5IzAAAC: {
          lastInteraction: 0,
          centerX: 691,
          centerY: 432,
          zoomFactor: 0.66,
        },
      },
    },
  },
  boards: {
    X7RSpA0CVDmPw5IzAAAC: {
      lastInteraction: 0,
      dataLoaded: false,
      activeItem: null,
      centerX: 691,
      centerY: 432,
      zoomFactor: 0.66,
      items: [
        {
          type: "photo1",
          imageUrl:
            "https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/happy-puppy-xlarge.jpg?imwidth=1200",
          left: -457,
          top: -384,
          // width: 180, // 9cm x 20px = 180px
          // height: 219, //10.94cm x 20px = 218.8px
          angle: 355,
          // aspect: 0.823,
          name: "Puppy 1",
          id: "puppy1",
          zIndex: 2,
          pinAngle: 180,
          pinColor: "red",
          // pinTop: "10px",
          // pinLeft: "calc(50% - 10px)",
        },
        {
          type: "photo1",
          imageUrl:
            "https://www.ardengrange.com/sites/admin/plugins/elfinder/files/ardengrange/Nutrition%20and%20Advice%20section/Fact%20Sheets%20section/Canine%20Fact%20Sheets/Puppy%20section/Puppy%20guide%20images/Scruffy%20pup.jpg",
          left: 197,
          top: -365,
          // width: 180,
          // height: 219,
          angle: 25,
          // aspect: 0.823,
          name: "Puppy 2",
          id: "puppy2",
          zIndex: 1,
          pinAngle: 90,
          pinColor: "green",
          // pinTop: "10px",
          // pinLeft: "calc(50% - 10px)",
        },
        {
          type: "note1",
          text:
            "Lorem ipsum dolor sit amet, usu mazim iuvaret in, ne eos virtute aliquid, nullam veritus imperdiet duo no. Iusto democritum at eam, pri omnis populo an. Id erat errem ullamcorper vel, vim in regione intellegat.",
          left: -424,
          top: 17,
          // width: 300, // 15cm x 20px = 300px
          // height: 417, // 20.83cm x 20px = 416.6px
          angle: 5,
          // aspect: 0.72,
          name: "Note",
          id: "note1",
          zIndex: 1,
          pinAngle: 53,
          pinColor: "yellow",
          // pinTop: "20px",
          // pinLeft: "calc(50% - 10px)",
        },
        {
          type: "postit",
          text: "Lorem ipsum dolor sit amet",
          left: -95,
          top: -282,
          // width: 152, //7.6cm x 20px = 152px
          // height: 150, //7.52cm x 20px = 150.4px
          angle: 350,
          // aspect: 1.01,
          name: "Post-It",
          id: "postit1",
          zIndex: 1,
          pinAngle: 20,
          pinColor: "red",
          // pinTop: "8%",
          // pinLeft: "calc(50% - 10px)",
        },
        {
          type: "photo2",
          id: "photo2-1",
          imageUrl:
            "https://www.gannett-cdn.com/presto/2019/06/11/USAT/bafed1d8-eda0-457a-8f6b-8fd4f3c421ec-061019-dobby-1280x720.jpg?crop=459,546,x0,y0&width=300&height=357&format=pjpg&auto=webp",
          left: 128,
          top: 10,
          width: 203, // 10.16cm x 20px = 203px
          height: 305, //15.24cm x 20px = 305px
          angle: 355,
          aspect: 0.666,
          name: "B&W Photo 1",
          zIndex: 2,
          pinColor: "red",
          pinTop: "10px",
          pinLeft: "calc(50% - 10px)",
        },
        {
          type: "newspaperColumn",
          headline: "Lorem ipsum dolor sit amet",
          text: [
            "Lorem ipsum dolor sit amet, utroque percipit voluptaria vix an, eum in graeco splendide evertitur, ut vel errem putent. Id sit dico minim habemus, quo augue fastidii ea, ex eos essent adversarium vituperatoribus. In eam tale everti nonumes, vel at iriure equidem rationibus. Fugit omnesque an eum, dico sanctus duo id, est ne autem libris mandamus.",
            "Nec numquam ponderum at. Et possim doctus his, vel recusabo adversarium no, vim ea volutpat elaboraret. Duo no modo blandit percipit, qui falli homero ne, an mazim viderer pro. Cu probo fierent omittantur sea, eum persius disputando ne.",
          ].join("\r\n"),
          left: -50,
          top: 112,
          height: 420, // user-resizeable
          angle: 0,
          name: "Newspaper Column",
          id: "newspaper-column-1",
          zIndex: 1,
          pinAngle: 70,
          pinColor: "green",
        },
        {
          type: "newspaperFrontPage1",
          headline: "Lorem ipsum dolor sit amet",
          text: [
            "Lorem ipsum dolor sit amet, utroque percipit voluptaria vix an, eum in graeco splendide evertitur, ut vel errem putent. Id sit dico minim habemus, quo augue fastidii ea, ex eos essent adversarium vituperatoribus. In eam tale everti nonumes, vel at iriure equidem rationibus. Fugit omnesque an eum, dico sanctus duo id, est ne autem libris mandamus.",
            "Nec numquam ponderum at. Et possim doctus his, vel recusabo adversarium no, vim ea volutpat elaboraret. Duo no modo blandit percipit, qui falli homero ne, an mazim viderer pro. Cu probo fierent omittantur sea, eum persius disputando ne.",
            "Elit consequat vis eu. Habemus electram imperdiet ne mea, cu purto dicat persequeris pri, odio quas integre ea nam. Et usu omittam postulant expetenda. Ut diam probatus philosophia pri. Omnis accusam intellegat eos cu.",
            "Te vitae tibique qui, commodo veritus no vis, te vis odio evertitur adipiscing. Duo an sanctus repudiare, id sea habeo vivendo, sed quod posse congue ei. Eos id oratio adipisci disputationi. Has iudico similique in, ad mea justo recteque. Eos in efficiendi quaerendum concludaturque, per at error tamquam erroribus. Atqui ullum salutandi et vim.",
            "Id quo tollit neglegentur. Wisi solum volumus his in, mei et feugait reprimique consectetuer. Et nam utinam laboramus, vis causae fuisset persequeris cu. Aperiri vulputate vituperata sed ea, tantas conceptam an mei, ei duo malorum nostrud debitis. Vel iriure docendi ullamcorper ei.",
          ].join("\r\n"),
          imageURL:
            "https://cdn.salesfire.co.uk/media/e3a6cf8e-52c6-4c0a-b63b-cd7c08aa1667.jpeg",
          left: 345,
          top: -198,
          angle: 345,
          name: "Newspaper Front Page 1",
          id: "newspaper-front-1",
          zIndex: 1,
          pinAngle: 70,
          pinColor: "green",
        },
      ],
      lines: [["pin-puppy1", "pin-puppy2"]],
    },
  },
};
