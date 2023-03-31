import React from 'react';
import './Header.css'
import User from '../../assets/User.jpg'

const Header = () => {
    return (
        <div className='mb-18'>
            <nav className='flex justify-center items-center p-12 pb-8 border-b-4 border-indigo-300 bg-slate-100'>
            <p className='text-4xl font-bold'>Knowledge Cafe</p>
            <div className='text-gray-900 ml-auto flex gap-4 text-xl font-medium'>
                <a href="#">Tutorials</a>
                <a href="#">Articles</a>
                <a href="#">Blogs</a>
                <a href="#">Community</a>
                <img className='user-img rounded-full' src={User} alt="User Img" />
            </div>
            </nav>
            
        </div>
    );
};

export default Header;