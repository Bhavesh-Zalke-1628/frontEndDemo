import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
import { motion } from 'framer-motion';
import { FaMagic, FaCalculator } from 'react-icons/fa';

// Testimonials
const testimonials = [
    {
        id: 1,
        quote: "Hously helped me find my dream home in just 2 weeks!",
        author: "Sarah Johnson",
        role: "Home Buyer"
    },
    {
        id: 2,
        quote: "The most accurate property valuation tool I've ever used.",
        author: "Michael Chen",
        role: "Real Estate Agent"
    },
    {
        id: 3,
        quote: "Their mortgage calculator saved me thousands on my loan.",
        author: "David Wilson",
        role: "First-time Buyer"
    }
];

function Main() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex flex-col items-center text-white overflow-hidden">
            <Navbar />

            {/* Floating Background Effects */}
            <motion.div
                className="absolute top-[-5rem] left-[-5rem] w-[20rem] h-[20rem] rounded-full bg-sky-800 blur-3xl opacity-20"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
                transition={{ repeat: Infinity, duration: 20 }}
            />
            <motion.div
                className="absolute bottom-[-5rem] right-[-5rem] w-[25rem] h-[25rem] rounded-full bg-indigo-800 blur-3xl opacity-20"
                animate={{ scale: [1, 1.2, 1], rotate: [0, -180, -360] }}
                transition={{ repeat: Infinity, duration: 25 }}
            />

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="flex-1 w-full flex flex-col items-center justify-center px-4 text-center max-w-4xl pt-24 md:pt-32 pb-16"
            >
                <motion.h1
                    className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent drop-shadow-xl"
                    whileHover={{ scale: 1.03 }}
                >
                    Welcome to Hously
                </motion.h1>

                <motion.p
                    className="text-base md:text-xl text-white/80 mb-10 max-w-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    Discover smart tools like mortgage calculators, instant valuations, and more—designed to simplify your property journey.
                </motion.p>

                <motion.div className="flex flex-wrap gap-4 justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
                    >
                        <FaMagic /> Explore Features
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-blue-700 font-semibold shadow hover:bg-gray-200 transition"
                    >
                        <FaCalculator /> Try Calculator
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Testimonials Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="w-full max-w-[77vw] px-4 mb-32"
            >
                <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg p-6 md:p-8 shadow-2xl border border-white/20">
                    <div className="relative h-64">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center"
                                initial={{ opacity: 0, x: index > currentSlide ? 100 : -100 }}
                                animate={{
                                    opacity: index === currentSlide ? 1 : 0,
                                    x: index === currentSlide ? 0 : (index > currentSlide ? 100 : -100)
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <svg className="w-8 h-8 md:w-10 md:h-10 mb-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <p className="text-base md:text-lg text-white/90 mb-2 italic">{testimonial.quote}</p>
                                <p className="font-bold text-white">{testimonial.author}</p>
                                <p className="text-sm text-white/60">{testimonial.role}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Carousel Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-all"
                    >
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-all"
                    >
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Indicators */}
                    <div className="flex justify-center mt-6 space-x-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2.5 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white/40 w-3'}`}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Main;
