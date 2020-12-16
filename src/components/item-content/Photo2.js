import React from "react";
import "./Items.css";
import { inputs } from "../../data/item-schema";
const inputSchema = { ...inputs };

const Photo2 = (props) => {
  const {
    handleContentClick,
    handleMoveToFront,
    handleMoveToBack,
    handleToggleEditItem,
  } = props;
  const { id, width, height, imageUrl, inputs } = props.data;
  const imageInput = {
    ...inputSchema.image,
    ...inputs.filter((i) => i.label === "Image")[0],
  };
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
          style={{ backgroundImage: `url(${imageInput.value})` }}
        ></div>

        <div className="order-controls">
          <button onClick={handleMoveToFront}>F</button>
          <button onClick={handleMoveToBack}>B</button>
          <button
            onClick={() => {
              console.log(id);
              handleToggleEditItem(id);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Photo2;
