import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from './Containers/Footer';
import Container from './Containers/Container';
import HeaderFixed from './Containers/HeaderFixed';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Container />
      	<Footer />
      	<HeaderFixed />
      </div>
    );
  }
}

export default App;
