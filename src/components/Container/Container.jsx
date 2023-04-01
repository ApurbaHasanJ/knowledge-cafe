import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import BlogBookmarks from '../BlogBookmarks/BlogBookmarks';
import Blogs from '../Blogs/Blogs';
import './Container.css'

const Container = () => {

    // Add to Bookmark
const [bookmarks, setBookmarks] = useState([]);

// Handle Bookmarks
const handleBookmark = (bookmark) => {
    const previousBookmark = JSON.parse(localStorage.getItem('blogBookmark'));
  
    if (previousBookmark) {
      const isAlreadyBookmarked = previousBookmark.some((b) => JSON.stringify(b) === JSON.stringify(bookmark));
      if (isAlreadyBookmarked) {
        toast('This Blog Is Already Bookmarked');
      } 
      else {
        const updatedBookmarks = [...previousBookmark, bookmark];
        localStorage.setItem('blogBookmark', JSON.stringify(updatedBookmarks));
        setBookmarks(updatedBookmarks);
        toast('Bookmarked Successfully');
      }
    } else {
      localStorage.setItem('blogBookmark', JSON.stringify([bookmark]));
      setBookmarks([bookmark]);
      toast('Bookmarked Successfully');
    }
  };
  
  
    // Spent time on reading blog posts
    const [blogReadTime, setBlogsReadTime] = useState('');

    // handle blog read time
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

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])


    return (
        <div className='blogs-container lg:flex mb-10  gap-3 border-b-4 border-indigo-300'>
            <div className='Blogs mb-4'>
                {
                    blogs.map(blog => <Blogs blog={blog} key={blog.id} handleBlogReadTime ={handleBlogReadTime} handleBookmark={handleBookmark}></Blogs>)
                }
            </div>
            <aside className=' ml-auto mb-4'>
                <BlogBookmarks blogReadTime={blogReadTime} bookmarks={bookmarks}></BlogBookmarks>
                <ToastContainer></ToastContainer>
            </aside>
            
        </div>
    );
};

export default Container;