import React, { Component } from "react";

class AddItem extends Component {
  state = {
    items: "",
    name: ""
  };

  deleteItem = id => {
    const items = this.state.items.filter(item => {
      return item.id !== id;
    });
    this.setState({
      items
    });
  };

  addItem = item => {
    item.id = Math.random();
    let items = [...this.state.items, item];
    this.setState({
      items
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addItem(this.state);
    this.setState({
      name: ""
    });
  };

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add an Item Name</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </form>
      </div>
    );
  }
}

export default AddItem;
