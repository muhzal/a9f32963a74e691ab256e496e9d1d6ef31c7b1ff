import React, { Component } from 'react';
import Header from 'components/Header/Header';
import AddressBar from 'components/AddressBar/AddressBar';
import TabButton from 'components/Tab/TabButton';
import TabNavigation from 'components/Tab/TabNavigation';
import MenuList from 'components/Menu/MenuList';
import MenuItem from 'components/Menu/MenuItem';

import luchIcon from 'assets/images/lunch.svg';
import luch1Icon from 'assets/images/lunch-1.jpg';
import luch2Icon from 'assets/images/lunch-2.jpg';
import luch3Icon from 'assets/images/lunch-3.jpg';
import luch4Icon from 'assets/images/lunch-4.jpg';
import luch5Icon from 'assets/images/lunch-5.jpg';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'lunch',
    };
  }

  toggleTab(type, event) {
    this.setState({ activeTab: type });
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
          <div className="tab-content">
            <MenuList>
              {menu.map((item) => <MenuItem key={item.image} {...item} />)}
            </MenuList>
          </div>
        </div>
      </div>
    );
  }
}

const menu = [
  {
    name: 'Kopi Oey-Lunch',
    image: luch1Icon,
    category: ['Lunch', 'Budget', 'Kitchen'],
    deliveryFee: 0,
    discountPrice: 25000,
    realPrice: 30000,
  },
  {
    name: 'Zhuma Japanese',
    image: luch2Icon,
    category: ['Lunch', 'Budget', 'Kitchen'],
    deliveryFee: 0,
    discountPrice: 25000,
    realPrice: 30000,
  },
  {
    name: 'Belly Bandit Combo',
    image: luch3Icon,
    category: ['Lunch', 'Budget', 'Kitchen'],
    deliveryFee: 0,
    discountPrice: 25000,
    realPrice: 30000,
  },
  {
    name: 'Betawi Corner Lunch',
    image: luch4Icon,
    category: ['Lunch', 'Budget', 'Kitchen'],
    deliveryFee: 0,
    discountPrice: 25000,
    realPrice: 30000,
  },
  {
    name: 'Belly Bandit Single',
    image: luch5Icon,
    category: ['Lunch', 'Budget', 'Kitchen'],
    deliveryFee: 0,
    discountPrice: 25000,
    realPrice: 30000,
  },
];

export default App;
