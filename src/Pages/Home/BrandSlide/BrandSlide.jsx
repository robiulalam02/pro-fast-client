import React from 'react';
import companyLogo1 from '../../../assets/brands/amazon.png'
import companyLogo2 from '../../../assets/brands/casio.png'
import companyLogo3 from '../../../assets/brands/moonstar.png'
import companyLogo4 from '../../../assets/brands/randstad.png'
import companyLogo5 from '../../../assets/brands/start-people 1.png'
import companyLogo6 from '../../../assets/brands/start.png'
import Marquee from 'react-fast-marquee';

const companyLogos = [companyLogo1, companyLogo2, companyLogo3, companyLogo4, companyLogo5, companyLogo6]

const BrandSlide = () => {
    return (
        <div className='mt-10 mb-20 max-w-6xl mx-auto'>
            <h2 className="text-2xl text-center font-bold mb-4">We've helped thousands of sales teams</h2>

            <Marquee
                className='mt-20'
            >
                    {
                        companyLogos.map((company, index) => <div className='mx-20 flex items-center justify-center max-h-10' key={index}>
                            <img className='h-full object-contain' src={company} alt="" />
                        </div>)
                    }
            </Marquee>

        </div>
    );
};

export default BrandSlide;