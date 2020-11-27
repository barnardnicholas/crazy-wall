import React from "react";
import notepadPage from "../../assets/img/notepad-page.png";
import "./Items.css";

const NotepadPage = (props) => {
  const { handleContentClick, handleMoveToFront, handleMoveToBack } = props;
  const { id, width, height, text } = props.data;
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
          {text}
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
