import React, { Component } from 'react';

import Header from './components/Header'
import './assets/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1580px", background: "cornflowerblue" }}>
        <Header />
      </div>
    );
  }
}

export default App;
