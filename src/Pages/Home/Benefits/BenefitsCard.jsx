import React from 'react';

const BenefitsCard = ({card}) => {
    return (
        <div data-aos="flip-up" className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-2xl p-6 mb-6">
            <div className="w-3/12 flex justify-center">
                <img src={card.image}alt="Fast Delivery" className="w-3/4" />
            </div>

            {/* Divider */}
            <div className="my-4 md:my-0 md:mx-6 border-t md:border-t-0 md:border-l border-dashed border-gray-300 h-px md:h-40 w-full md:w-px"></div>

            <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-xl font-extrabold mb-2">{card.heading}</h3>
                <p className="text-gray-600">
                    {card.text}
                </p>
            </div>
        </div>
    );
};

export default BenefitsCard;