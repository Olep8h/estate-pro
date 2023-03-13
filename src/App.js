import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import NewListings from "./components/New Listings/NewListings";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <NewListings/>
        </div>
    );
}
export default App;