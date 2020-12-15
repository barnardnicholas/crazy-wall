import React from "react";
import postIt1 from "../../assets/img/postit-1.png";
import "./Items.css";
import { inputs } from "../../data/item-schema";
const inputSchema = { ...inputs };

const NotepadPage = (props) => {
  const { handleContentClick, handleMoveToFront, handleMoveToBack } = props;
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
          className="postit bg-contain"
          style={{ backgroundImage: `url(${postIt1})` }}
        >
          {textInput.value}
        </div>

        <div className="order-controls">
          <button onClick={handleMoveToFront}>F</button>
          <button onClick={handleMoveToBack}>B</button>
        </div>
      </div>
    </div>
  );
};

export default NotepadPage;
