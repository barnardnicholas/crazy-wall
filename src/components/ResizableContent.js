import React, { Fragment, useState } from "react";
import ResizableRect from "react-resizable-rotatable-draggable";
import { NoPanArea } from "react-zoomable-ui";

const ResizableContent = (props) => {
  const [width, setWidth] = useState(props.width);
  const [height, setHeight] = useState(props.height);
  const [top, setTop] = useState(props.top);
  const [left, setLeft] = useState(props.left);
  const [rotateAngle, setRotateAngle] = useState(props.rotateAngle);

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
    setLeft(left + deltaX / props.zoomFactor);
    setTop(top + deltaY / props.zoomFactor);
    props.handleDrag(
      top + deltaY / props.zoomFactor,
      left + deltaX / props.zoomFactor
    );
  };

  const handleDragEnd = () => {
    props.handleDragEnd();
  };

  return (
    <Fragment>
      <div style={contentStyle}>{props.children}</div>

      {props.active ? (
        <NoPanArea>
          <ResizableRect
            top={top}
            rotatable
            left={left}
            aspectRatio={props.aspect}
            minWidth={10}
            width={width}
            minHeight={10}
            height={height}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            onRotate={handleRotate}
            onRotateEnd={handleRotateEnd}
            onResize={handleResize}
            onResizeEnd={handleResizeEnd}
            zoomable={props.zoomable || ""}
            rotateAngle={rotateAngle}
          />
        </NoPanArea>
      ) : null}
    </Fragment>
  );
};

export default ResizableContent;
