import React from 'react';
import {
  Link
} from 'react-router-dom';

// components
import Menu from '../reusableComponents/menu/MenuContainer';

const Header = (props) => {
  let urlIsRoot = props.match.isExact ? {display: 'none'} : {};

  return (
    <header style={urlIsRoot} className='header'>
      <div className='logo'>
        <Link to='/About'>
          <div className='logo-6' />
        </Link>
      </div>

      <Menu />
    </header>
  );
}

export default Header;
