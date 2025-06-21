import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import Services from '../Services/Services';
import BrandSlide from '../BrandSlide/BrandSlide';
import Benefits from '../Benefits/Benefits';
import BecomeMarchent from '../BecomeMarchent/BecomeMarchent';
import Reviews from '../CustomerReviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWorks />
            <Services />
            <BrandSlide />
            <Benefits />
            <BecomeMarchent />
            <Reviews />
        </div>
    );
};

export default Home;