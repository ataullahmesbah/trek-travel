'use client'

import React, { useState } from 'react';

const FAQ = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    const toggleAccordion = (id) => {
        switch (id) {
            case 'faq1':
                setIsOpen1(!isOpen1);
                break;
            case 'faq2':
                setIsOpen2(!isOpen2);
                break;
            case 'faq3':
                setIsOpen3(!isOpen3);
                break;
            case 'faq4':
                setIsOpen4(!isOpen4);
                break;
            default:
                break;
        }
    };

    return (
        <div className="container max-w-7xl mx-auto py-16 px-8">
            <h2 className="text-3xl font-semibold text-center mb-4">Frequently Asked Questions</h2>
            <div className="accordion">
                <div className="accordion-item border-b border-gray-200">
                    <input type="checkbox" id="faq1" className="accordion-trigger hidden" />
                    <label htmlFor="faq1" className="accordion-title cursor-pointer block py-4 pl-4 pr-12 text-lg font-semibold" onClick={() => toggleAccordion('faq1')}>
                        What services do you offer?
                        <span className="float-right">{isOpen1 ? '▲' : '▼'}</span>
                    </label>
                    {isOpen1 && (
                        <div className="accordion-content px-4 py-2">
                            <p className="text-gray-700">We offer a wide range of services including guided tours, adventure trips, travel planning, and more. Visit our website to explore our full range of services.</p>
                        </div>
                    )}
                </div>
                <div className="accordion-item border-b border-gray-200">
                    <input type="checkbox" id="faq2" className="accordion-trigger hidden" />
                    <label htmlFor="faq2" className="accordion-title cursor-pointer block py-4 pl-4 pr-12 text-lg font-semibold" onClick={() => toggleAccordion('faq2')}>
                        How can I book a tour?
                        <span className="float-right">{isOpen2 ? '▲' : '▼'}</span>
                    </label>
                    {isOpen2 && (
                        <div className="accordion-content px-4 py-2">
                            <p className="text-gray-700">Booking a tour is easy! Simply visit our website and navigate to the 'Book Now' section. Follow the instructions to select your preferred tour, date, and payment method.</p>
                        </div>
                    )}
                </div>
                <div className="accordion-item border-b border-gray-200">
                    <input type="checkbox" id="faq3" className="accordion-trigger hidden" />
                    <label htmlFor="faq3" className="accordion-title cursor-pointer block py-4 pl-4 pr-12 text-lg font-semibold" onClick={() => toggleAccordion('faq3')}>
                        Do you offer customized travel packages?
                        <span className="float-right">{isOpen3 ? '▲' : '▼'}</span>
                    </label>
                    {isOpen3 && (
                        <div className="accordion-content px-4 py-2">
                            <p className="text-gray-700">Yes, we specialize in creating personalized travel packages tailored to your preferences and interests. Contact our team to discuss your travel requirements.</p>
                        </div>
                    )}
                </div>
                <div className="accordion-item border-b border-gray-200">
                    <input type="checkbox" id="faq4" className="accordion-trigger hidden" />
                    <label htmlFor="faq4" className="accordion-title cursor-pointer block py-4 pl-4 pr-12 text-lg font-semibold" onClick={() => toggleAccordion('faq4')}>
                        What safety measures do you have in place?
                        <span className="float-right">{isOpen4 ? '▲' : '▼'}</span>
                    </label>
                    {isOpen4 && (
                        <div className="accordion-content px-4 py-2">
                            <p className="text-gray-700">Ensuring the safety and well-being of our customers is our top priority. We adhere to strict safety protocols, provide experienced guides, and conduct thorough risk assessments for all our tours.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
