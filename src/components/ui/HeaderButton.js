import React from "react";

const HeaderButton = (props) => {
  let handler = () => {
    console.log("No handler");
  };
  if (props.handler) handler = props.handler;
  return (
    <div className="header-button" onClick={handler}>
      {props.children}
    </div>
  );
};

export default HeaderButton;
