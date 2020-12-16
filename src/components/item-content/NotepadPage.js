import React from "react";
import notepadPage from "../../assets/img/notepad-page.png";
import "./Items.css";
import { inputs } from "../../data/item-schema";
const inputSchema = { ...inputs };

const NotepadPage = (props) => {
  const {
    handleContentClick,
    handleMoveToFront,
    handleMoveToBack,
    handleToggleEditItem,
  } = props;
  const { id, width, height, inputs } = props.data;
  const textInput = {
    ...inputSchema.textArea,
    ...inputs.filter((i) => i.label === "Text")[0],
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
          className="notepad-page bg-contain"
          style={{ backgroundImage: `url(${notepadPage})` }}
        >
          {textInput.value}
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

export default NotepadPage;
