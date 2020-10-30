import React from "react";
import polaroidFrame from "../../assets/img/polaroid-frame.png";
import "./Items.css";
import Pin from "./Pin";

const PictureContent = (props) => {
  const { handleContentClick, handleMoveToFront, handleMoveToBack } = props;
  const { id, name, width, height, imageUrl, pinAngle, pinColor } = props.data;
  //   const { id, name } = props.data;
  return (
    <div className={`content content1`} onClick={handleContentClick}>
      <div style={{ width, height, fontSize: `${height * 0.1}px` }}>
        <div
          className="pic-polaroid bg-cover"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div
          className="bg-cover pic-frame-polaroid"
          style={{ backgroundImage: `url(${polaroidFrame})` }}
        ></div>
        <div className="pic-label-polaroid">{name}</div>

        <div className="order-controls">
          <button onClick={handleMoveToFront}>F</button>
          <button onClick={handleMoveToBack}>B</button>
        </div>
        <Pin pinColor={pinColor} pinAngle={pinAngle} />
      </div>
    </div>
  );
};

export default PictureContent;
