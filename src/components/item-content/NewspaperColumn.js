import React from "react";
import paperTexture from "../../assets/img/paper-texture-1.png";
import { splitText } from "../../utils/utils";
import "./Items.css";
import { inputs } from "../../data/item-schema";
const inputSchema = { ...inputs };

const NewspaperColumn = (props) => {
  const {
    handleContentClick,
    handleMoveToFront,
    handleMoveToBack,
    handleToggleEditItem,
  } = props;
  const { id, width, height, inputs } = props.data;
  const headlineInput = {
    ...inputSchema.text,
    ...inputs.filter((i) => i.label === "Headline")[0],
  };
  const textInput = {
    ...inputSchema.textArea,
    ...inputs.filter((i) => i.label === "Text")[0],
  };
  return (
    <div key={id} id={id} className={`content`} onClick={handleContentClick}>
      <div style={{ width, height, fontSize: `${width * 0.3}px` }}>
        <div
          className="newspaper-column bg-repeat"
          style={{ backgroundImage: `url(${paperTexture})` }}
        >
          <div className="newspaper-column-headline">
            {headlineInput.value || ""}
          </div>
          <div className="newspaper-column-body">
            {splitText(textInput.value).map((t, i) => (
              <p key={`${id}-${i}`}>{t}</p>
            ))}
          </div>
        </div>

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

export default NewspaperColumn;
