import Aos from 'aos';
import React from 'react';

const AnimateOnSlide = () => {
    return Aos.init({
        duration: 1000,
        once: true
    })
};

export default AnimateOnSlide;