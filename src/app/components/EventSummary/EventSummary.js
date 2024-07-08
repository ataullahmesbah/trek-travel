'use client'

import React, { useState } from 'react';

const EventSummary = () => {
    const [activeTab, setActiveTab] = useState('summary'); // State to manage active tab

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="max-w-3xl mx-auto ">
            {/* Tab navigation */}
            <div className="flex border-b-2 border-gray-100 ">
                <TabItem label="Summary" tabName="summary" activeTab={activeTab} onClick={handleTabClick} />
                <TabItem label="Itinerary" tabName="itinerary" activeTab={activeTab} onClick={handleTabClick} />
                <TabItem label="Policies" tabName="policies" activeTab={activeTab} onClick={handleTabClick} />
                <TabItem label="Options" tabName="options" activeTab={activeTab} onClick={handleTabClick} />
            </div>

            {/* Content for each tab */}
            <div className="py-4">
                {activeTab === 'summary' && <div className="py-4">Summary content goes here</div>}
                {activeTab === 'itinerary' && <div className="py-4">Itinerary content goes here</div>}
                {activeTab === 'policies' && <div className="py-4">Policies content goes here</div>}
                {activeTab === 'options' && <div className="py-4">Options content goes here</div>}
            </div>
        </div>
    );
};

// TabItem component for individual tabs
const TabItem = ({ label, tabName, activeTab, onClick }) => {
    return (
        <div
            className={`flex-1 bg-gray-100 rounded-sm py-2 text-center cursor-pointer ${activeTab === tabName ? 'border-b-4 border-sky-300 font-bold text-blue-950 uppercase' : 'text-gray-700 font-semibold uppercase'
                }`}
            onClick={() => onClick(tabName)}
        >
            {label}
        </div>
    );
};

export default EventSummary;
