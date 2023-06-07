import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>compteur</h1>
      <h2>N°: {count}</h2>
      <button onClick={increment}>incrementation</button>
      <button onClick={decrement}>decrementation</button>
    </div>
  );
};

export default CounterApp;
