import React, {useState, useEffect } from 'react';
import {getDab, getOneDab}  from '../utils/DabApi';
import {getFlower, getOneFlower} from '../utils/FlowerApi';

const Home = () => {
    const hello = "Hello"
    return (
        <div>
            <h1>
                {hello}
            </h1>
        </div>
    )
}

export default Home;