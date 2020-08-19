import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link to='/'>
          <img src={logo} alt='Ecommerce' className='navbar-brand' />
        </Link>

        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link to='/' className='nav-link'>
              College Web
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
