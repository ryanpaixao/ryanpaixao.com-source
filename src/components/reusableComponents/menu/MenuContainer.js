import React from 'react';
import {
  Link
} from 'react-router-dom';

const Menu = ({menuVisibility, handleMouseDown}) => {
  let visibility = menuVisibility ? "show" : "hide";

  return (
    <nav id="slide-out-menu" onClick={handleMouseDown} className={visibility}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Skills">Skills</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

const MenuButton = ({handleMouseDown}) => {
  return (
    <button 
      id="mobile-menu-button"
      onMouseDown={handleMouseDown}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};

export default class MenuContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  handleMouseDown(e, other) {
    this.toggleMenu();

    e.stopPropagation();
  }

  render() {
    return (
      <div className="menu">
        <MenuButton 
          handleMouseDown={this.handleMouseDown} 
        />
        <Menu 
          handleMouseDown={this.handleMouseDown} 
          menuVisibility={this.state.visible} 
        />
      </div>
    );
  }
}
