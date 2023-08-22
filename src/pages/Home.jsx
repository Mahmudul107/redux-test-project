import React from 'react';
import Counter from '../components/Counter';

const Home = () => {
    return (
        <div>
            <h2 className='text-4xl text-lime-500 bg-lime-950 shadow-2xl text-center p-6 mb-8'>Home</h2>
            <Counter/>
        </div>
    );
};

export default Home;