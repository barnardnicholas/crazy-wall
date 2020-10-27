import React, { Component } from 'react'
import './App.css'
import Draggable, {DraggableCore} from 'react-draggable';
import LineTo from 'react-lineto';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Rotatable from 'react-rotatable';
import 'react-rotatable/dist/css/rotatable.min.css';

const transformWrapperOptions = {
  disabled: false,
}

const transformWrapperPanOptions = {
  disableOnTarget: ["line-start", "line-end"]
}
 
class App extends Component {
  constructor() {
    super()
    this.state = {
      puppy1X: 0,
      puppy1Y: 0,
      puppy2X: 0,
      puppy2Y: 0,
      items: {
        puppy1: {
          posX: 0,
          poY: 0,
          rotation: 0
        },
        puppy2: {
          posX: 0,
          poY: 0,
          rotation: 0
        }
      },
      lines: [["line-start", "line-end"]]
    }
  }

  handleDrag = (e, id) => {
    this.renderLines();
    this.setState((currentState) => {
      const itemCopy = {...currentState.items[id]}
      itemCopy.posX = e.clientX;
      itemCopy.posY = e.clientY;
      const newState = {items: {...currentState.items}}
      newState.items[id] = itemCopy;
      return newState;
    })
  }

  handleDragStop = (e, id) => {
    
  }

  renderLines = () => {
    return this.state.lines.map(line => {
      return (
        <LineTo from={line[0]} to={line[1]} borderColor="red" borderStyle="solid" borderWidth="2"></LineTo>
      )
    })
  }
 
  render() {
    return (
      // <TransformWrapper scale={2} options={transformWrapperOptions} pan={transformWrapperPanOptions}>
      //   <TransformComponent>
        <div className="App">
       <h1>Puppy Board</h1>

          <Rotatable>
        <Draggable onDrag={(e) => {this.handleDrag(e, "puppy1")}} onStop={(e) => {this.handleDragStop(e, "puppy1")}}>
          <div className="line-start">
    <h3>{this.state.items.puppy1.posX}, {this.state.items.puppy1.posY}</h3>
    <h3>{`${this.state.items.puppy1.rotation}deg`}</h3>
        </div>
        </Draggable>
          </Rotatable>

        <Rotatable>
        <Draggable onDrag={(e) => {this.handleDrag(e, "puppy2")}} onStop={(e) => {this.handleDragStop(e, "puppy2")}}>
          <div className="line-end">
          <h3>{this.state.items.puppy2.posX}, {this.state.items.puppy2.posY}</h3>
          </div>
        </Draggable>
        </Rotatable>
        

        {this.renderLines()}
        
      </div>
      //   </TransformComponent>
      // </TransformWrapper>
    )
  }
}
 
export default App
