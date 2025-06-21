import React, { useState } from 'react';
import reviewsImg from '../../../assets/customer-top.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import ReviewsCard from './ReviewsCard';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './review.css'

import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { MdOutlineArrowBack, MdOutlineArrowForward } from 'react-icons/md';

const reviewsData = [
    {
        "review": "Fast and reliable! I’ve used many delivery services, but this one truly exceeded expectations.",
        "author": "Sarah Ahmed",
        "position": "Online Boutique Owner",
        "image": "https://i.pravatar.cc/150?img=12"
    },
    {
        "review": "Real-time tracking made everything stress-free. I knew where my package was every second.",
        "author": "James Karim",
        "position": "Freelance Photographer",
        "image": "https://i.pravatar.cc/150?img=13"
    },
    {
        "review": "Super professional and always on time. I use this service daily for my e-commerce orders.",
        "author": "Nusrat Hossain",
        "position": "Founder, TrendyCart",
        "image": "https://i.pravatar.cc/150?img=14"
    },
    {
        "review": "Customer support is amazing! They helped me reroute a parcel quickly when I gave the wrong address.",
        "author": "Tanvir Alam",
        "position": "Small Business Owner",
        "image": "https://i.pravatar.cc/150?img=15"
    },
    {
        "review": "Highly impressed with the speed. Even urgent deliveries get there on time, every time.",
        "author": "Raisa Morshed",
        "position": "Event Organizer",
        "image": "https://i.pravatar.cc/150?img=16"
    },
    {
        "review": "Smooth process from pickup to delivery. The app is easy to use and the drivers are courteous.",
        "author": "Sajid Mahmud",
        "position": "Tech Accessories Seller",
        "image": "https://i.pravatar.cc/150?img=17"
    },
    {
        "review": "Affordable rates and zero hassle. What more could I ask for? Totally worth it.",
        "author": "Farzana Yeasmin",
        "position": "Handmade Crafts Seller",
        "image": "https://i.pravatar.cc/150?img=18"
    },
    {
        "review": "Their delivery team saved me during Eid rush! Everything arrived on time and in perfect condition.",
        "author": "Riyad Khan",
        "position": "Owner, Riyad's Kitchen",
        "image": "https://i.pravatar.cc/150?img=19"
    },
    {
        "review": "Trustworthy service. I've never had a single parcel lost or delayed.",
        "author": "Mehnaz Parveen",
        "position": "Bookseller",
        "image": "https://i.pravatar.cc/150?img=20"
    },
    {
        "review": "I run a flower shop and timing is everything. This service never disappoints.",
        "author": "Arif Chowdhury",
        "position": "Florist",
        "image": "https://i.pravatar.cc/150?img=21"
    }
]


const Reviews = () => {
    const [next, setNext] = useState(null);
    return (
        <div className='my-20'>
            <div className='text-center flex justify-center'>
                <img src={reviewsImg} alt="" />
            </div>
            <div className='max-w-3xl mx-auto text-center my-10'>
                <h2 className="text-3xl font-bold text-center text-primary mb-4">What our customers are sayings</h2>
                <p className="text-lg font-extralight">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>
            </div>

            <Swiper

                grabCursor={true}
                centeredSlides={true}
                slidesPerView={4}
                modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
                pagination={true}
                navigation={true}
                autoplay={true}
                loop={true}
                onSwiper={setNext}
                className="mySwiper"
            >
                {
                    reviewsData.map((review, index) => <SwiperSlide>
                        {
                            ({ isActive }) => (
                                <ReviewsCard key={index} isActive={isActive} review={review} />
                            )
                        }
                    </SwiperSlide>)
                }
            </Swiper>
            <div className='flex justify-evenly'>
                <button onClick={()=> next && next.slidePrev()} className='bg-white group hover:bg-secondary p-2 rounded-full transition ease-in-out duration-300'> <MdOutlineArrowBack size={24} /></button>
                <button onClick={()=> next && next.slideNext()} className='bg-white group hover:bg-secondary p-2 rounded-full transition ease-in-out duration-300'><MdOutlineArrowForward size={24} /></button>
            </div>
        </div >
    );
};

export default Reviews;