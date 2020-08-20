import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='top-navbar'>
        <Link to='/'>
          <img src={logo} alt='Ecommerce' className='navbarbrand' />
        </Link>

        <ul className='navbarnav mrauto'>
          <li>
            <Link to='/' className='navmenu'>
              College Web
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
