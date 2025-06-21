import React from 'react';
import illustration1 from '../../../assets/live-tracking.png'
import illustration2 from '../../../assets/safe-delivery.png'
import BenefitsCard from './BenefitsCard';

const benefitsCardContent = [
    {
        image: illustration1,
        heading: "Live Parcel Tracking",
        text: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind."
    },
    {
        image: illustration2,
        heading: "100% Safe Delivery",
        text: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time."
    },
    {
        image: illustration2,
        heading: "24/7 Call Center Support",
        text: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us."
    },
]

const Benefits = () => {
    return (
        <section className="py-10 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>

            {
                benefitsCardContent.map((card, index)=> <BenefitsCard key={index} card={card} />)
            }
        </section>
    );
};

export default Benefits;