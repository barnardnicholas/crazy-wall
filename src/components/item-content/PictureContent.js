import React from "react";

const PictureContent = (props) => {
  const { handleContentClick, handleMoveToFront } = props;
  const { id, name, imageUrl } = props.data;
  //   const { id, name } = props.data;
  return (
    <div
      className={`content content1 puppy`}
      onClick={handleContentClick}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {name}
      <button onClick={handleMoveToFront}>Front</button>
    </div>
  );
};

export default PictureContent;
