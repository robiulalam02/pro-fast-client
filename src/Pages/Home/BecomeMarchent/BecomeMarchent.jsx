import React from 'react';
import locationImg from '../../../assets/location-merchant.png'
import bgShade from '../../../assets/be-a-merchant-bg.png'

const BecomeMarchent = () => {
    return (
        <div data-aos="flip-left" className="hero max-w-6xl mx-auto p-10 rounded-3xl my-20 bg-[#03373D] relative overflow-hidden text-white">
            <img className='absolute -top-10 brightness-200' src={bgShade} alt="" />
            <div className="hero-content flex-col lg:flex-row-reverse bg-cover bg-center">
                
                <div className='w-5/12'>
                    <img
                        src={locationImg}
                        className=""
                    />
                </div>
                <div className='w-7/12'>
                    <h1 className="text-4xl font-bold">Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className="py-6">
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <button className="bg-secondary px-8 py-3 text-black font-semibold rounded-full mr-5">Become a Merchant</button>
                    <button className="border border-secondary font-semibold px-8 py-3 rounded-full">Earn with Profast Courier</button>
                </div>
            </div>
        </div>
    );
};

export default BecomeMarchent;