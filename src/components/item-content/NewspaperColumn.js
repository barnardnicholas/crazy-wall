import React from "react";
import paperTexture from "../../assets/img/paper-texture-1.png";
import { splitText } from "../../utils/utils";
import "./Items.css";
import Pin from "./Pin";

const NewspaperColumn = (props) => {
  const { handleContentClick, handleMoveToFront, handleMoveToBack } = props;
  const {
    id,
    name,
    width,
    height,
    headline,
    text,
    pinAngle,
    pinColor,
    pinTop,
    pinLeft,
  } = props.data;
  //   const { id, name } = props.data;
  return (
    <div key={id} className={`content`} onClick={handleContentClick}>
      <div style={{ width, height, fontSize: `${width * 0.3}px` }}>
        <div
          className="newspaper-column bg-repeat"
          style={{ backgroundImage: `url(${paperTexture})` }}
        >
          <div className="newspaper-column-headline">{headline || ""}</div>
          <div className="newspaper-column-body">
            {splitText(text).map((t) => (
              <p>{t}</p>
            ))}
          </div>
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

export default NewspaperColumn;
