import React from 'react';
import { motion } from 'framer-motion';

const ReviewsCard = ({ review, isActive }) => {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{
                y: isActive ? 0 : 20,
                opacity: isActive ? 1 : 0.3,
                scale: isActive ? 1 : 0.95,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 space-y-4 h-full flex flex-col justify-evenly">
            <p className="text-gray-700 text-base leading-relaxed">
                {review.review}
            </p>

            <hr className="border-t border-dashed border-gray-300" />

            <div className="flex items-center gap-4">
                <img
                    src="https://i.pravatar.cc/100?img=12"
                    alt="Author"
                    className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                    <h4 className="font-semibold text-gray-800">Sarah Ahmed</h4>
                    <p className="text-sm text-gray-500">Online Boutique Owner</p>
                </div>
            </div>
        </motion.div>

    );
};

export default ReviewsCard;