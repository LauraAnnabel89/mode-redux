import React, { Component } from "react";

class Item extends Component {
  state = {
    id: null
  };

  componentDidMount() {
    let id = this.props.match.params.item_id;
    this.setState({
      id
    });
  }

  render() {
    return (
      <div className="container">
        <h4>gg </h4>
      </div>
    );
  }
}
export default Item;
