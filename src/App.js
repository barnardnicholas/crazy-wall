import React, { Component } from "react";
import "./App.css";
import LineTo from "react-lineto";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "react-rotatable/dist/css/rotatable.min.css";
import BoardItem from "./BoardItem";
import { moveToFront, moveToBack } from "./utils/index";

// TODO - handle z-indexing of items by re-ordering array in state

const resetData = {
  dataLoaded: false,
  activeItem: null,
  items: [
    {
      type: "photo",
      imageUrl:
        "https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/happy-puppy-xlarge.jpg?imwidth=1200",
      left: 400,
      top: 400,
      width: 450,
      height: 547,
      angle: 355,
      aspect: 0.823,
      name: "Puppy 1",
      id: "puppy1",
      zIndex: 2,
      pinAngle: 180,
      pinColor: "red",
    },
    {
      type: "photo",
      imageUrl:
        "https://www.ardengrange.com/sites/admin/plugins/elfinder/files/ardengrange/Nutrition%20and%20Advice%20section/Fact%20Sheets%20section/Canine%20Fact%20Sheets/Puppy%20section/Puppy%20guide%20images/Scruffy%20pup.jpg",
      left: 600,
      top: 400,
      width: 450,
      height: 547,
      angle: 25,
      aspect: 0.823,
      name: "Puppy 2",
      id: "puppy2",
      zIndex: 1,
      pinAngle: 90,
      pinColor: "green",
    },
  ],
  lines: [["item-puppy1", "item-puppy2"]],
};

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
      activeItem: null,
      items: [
        {
          type: "photo",
          imageUrl:
            "https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/happy-puppy-xlarge.jpg?imwidth=1200",
          left: 400,
          top: 400,
          width: 450,
          height: 547,
          angle: 355,
          aspect: 0.823,
          name: "Puppy 1",
          id: "puppy1",
          zIndex: 2,
          pinAngle: 180,
          pinColor: "red",
        },
        {
          type: "photo",
          imageUrl:
            "https://www.ardengrange.com/sites/admin/plugins/elfinder/files/ardengrange/Nutrition%20and%20Advice%20section/Fact%20Sheets%20section/Canine%20Fact%20Sheets/Puppy%20section/Puppy%20guide%20images/Scruffy%20pup.jpg",
          left: 600,
          top: 400,
          width: 450,
          height: 547,
          angle: 25,
          aspect: 0.823,
          name: "Puppy 2",
          id: "puppy2",
          zIndex: 1,
          pinAngle: 90,
          pinColor: "green",
        },
      ],
      lines: [["item-puppy1", "item-puppy2"]],
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
    return this.state.lines.map((line) => {
      return (
        <LineTo
          from={line[0]}
          to={line[1]}
          borderColor="red"
          borderStyle="solid"
          borderWidth={2}
        ></LineTo>
      );
    });
  };

  handleBoardClick = (e) => {
    if (e.target.className == "board") this.setActiveItem(null);
  };

  render() {
    return (
      <>
        <TransformWrapper
          scale={1}
          options={transformWrapperOptions}
          pan={transformWrapperPanOptions}
        >
          <TransformComponent>
            <div className="App">
              <div
                key={"board"}
                className="board"
                onClick={(e) => {
                  this.handleBoardClick(e);
                }}
              >
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
                  ? this.state.items.map((item) => {
                      return (
                        <BoardItem
                          key={`item-${item.id}`}
                          data={item}
                          zIndex={item.zIndex}
                          aspect={item.aspect}
                          active={
                            this.state.activeItem == item.id ? true : false
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
                        />
                      );
                    })
                  : null}
                {/* {this.renderLines()} */}
              </div>
            </div>
          </TransformComponent>
        </TransformWrapper>
      </>
    );
  }

  componentDidMount() {
    this.readData();
  }

  componentWillUnmount() {
    const { activeItem, ...prevState } = this.state;
    this.writeData({ ...prevState, activeItem: null });
  }
}

export default App;
