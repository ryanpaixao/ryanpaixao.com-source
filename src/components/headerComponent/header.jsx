import React from 'react';
import {
  Link
} from 'react-router-dom';

const Header = (props) => {
  let urlIsRoot = props.match.isExact ? {display: 'none'} : {};

  return (
    <header style={urlIsRoot}>
      <div style={{marginLeft: '20px', width: '90px'}}>
        <Link to="/">
          <div className="logo-6" />
        </Link>
      </div>

      <nav>
        <ul>
          <li className="first">
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
          <li className="last">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
