import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className="mt-20 ">
            <h1 className='text-5xl font-bold text-gray-900 p-5 rounded-lg mb-8 border-2 text-center bg-indigo-300'>Some Questions</h1>

                {/* differences between props and states */}
            <div className='mb-20'>
                <h1 className="text-3xl font-bold text-gray-900">1. What is the difference between states and props?</h1>
                <div>
                    <h5 className="text-xl font-semibold mt-6 text-gray-500"><span className="font-bold text-gray-800">#State: </span>State is owned locally and the component itself updates it.</h5>
                    <h5 className="text-xl font-semibold mt-6 text-gray-500"><span className="font-bold text-gray-800">#Props: </span>Props are owned and read-only by a parent.</h5>
                </div>
            </div>

                {/* How does useState work in react? */}
            <div className='mb-20'>
                <h1 className="text-3xl font-bold text-gray-900">2. How does useState work in react?</h1>
                <div>
                    <h5 className="text-xl font-semibold mt-6 text-gray-500"><span className="font-bold text-gray-800">#useState: </span>useState is a hook provided by React that allows us to add state to functional components. When we call useState, it returns an array with two elements: the first element is the current state value, and the second element is a function that allows us to update the state.</h5>
                </div>
            </div>

            {/* useEffect hook */}
            <div className='mb-20'>
                <h1 className="text-3xl font-bold text-gray-900">3. What can do a useEffect hook except the data load?</h1>
                <div>
                    <h5 className="text-xl font-semibold mt-6 text-gray-500"><span className="font-bold text-gray-800">#1: </span>Updating the DOM directly.</h5>

                    <h5 className="text-xl font-semibold mt-6 text-gray-500"><span className="font-bold text-gray-800">#2: </span>Listening to events, such as mouse clicks or key presses.</h5>

                    <h5 className="text-xl font-semibold mt-6 text-gray-500"><span className="font-bold text-gray-800">#3: </span>Setting timers or intervals.</h5>

                    <h5 className="text-xl font-semibold mt-6 text-gray-500"><span className="font-bold text-gray-800">#4: </span>Subscribing to observables or web sockets.</h5>
                    
                    <h5 className="text-xl font-semibold mt-6 text-gray-500"><span className="font-bold text-gray-800">#5: </span>Updating the state of the component based on changes in props or context.</h5>
                </div>     
            </div>


            {/* How does react work */}
            <div className='mb-20'>
                <h1 className="text-3xl font-bold text-gray-900">4. How does react work?</h1>
                <div>
                    <h5 className="text-xl font-semibold mt-6 text-gray-500"><span className="font-bold text-gray-800">#React: </span>React uses a declarative paradigm, react application aims to be both efficient and flexible. It designs simple views for each state in our application, and React will efficiently update and render just the right component when our data changes. The declarative view makes our code more predictable and easier to debug. A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks.</h5>
                </div>
            </div>


            
            
        </div>
        
    );
};

export default Questions;