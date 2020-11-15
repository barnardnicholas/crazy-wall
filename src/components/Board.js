import React, { Component } from "react";
import LineTo from "react-lineto";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "react-rotatable/dist/css/rotatable.min.css";
import BoardItem from "./BoardItem";
import { moveToFront, moveToBack } from "../utils/utils";
import { Space, ViewPortCamera } from "react-zoomable-ui";
import { timestamp } from "timestamp";
import * as schema from "../data/item-schema";
import { resetData } from "../data/test-data";

// const transformWrapperOptions = {
//   disabled: false,
// };

// const transformWrapperPanOptions = {
//   disableOnTarget: ["line-start", "line-end"],
// };

class Board extends Component {
  constructor() {
    super();
    this.state = {
      lastInteraction: 0,
      dataLoaded: false,
      activeItem: null,
      centerX: 691,
      centerY: 432,
      items: [],
      lines: [["pin-puppy1", "pin-puppy2"]],
      zoomFactor: 0.66,
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
    this.writeData(resetData);
  };

  setActiveItem = (id) => {
    if (this.state.activeItem != id) this.setState({ activeItem: id });
    else if (!id) this.setState({ activeItem: null });
  };

  handleContentClick = (id) => {
    if (this.state.activeItem != id) this.setActiveItem(id);
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
      const thisIndex = prevState.items.map((i) => i.id).indexOf(id);
      const newItems = [...prevState.items];
      const newItem = { ...prevState.items.filter((i) => i.id == id)[0] };
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

  handleMoveToFront = (item) => {
    this.setState(
      (prevState) => {
        return {
          ...prevState,
          items: moveToFront(prevState.items, item),
        };
      },
      () => {
        this.writeData(this.state);
      }
    );
  };

  handleMoveToBack = (item) => {
    this.setState(
      (prevState) => {
        return {
          ...prevState,
          items: moveToBack(prevState.items, item),
        };
      },
      () => {
        this.writeData(this.state);
      }
    );
  };

  renderLines = () => {
    // return this.state.lines.map((line, idx) => {
    return (
      <LineTo
        // key={idx}
        from={"pin-puppy1"}
        to={"pin-puppy2"}
        borderColor="red"
        borderStyle="solid"
        borderWidth={2}
      ></LineTo>
    );
    // });
  };

  handleBoardClick = (e) => {
    // console.log(e);
    if (e.target.className == "board") this.setActiveItem(null);
    this.setState({ lastInteraction: timestamp() });
  };

  render() {
    return (
      <>
        <div className="header">
          <h1>Mood Board</h1>
          <button
            onClick={() => {
              this.writeData(this.state);
            }}
          >
            Write Data
          </button>
          <button onClick={this.resetData}>Reset Data</button>
        </div>
        <Space
          // style={{ backgroundColor: "black" }}
          innerDivStyle={{ width: 10000, height: 10000 }}
          onCreate={(vp) => {
            // console.log(e.containerDiv);
            // e.containerDiv.addEventListener("click", (e) => {
            //   // console.log(e);
            //   this.handleBoardClick(e);
            // });
            if (this.props.dataLoaded) {
              const photo2 = document.getElementById("photo2-1");
              console.log(photo2);
            }
            vp.camera.recenter(5000, 5000, this.state.zoomFactor || 1);
            // vp.translateClientRectToVirtualSpace(photo2);
          }}
          // onClick={(e) => {
          //   console.log(e);
          //   this.handleBoardClick(e);
          // }}
          onUpdated={(e) => {
            // console.log(e);
            const { zoomFactor, centerX, centerY } = e;
            this.setState({ zoomFactor, centerX, centerY });
          }}
        >
          <div
            className="board"
            onClick={(e) => {
              // this.handleBoardClick(e);
              if (e.target.className === "board") this.setActiveItem(null);
            }}
          >
            <div key={"origin"} className="origin">
              <div>ORIGIN</div>
              {this.state.dataLoaded
                ? this.state.items.map((i) => {
                    const item = { ...schema[i.type], ...i };
                    return (
                      <BoardItem
                        key={`item-${item.id}`}
                        data={item}
                        zIndex={item.zIndex}
                        aspect={item.aspect}
                        active={this.state.activeItem == item.id ? true : false}
                        handleContentClick={() => {
                          this.handleContentClick(item.id);
                        }}
                        handleDrag={this.handleDrag}
                        handleDragEnd={this.handleDragEnd}
                        handleResize={this.handleResize}
                        handleResizeEnd={this.handleResizeEnd}
                        handleRotate={this.handleRotate}
                        handleRotateEnd={this.handleRotateEnd}
                        handleMoveToFront={() => {
                          this.handleMoveToFront(item);
                        }}
                        handleMoveToBack={() => {
                          this.handleMoveToBack(item);
                        }}
                        zoomFactor={this.state.zoomFactor}
                      />
                    );
                  })
                : null}
              {/* {this.renderLines()} */}
            </div>
          </div>
        </Space>
      </>
    );
  }

  componentDidMount() {
    if (!localStorage.puppyState) this.writeData(resetData);
    this.readData();
  }

  componentWillUnmount() {
    const { activeItem, ...prevState } = this.state;
    this.writeData({ ...prevState, activeItem: null });
  }
}

export default Board;
