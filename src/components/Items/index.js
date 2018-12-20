import React from "react";

const Items = ({ items, deleteItem }) => 
  const itemsList = items.length ? (
    items.map(item => {
      return (
        <div
          className="collection-item"
          key={item.id}
          onClick={() => {
            deleteItem(item.id);
          }}
        >
          <p className="center">{item.name}</p>
          <img src={item.image} alt={item.name} />
        </div>
      );
    })
  ) : (
    <p className="center">Populate your wardrobe!</p>
  );

  return <div className="items collection">{itemsList}</div>;
};

export default Items;
