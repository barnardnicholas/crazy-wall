import React, { Component } from "react";

class ItemEditor extends Component {
  state = {};

  formHandler = (e) => {
    e.preventDefault();
  };

  renderTextInput = (itemInput) => {
    return (
      <div className="item-editor-input">
        <label>
          {itemInput.label || "Text"}
          <input
            type="text"
            value={this.state[itemInput.label]}
            onChange={(e) => {
              this.handleInputChange(e, itemInput.label);
            }}
          ></input>
        </label>
      </div>
    );
  };
  renderImageInput = (itemInput) => {
    return (
      <div className="item-editor-input">
        <label>
          {itemInput.label || "Image"}
          <input
            type="url"
            value={this.state[itemInput.label]}
            onChange={(e) => {
              this.handleInputChange(e, itemInput.label);
            }}
          ></input>
        </label>
      </div>
    );
  };
  renderTextArea = (itemInput) => {
    return (
      <div className="item-editor-input">
        <label>
          {itemInput.label || "Text Area"}
          <textarea
            rows={itemInput.rows || 10}
            cols={itemInput.cols || 30}
            value={this.state[itemInput.label]}
            onChange={(e) => {
              this.handleInputChange(e, itemInput.label);
            }}
          ></textarea>
        </label>
      </div>
    );
  };

  updateHandler = () => {
    let newInputs = [];
    this.props.item.inputs.forEach((i) => {
      let newInput = { ...i };
      newInput.value = this.state[i.label];
      newInputs.push(newInput);
    });
    const newItem = { ...this.props.item, inputs: newInputs };
    this.props.handleUpdateItem(newItem);
  };

  handleInputChange = (e, label) => {
    console.log(e.target.value);
    const newState = {};
    newState[label] = e.target.value;
    this.setState(newState);
  };

  renderInputs = () => {
    return this.props.item.inputs.map((i) => {
      if (i.inputType === "text") return this.renderTextInput(i);
      else if (i.inputType === "image") return this.renderImageInput(i);
      else if (i.inputType === "textarea") return this.renderTextArea(i);
    });
  };

  render() {
    const { name, inputs } = this.props.item;
    const inputLabels = Object.keys(this.state);
    return (
      <div>
        <h4 className="item-editor-title">{name}</h4>
        <form onSubmit={this.formHandler}>
          {/* <label>
            Label
            <input
              type="text"
              onChange={(e) => {
                this.handleInputChange(e);
              }}
            ></input>
          </label> */}
          {/* {inputLabels.length ? this.renderInputs : null} */}
          {inputLabels.length ? this.renderInputs() : null}
        </form>
      </div>
    );
  }

  resetState = () => {
    const { inputs } = this.props.item;
    const newState = {};
    inputs.forEach((i) => {
      newState[i.label] = i.value;
    });
    this.setState(newState);
  };
  componentDidMount() {
    this.resetState();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.item.id !== this.props.item.id) this.resetState();
    if (prevState !== this.state) this.updateHandler();
  }
}

export default ItemEditor;
