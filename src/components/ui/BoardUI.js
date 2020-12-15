import React from "react";
import HeaderButton from "./HeaderButton";
import { Link } from "@reach/router";
import ItemEditor from "./ItemEditor";
import Sidebar from "./Sidebar";

const BoardUI = (props) => {
  const { resetData, writeData, writeToTxt } = props.handlers;
  const { state } = props;
  return (
    <>
      {/* <Sidebar>
        <ItemEditor />
      </Sidebar> */}
      <div className="header">
        <Link to="/" className="app-title">
          Crazy Wall
        </Link>
        <HeaderButton
          onClick={() => {
            writeData(state);
          }}
        >
          Write Data
        </HeaderButton>
        <HeaderButton onClick={resetData}>Reset Data</HeaderButton>
        <HeaderButton
          onClick={() => {
            writeToTxt();
          }}
        >
          Save
        </HeaderButton>
      </div>
    </>
  );
};

export default BoardUI;
