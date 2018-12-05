import React from 'react';
import './MenuList.scss';

const MenuList = (props) => {
  return (
    <div className="menu-list">
      {props.children}
    </div>
  )
}

export default MenuList;