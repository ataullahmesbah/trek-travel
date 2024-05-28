import React from 'react';
import { FaBed, FaUtensils, FaBus, FaUsers, FaDumbbell, FaPlane } from 'react-icons/fa';

const eventFeatures = [
    {
        icon: <FaBed size={40} className="text-sky-900" />,
        title: 'ACCOMMODATION',
        description: 'Quality hotel/motels with easy bathroom access...',
    },
    {
        icon: <FaUtensils size={40} className="text-sky-900" />,
        title: 'MEALS',
        description: 'Nutritious meals provided for all dietary needs...',
    },
    {
        icon: <FaBus size={40} className="text-sky-900" />,
        title: 'TRANSPORTATION',
        description: 'Comfortable transport arrangements for all events...',
    },
    {
        icon: <FaUsers size={40} className="text-sky-900" />,
        title: 'TEAM',
        description: 'Experienced and friendly team at your service...',
    },
    {
        icon: <FaDumbbell size={40} className="text-sky-900" />,
        title: 'FACILITIES',
        description: 'Top-notch facilities to cater to your every need...',
    },
    {
        icon: <FaPlane size={40} className="text-sky-900" />,
        title: 'AIRPORTS',
        description: 'Convenient airport transfers and pickups...',
    },
];

const EventSystem = () => {
    return (
        <div className="bg-gray-50 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* <h1 className="text-3xl font-semibold mb-6 text-center">Our Event System</h1>
                <p className="text-center mb-12 text-base sm:text-lg md:text-xl text-gray-700">We ensure a seamless experience with our top-quality services.</p> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {eventFeatures.map((feature, index) => (
                        <div key={index} className="flex flex-col p-6 rounded-lg">
                            <div className="flex gap-8">
                                <div className="flex-shrink-0">{feature.icon}</div>
                                <div>
                                    <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
                                    <p className="text-gray-700">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventSystem;
