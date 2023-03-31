import React, { useEffect, useState } from 'react';
import Blogs from '../../Blogs/Blogs';
import './Container.css'

const Container = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])




    return (
        <div className='main flex'>
            <div className='Blogs'>
                {
                    blogs.map(blog => <Blogs blog={blog} key={blog.id}></Blogs>)
                }
            </div>
            <aside>
                <p>THis is aSide tag</p>
            </aside>
            
        </div>
    );
};

export default Container;