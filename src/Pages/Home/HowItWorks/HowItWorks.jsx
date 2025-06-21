import React from 'react';
import bookingImg from '../../../assets/bookingIcon.png'

const HowItWorks = () => {
    return (
        <div data-aos="zoom-in" className='max-w-6xl mx-auto my-20'>
            <h2 className="text-3xl font-bold mb-4">How it Works</h2>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mt-5'>
                <div className='flex flex-col gap-3 border p-5 rounded-2xl'>
                    <div><img src={bookingImg} alt="" /></div>
                    <h3 className='text-primary font-bold text-lg'>Booking Pick & Drop</h3>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='flex flex-col gap-3 border p-5 rounded-2xl'>
                    <div><img src={bookingImg} alt="" /></div>
                    <h3 className='text-primary font-bold text-lg'>Booking Pick & Drop</h3>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='flex flex-col gap-3 border p-5 rounded-2xl'>
                    <div><img src={bookingImg} alt="" /></div>
                    <h3 className='text-primary font-bold text-lg'>Booking Pick & Drop</h3>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='flex flex-col gap-3 border p-5 rounded-2xl'>
                    <div><img src={bookingImg} alt="" /></div>
                    <h3 className='text-primary font-bold text-lg'>Booking Pick & Drop</h3>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>

        </div>
    );
};

export default HowItWorks;