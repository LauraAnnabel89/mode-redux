import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Item from "./components/Item";
// import Items from "./components/Items";
// import AddItem from "./components/AddItem";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        name: "Stella McCartney Blazer",
        image:
          "https://cache.net-a-porter.com/images/products/1105309/1105309_in_l.jpg"
      },
      {
        id: 2,
        name: "Redone Levis",
        image:
          "https://cache.net-a-porter.com/images/products/1059091/1059091_in_l.jpg"
      },
      {
        id: 3,
        name: "Elizabeth and James Bag",
        image:
          "https://cache.net-a-porter.com/images/products/1123707/1123707_in_l.jpg"
      },
      {
        id: 4,
        name: "Allude Stripe Top",
        image:
          "https://cache.net-a-porter.com/images/products/1069656/1069656_in_l.jpg"
      },
      {
        id: 5,
        name: "The Row Sandals",
        image:
          "https://cache.net-a-porter.com/images/products/1058531/1058531_in_l.jpg"
      }
    ]
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

  render() {
    return (
      <BrowserRouter>
        <div className="Mode container">
          <h1 className="center">Mode</h1>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/:item_id" component={Item} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
