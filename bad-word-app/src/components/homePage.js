import React, {useState, useEffect } from 'react';
import {getDab, getOneDab}  from '../utils/DabApi';
import {getFlower, getOneFlower} from '../utils/FlowerApi';

const Home = () => {
    const hello = "Hello"
    return (
        <body>
        <header className='text-2xl flex justify-center text-red-800 font-serif bg-gradient-to-tr from-lime-500 to-green-400 py-8 '>
               Maroone
            </header>
            
            <div className="pt-6 pr-4 text-lime-600 ">
                <h1>Categories</h1>
                

            </div>

            <div>
                <h1>Vaporizers</h1>
                
            </div>

            <div>
                <h1>Edibles</h1>
                
            </div>

            <footer>
                <li>
                    <li>GitHub: PsychoRS</li>
                    <li>Email:yeswhy99@gmail.com</li>
                    <li>Portfolio:IDK</li>
                </li>
            </footer>
        </body>
         
    )
}

export default Home;