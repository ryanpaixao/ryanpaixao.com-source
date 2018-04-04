import React from 'react';
import {
  Link
} from 'react-router-dom';

// images
import Logo from '../../assets/images/logos/ryanpaixao_logo.svg';

// components
import Menu from '../reusableComponents/menu/ToggledMenu';

const MenuButton = ({handleMouseDown}) => {
  return (
    <button 
      className='mobile-nav-button'
      onMouseDown={handleMouseDown}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};

const MenuContent = ({menuVisibility, handleMouseDown}) => {
  let visibility = menuVisibility ? 'show' : 'hide';

  return (
    <nav onClick={handleMouseDown} className={'slide-out-nav ' + visibility}>
      <ul>
        <li>
          <Link to='/About'>About</Link>
        </li>
        <li>
          <a href='https://github.com/ryanpaixao/ryanpaixao.com-source' target='_blank' rel='noopener noreferrer'>Source</a>
        </li>
        <li>
          <Link to='/Blog'>Blog</Link>
        </li>
        <li>
          <Link to='/Projects'>Projects</Link>
        </li>
        <li>
          <Link to='/Skills'>Skills</Link>
        </li>
        <li>
          <Link to='/Contact'>Contact</Link>
        </li>
        <li>
          <p><i className='arrow up'/></p>
        </li>
      </ul>
    </nav>
  );
};

const Header = (props) => {
  let urlIsRoot = props.match.isExact ? {display: 'none'} : {};

  return (
    <header style={urlIsRoot} className='header'>
      <div className='logo'>
        <Link to='/About'>
          <img src={Logo} alt='RP logo' />
        </Link>
      </div>

      <Menu MenuContent={MenuContent} MenuButton={MenuButton} styleClass={'nav-menu'} />
    </header>
  );
}

export default Header;
