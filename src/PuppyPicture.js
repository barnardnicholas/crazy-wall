import React from "react";
import ResizableContent from "./ResizableContent";

const PuppyPicture = (props) => {
  return (
    <ResizableContent
      top={props.data.top}
      left={props.data.left}
      width={props.data.width}
      height={props.data.height}
      rotateAngle={props.data.angle}
      zIndex={props.zIndex}
      active={props.active}
      className="resize-1"
      handleDrag={(top, left) => {
        props.handleDrag(top, left, props.data.id);
      }}
      handleDragEnd={props.handleDragEnd}
      handleResize={(width, height, top, left) => {
        props.handleResize(width, height, top, left, "puppy1");
      }}
      handleResizeEnd={props.handleResizeEnd}
      handleRotate={(angle) => {
        props.handleRotate(angle, props.data.id);
      }}
      handleRotateEnd={props.handleRotateEnd}
    >
      <div
        className={`content content1 puppy item-${props.data.id}`}
        onClick={props.handleContentClick}
      >
        {props.data.name}
      </div>
    </ResizableContent>
  );
};

export default PuppyPicture;
