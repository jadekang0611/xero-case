import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Description
        <input ></input>
        </div>
        <div>Cost
        <input ></input>
        </div>
        <div>Quantity
        <input ></input>
        </div>
        <button onClick={() => console.log("Clicked")}>Add item</button>
      </div>
    );
  }
}

export default App;
