import React from 'react';

const ServicesCard = ({ service }) => {
    return (
        <div data-aos="zoom-in" className="card bg-base-200 shadow-md hover:shadow-xl transition duration-300">
            <div className="card-body space-y-3 items-center text-center">
                {service.icon}
                <h3 className="card-title text-primary font-bold text-xl">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
            </div>
        </div>
    );
};

export default ServicesCard;