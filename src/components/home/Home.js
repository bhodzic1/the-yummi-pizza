import React from 'react';
import ImageSlider from './ImageSlider';
import './home.css';
import About from './About';
import Contact from './Contact';
import Maps  from './GoogleMap';



const Home = () => {

    return(
        <div className="homeApp">
            <div className="imageSliderDiv">
                <ImageSlider />
            </div>
            {/*<div>
                <About />
            </div>*/}
            <div>
                <Contact />
            </div>
        </div>
    );
}

export default Home;