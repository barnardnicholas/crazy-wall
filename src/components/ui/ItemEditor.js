import React from "react";

const ItemEditor = () => {
  const formHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h4>Title</h4>
      <form onSubmit={formHandler}>
        <label>
          Label
          <input type="text"></input>
        </label>
      </form>
    </div>
  );
};

export default ItemEditor;
