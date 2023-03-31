import React from 'react';
import './Header.css';
import User from '../../assets/User.jpg';

const Header = () => {
  return (
    <div className='header mb-20'>
      <nav className='nav lg:flex justify-between items-center sm:p-2 lg:p-10 pb-8 border-b-4 border-indigo-300 bg-slate-100'>
        <p className='logo text-4xl font-bold text-indigo-600 sm:mb-3'>Knowledge Cafe</p>
        <div className='nav-items flex sm:flex-col lg:flex-row gap-4 text-xl font-medium items-center'>
          <a className='hover:text-indigo-600' href='#'>
            Tutorials
          </a>
          <a className='hover:text-indigo-600' href='#'>
            Articles
          </a>
          <a className='hover:text-indigo-600' href='#'>
            Blogs
          </a>
          <a className='hover:text-indigo-600' href='#'>
            Community
          </a>
          <img className='user-img rounded-full' src={User} alt='User Img' />
        </div>
      </nav>
    </div>
  );
};

export default Header;
