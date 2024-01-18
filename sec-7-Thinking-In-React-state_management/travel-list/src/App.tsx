import React, { useState } from "react";

interface ItemInterface {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

function App() {
  const [items, setItems] = useState<ItemInterface[]>([]);

  const handleItems = (item: never): void => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (id: number) => {
    setItems(items.filter((item: ItemInterface) => item?.id !== id));
  };

  const handleToggleItem = (id: number) => {
    const newItems = items.map((item: ItemInterface) =>
      item?.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems([...newItems]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleItems} />
      <PackList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}
function Form({ onAddItem }: any) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    if (!description) return;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  };

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😎 trip?</h3>
        <select onChange={(e) => setQuantity(+e.target.value)} value={quantity}>
          {Array.from({ length: 21 }, (_, index) => index++).map((index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button>Add</button>
      </form>
    </>
  );
}
function PackList({ items, onDeleteItem, onToggleItem }: any) {
  return (
    <div className="list">
      <ul>
        {items.map((item: ItemInterface) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }: any) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }: any) {
  if (!items.length) {
    return (
      <em className="stats">Start adding some items to your packing list 👝</em>
    );
  }
  const allItems = items.length;
  const packedItems = items.filter((item: ItemInterface) => item.packed).length;
  const percentage = Math.round((packedItems / allItems) * 100);
  return (
    <footer className="stats">
      <em>
        {+percentage === 100
          ? `You got everything! Ready to go ✈️`
          : `💼 You have ${allItems} items on your list, and you already packed ${packedItems} ${+percentage}%)`}
      </em>
    </footer>
  );
}

export default App;
