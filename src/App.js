import React, { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" data-test="app-component">
      <h1 data-test="counter-heading" className="counter-heading">
        The counter currently is&nbsp;
        <span data-test="count-value" className="count-value">
          {count}
        </span>
      </h1>
      <button
        data-test="increment-button"
        className="increment-button"
        onClick={() => setCount(count + 1)}
      >
        Increment counter
      </button>
    </div>
  );
}

export default App;
