import React from "react";
import HeaderButton from "./HeaderButton";
import { Link } from "@reach/router";
import ItemEditor from "./ItemEditor";
import ItemAdder from "./ItemAdder";
import Sidebar from "./Sidebar";

const BoardUI = (props) => {
  const {
    resetData,
    writeData,
    writeToTxt,
    handleUpdateItem,
    setEditingItem,
    addNewItem,
  } = props.handlers;
  const { state } = props;

  const renderItemEditor = () => {
    const thisItem = state.items.filter((i) => i.id === state.editingItem)[0];
    if (thisItem) {
      return (
        <Sidebar>
          <ItemEditor
            item={thisItem}
            handleUpdateItem={handleUpdateItem}
            setEditingItem={setEditingItem}
          />
        </Sidebar>
      );
    } else return null;
  };

  const renderItemAdder = () => {
    const thisItem = state.items.filter((i) => i.id === state.editingItem)[0];
    return (
      <Sidebar>
        <ItemAdder
          item={thisItem}
          addNewItem={addNewItem}
          setEditingItem={setEditingItem}
        />
      </Sidebar>
    );
  };

  const renderSideBar = () => {
    if (state.editMode === "editItem") return renderItemEditor();
    else if (state.editMode === "addItem") return renderItemAdder();
  };

  return (
    <>
      {renderSideBar()}

      <div className="header">
        <Link to="/" className="app-title">
          Crazy Wall
        </Link>
        <HeaderButton
          handler={() => {
            writeData(state);
          }}
        >
          Write Data
        </HeaderButton>
        <HeaderButton onClick={resetData}>Reset Data</HeaderButton>
        <HeaderButton
          handler={() => {
            writeToTxt();
          }}
        >
          Save
        </HeaderButton>

        <HeaderButton
          handler={() => {
            addNewItem("postit", 0, 0);
          }}
        >
          Add PostIt
        </HeaderButton>
        <HeaderButton
          handler={() => {
            addNewItem("photo1", 0, 0);
          }}
        >
          Add Polaroid
        </HeaderButton>
      </div>
    </>
  );
};

export default BoardUI;
