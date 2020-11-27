import React from "react";
import polaroidFrame from "../../assets/img/polaroid-frame.png";
import "./Items.css";

const Polaroid = (props) => {
  const { handleContentClick, handleMoveToFront, handleMoveToBack } = props;
  const { id, name, width, height, imageUrl } = props.data;

  return (
    <div
      key={id}
      id={id}
      className={`content content1`}
      onClick={handleContentClick}
    >
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
      </div>
    </div>
  );
};

export default Polaroid;
