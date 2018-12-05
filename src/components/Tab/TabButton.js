import React from 'react';
import './TabButton.scss';

const TabButton = ({ children, active, ...props }) => {
  return (
    <button className={`tab-button ${active ? 'active' : ''}`} {...props}>
      {children}
    </button>
  );
};

export default TabButton;
