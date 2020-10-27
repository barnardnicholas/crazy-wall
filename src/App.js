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
      lines: [["line-start", "line-end"]]
    }
  }

  handleDrag = (e, i) => {
    const newState = {}
    newState[`puppy${i}x`] = e.clientX
    newState[`puppy${i}y`] = e.clientY
    this.setState(newState)
  }
 
  render() {
    return (
      // <TransformWrapper scale={2} options={transformWrapperOptions} pan={transformWrapperPanOptions}>
      //   <TransformComponent>
        <div className="App">
       <h1>Puppy Board</h1>

          <Rotatable>
        <Draggable onDrag={(e) => {this.handleDrag(e, 1)}}>
          <div className="line-start">
    <h3>{this.state.puppy1x}, {this.state.puppy1y}</h3>
        </div>
        </Draggable>
          </Rotatable>

        <Rotatable>
        <Draggable onDrag={(e) => {this.handleDrag(e, 2)}}>
          <div className="line-end">
          <h3>{this.state.puppy2x}, {this.state.puppy2y}</h3>
          </div>
        </Draggable>
        </Rotatable>
        

        {this.state.lines.map(line => {
          return (
            <LineTo from={line[0]} to={line[1]} borderColor="red" borderStyle="solid" borderWidth="2"></LineTo>
          )
        })}
        
      </div>
      //   </TransformComponent>
      // </TransformWrapper>
    )
  }
}
 
export default App
