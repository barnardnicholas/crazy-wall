import React, { Component } from "react";
import "react-rotatable/dist/css/rotatable.min.css";
import BoardItem from "./BoardItem";
import { moveToFront, moveToBack } from "../utils/utils";
import { Space } from "react-zoomable-ui";
import { timestamp } from "timestamp";
import * as schema from "../data/item-schema";
import { resetData } from "../data/test-data";
import Thread from "./item-content/Thread";
import Pin from "./item-content/Pin";

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
        {
          type: "newspaperColumn",
          headline: "Lorem ipsum dolor sit amet",
          text: [
            "Lorem ipsum dolor sit amet, utroque percipit voluptaria vix an, eum in graeco splendide evertitur, ut vel errem putent. Id sit dico minim habemus, quo augue fastidii ea, ex eos essent adversarium vituperatoribus. In eam tale everti nonumes, vel at iriure equidem rationibus. Fugit omnesque an eum, dico sanctus duo id, est ne autem libris mandamus.",
            "Nec numquam ponderum at. Et possim doctus his, vel recusabo adversarium no, vim ea volutpat elaboraret. Duo no modo blandit percipit, qui falli homero ne, an mazim viderer pro. Cu probo fierent omittantur sea, eum persius disputando ne.",
          ].join("\r\n"),
          left: -50,
          top: 112,
          height: 420, // user-resizeable
          angle: 0,
          name: "Newspaper Column",
          id: "newspaper-column-1",
          zIndex: 1,
          pinAngle: 70,
          pinColor: "green",
          pinOffsetTop: 10,
          pinOffsetLeft: 75,
        },
      ],
      threads: [
        ["puppy1", "puppy2"],
        ["puppy2", "newspaper-column-1"],
      ],
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
          <div></div>
        </div>
        <Space
          innerDivStyle={{ width: 10000, height: 10000 }}
          onCreate={(vp) => {
            if (this.props.dataLoaded) {
              const photo2 = document.getElementById("photo2-1");
              console.log(photo2);
            }
            vp.camera.recenter(5000, 5000, this.state.zoomFactor || 1);
          }}
          // onClick={(e) => {
          //   console.log(e);
          //   this.handleBoardClick(e);
          // }}
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
              {/* Load items */}
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

              {/* Load Threads */}
              {this.state.items.length
                ? this.state.threads.map((thread) => {
                    const startId = thread[0];
                    const endId = thread[1];
                    const startIndex = this.state.items
                      .map((i) => i.id)
                      .indexOf(startId);
                    const endIndex = this.state.items
                      .map((i) => i.id)
                      .indexOf(endId);
                    const startItem = this.state.items[startIndex];
                    const endItem = this.state.items[endIndex];
                    return (
                      <Thread
                        key={`thread-${thread[0]}-${thread[1]}`}
                        startItem={startItem}
                        endItem={endItem}
                      />
                    );
                  })
                : null}

              {/* Load Pins */}
              {this.state.items.length
                ? this.state.items.map((item) => {
                    return <Pin key={`pin-${item.id}`} item={item} />;
                  })
                : null}
            </div>
          </div>
        </Space>
      </>
    );
  }

  componentDidMount() {
    this.readData();
  }
}

export default ThreadTests;
