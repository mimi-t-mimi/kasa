import React from 'react'; 
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Apartment from '../pages/Apartment';
import Error404 from '../pages/Error404';


function App() {
    return (

        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/fiche-logement/:id" element={<Apartment />} />
                <Route path="*" element={<Error404 />} />

            </Routes>
        </div>

    );
   
}

export default App