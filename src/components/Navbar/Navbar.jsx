/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
      const navlinks = <>

            <li className='btn'><NavLink to='/'>Home</NavLink></li>
            <li className='btn ml-6'><NavLink to='/added'>AddedProduct</NavLink></li> 
            <li className='btn ml-6'><NavLink to='/product'>Product</NavLink></li> 
      </>
      return (
            <div className='flex justify-center'>
                 {navlinks}
            </div>
      );
};

export default Navbar;