import React, { Fragment, useState } from "react";
import ResizableRect from "react-resizable-rotatable-draggable";

const ResizableContent = (props) => {
  const [width, setWidth] = useState(props.width);
  const [height, setHeight] = useState(props.height);
  const [top, setTop] = useState(props.top);
  const [left, setLeft] = useState(props.left);
  const [rotateAngle, setRotateAngle] = useState(props.rotateAngle);

  console.log(props.width);
  const contentStyle = {
    top,
    left,
    width,
    height,
    position: "absolute",
    transform: `rotate(${rotateAngle}deg)`,
    // zIndex: props.zIndex,
  };

  const handleResize = (style, isShiftKey, type) => {
    const { top, left, width, height } = style;
    setWidth(Math.round(width));
    setHeight(Math.round(height));
    setTop(Math.round(top));
    setLeft(Math.round(left));
    props.handleResize(width, height, top, left);
  };

  const handleResizeEnd = () => {
    props.handleResizeEnd();
  };

  const handleRotate = (rotateAngle) => {
    setRotateAngle(rotateAngle);
    props.handleRotate(rotateAngle);
  };

  const handleRotateEnd = () => {
    props.handleRotateEnd();
  };

  const handleDrag = (deltaX, deltaY) => {
    setLeft(left + deltaX);
    setTop(top + deltaY);
    props.handleDrag(top + deltaY, left + deltaX);
  };

  const handleDragEnd = () => {
    props.handleDragEnd();
  };

  return (
    <Fragment>
      <div style={contentStyle}>{props.children}</div>

      {props.active ? (
        <ResizableRect
          top={top}
          rotatable
          left={left}
          aspectRatio={props.aspect}
          minWidth={10}
          width={width}
          minHeight={10}
          // zIndex={props.zIndex}
          height={height}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onRotate={handleRotate}
          onRotateEnd={handleRotateEnd}
          onResize={handleResize}
          onResizeEnd={handleResizeEnd}
          zoomable="nw, ne, se, sw"
          rotateAngle={rotateAngle}
        />
      ) : null}
    </Fragment>
  );
};

export default ResizableContent;
