import React, { Component } from 'react';

import Header from './components/Header';
import Featured from './components/featured';
import './assets/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1580px", background: "cornflowerblue" }}>
        <Header />
        <Featured />
      </div>
    );
  }
}

export default App;
