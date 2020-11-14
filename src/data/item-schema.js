export const photo1 = {
  type: "photo1",
  imageUrl: "src/assets/img/Light-Chequerboard.svg",
  left: 0,
  top: 0,
  width: 180, // 9cm x 20px = 180px
  height: 219, //10.94cm x 20px = 218.8px
  angle: 0,
  aspect: 0.823,
  name: "Puppy 1",
  zIndex: 2,
  pinColor: "red",
  pinTop: "10px",
  pinLeft: "calc(50% - 10px)",
};
export const photo2 = {
  type: "photo2",
  imageUrl: "src/assets/img/Light-Chequerboard.svg",
  left: 0,
  top: 0,
  width: 203, // 10.16cm x 20px = 203px
  height: 305, //15.24cm x 20px = 305px
  angle: 0,
  aspect: 0.666,
  name: "B&W Photo 1",
  zIndex: 2,
  pinColor: "red",
  pinTop: "10px",
  pinLeft: "calc(50% - 10px)",
};
export const note1 = {
  type: "note1",
  text:
    "Lorem ipsum dolor sit amet, usu mazim iuvaret in, ne eos virtute aliquid, nullam veritus imperdiet duo no. Iusto democritum at eam, pri omnis populo an. Id erat errem ullamcorper vel, vim in regione intellegat.",
  left: 0,
  top: 0,
  width: 300, // 15cm x 20px = 300px
  height: 417, // 20.83cm x 20px = 416.6px
  angle: 0,
  aspect: 0.72,
  name: "Note",
  zIndex: 1,
  pinColor: "red",
  pinTop: "20px",
  pinLeft: "calc(50% - 10px)",
};
export const postit = {
  type: "postit",
  text: "Lorem ipsum dolor sit amet",
  left: 0,
  top: 0,
  width: 152, //7.6cm x 20px = 152px
  height: 150, //7.52cm x 20px = 150.4px
  angle: 0,
  aspect: 1.01,
  name: "Post-It",
  zIndex: 1,
  pinColor: "red",
  pinTop: "8%",
  pinLeft: "calc(50% - 10px)",
};

export const newspaperColumn = {
  type: "newspaperColumn",
  headline: "Lorem ipsum dolor sit amet",
  text: [
    "Lorem ipsum dolor sit amet, utroque percipit voluptaria vix an, eum in graeco splendide evertitur, ut vel errem putent. Id sit dico minim habemus, quo augue fastidii ea, ex eos essent adversarium vituperatoribus. In eam tale everti nonumes, vel at iriure equidem rationibus. Fugit omnesque an eum, dico sanctus duo id, est ne autem libris mandamus.",
    "Nec numquam ponderum at. Et possim doctus his, vel recusabo adversarium no, vim ea volutpat elaboraret. Duo no modo blandit percipit, qui falli homero ne, an mazim viderer pro. Cu probo fierent omittantur sea, eum persius disputando ne.",
  ].join("\r\n"),
  left: 0,
  top: 0,
  width: 150,
  height: 420,
  angle: 0,
  aspect: null,
  name: "Note",
  zIndex: 1,
  pinColor: "red",
  pinTop: "5px",
  pinLeft: "calc(50% - 10px)",
  zoomable: "s",
};
