import React from 'react';

function App() {
  return (
    <div className="App" data-test="app-component">
      <h1 data-test="counter-heading">The counter currently is</h1>
      <button data-test="increment-button">Increment counter</button>
    </div>
  );
}

export default App;
