import React from "react";

const PictureContent = (props) => {
  const { handleContentClick } = props;
  const { id, name, imageUrl } = props.data;
  //   const { id, name } = props.data;
  return (
    <div
      className={`content content1 puppy item-${id}`}
      onClick={handleContentClick}
    >
      {name}
    </div>
  );
};

export default PictureContent;
