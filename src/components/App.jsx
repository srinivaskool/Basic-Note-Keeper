import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems(prevItems => {
      return [...prevItems, item];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return items.filter((item, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      {items.map((item, index) => (
        <Note
          title={item.title}
          content={item.content}
          key={index}
          index={index}
          forDeleteItem={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
