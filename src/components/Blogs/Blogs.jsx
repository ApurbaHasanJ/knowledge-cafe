import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Blogs.css';

const Blogs = ({blog, handleBlogReadTime, handleBookmark}) => {
    // console.log(props);
    return (
        <div className='blog mb-20 '>
            <img className='blog-poster w-full h-auto object-cover mx-auto' src={blog.blogPoster} alt="Blog Poster" />
            <div className='flex  mt-7 mb-4 justify-center items-center'>
                <img className='blog-writer-img' src={blog.writerImg} alt="User Img" />
                <div className='ml-5'>
                    <h3 className='font-bold text-2xl'>{blog.blogWriter}</h3>
                    <p className=' text-gray-600 text-base font-semibold'>{blog.publishDate}</p>
                </div>
                <p className='ml-auto text-gray-600 text-lg font-medium'>{blog.readingTime} 
                min read
                <FontAwesomeIcon onClick={()=>handleBookmark(blog.blogTitle)} className='ml-3' icon={faBookmark} />
                </p>
            </div>
            <h1 className='font-bold text-4xl mb-4'>{blog.blogTitle}</h1>
            <div className='flex font-medium text-lg text-gray-600 gap-3'>
                <p>{blog.hashtags.firstTag}</p>
                <p>{blog.hashtags.secTag}</p>
            </div>
            <p onClick={()=> handleBlogReadTime(blog.readingTime)} className='mt-5 text-indigo-700 font-semibold underline hover:underline-offset-4'>Mark as read</p>
            
        </div>
    );
};

export default Blogs;