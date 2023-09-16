import { useState } from 'react';
const Item = ({ item, removeItem, editItem }) => {
  const isChecked = item.completed;

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          editItem(item.id);
        }}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: isChecked && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => removeItem(item.id)}
      >
        Delete
      </button>
    </div>
  );
};
export default Item;
