import React from "react";

const BoardUI = (props) => {
  const { resetData, writeData } = props.handlers;
  const { state } = props;
  return (
    <>
      <div className="header">
        <h1>Crazy Wall</h1>
        <button
          onClick={() => {
            writeData(state);
          }}
        >
          Write Data
        </button>
        <button onClick={resetData}>Reset Data</button>
        <div></div>
      </div>
    </>
  );
};

export default BoardUI;
