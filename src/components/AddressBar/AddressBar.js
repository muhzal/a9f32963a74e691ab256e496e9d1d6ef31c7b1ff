import React from 'react';

import locationIcon from 'assets/images/location.svg';
import chevronIcon from 'assets/images/chevron-right-solid.svg';
import './AddressBar.scss';

class AddressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false,
      addressBarTop: 0,
    };
  }

  componentDidMount() {
    this.setState({ addressBarTop: this.addressRef.offsetTop - 10 });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { addressBarTop, fixed } = this.state;

    if (window.pageYOffset > addressBarTop && fixed === false) {
      this.setState({ fixed: true });
    }

    if (window.pageYOffset < addressBarTop && fixed === true) {
      this.setState({ fixed: false });
    }
  };

  render() {
    return (
      <div
        className={`address-bar ${this.state.fixed ? 'fixed' : ''}`}
        ref={(ref) => (this.addressRef = ref)}
      >
        <label>Alamat Pengiriman</label>
        <div className="address-text">
          <div className="address">
            <img src={locationIcon} alt="marker" className="icon marker" />
            <span>
              Jalan Tulodong Atas No. 28, Senayan, Kebayoran Baru, Jakarta
              Selatan, DKI Jakarta 12190, Indonesia
            </span>
          </div>
          <img src={chevronIcon} alt=">" className="icon chevron" />
        </div>
      </div>
    );
  }
}

export default AddressBar;
