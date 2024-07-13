import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-xl font-semibold mb-4">FitnessClub</h3>
                    <p className="text-gray-400 mb-2">
                        Empowering individuals to achieve their fitness goals through personalized training, community support, and a welcoming environment.
                    </p>
                    <p className="text-gray-400">© 2024 FitnessClub. All rights reserved.</p>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#home" className="text-gray-400 hover:text-red-600">Home</a></li>
                        <li><a href="#about" className="text-gray-400 hover:text-red-600">About</a></li>
                        <li><a href="#membership" className="text-gray-400 hover:text-red-600">Membership</a></li>
                        <li><a href="#contact" className="text-gray-400 hover:text-red-600">Contact</a></li>
                    </ul>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                    <p className="text-gray-400">123 Fitness St.</p>
                    <p className="text-gray-400">Fitness City, FK 12345</p>
                    <p className="text-gray-400">Email: info@fitnessclub.com</p>
                    <p className="text-gray-400">Phone: +1 (234) 567-8900</p>

                    <div className="flex mt-4 space-x-4">
                        <a href="https://facebook.com" className="text-gray-400 hover:text-red-600">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://twitter.com" className="text-gray-400 hover:text-red-600">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://instagram.com" className="text-gray-400 hover:text-red-600">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://linkedin.com" className="text-gray-400 hover:text-red-600">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
