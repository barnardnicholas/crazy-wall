import React from "react";
import ResizableContent from "./ResizableContent";
import PictureContent from "./components/item-content/PictureContent";

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
      <PictureContent
        data={props.data}
        handleContentClick={handleContentClick}
      />
    </ResizableContent>
  );
};

export default BoardItem;
