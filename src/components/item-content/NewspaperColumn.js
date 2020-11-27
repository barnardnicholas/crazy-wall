import React from "react";
import paperTexture from "../../assets/img/paper-texture-1.png";
import { splitText } from "../../utils/utils";
import "./Items.css";

const NewspaperColumn = (props) => {
  const { handleContentClick, handleMoveToFront, handleMoveToBack } = props;
  const { id, width, height, headline, text } = props.data;
  return (
    <div key={id} id={id} className={`content`} onClick={handleContentClick}>
      <div style={{ width, height, fontSize: `${width * 0.3}px` }}>
        <div
          className="newspaper-column bg-repeat"
          style={{ backgroundImage: `url(${paperTexture})` }}
        >
          <div className="newspaper-column-headline">{headline || ""}</div>
          <div className="newspaper-column-body">
            {splitText(text).map((t, i) => (
              <p key={`${id}-${i}`}>{t}</p>
            ))}
          </div>
        </div>

        <div className="order-controls">
          <button onClick={handleMoveToFront}>F</button>
          <button onClick={handleMoveToBack}>B</button>
        </div>
      </div>
    </div>
  );
};

export default NewspaperColumn;
