'use client';

import { useState } from "react";

const EventTabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        { id: 1, label: "Summary" },
        { id: 2, label: "Itinerary" },
        { id: 3, label: "Policies" },
        { id: 4, label: "Options" },
    ];

    return (
        <div className="max-w-3xl mx-auto p-4">
            <ul className="flex items-center bg-[#59bdf738] rounded-full p-1 relative">
                <div
                    className={`${(activeTab === 1 && "translate-x-[0px]") ||
                        (activeTab === 2 && "translate-x-[90px]") ||
                        (activeTab === 3 && "translate-x-[186px]") ||
                        (activeTab === 4 && "!w-[100px] translate-x-[290px]")
                        } !bg-[#3B9DF8] absolute !text-[#fff] h-[85%] w-[95px] transition duration-700 rounded-full border-transparent cursor-pointer`}
                ></div>
                <li
                    className={`${activeTab === 1 && " !text-[#fff]"
                        } px-6 py-2  text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                    onClick={() => setActiveTab(1)}
                >
                    Summary
                </li>
                <li
                    className={`${activeTab === 2 && " !text-[#fff]"
                        } px-6 py-2  text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                    onClick={() => setActiveTab(2)}
                >
                    Itinerary
                </li>
                <li
                    className={`${activeTab === 3 && " !text-[#fff]"
                        } px-6 py-2  text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                    onClick={() => setActiveTab(3)}
                >
                    Policies
                </li>
                <li
                    className={`${activeTab === 4 && " !text-[#fff]"
                        } px-6 py-2  text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                    onClick={() => setActiveTab(4)}
                >
                    Options
                </li>
            </ul>

            {/* Tab Content */}
            <div className="mt-4 p-4 border rounded bg-white shadow-sm">
                {activeTab === 1 && <div>Summary content goes here</div>}
                {activeTab === 2 && <div>Itinerary content goes here</div>}
                {activeTab === 3 && <div>Policies content goes here</div>}
                {activeTab === 4 && <div>Options content goes here</div>}
            </div>
        </div>
    );
};

const TabItem = ({ label, tabIndex, activeTab, setActiveTab }) => {
    return (
        <li
            className={`flex-1 text-center px-4 py-2 cursor-pointer transition-colors duration-300 ${activeTab === tabIndex ? 'text-white font-semibold' : 'text-gray-700'
                }`}
            onClick={() => setActiveTab(tabIndex)}
        >
            {label}
        </li>
    );
};

export default EventTabs;
