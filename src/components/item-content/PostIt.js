import React from "react";
import postIt1 from "../../assets/img/postit-1.png";
import "./Items.css";
import Pin from "./Pin";

const NotepadPage = (props) => {
  const { handleContentClick, handleMoveToFront, handleMoveToBack } = props;
  const {
    id,
    name,
    width,
    height,
    text,
    pinAngle,
    pinColor,
    pinTop,
    pinLeft,
  } = props.data;
  //   const { id, name } = props.data;
  return (
    <div className={`content content1`} onClick={handleContentClick}>
      <div style={{ width, height, fontSize: `${height * 0.1}px` }}>
        <div
          className="postit bg-contain"
          style={{ backgroundImage: `url(${postIt1})` }}
        >
          {text}
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
        />
      </div>
    </div>
  );
};

export default NotepadPage;
