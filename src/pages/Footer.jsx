import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-4 sm:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Company Info */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Hously Finntech Reality</h2>
                    <p className="text-sm leading-relaxed">
                        Bridging finance and real estate with smart, accessible, and reliable solutions for a better tomorrow.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition">Home</a></li>
                        <li><a href="#" className="hover:text-white transition">About Us</a></li>
                        <li><a href="#" className="hover:text-white transition">Services</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* Solutions */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Solutions</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition">Real Estate Financing</a></li>
                        <li><a href="#" className="hover:text-white transition">Investment Advisory</a></li>
                        <li><a href="#" className="hover:text-white transition">Mortgage Services</a></li>
                        <li><a href="#" className="hover:text-white transition">Smart Property Insights</a></li>
                    </ul>
                </div>

                {/* Social / Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Connect with Us</h3>
                    <p className="text-sm mb-4">Follow us for updates</p>
                    <div className="flex space-x-4 mb-6">
                        <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
                    </div>

                    {/* Newsletter */}
                    <form>
                        <label htmlFor="email" className="sr-only">Email address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your email"
                            className="w-full px-3 py-2 rounded bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Hously.Finntech.Reality. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
