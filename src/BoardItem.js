import React from "react";
import ResizableContent from "./ResizableContent";
import PictureContent from "./components/item-content/PictureContent";
import NotepadPage from "./components/item-content/NotepadPage";
import PostIt from "./components/item-content/PostIt";

const BoardItem = (props) => {
  const {
    active,
    handleDrag,
    handleDragEnd,
    handleResize,
    handleResizeEnd,
    handleRotate,
    handleRotateEnd,
    handleContentClick,
    handleMoveToFront,
    handleMoveToBack,
  } = props;
  const {
    type,
    top,
    left,
    width,
    height,
    angle,
    zIndex,
    id,
    name,
    aspect,
  } = props.data;

  const renderItem = () => {
    if (props.data.type === "photo") {
      return (
        <PictureContent
          key={props.data.id}
          data={props.data}
          handleContentClick={handleContentClick}
          handleMoveToFront={handleMoveToFront}
          handleMoveToBack={handleMoveToBack}
        />
      );
    } else if (props.data.type === "note") {
      return (
        <NotepadPage
          key={props.data.id}
          data={props.data}
          handleContentClick={handleContentClick}
          handleMoveToFront={handleMoveToFront}
          handleMoveToBack={handleMoveToBack}
        />
      );
    } else if (props.data.type === "postit") {
      return (
        <PostIt
          key={props.data.id}
          data={props.data}
          handleContentClick={handleContentClick}
          handleMoveToFront={handleMoveToFront}
          handleMoveToBack={handleMoveToBack}
        />
      );
    }
  };

  return (
    <ResizableContent
      top={top}
      left={left}
      width={width}
      height={height}
      rotateAngle={angle}
      zIndex={zIndex}
      aspect={aspect}
      active={active}
      handleDrag={(top, left) => {
        handleDrag(top, left, id);
      }}
      handleDragEnd={handleDragEnd}
      handleResize={(width, height, top, left) => {
        handleResize(width, height, top, left, id);
      }}
      handleResizeEnd={handleResizeEnd}
      handleRotate={(angle) => {
        handleRotate(angle, id);
      }}
      handleRotateEnd={handleRotateEnd}
    >
      {renderItem()}
    </ResizableContent>
  );
};

export default BoardItem;
