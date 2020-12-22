import React, { Component } from "react";

class ItemAdder extends Component {
  state = {};

  formHandler = (e) => {
    e.preventDefault();
  };

  renderTextInput = (itemInput) => {
    return (
      <div className="item-editor-input">
        <label for={`item-input-${itemInput.label}-${this.props.item.id}`}>
          {itemInput.label || "Text"}
        </label>
        <input
          id={`item-input-${itemInput.label}-${this.props.item.id}`}
          maxlength={itemInput.maxLength}
          type="text"
          value={this.state[itemInput.label]}
          onChange={(e) => {
            this.handleInputChange(e, itemInput.label);
          }}
        ></input>
      </div>
    );
  };
  renderImageInput = (itemInput) => {
    return (
      <div className="item-editor-input">
        <label for={`item-input-${itemInput.label}-${this.props.item.id}`}>
          {itemInput.label || "Image"}
        </label>
        <div>
          {itemInput.value ? (
            <img src={itemInput.value} alt={this.props.item.name} />
          ) : null}
        </div>
        <input
          id={`item-input-${itemInput.label}-${this.props.item.id}`}
          type="url"
          value={this.state[itemInput.label]}
          onChange={(e) => {
            this.handleInputChange(e, itemInput.label);
          }}
        ></input>
      </div>
    );
  };
  renderTextArea = (itemInput) => {
    return (
      <div className="item-editor-input">
        <label for={`item-input-${itemInput.label}-${this.props.item.id}`}>
          {itemInput.label || "Text Area"}
        </label>
        <textarea
          id={`item-input-${itemInput.label}-${this.props.item.id}`}
          rows={itemInput.rows || 30}
          cols={itemInput.cols || 30}
          maxlength={itemInput.maxLength}
          value={this.state[itemInput.label]}
          onChange={(e) => {
            this.handleInputChange(e, itemInput.label);
          }}
        ></textarea>
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

  handleCloseEditor = () => {
    this.props.setEditingItem(null);
  };

  renderInputs = () => {
    return this.props.item.inputs.map((i) => {
      if (i.inputType === "text") return this.renderTextInput(i);
      else if (i.inputType === "image") return this.renderImageInput(i);
      else if (i.inputType === "textarea") return this.renderTextArea(i);
    });
  };

  render() {
    const { name } = this.props.item;
    const inputLabels = Object.keys(this.state);
    return (
      <div class="item-editor">
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
        <button
          className="item-editor-close-button"
          onClick={this.handleCloseEditor}
        >
          X
        </button>
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

export default ItemAdder;
