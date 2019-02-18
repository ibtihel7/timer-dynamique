import React, { Component } from 'react';
import './App.css';
import Timer from './timer'
class App extends Component {
  Time() {
    let d = new Date(9888777);
    let n = d.toLocaleTimeString();
    return (n)
}
  render() {
    return (
      <div className="App">
        <Timer  temps={this.Time()} />
        {/* <p>{this.Time(850000)}</p> */}
      </div>
    );
  }
}

export default App;
