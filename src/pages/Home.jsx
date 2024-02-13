import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner"
import ApartmentList from "../components/ApartmentList"
import Footer from "../components/Footer"

function Home(){
    return<div >
     
        <Navbar/>
        <main>
        <Banner/>
        <ApartmentList/>
        </main>
        <Footer/>
        </div>
 
}
export default Home;