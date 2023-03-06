import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/homePage'
import Account from './components/accountPage'

function App() {
    return (
        <Router>
            <div>
        <Routes>
             <Route
             path="/"
             element= {<Home />}
             />
             <Route
             path="/account"
             element= {<Account />}
             />
        </Routes>    
            </div>
        </Router>
    );
}

export default App;