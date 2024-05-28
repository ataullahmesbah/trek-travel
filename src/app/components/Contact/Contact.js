'use client';


export const metadata = {
    title: 'Contact Us - Trek Explore Travel',
    description: 'Get in touch with Trek Explore Travel for personalized travel packages, expert guides, and unforgettable travel experiences. We are here to help you plan your next adventure.',
    keywords: 'Trek Explore Travel, contact us, travel inquiries, travel support, personalized travel packages',
    openGraph: {
        title: 'Contact Us - Trek Explore Travel',
        description: 'Get in touch with Trek Explore Travel for personalized travel packages, expert guides, and unforgettable travel experiences. We are here to help you plan your next adventure.',
        type: 'website',
        url: 'https://www.trekexploretravel.com/contact',
        images: [
            {
                url: 'https://www.trekexploretravel.com/og-contact.jpg',
                width: 800,
                height: 600,
                alt: 'Contact Trek Explore Travel',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Us - Trek Explore Travel',
        description: 'Get in touch with Trek Explore Travel for personalized travel packages, expert guides, and unforgettable travel experiences. We are here to help you plan your next adventure.',
        image: 'https://www.trekexploretravel.com/twitter-contact.jpg',
    },
};

import React, { useState } from 'react';


const ContactUs = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const validateForm = () => {
        const errors = {};
        if (!form.name.trim()) {
            errors.name = 'Full Name is required';
        }
        if (!form.email.trim()) {
            errors.email = 'Email Address is required';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            errors.email = 'Email Address is invalid';
        }
        if (!form.message.trim()) {
            errors.message = 'Message is required';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            // Handle form submission logic here
            console.log('Form submitted', form);
            setFormSubmitted(true);
            setForm({ name: '', email: '', message: '' });
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <div className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-semibold mb-6 text-center">Contact Us</h1>
                <p className="text-center mb-12 text-base sm:text-lg md:text-xl text-gray-700">
                    We’d love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
                </p>
                <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl mx-auto">
                    {formSubmitted && (
                        <div className="mb-6 p-4 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
                            Your message has been sent successfully!
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className={`mt-1 block px-4 py-2 w-full rounded-md border-l-8 shadow-sm focus:ring-sky-500 focus:border-sky-600 sm:text-sm ${formErrors.name ? 'border-red-500' : ''
                                    }`}
                            />
                            {formErrors.name && (
                                <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className={`mt-1 block px-4 py-2 w-full rounded-md border-l-8 shadow-sm focus:ring-sky-500 focus:border-sky-600 sm:text-sm ${formErrors.email ? 'border-red-500' : ''
                                    }`}
                            />
                            {formErrors.email && (
                                <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                value={form.message}
                                onChange={handleChange}
                                required
                                className={`mt-1 block px-4 py-2 w-full rounded-md border-l-8 shadow-sm focus:ring-sky-500 focus:border-sky-600 sm:text-sm ${formErrors.message ? 'border-red-500' : ''
                                    }`}
                            ></textarea>
                            {formErrors.message && (
                                <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>
                            )}
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-sky-900 text-white py-3 px-8 rounded-md shadow-md hover:bg-sky-700 transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Our Contact Information</h2>
                    <p className="text-base sm:text-lg text-gray-700">Email: contact@yourcompany.com</p>
                    <p className="text-base sm:text-lg text-gray-700">Phone: (123) 456-7890</p>
                    <p className="text-base sm:text-lg text-gray-700">Address: 123 Your Street, Your City, Your State, Your Country</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
