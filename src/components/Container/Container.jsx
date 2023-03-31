import React, { useEffect, useState } from 'react';
import BlogBookmarks from '../BlogBookmarks/BlogBookmarks';
import Blogs from '../Blogs/Blogs';
import './Container.css'

const Container = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])




    return (
        <div className='blogs-container lg:flex  gap-3'>
            <div className='Blogs'>
                {
                    blogs.map(blog => <Blogs blog={blog} key={blog.id}></Blogs>)
                }
            </div>
            <aside className=' ml-auto'>
                <BlogBookmarks></BlogBookmarks>
            </aside>
            
        </div>
    );
};

export default Container;