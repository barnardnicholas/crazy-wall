import React, { Component, Fragment } from "react";
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "react-rotatable/dist/css/rotatable.min.css";
import BoardItem from "./BoardItem";
import { moveToFront, moveToBack, replaceItem } from "../utils/utils";
import { Space } from "react-zoomable-ui";
import { timestamp } from "timestamp";
import * as schema from "../data/item-schema";
import { resetData } from "../data/test-data";
import Thread from "./item-content/Thread";
import Pin from "./item-content/Pin";
import Overlay from "./Overlay";
import BoardUI from "./ui/BoardUI";
import { uid } from "uid";

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
      authorUid: "HPAts2xCsLdT66tshh1Gw0JHYE62",
      lastInteraction: 0,
      dataLoaded: false,
      activeItem: null,
      editingItem: null,
      editMode: null,
      centerX: 691,
      centerY: 432,
      items: [],
      threads: [],
      zoomFactor: 0.66,
    };
  }

  writeData = (data) => {
    localStorage.puppyState = JSON.stringify(data);
  };

  readData = () => {
    if (localStorage.puppyState) {
      // const newState = JSON.parse(localStorage.puppyState);
      const newState = { ...resetData };
      newState.dataLoaded = true;
      this.setState(newState);
    }
  };

  resetData = () => {
    this.writeData(resetData);
  };

  writeToTxt = () => {
    console.log("writeToTxt");
  };

  setActiveItem = (id) => {
    if (this.state.activeItem !== id) this.setState({ activeItem: id });
    else if (!id) this.setState({ activeItem: null });
  };

  setEditingItem = (id) => {
    if (this.state.editingItem !== id) {
      this.setState({ editingItem: id, editMode: "editItem" });
    } else {
      this.setState({ editingItem: null, editMode: null });
    }
  };

  addNewItem = (type, top, left) => {
    if (schema[type]) {
      const newItems = [...this.state.items];
      let newItem;
      const newId = uid();
      newItem = { ...schema[type], top, left, id: newId };
      newItems.push(newItem);
      this.setState({ items: newItems, editMode: null, activeItem: newId });
    }
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

  handleToggleEditItem = (id) => {
    // console.log(item.id, this.state.editingItem);
    if (this.state.editingItem !== id) {
      this.setState({
        editingItem: id,
        editMode: "editItem",
      });
    } else {
      this.setState({
        editingItem: null,
        editMode: null,
      });
    }
  };

  handleUpdateItem = (item) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        items: replaceItem(prevState.items, item),
      };
    });
  };

  handleBoardClick = (e) => {
    if (e.target.className === "board") {
      this.setActiveItem(null);
      this.setEditingItem(null);
    }
    this.setState({ lastInteraction: timestamp() });
  };

  renderItems() {
    if (this.state.dataLoaded) {
      return this.state.items.map((i, idx) => {
        const item = { ...schema[i.type], ...i };
        const shadowStyle = {
          top: `${item.top + 4}px`,
          left: `${item.left + 4}px`,
          width: `${item.width}px`,
          height: `${item.height}px`,
          transform: `rotate(${item.angle}deg)`,
          background: `rgba(0,0,0,0.33)`,
          position: "absolute",
        };
        return (
          <Fragment key={`item-${idx}-${item.id}`}>
            <div style={shadowStyle}></div>
            <BoardItem
              data={item}
              zIndex={item.zIndex}
              aspect={item.aspect}
              active={this.state.activeItem === item.id ? true : false}
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
              handleToggleEditItem={this.handleToggleEditItem}
              zoomFactor={this.state.zoomFactor}
            />
          </Fragment>
        );
      });
    } else {
      return null;
    }
  }

  renderThreads() {
    if (this.state.threads.length && this.state.items.length) {
      return this.state.threads.map((thread, idx) => {
        const startId = thread[0];
        const endId = thread[1];
        const startIndex = this.state.items.map((i) => i.id).indexOf(startId);
        const endIndex = this.state.items.map((i) => i.id).indexOf(endId);
        const startItem = this.state.items[startIndex];
        const endItem = this.state.items[endIndex];
        return (
          <Thread
            key={`thread-${idx}-${thread[0]}-${thread[1]}`}
            startItem={startItem}
            endItem={endItem}
          />
        );
      });
    } else {
      return null;
    }
  }

  renderPins() {
    if (this.state.items.length) {
      return this.state.items.map((item, idx) => {
        return <Pin key={`pin-${idx}-${item.id}`} item={item} />;
      });
    } else return null;
  }

  render() {
    return (
      <Fragment>
        <Space
          // style={{ backgroundColor: "black" }}
          innerDivStyle={{ width: 10000, height: 10000 }}
          onCreate={(vp) => {
            // console.log(e.containerDiv);
            // e.containerDiv.addEventListener("click", (e) => {
            //   // console.log(e);
            //   this.handleBoardClick(e);
            // });
            // if (this.props.dataLoaded) {
            //   const photo2 = document.getElementById("photo2-1");
            //   console.log(photo2);
            // }
            const newZoomFactor = this.state.zoomFactor || 1;
            vp.camera.recenter(5000, 5000, newZoomFactor);
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
            <div className="origin">
              <div>ORIGIN</div>

              {/* Load items */}
              {this.renderItems()}

              {/* Load Threads */}
              {this.renderThreads()}

              {/* Load Pins */}
              {this.renderPins()}
            </div>
          </div>
        </Space>
        <Overlay />
        <BoardUI
          state={this.state}
          handlers={{
            resetData: this.resetData,
            writeData: this.writeData,
            writeToTxt: this.writeToTxt,
            handleUpdateItem: this.handleUpdateItem,
            setEditingItem: this.setEditingItem,
            addNewItem: this.addNewItem,
          }}
        />
      </Fragment>
    );
  }

  componentDidMount() {
    if (!localStorage.puppyState) this.writeData(resetData);
    this.readData();
  }

  componentWillUnmount() {
    const { activeItem, ...prevState } = this.state;
    this.writeData({ ...prevState, activeItem: null, editingItem: null });
  }
}

export default Board;
