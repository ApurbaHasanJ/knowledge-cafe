import React, { useEffect, useState } from 'react';
import './BlogBookmarks.css';

const BlogBookmarks = ({blogReadTime, bookmarks}) => {
    const [readTime, setReadTime] = useState(0);
    const [bookmark, setBookmark] = useState([]);
    
    useEffect(() => {
        const getBookmarkFromLS = JSON.parse(localStorage.getItem('blogBookmark'));
        if(getBookmarkFromLS){
            setBookmark(getBookmarkFromLS);
        }
        else{
            setBookmark([]);
        }
    }, [bookmarks]);

    useEffect(() => {
        const getBlogReadTimeFromLS = localStorage.getItem('blogReadTime');
        if (getBlogReadTimeFromLS){
            setReadTime(getBlogReadTimeFromLS);
        }
        else{
            setReadTime(0);
        }
    }, [blogReadTime]);

    return (
        <div className='sticky top-7 blogBookmarks '>
            <h1 className='mb-6 text-center font-bold border-2 border-indigo-900/50 text-indigo-700 bg-indigo-200 p-6 text-2xl rounded-lg'>
                Spent time on read : {readTime}min
            </h1>
            <div className='bg-slate-200 p-7 rounded-lg'>
                <h1 className='text-2xl font-bold'>Bookmarked Blogs : {bookmark.length}</h1>
                {bookmark.length > 0 ? (
                    bookmark.map((item, index) => (
                        <p key={index} className='font-semibold text-lg mt-4 p-4 rounded-lg bg-white'>{item}</p>
                    ))
                ) : (
                    <p className='font-semibold text-lg mt-4 p-4 rounded-lg bg-white'>You must set a bookmark</p>
                )}
            </div>
        </div>
    );
};

export default BlogBookmarks;
