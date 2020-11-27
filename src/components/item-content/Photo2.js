import React from "react";
import "./Items.css";

const Photo2 = (props) => {
  const { handleContentClick, handleMoveToFront, handleMoveToBack } = props;
  const { id, width, height, imageUrl } = props.data;
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

        <div className="order-controls">
          <button onClick={handleMoveToFront}>F</button>
          <button onClick={handleMoveToBack}>B</button>
        </div>
      </div>
    </div>
  );
};

export default Photo2;
