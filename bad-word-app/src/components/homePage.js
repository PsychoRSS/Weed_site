import React, {useState, useEffect } from 'react';
import {getDab, getOneDab}  from '../utils/DabApi';
import {getFlower, getOneFlower} from '../utils/FlowerApi';

const Home = () => {
    const hello = "Hello"
    return (
        <body>
            <header>
               Weed-site
            </header>
            
            <div>
                <h1>Categories</h1>

            </div>

            <div>
                <h1>Vaporizers</h1>
                
            </div>

            <div>
                <h1>Edible</h1>
                
            </div>

            <footer>
                <li>
                    <p>GitHub: PsychoRS</p>
                    <p>Email:yeswhy99@gmail.com</p>
                    <p>Portfolio:IDK</p>
                </li>
            </footer>
        </body>
         
    )
}

export default Home;