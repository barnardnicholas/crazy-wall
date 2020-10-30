import React from "react";
import ResizableContent from "./ResizableContent";
import PictureContent from "./components/item-content/PictureContent";
import NoteContent from "./components/item-content/NoteContent";

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
      {props.data.type === "photo" ? (
        <PictureContent
          key={props.data.id}
          data={props.data}
          handleContentClick={handleContentClick}
          handleMoveToFront={handleMoveToFront}
          handleMoveToBack={handleMoveToBack}
        />
      ) : (
        <NoteContent
          key={props.data.id}
          data={props.data}
          handleContentClick={handleContentClick}
          handleMoveToFront={handleMoveToFront}
          handleMoveToBack={handleMoveToBack}
        />
      )}
    </ResizableContent>
  );
};

export default BoardItem;
