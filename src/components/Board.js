import React, { Component } from "react";
import LineTo from "react-lineto";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "react-rotatable/dist/css/rotatable.min.css";
import BoardItem from "./BoardItem";
import { moveToFront, moveToBack } from "../utils/utils";
import { Space } from "react-zoomable-ui";

const resetData = {
  dataLoaded: false,
  activeItem: null,
  items: [
    {
      type: "photo",
      imageUrl:
        "https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/happy-puppy-xlarge.jpg?imwidth=1200",
      left: 243,
      top: 135,
      width: 266,
      height: 323,
      angle: 355,
      aspect: 0.823,
      name: "Puppy 1",
      id: "puppy1",
      zIndex: 2,
      pinAngle: 180,
      pinColor: "red",
      pinTop: "10px",
      pinLeft: "calc(50% - 10px)",
    },
    {
      type: "photo",
      imageUrl:
        "https://www.ardengrange.com/sites/admin/plugins/elfinder/files/ardengrange/Nutrition%20and%20Advice%20section/Fact%20Sheets%20section/Canine%20Fact%20Sheets/Puppy%20section/Puppy%20guide%20images/Scruffy%20pup.jpg",
      left: 795,
      top: 138,
      width: 266,
      height: 323,
      angle: 25,
      aspect: 0.823,
      name: "Puppy 2",
      id: "puppy2",
      zIndex: 1,
      pinAngle: 90,
      pinColor: "green",
      pinTop: "10px",
      pinLeft: "calc(50% - 10px)",
    },
    {
      type: "note",
      text:
        "Lorem ipsum dolor sit amet, usu mazim iuvaret in, ne eos virtute aliquid, nullam veritus imperdiet duo no. Iusto democritum at eam, pri omnis populo an. Id erat errem ullamcorper vel, vim in regione intellegat.",
      left: 522,
      top: 358,
      width: 279,
      height: 388,
      angle: 5,
      aspect: 0.72,
      name: "Note",
      id: "note1",
      zIndex: 1,
      pinAngle: 53,
      pinColor: "yellow",
      pinTop: "20px",
      pinLeft: "calc(50% - 10px)",
    },
    {
      type: "postit",
      text: "Lorem ipsum dolor sit amet",
      left: 525,
      top: 146,
      width: 181,
      height: 179,
      angle: 350,
      aspect: 1.01,
      name: "Post-It",
      id: "postit1",
      zIndex: 1,
      pinAngle: 20,
      pinColor: "red",
      pinTop: "8%",
      pinLeft: "calc(50% - 10px)",
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

class Board extends Component {
  constructor() {
    super();
    this.state = {
      dataLoaded: false,
      activeItem: null,
      items: [],
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
          style={{ backgroundColor: "black" }}
          innerDivStyle={{ width: 10000 }}
          onClick={(e) => {
            this.handleBoardClick(e);
          }}
        >
          {/* <TransformWrapper
          scale={1}
          options={transformWrapperOptions}
          pan={transformWrapperPanOptions}
        >
          <TransformComponent> */}
          {/* <div className="board"> */}
          <div key={"board"} className="board">
            {this.state.dataLoaded
              ? this.state.items.map((item) => {
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
                    />
                  );
                })
              : null}
            {/* {this.renderLines()} */}
          </div>
          {/* </div> */}
          {/* </TransformComponent>
        </TransformWrapper> */}
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
