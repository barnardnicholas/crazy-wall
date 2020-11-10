import React, { Suspense } from "react";
import ResizableContent from "./ResizableContent";
// import Draggable from "react-draggable";
// import { NoPanArea } from "react-zoomable-ui";

const Polaroid = React.lazy(() => import("./item-content/Polaroid"));
const Photo2 = React.lazy(() => import("./item-content/Photo2"));
const NotepadPage = React.lazy(() => import("./item-content/NotepadPage"));
const PostIt = React.lazy(() => import("./item-content/PostIt"));

const items = {
  photo1: (props) => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Polaroid
          key={props.data.id}
          data={props.data}
          handleContentClick={props.handleContentClick}
          handleMoveToFront={props.handleMoveToFront}
          handleMoveToBack={props.handleMoveToBack}
        />
      </Suspense>
    );
  },
  photo2: (props) => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Photo2
          key={props.data.id}
          data={props.data}
          handleContentClick={props.handleContentClick}
          handleMoveToFront={props.handleMoveToFront}
          handleMoveToBack={props.handleMoveToBack}
        />
      </Suspense>
    );
  },
  postit: (props) => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <PostIt
          key={props.data.id}
          data={props.data}
          handleContentClick={props.handleContentClick}
          handleMoveToFront={props.handleMoveToFront}
          handleMoveToBack={props.handleMoveToBack}
        />
      </Suspense>
    );
  },
  note1: (props) => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <NotepadPage
          key={props.data.id}
          data={props.data}
          handleContentClick={props.handleContentClick}
          handleMoveToFront={props.handleMoveToFront}
          handleMoveToBack={props.handleMoveToBack}
        />
      </Suspense>
    );
  },
};

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
        zoomFactor={props.zoomFactor}
      >
        {items[props.data.type](props)}
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
