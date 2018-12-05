import React, { Component } from 'react';
import Header from 'components/Header/Header';
import AddressBar from 'components/AddressBar/AddressBar';
import TabButton from 'components/Tab/TabButton';
import TabNavigation from 'components/Tab/TabNavigation';

import luchIcon from 'assets/images/lunch.svg';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'dinner',
    };
  }

  toggleTab(type, event) {
    this.setState({activeTab: type});
  }

  render() {
    return (
      <div>
        <Header />
        <AddressBar />
        <div className="content">
          <TabNavigation>
            <TabButton
              onClick={this.toggleTab.bind(this, 'lunch')}
              active={this.state.activeTab === 'lunch'}
            >
              <img src={luchIcon} alt="icon" className="icon" />
              Paket Lunch
            </TabButton>
            <TabButton
              onClick={this.toggleTab.bind(this, 'dinner')}
              active={this.state.activeTab === 'dinner'}
            >
              <img src={luchIcon} alt="icon" className="icon" />
              Paket Dinner
            </TabButton>
          </TabNavigation>
        </div>
      </div>
    );
  }
}

export default App;
