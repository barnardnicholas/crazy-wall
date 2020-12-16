import React from "react";
import polaroidFrame from "../../assets/img/polaroid-frame.png";
import "./Items.css";
import { inputs } from "../../data/item-schema";
const inputSchema = { ...inputs };

const Polaroid = (props) => {
  const {
    handleContentClick,
    handleMoveToFront,
    handleMoveToBack,
    handleToggleEditItem,
  } = props;
  const { id, name, width, height, inputs } = props.data;
  const imageInput = {
    ...inputSchema.image,
    ...inputs.filter((i) => i.label === "Image")[0],
  };
  const labelInput = {
    ...inputSchema.text,
    ...inputs.filter((i) => i.label === "Label")[0],
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
          className="pic-polaroid bg-cover"
          style={{ backgroundImage: `url(${imageInput.value})` }}
        ></div>
        <div
          className="bg-cover pic-frame-polaroid"
          style={{ backgroundImage: `url(${polaroidFrame})` }}
        ></div>
        <div className="pic-label-polaroid">{labelInput.value}</div>

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
        {/* <div className="item-edit-button">...</div> */}
      </div>
    </div>
  );
};

export default Polaroid;
