import React, { Component } from 'react';
import Header from 'components/Header/Header';
import AddressBar from 'components/AddressBar/AddressBar';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddressBar />
        <div className="content">
        </div>
      </div>
    );
  }
}

export default App;
