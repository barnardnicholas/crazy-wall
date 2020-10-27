import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import "./RRD.css";
import ResizableContent from "./ResizableContent";

const RRD = () => {
  return (
    <Fragment>
      <ResizableContent
        top={100}
        left={100}
        width={100}
        height={100}
        rotateAngle={0}
        className="resize-1"
      >
        <div className="content content1 line-start">content 1</div>
      </ResizableContent>

      <ResizableContent
        top={100}
        left={300}
        width={300}
        height={150}
        rotateAngle={0}
        className="resize-2"
      >
        <div className="content content2 line-end">content 2</div>
      </ResizableContent>
    </Fragment>
  );
};

export default RRD;
