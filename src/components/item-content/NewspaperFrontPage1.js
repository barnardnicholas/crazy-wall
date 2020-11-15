import React from "react";
import paperTexture from "../../assets/img/paper-texture-1.png";
import { splitText } from "../../utils/utils";
import "./Items.css";
import Pin from "./Pin";

const NewspaperFrontPage1 = (props) => {
  const { handleContentClick, handleMoveToFront, handleMoveToBack } = props;
  const {
    id,
    name,
    width,
    height,
    headline,
    text,
    imageURL,
    pinAngle,
    pinColor,
    pinTop,
    pinLeft,
  } = props.data;
  //   const { id, name } = props.data;
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
          <div className="newspaper-front-1-headline">{headline || ""}</div>
          <div className="newspaper-front-1-body">
            {splitText(text).map((t, i) => (
              <p key={`${id}-${i}`}>{t}</p>
            ))}
          </div>
          <div
            className="newspaper-front-1-image bg-cover"
            style={{ backgroundImage: `url(${imageURL})` }}
          ></div>
        </div>

        <div className="order-controls">
          <button onClick={handleMoveToFront}>F</button>
          <button onClick={handleMoveToBack}>B</button>
        </div>
        <Pin
          pinColor={pinColor}
          pinAngle={pinAngle}
          pinTop={pinTop}
          pinLeft={pinLeft}
          id={id}
        />
      </div>
    </div>
  );
};

export default NewspaperFrontPage1;
