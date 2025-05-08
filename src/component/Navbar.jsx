import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/Finn-logo.png";

const Loader = ({ setLoading }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.5 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setLoading(false), 500);
                    return 100;
                }
                return prev + (10 + Math.random() * 5);
            });
        }, 300);

        return () => clearInterval(timer);
    }, [setLoading]);

    return (
        <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-pink-900 z-50"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.div
                variants={itemVariants}
                className="mb-8 text-center"
            >
                <motion.div
                    animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                    }}
                    className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent"
                >
                    Welcome to hously
                </motion.div>
                <motion.p
                    className="text-purple-200 text-lg"
                    variants={itemVariants}
                >
                    Loading your experience...
                </motion.p>
            </motion.div>

            <motion.div
                className="w-72 h-3 bg-purple-800 rounded-full overflow-hidden mb-4"
                variants={itemVariants}
            >
                <motion.div
                    className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>

            <motion.p
                className="text-pink-300 font-mono text-sm"
                variants={itemVariants}
            >
                {progress}% COMPLETE
            </motion.p>

            <motion.div
                className="absolute bottom-10 text-purple-200 text-xs"
                variants={itemVariants}
            >
                Powered Hously pvt.ltd.
            </motion.div>
        </motion.div>
    );
};

function Navbar() {
    const [loading, setLoading] = useState(true);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const navItems = [
        { name: 'Home', color: 'from-purple-400 to-pink-400' },
        { name: 'About', color: 'from-purple-500 to-pink-500' },
        { name: 'Calculator', color: 'from-purple-600 to-pink-600' },
        { name: 'Contact', color: 'from-purple-700 to-pink-700' },
        { name: 'More', color: 'from-purple-700 to-pink-700' }
    ];

    const handleMoreClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleAuthAction = (action) => {
        if (action === 'login') {
            setIsLoggedIn(true);
        } else if (action === 'signup') {
            // Handle signup
        } else if (action === 'logout') {
            setIsLoggedIn(false);
        }
        setShowDropdown(false);
    };

    if (loading) return <Loader setLoading={setLoading} />;

    return (
        <motion.div
            initial={{ y: isMobile ? 100 : -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            className={`fixed ${isMobile ? 'bottom-4' : 'top-10'} left-0 right-0 mx-auto flex items-center justify-between w-[90%] md:w-[80%] max-w-5xl h-16 md:h-20 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg z-50 px-4 md:px-8`}
            style={{ background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)' }}
        >
            {!isMobile && (
                <motion.div>
                    <img src={logo} className='w-36 md:w-48' alt="" />
                </motion.div>
            )}

            <nav>
                <ul className='flex justify-center gap-4 md:gap-8'>
                    {navItems.map((item) => (
                        <li
                            key={item.name}
                            onMouseEnter={() => !isMobile && setHoveredItem(item.name)}
                            onMouseLeave={() => !isMobile && setHoveredItem(null)}
                            className="relative px-1 md:px-2 py-1 text-black"
                            ref={item.name === 'More' ? dropdownRef : null}
                        >
                            <motion.div
                                className={` hover:text-gray-300 transition-colors font-medium cursor-pointer text-sm md:text-base ${!isMobile && hoveredItem === item.name ? 'text-pink-300' : ''}`}
                                whileHover={{ scale: !isMobile ? 1.05 : 1 }}
                                onClick={item.name === 'More' ? handleMoreClick : undefined}
                            >
                                {item.name}
                                {!isMobile && hoveredItem === item.name && (
                                    <motion.div
                                        layoutId="navUnderline"
                                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${item.color} rounded-full`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ type: 'spring', bounce: 0.25 }}
                                    />
                                )}
                            </motion.div>

                            {item.name === 'More' && (
                                <AnimatePresence>
                                    {showDropdown && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white/90 backdrop-blur-md z-50"
                                        >
                                            <div className="py-1">
                                                {isLoggedIn ? (
                                                    <>
                                                        <button
                                                            onClick={() => handleAuthAction('profile')}
                                                            className="block w-full text-left px-4 py-2 text-sm text-purple-900 hover:bg-purple-100"
                                                        >
                                                            Profile
                                                        </button>
                                                        <button
                                                            onClick={() => handleAuthAction('logout')}
                                                            className="block w-full text-left px-4 py-2 text-sm text-purple-900 hover:bg-purple-100"
                                                        >
                                                            Logout
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button
                                                            onClick={() => handleAuthAction('login')}
                                                            className="block w-full text-left px-4 py-2 text-sm text-purple-900 hover:bg-purple-100"
                                                        >
                                                            Login
                                                        </button>
                                                        <button
                                                            onClick={() => handleAuthAction('signup')}
                                                            className="block w-full text-left px-4 py-2 text-sm text-purple-900 hover:bg-purple-100"
                                                        >
                                                            Sign Up
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {!isMobile && (
                <motion.button
                    whileHover={{
                        scale: 1.05,
                        background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 md:px-6 py-1 md:py-2 rounded-full bg-gradient-to-r from-blue-500 to-yellow-400 text-white font-medium shadow-lg hover:shadow-xl transition-all text-sm md:text-base"
                    style={{ boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4)' }}
                    onClick={isLoggedIn ? () => handleAuthAction('profile') : () => handleAuthAction('login')}
                >
                    {isLoggedIn ? 'Profile' : 'Get Started'}
                </motion.button>
            )}
        </motion.div>
    );
}

export default Navbar;