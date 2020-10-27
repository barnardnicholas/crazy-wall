import React, { Component } from "react";
import ResizableContent from "./ResizableContent";

class PuppyPicture extends Component {
  render() {
    return (
      <ResizableContent
        top={this.props.data.top}
        left={this.props.data.left}
        width={this.props.data.width}
        height={this.props.data.height}
        rotateAngle={this.props.data.angle}
        className="resize-1"
        handleDrag={(top, left) => {
          this.props.handleDrag(top, left, this.props.data.id);
        }}
        handleDragEnd={this.props.handleDragEnd}
        handleResize={(width, height, top, left) => {
          this.props.handleResize(width, height, top, left, "puppy1");
        }}
        handleResizeEnd={this.props.handleResizeEnd}
        handleRotate={(angle) => {
          this.props.handleRotate(angle, this.props.data.id);
        }}
        handleRotateEnd={this.props.handleRotateEnd}
      >
        <div className={`content content1 puppy puppy-${this.props.data.id}`}>
          {this.props.data.name}
        </div>
      </ResizableContent>
    );
  }
}

export default PuppyPicture;
