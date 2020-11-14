import React, { Component } from "react";
import "react-rotatable/dist/css/rotatable.min.css";
import BoardItem from "./BoardItem";
import { moveToFront, moveToBack } from "../utils/utils";
import { Space, ViewPortCamera } from "react-zoomable-ui";
import { timestamp } from "timestamp";
import * as schema from "../data/item-schema";

const sampleText = [
  "Lorem ipsum dolor sit amet, utroque percipit voluptaria vix an, eum in graeco splendide evertitur, ut vel errem putent. Id sit dico minim habemus, quo augue fastidii ea, ex eos essent adversarium vituperatoribus. In eam tale everti nonumes, vel at iriure equidem rationibus. Fugit omnesque an eum, dico sanctus duo id, est ne autem libris mandamus.",
  "Nec numquam ponderum at. Et possim doctus his, vel recusabo adversarium no, vim ea volutpat elaboraret. Duo no modo blandit percipit, qui falli homero ne, an mazim viderer pro. Cu probo fierent omittantur sea, eum persius disputando ne.",
].join("\r\n");

const itemSchema = {
  type: "newspaperColumn",
  headline: "Lorem ipsum dolor sit amet",
  text: sampleText,
  left: 0,
  top: 0,
  width: 150, // 15cm x 20px = 300px
  height: 420, // 20.83cm x 20px = 416.6px
  angle: 0,
  aspect: null,
  name: "Note",
  zIndex: 1,
  pinColor: "red",
  pinTop: "5px",
  pinLeft: "calc(50% - 10px)",
  zoomable: "s",
};

const itemData = {
  type: "newspaperColumn",
  headline: "Lorem ipsum dolor sit amet",
  text: sampleText,
  left: -50,
  top: 17,
  height: 420, // user-resizeable
  angle: 0,
  // aspect: 0.72,
  name: "Newspaper Column",
  id: "newspaper-column-1",
  zIndex: 1,
  pinAngle: 70,
  pinColor: "green",
};

class ItemBuilder extends Component {
  constructor() {
    super();
    this.state = {
      lastInteraction: 0,
      dataLoaded: false,
      activeItem: null,
      zoomFactor: 1,
      centerX: 691,
      centerY: 432,
      items: [{ ...itemSchema, ...itemData }],
    };
  }

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
    // this.writeData(this.state);
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
    // this.writeData(this.state);
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
    // this.writeData(this.state);
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
        // this.writeData(this.state);
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
        // this.writeData(this.state);
      }
    );
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
          <h1>Item Builder</h1>
        </div>
        <Space
          innerDivStyle={{ width: 10000, height: 10000 }}
          onCreate={(vp) => {
            vp.camera.recenter(5000, 5000);
          }}
          onUpdated={(e) => {
            const { zoomFactor, centerX, centerY } = e;
            this.setState({ zoomFactor, centerX, centerY });
          }}
        >
          <div
            className="board"
            onClick={(e) => {
              if (e.target.className === "board") this.setActiveItem(null);
            }}
          >
            <div key={"origin"} className="origin">
              <div>ORIGIN</div>
              {/* <textarea
                rows="5"
                onChange={(e) => {
                  console.log(e.target.value);
                }}
                value={"Text" + "\r\n" + "Area"}
              ></textarea> */}
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
            </div>
          </div>
        </Space>
      </>
    );
  }

  componentDidMount() {
    this.setState({ dataLoaded: true });
  }

  componentWillUnmount() {}
}

export default ItemBuilder;
