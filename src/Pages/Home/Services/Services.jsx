import React from 'react';
import ServicesCard from './ServicesCard';
import {
  MdLocalShipping,
  MdOutlinePublic,
  MdInventory,
  MdOutlineMoney,
  MdBusiness,
  MdAssignmentReturn,
} from 'react-icons/md';

const servicesData = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: <MdLocalShipping size={40} className="text-primary" />,
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: <MdOutlinePublic size={40} className="text-primary" />,
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: <MdInventory size={40} className="text-primary" />,
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: <MdOutlineMoney size={40} className="text-primary" />,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    icon: <MdBusiness size={40} className="text-primary" />,
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: <MdAssignmentReturn size={40} className="text-primary" />,
  },
];

const Services = () => {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-primary rounded-3xl text-white">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                <p className="text-lg font-extralight">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {servicesData.map((service, index) => (
                    <ServicesCard key={index} service={service} />
                ))}
            </div>
        </section>
    );
};

export default Services;
