import React from 'react'; 
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Error404 from '../pages/Error404';
import ApartmentPage from '../pages/ApartmentPage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function App() {
    return (
        <div>
            <Navbar />
            <div className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error404 />} />
                    <Route path="/flat" element={<ApartmentPage/>} />
                </Routes>  
            </div>
            <Footer />
        </div>
    );
}

export default App; 