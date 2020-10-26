import React, { Component } from 'react'
import './App.css'
import Draggable, {DraggableCore} from 'react-draggable';
import LineTo from 'react-lineto';

 
class App extends Component {
  constructor() {
    super()
    this.state = {
      puppy1X: 0,
      puppy1Y: 0,
      puppy2X: 0,
      puppy2Y: 0
    }
  }

  handleDraggable = (e, i) => {
    const newState = {}
    newState[`puppy${i}x`] = e.clientX
    newState[`puppy${i}y`] = e.clientY
    this.setState(newState)
  }
 
  render() {
    return (
      <div className="App">
       <h1>Puppy Board</h1>

        <Draggable onDrag={(e) => {this.handleDraggable(e, 1)}}>
        <div className="line-start">
    <h3>{this.state.puppy1x}, {this.state.puppy1y}</h3>
        </div>
        </Draggable>

        <Draggable onDrag={(e) => {this.handleDraggable(e, 2)}}>
          <div className="line-end">
          <h3>{this.state.puppy2x}, {this.state.puppy2y}</h3>
          </div>
        </Draggable>
        <LineTo from="line-start" to="line-end" borderColor="red" borderStyle="solid" borderWidth="2"></LineTo>
      </div>
    )
  }
}
 
export default App
