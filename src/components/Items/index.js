// import React, { Component } from "react";
//
// class Items extends Component {
//   state = {
//     items: [
//       {
//         id: 1,
//         name: "Stella McCartney Blazer",
//         image:
//           "https://cache.net-a-porter.com/images/products/1105309/1105309_in_l.jpg"
//       },
//       {
//         id: 2,
//         name: "Redone Levis",
//         image:
//           "https://cache.net-a-porter.com/images/products/1059091/1059091_in_l.jpg"
//       },
//       {
//         id: 3,
//         name: "Elizabeth and James Bag",
//         image:
//           "https://cache.net-a-porter.com/images/products/1123707/1123707_in_l.jpg"
//       },
//       {
//         id: 4,
//         name: "Allude Stripe Top",
//         image:
//           "https://cache.net-a-porter.com/images/products/1069656/1069656_in_l.jpg"
//       },
//       {
//         id: 5,
//         name: "The Row Sandals",
//         image:
//           "https://cache.net-a-porter.com/images/products/1058531/1058531_in_l.jpg"
//       }
//     ]
//   };
//
//   deleteItem = id => {
//     const items = this.state.items.filter(item => {
//       return item.id !== id;
//     });
//     this.setState({
//       items
//     });
//   };
//
//   addItem = item => {
//     item.id = Math.random();
//     let items = [...this.state.items, item];
//     this.setState({
//       items
//     });
//   };
//
//   render() {
//     // const { items, deleteItem } = this.state;
//     let items = this.state;
//     let deleteItem = deleteItem;
//     console.log(items);
//     const itemsList = items.map(item => {
//       return (
//         <div key={item.id}>
//           <h1>{item.name}</h1>
//           <img src={item.image} alt={item.name} />
//           <button onClick={() => deleteItem(item.id)}>Delete Item</button>
//         </div>
//       );
//     });
//
//     return <div className="items__container--display">{itemsList}</div>;
//   }
// }
//
// export default Items;
//
// // Have a form that accepts an Input
// // Display the result of that input
