'use client';

import { useState} from "react";

export const Counter = () => {
    console.log('Counter component');
    const [count, setCount] = useState(0);

    return (
        <div className= "bg-gray-800 text-white p-4 rounded-lg shadow-md">
        <button onClick={() => setCount(count + 1)} className= "text-5xl">Clicked {count} times
        </button>
        </div>
    );
};