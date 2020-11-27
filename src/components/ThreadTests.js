import React, { Component } from "react";
import LineTo from "react-lineto";
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "react-rotatable/dist/css/rotatable.min.css";
import BoardItem from "./BoardItem";
import { moveToFront, moveToBack } from "../utils/utils";
import { Space } from "react-zoomable-ui";
import { timestamp } from "timestamp";
import * as schema from "../data/item-schema";
import { resetData } from "../data/test-data";
import Thread from "./item-content/Thread";

// const transformWrapperOptions = {
//   disabled: false,
// };

// const transformWrapperPanOptions = {
//   disableOnTarget: ["line-start", "line-end"],
// };

class ThreadTests extends Component {
  constructor() {
    super();
    this.state = {
      lastInteraction: 0,
      dataLoaded: false,
      activeItem: null,
      centerX: 691,
      centerY: 432,
      items: [
        {
          type: "photo1",
          imageUrl:
            "https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/happy-puppy-xlarge.jpg?imwidth=1200",
          left: -457,
          top: -384,
          // width: 180, // 9cm x 20px = 180px
          // height: 219, //10.94cm x 20px = 218.8px
          angle: 0,
          // aspect: 0.823,
          name: "Puppy 1",
          id: "puppy1",
          zIndex: 2,
          pinAngle: 180,
          pinColor: "red",
          pinOffsetTop: 10,
          pinOffsetLeft: 90,
        },
        {
          type: "photo1",
          imageUrl:
            "https://www.ardengrange.com/sites/admin/plugins/elfinder/files/ardengrange/Nutrition%20and%20Advice%20section/Fact%20Sheets%20section/Canine%20Fact%20Sheets/Puppy%20section/Puppy%20guide%20images/Scruffy%20pup.jpg",
          left: 197,
          top: -365,
          // width: 180,
          // height: 219,
          angle: 0,
          // aspect: 0.823,
          name: "Puppy 2",
          id: "puppy2",
          zIndex: 1,
          pinAngle: 90,
          pinColor: "green",
          pinOffsetTop: 10,
          pinOffsetLeft: 90,
        },
      ],
      threads: [["puppy1", "puppy2"]],
      zoomFactor: 0.66,
    };
  }

  writeData = (data) => {
    localStorage.puppyState = JSON.stringify(data);
  };

  readData = () => {
    // if (localStorage.puppyState) {
    //   const newState = JSON.parse(localStorage.puppyState);
    //   newState.dataLoaded = true;
    //   this.setState(newState);
    // }
    this.setState({ dataLoaded: true });
  };

  resetData = () => {
    this.writeData(resetData);
  };

  setActiveItem = (id) => {
    if (this.state.activeItem !== id) this.setState({ activeItem: id });
    else if (!id) this.setState({ activeItem: null });
  };

  handleContentClick = (id) => {
    if (this.state.activeItem !== id) this.setActiveItem(id);
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
      const newItem = { ...prevState.items.filter((i) => i.id === id)[0] };
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

  renderThreads = () => {
    this.state.threads.map((thread) => {
      console.log("renderThreads");
      const startId = thread[0];
      const endId = thread[1];
      const startIndex = this.state.items.map((i) => i.id).indexOf(startId);
      const endIndex = this.state.items.map((i) => i.id).indexOf(endId);
      const startTop = this.state.items[startIndex].top;
      const startLeft = this.state.items[startIndex].left;
      const endTop = this.state.items[endIndex].top;
      const endLeft = this.state.items[endIndex].left;
      return (
        <Thread
          key={`thread-${startId}=${endId}`}
          startTop={startTop}
          endTop={endTop}
          startLeft={startLeft}
          endLeft={endLeft}
        />
      );
    });
  };

  handleBoardClick = (e) => {
    // console.log(e);
    if (e.target.className === "board") this.setActiveItem(null);
    this.setState({ lastInteraction: timestamp() });
  };

  render() {
    return (
      <>
        <div className="header">
          <h1>Thread Tester</h1>
          {/* <button
            onClick={() => {
              this.writeData(this.state);
            }}
          >
            Write Data
          </button>
          <button onClick={this.resetData}>Reset Data</button> */}
          <div></div>
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
                        active={
                          this.state.activeItem === item.id ? true : false
                        }
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
              {this.state.items.length ? (
                <Thread
                  key={`thread-${this.state.threads[0][0]}=${this.state.threads[0][1]}`}
                  startTop={this.state.items[0].top}
                  endTop={this.state.items[1].top}
                  startLeft={this.state.items[0].left}
                  endLeft={this.state.items[1].left}
                  startItem={this.state.items[0]}
                  endItem={this.state.items[1]}
                />
              ) : null}

              {/* {this.renderLines()} */}
            </div>
          </div>
        </Space>
      </>
    );
  }

  componentDidMount() {
    // if (!localStorage.puppyState) this.writeData(resetData);
    this.readData();
  }

  componentWillUnmount() {
    const { activeItem, ...prevState } = this.state;
    // this.writeData({ ...prevState, activeItem: null });
  }
}

export default ThreadTests;
