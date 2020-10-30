import React from "react";
import notepadPage from "../../assets/img/notepad-page.png";
import "./Items.css";
import Pin from "./Pin";

const NoteContent = (props) => {
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
  console.log(props.data);
  return (
    <div className={`content content1`} onClick={handleContentClick}>
      <div style={{ width, height, fontSize: `${height * 0.1}px` }}>
        <div
          className="notepad-page bg-contain"
          style={{ backgroundImage: `url(${notepadPage})` }}
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

export default NoteContent;
