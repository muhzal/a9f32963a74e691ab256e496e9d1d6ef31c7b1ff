import React from 'react';
import './TabNavigation.scss';

const TabNavigation = ({ children, className, ...props }) => {
  return (
    <div className={`tab-navigation ${className ? className : ''}`} {...props}>
      {children}
    </div>
  );
};

export default TabNavigation;
