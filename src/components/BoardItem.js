import React from "react";
import ResizableContent from "./ResizableContent";
import PictureContent from "./item-content/PictureContent";
import NotepadPage from "./item-content/NotepadPage";
import PostIt from "./item-content/PostIt";
import Draggable from "react-draggable";
import { NoPanArea } from "react-zoomable-ui";

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

  const renderResizeableContent = () => {
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

  const renderReactDraggable = () => {
    const rdStyle = {
      width,
      height,
      top,
      left,
      position: "absolute",
      transform: `rotate(${angle}deg)`,
    };
    const content = (
      <Draggable
        scale={1}
        disabled={active ? false : true}
        onDrag={(e, p) => {
          console.log(p);
          handleDrag(top, left, id);
        }}
      >
        <div className={active ? "active-item" : ""} style={rdStyle}>
          {renderItem()}
        </div>
      </Draggable>
    );

    if (active) return <NoPanArea>{content}</NoPanArea>;
    else return content;
  };

  return (
    <>
      {/* {renderReactDraggable()} */}
      {renderResizeableContent()}
    </>
  );
};

export default BoardItem;
