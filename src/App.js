import React, { Component } from 'react';
import './assets/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venue_info';
import Highlight from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';


class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background: "cornflowerblue" }}>
        <Header />
        <Featured />
        <VenueInfo />
        <Highlight />
        <Pricing />
        <Location />
      </div>
    );
  }
}

export default App;
