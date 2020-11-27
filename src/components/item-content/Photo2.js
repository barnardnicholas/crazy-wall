import React from "react";
import "./Items.css";
import Pin from "./Pin";

const Photo2 = (props) => {
  const { handleContentClick, handleMoveToFront, handleMoveToBack } = props;
  const {
    id,
    // name,
    width,
    height,
    imageUrl,
    pinAngle,
    pinColor,
    pinTop,
    pinLeft,
  } = props.data;
  //   const { id, name } = props.data;
  return (
    <div
      key={id}
      id={id}
      className={`content content1`}
      onClick={handleContentClick}
    >
      <div style={{ width, height, fontSize: `${height * 0.1}px` }}>
        <div
          className="photo2 bg-cover"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        {/* <div className="pic-label-polaroid">{name}</div> */}

        <div className="order-controls">
          <button onClick={handleMoveToFront}>F</button>
          <button onClick={handleMoveToBack}>B</button>
        </div>
        {/* <Pin
          pinColor={pinColor}
          pinAngle={pinAngle}
          pinTop={pinTop}
          pinLeft={pinLeft}
          id={id}
        /> */}
      </div>
    </div>
  );
};

export default Photo2;
