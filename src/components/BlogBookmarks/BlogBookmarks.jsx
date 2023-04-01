import React, { useEffect, useState } from 'react';
import './BlogBookmarks.css'
const BlogBookmarks = ({blogReadTime}) => {

    const [readTime, setReadTime] = useState(0)
    // console.log(readTime);

    useEffect(()=>{
        const getBlogReadTimeFromLS = localStorage.getItem('blogReadTime');
        if (getBlogReadTimeFromLS){
            setReadTime(getBlogReadTimeFromLS);
        }
        else{
            setReadTime(0)
        }
        // console.log(readTime);
    },[blogReadTime]);

    return (
        <div className='sticky top-0 '>
            <h1 className='mb-6 text-center font-bold text-indigo-600 bg-indigo-200 p-6 text-2xl rounded-lg'>
                Spent time on read : {readTime}min
            </h1>
            <div className='bg-slate-200 p-7 rounded-lg'>
                <h1 className='text-2xl font-bold'>Bookmarked Blogs : 8</h1>
                <p className='font-semibold text-xl mt-4 p-4 rounded-lg bg-white'>Master Microsoft Power Platform and Become an In-Demand!</p>
                <p className='font-semibold text-xl mt-4 p-4 rounded-lg bg-white'>Master Microsoft Power Platform and Become an In-Demand!</p>
                <p className='font-semibold text-xl mt-4 p-4 rounded-lg bg-white'>Master Microsoft Power Platform and Become an In-Demand!</p>
                <p className='font-semibold text-xl mt-4 p-4 rounded-lg bg-white'>Master Microsoft Power Platform and Become an In-Demand!</p>
                <p className='font-semibold text-xl mt-4 p-4 rounded-lg bg-white'>Master Microsoft Power Platform and Become an In-Demand!</p>
                <p className='font-semibold text-xl mt-4 p-4 rounded-lg bg-white'>Master Microsoft Power Platform and Become an In-Demand!</p>
                <p className='font-semibold text-xl mt-4 p-4 rounded-lg bg-white'>Master Microsoft Power Platform and Become an In-Demand!</p>
                <p className='font-semibold text-xl mt-4 p-4 rounded-lg bg-white'>Master Microsoft Power Platform and Become an In-Demand!</p>
                <p className='font-semibold text-xl mt-4 p-4 rounded-lg bg-white'>Master Microsoft Power Platform and Become an In-Demand!</p>
            </div>
        </div>
    );
};

export default BlogBookmarks;