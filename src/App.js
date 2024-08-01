import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" data-test="app-component">
      <h1 data-test="counter-heading">
        The counter currently is
        <span data-test="count-value">{count}</span>
      </h1>
      <button data-test="increment-button">Increment counter</button>
    </div>
  );
}

export default App;
