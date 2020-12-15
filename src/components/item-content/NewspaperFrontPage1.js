import React from "react";
import paperTexture from "../../assets/img/paper-texture-1.png";
import { splitText } from "../../utils/utils";
import "./Items.css";
import { inputs } from "../../data/item-schema";
const inputSchema = { ...inputs };

const NewspaperFrontPage1 = (props) => {
  const { handleContentClick, handleMoveToFront, handleMoveToBack } = props;
  const { id, width, height, inputs } = props.data;
  const headlineInput = {
    ...inputSchema.text,
    ...inputs.filter((i) => i.label === "Headline")[0],
  };
  const textInput = {
    ...inputSchema.textArea,
    ...inputs.filter((i) => i.label === "Text")[0],
  };
  const imageInput = {
    ...inputSchema.image,
    ...inputs.filter((i) => i.label === "Image")[0],
  };
  return (
    <div key={id} id={id} className={`content`} onClick={handleContentClick}>
      <div style={{ width, height, fontSize: `${height * 0.1}px` }}>
        <div
          className="newspaper-front-1 bg-repeat"
          style={{ backgroundImage: `url(${paperTexture})` }}
        >
          <div className="newspaper-front-1-name-bar">
            <div className="newspaper-front-1-name-box">
              Local news of interest to all
            </div>
            <div>
              <div className="newspaper-front-1-name">The Old Post</div>
              <div className="newspaper-front-1-strap">
                Illustrated Weekly Newspaper
              </div>
            </div>
            <div className="newspaper-front-1-name-box">
              Progressive Weekly Published Friday
            </div>
          </div>

          <div className="newspaper-front-1-bar">
            <div style={{ marginLeft: "1em" }}>Est. 1869</div>
            <div>Wednesday, November 24th, 1935</div>
            <div style={{ marginRight: "1em" }}>Price: 10¢</div>
          </div>
          <div className="newspaper-front-1-headline">
            {headlineInput.value || ""}
          </div>
          <div className="newspaper-front-1-body">
            {splitText(textInput.value).map((t, i) => (
              <p key={`${id}-${i}`}>{t}</p>
            ))}
          </div>
          <div
            className="newspaper-front-1-image bg-cover"
            style={{ backgroundImage: `url(${imageInput.value})` }}
          ></div>
        </div>

        <div className="order-controls">
          <button onClick={handleMoveToFront}>F</button>
          <button onClick={handleMoveToBack}>B</button>
        </div>
      </div>
    </div>
  );
};

export default NewspaperFrontPage1;
