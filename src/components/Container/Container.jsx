import React, { useEffect, useState } from 'react';
import BlogBookmarks from '../BlogBookmarks/BlogBookmarks';
import Blogs from '../Blogs/Blogs';
import './Container.css'

const Container = () => {

    // Spent time on reading blog posts
    const [blogReadTime, setBlogsReadTime] = useState('');

    const handleBlogReadTime = (readTime) => {
            const previousReadTime = JSON.parse(localStorage.getItem('blogReadTime'));
            // console.log(previousReadTime);
            if (previousReadTime){
                const totalReadTime = previousReadTime + readTime;
                localStorage.setItem('blogReadTime', totalReadTime);
                setBlogsReadTime(totalReadTime);

            }
            else{
                localStorage.setItem('blogReadTime', readTime);
                setBlogsReadTime(readTime);
            }
    };

    // Handle BookMarks
    // const bookmarks = ()=>{

    // }

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])




    return (
        <div className='blogs-container lg:flex mb-10  gap-3'>
            <div className='Blogs'>
                {
                    blogs.map(blog => <Blogs blog={blog} key={blog.id} handleBlogReadTime={handleBlogReadTime}></Blogs>)
                }
            </div>
            <aside className=' ml-auto'>
                <BlogBookmarks blogReadTime={blogReadTime}></BlogBookmarks>
            </aside>
            
        </div>
    );
};

export default Container;