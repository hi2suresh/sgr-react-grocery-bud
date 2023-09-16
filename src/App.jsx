import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import ItemList from './ItemList';
import { ToastContainer, toast } from 'react-toastify';

const getFromLocalStorage = () =>
  JSON.parse(localStorage.getItem('groceryList') || '[]');

const setLocalStorage = (items) =>
  localStorage.setItem('groceryList', JSON.stringify(items));
const App = () => {
  const [items, setItems] = useState(getFromLocalStorage());
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setLocalStorage(updatedItems);
    toast.success(`Item added successfully`);
  };

  const removeItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    setLocalStorage(updatedItems);
    toast.success(`Item deleted successfully`);
  };

  const editItem = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) return { ...item, completed: !item.completed };
      return item;
    });
    setItems(updatedItems);
    setLocalStorage(updatedItems);
  };
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <ItemList items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
