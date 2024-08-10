import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            setIsSolutionsOpen(false);
        }
    };

    const toggleSolutionsDropdown = () => {
        if (!isMenuOpen) {
            setIsSolutionsOpen(!isSolutionsOpen);
        }
    };

    return (
        <header className="relative font-medium bg-transparent font-poppins">
            <nav className="flex items-center justify-between w-full max-w-screen-lg p-4 mx-auto">
                {/* Hamburger Button for Mobile */}
                <button
                    className="relative z-40 p-2 text-white bg-black rounded-full md:hidden"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? '✖' : '☰'}
                </button>

                {/* Navigation Menu */}
                <div
                    className={`fixed inset-0 z-30 bg-black bg-opacity-80 transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'} md:translate-y-0 md:flex md:items-center md:justify-center md:w-auto md:bg-transparent md:relative  md:flex-row md:space-x-6`}
                >
                    <ul className={`flex flex-col mt-4 p-4 md:flex-row md:space-x-6 md:p-0 ${isMenuOpen ? 'mt-12' : ''}`}>
                        <li className="mb-4">
                            <Link className="text-white hover:bg-white hover:text-black hover:p-2 hover:pl-4 hover:pr-4 hover:rounded-3xl lg:ml-[5cm]" to="/">Home</Link>
                        </li>
                        <li className="mb-4">
                            <Link className="text-white hover:bg-white hover:text-black hover:p-2 hover:pl-4 hover:pr-4 hover:rounded-3xl lg:ml-20" to="/about-us">About Us</Link>
                        </li>
                        <li className="mb-4">
                            <Link className="text-white hover:bg-white hover:text-black hover:p-2 hover:pl-4 hover:pr-4 hover:rounded-3xl lg:ml-20" to="/events">Events</Link>
                        </li>
                        <li className="mb-4">
                            <Link className="text-white hover:bg-white hover:text-black hover:p-2 hover:pl-4 hover:pr-4 hover:rounded-3xl lg:ml-20" to="/contact-us">Contact Us</Link>
                        </li>
                        <li>
                            <Link className="text-white hover:bg-white hover:text-black hover:p-2 hover:pl-4 hover:pr-4 hover:rounded-3xl lg:ml-20" to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
