import React from "react";
import polaroidFrame from "../../assets/img/polaroid-frame.png";
import "./Items.css";

const PictureContent = (props) => {
  const { handleContentClick, handleMoveToFront, handleMoveToBack } = props;
  const { id, name, width, height, imageUrl } = props.data;
  //   const { id, name } = props.data;
  return (
    <div className={`content content1`} onClick={handleContentClick}>
      <div style={{ width, height }}>
        <div
          className="pic-polaroid bg-cover"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div
          className="bg-cover pic-frame-polaroid"
          style={{ backgroundImage: `url(${polaroidFrame})` }}
        ></div>
        {/* {name} */}

        <div className="order-controls">
          <button onClick={handleMoveToFront}>F</button>
          <button onClick={handleMoveToBack}>B</button>
        </div>
      </div>
    </div>
  );
};

export default PictureContent;
