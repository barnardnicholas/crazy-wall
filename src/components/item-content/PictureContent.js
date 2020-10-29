import React from "react";

const PictureContent = (props) => {
  const { handleContentClick, handleMoveToFront, handleMoveToBack } = props;
  const { id, name, imageUrl } = props.data;
  //   const { id, name } = props.data;
  return (
    <div
      className={`content content1 puppy`}
      onClick={handleContentClick}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {name}

      <div className="order-controls">
        <button onClick={handleMoveToFront}>Bring to Front</button>
        <button onClick={handleMoveToBack}>Move to Back</button>
      </div>
    </div>
  );
};

export default PictureContent;
