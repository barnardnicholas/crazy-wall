import React from "react";
import ResizableContent from "./ResizableContent";
import itemComponents from "./item-content/itemComponents";
// import Draggable from "react-draggable";
// import { NoPanArea } from "react-zoomable-ui";

const BoardItem = (props) => {
  const {
    active,
    handleDrag,
    handleDragEnd,
    handleResize,
    handleResizeEnd,
    handleRotate,
    handleRotateEnd,
    zoomFactor,
  } = props;
  const {
    top,
    left,
    width,
    height,
    angle,
    zIndex,
    id,
    aspect,
    zoomable,
  } = props.data;

  const renderResizeableContent = () => {
    return (
      <ResizableContent
        key={id}
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
        zoomFactor={zoomFactor}
        zoomable={zoomable || null}
      >
        {itemComponents[props.data.type](props)}
      </ResizableContent>
    );
  };

  return (
    <>
      {/* {renderReactDraggable()} */}
      {renderResizeableContent()}
    </>
  );
};

export default BoardItem;
