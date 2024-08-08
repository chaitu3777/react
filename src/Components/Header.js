import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';


 function Header() {
  return (
    <div  className='menu'>
      <ul>
      <Link to='/react'><li>Home</li></Link>
      <Link to='/about'><li>Sales</li></Link>
      <Link to='/services'><li>Services</li></Link>
      <Link to='/contact'><li>Contact</li></Link>
      </ul>     
    </div>
  )
}
export default Header