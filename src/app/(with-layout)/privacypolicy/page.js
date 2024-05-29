
import React from 'react';


export const metadata = {
    title: 'Privacy Policy - Trek Explore Travel',
    description: 'Learn about our privacy practices and how we handle your personal information at Trek Explore Travel.',
    keywords: 'Trek Explore Travel, Privacy Policy, Personal Information, Data Security',
    openGraph: {
        title: 'Privacy Policy - Trek Explore Travel',
        description: 'Learn about our privacy practices and how we handle your personal information at Trek Explore Travel.',
        type: 'website',
        url: 'https://www.trekexploretravel.com/privacy-policy',
        images: [
            {
                url: 'https://www.trekexploretravel.com/images/privacy-policy.jpg',
                width: 800,
                height: 600,
                alt: 'Privacy Policy',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Privacy Policy - Trek Explore Travel',
        description: 'Learn about our privacy practices and how we handle your personal information at Trek Explore Travel.',
        image: 'https://www.trekexploretravel.com/images/privacy-policy.jpg',
    },
};



const PrivacyPolicy = () => {
    return (
        <div>

            <div className="py-20">
                <div className="container mx-auto px-4">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
                        <p className="mb-4">
                            Welcome to Trek Explore Travel. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website and use our services.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                        <p className="mb-4">
                            We may collect personal information such as your name, email address, phone number, and payment details when you book a tour or contact us for inquiries. We also collect non-personal information such as browser type, operating system, and website usage statistics.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                        <p className="mb-4">
                            We use your information to provide and improve our services, process transactions, send you updates and promotional materials, respond to your inquiries, and enhance your overall experience with Trek Explore Travel.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
                        <p className="mb-4">
                            We use cookies and similar tracking technologies to monitor website activity, remember your preferences, and improve our website’s functionality. You can choose to disable cookies through your browser settings, but this may affect your ability to use certain features on our website.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                        <p className="mb-4">
                            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
                        <p className="mb-4">
                            We may use third-party service providers to help us operate our website and deliver our services. These third parties may have access to your personal information but are obligated to maintain its confidentiality and use it only for the purposes for which it was disclosed.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                        <p className="mb-4">
                            You have the right to access, correct, or delete your personal information, as well as to withdraw your consent to our data processing activities. To exercise these rights, please contact us using the information provided below.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
                        <p className="mb-4">
                            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this page periodically for the latest information on our privacy practices.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <p>
                            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                        </p>
                        <p className="mt-2">
                            <strong>Email:</strong> privacy@trekexploretravel.com
                        </p>
                        <p>
                            <strong>Phone:</strong> (123) 456-7890
                        </p>
                        <p>
                            <strong>Address:</strong> 123 Your Street, Your City, Your State, Your Country
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
