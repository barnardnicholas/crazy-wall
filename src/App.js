import React, { Component, Fragment } from "react";
import "./App.css";
import Draggable, { DraggableCore } from "react-draggable";
import LineTo from "react-lineto";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Rotatable from "react-rotatable";
import "react-rotatable/dist/css/rotatable.min.css";
import RRD from "./RRD";
import "./RRD.css";
import ResizableContent from "./ResizableContent";
import PuppyPicture from "./PuppyPicture";

const setItemState = (prevState, id, keys, values) => {
  const newItems = [...prevState.items];
  const newItem = {
    ...(prevState.items.filter((item) => item.id == id)[0] || {}),
  };
  for (let i = 0; i < keys.length; i++) {
    newItem[keys[i]] = values[i];
    newItems.push(newItem);
  }
  return {
    ...prevState,
    items: [...prevState.items, ...newItems],
  };
};

const transformWrapperOptions = {
  disabled: false,
};

const transformWrapperPanOptions = {
  disableOnTarget: ["line-start", "line-end"],
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataLoaded: false,
      items: [
        {
          left: 400,
          top: 400,
          width: 250,
          height: 250,
          angle: 355,
          name: "Puppy 1",
          id: "puppy1",
        },
        {
          left: 600,
          top: 400,
          width: 250,
          height: 250,
          angle: 25,
          name: "Puppy 2",
          id: "puppy2",
        },
      ],
      lines: [["line-start", "line-end"]],
    };
  }

  writeData = (data) => {
    localStorage.puppyState = JSON.stringify(data);
  };

  readData = () => {
    if (localStorage.puppyState) {
      const newState = JSON.parse(localStorage.puppyState);
      newState.dataLoaded = true;
      this.setState(newState);
    }
  };

  resetData = () => {
    const resetData = {
      dataLoaded: false,
      items: [
        {
          left: 400,
          top: 400,
          width: 250,
          height: 250,
          angle: 355,
          name: "Puppy 1",
          id: "puppy1",
        },
        {
          left: 600,
          top: 400,
          width: 250,
          height: 250,
          angle: 25,
          name: "Puppy 2",
          id: "puppy2",
        },
      ],
      lines: [["line-start", "line-end"]],
    };
    this.writeData(resetData);
  };

  handleDrag = (top, left, id) => {
    // this.renderLines();
    this.setState((prevState) => {
      // return setItemState(prevState, item, ["top", "left"], [top, left]);
      let thisIndex = this.state.items.map((item) => item.id).indexOf(id);
      const newItems = [...prevState.items];
      const newItem = { ...prevState.items[thisIndex] };
      newItem.top = top;
      newItem.left = left;
      newItems[thisIndex] = newItem;
      return {
        ...prevState,
        items: newItems,
      };
    });
  };

  handleDragEnd = () => {
    this.writeData(this.state);
  };

  handleRotate = (angle, id) => {
    // this.renderLines();
    this.setState((prevState) => {
      let thisIndex = this.state.items.map((item) => item.id).indexOf(id);
      const newItems = [...prevState.items];
      const newItem = { ...prevState.items[thisIndex] };
      newItem.angle = angle;
      newItems[thisIndex] = newItem;
      return {
        ...prevState,
        items: newItems,
      };
    });
  };

  handleRotateEnd = (e, id) => {
    this.writeData(this.state);
  };

  handleResize = (width, height, top, left, id) => {
    this.setState((prevState) => {
      let thisIndex = this.state.items.map((item) => item.id).indexOf(id);
      const newItems = [...prevState.items];
      const newItem = { ...prevState.items[thisIndex] };
      newItem.width = width;
      newItem.height = height;
      newItem.top = top;
      newItem.left = left;
      newItems[thisIndex] = newItem;
      return {
        ...prevState,
        items: newItems,
      };
    });
  };

  handleResizeEnd = () => {
    this.writeData(this.state);
  };

  renderLines = () => {
    return this.state.lines.map((line) => {
      return (
        <LineTo
          from={line[0]}
          to={line[1]}
          borderColor="red"
          borderStyle="solid"
          borderWidth="2"
        ></LineTo>
      );
    });
  };

  renderPuppies() {}

  render() {
    return (
      <TransformWrapper
        scale={1}
        options={transformWrapperOptions}
        pan={transformWrapperPanOptions}
      >
        <TransformComponent>
          <div className="App">
            <h1>Puppy Board</h1>
            <button
              onClick={() => {
                this.writeData(this.state);
              }}
            >
              Write Data
            </button>
            <button onClick={this.resetData}>Reset Data</button>

            {this.state.dataLoaded
              ? this.state.items.map((item, idx) => {
                  return (
                    <PuppyPicture
                      key={idx}
                      data={item}
                      handleDrag={this.handleDrag}
                      handleDragEnd={this.handleDragEnd}
                      handleResize={this.handleResize}
                      handleResizeEnd={this.handleResizeEnd}
                      handleRotate={this.handleRotate}
                      handleRotateEnd={this.handleRotateEnd}
                    />
                  );
                })
              : null}

            {/* {this.renderLines()} */}
          </div>
        </TransformComponent>
      </TransformWrapper>
    );
  }

  componentDidMount() {
    this.readData();
  }
}

export default App;
