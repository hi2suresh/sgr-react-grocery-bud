import { useState } from 'react';
import Item from './Item';

const ItemList = ({ items, removeItem, editItem }) => {
  const renderedItems = items.map((item) => {
    return (
      <div className="items" key={item.id}>
        <Item item={item} removeItem={removeItem} editItem={editItem} />
      </div>
    );
  });
  return <div>{renderedItems}</div>;
};
export default ItemList;
