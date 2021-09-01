import { useState } from "react";
import "./App.css";

function App() {
  const [fruits, setFruit] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const filterRedFruits = () => {
    setFruit(fruits.filter((item) => item.color === "red"));
  };

  const totalPrice = fruits.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="App">
      <header className="App-header">
        <p>Total price : {totalPrice}$</p>
        <ul>
          {fruits.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
        <button onClick={filterRedFruits}>filter red fruits</button>
      </header>
    </div>
  );
}

export default App;
