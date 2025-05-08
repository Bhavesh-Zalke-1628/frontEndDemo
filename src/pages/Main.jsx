import React from 'react'
import Navbar from '../component/Navbar'
import { motion } from 'framer-motion'

// Carousel data
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
]

function Main() {
    const [currentSlide, setCurrentSlide] = React.useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }

    // Auto-rotate slides every 5 seconds
    React.useEffect(() => {
        const interval = setInterval(nextSlide, 5000)
        return () => clearInterval(interval)
    }, [])

    return (

        <div className='w-full min-h-screen bg-gradient-to-br from-blue-300 via-cyan-300 to-yellow-400 flex flex-col items-center overflow-hidden'>
            {/* Fancy Navbar */}
            <Navbar />

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex-1 flex flex-col items-center justify-center px-4 text-center max-w-4xl mt-32"
            >
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.02 }}
                >
                    Welcome Hously
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-gray-800 mb-12 max-w-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    Discover amazing tools and features including our powerful calculator
                </motion.p>

                <motion.div
                    className="flex gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-full bg-white text-cyan-600 font-bold shadow-lg hover:shadow-xl transition-all"
                    >
                        Explore Features
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-full bg-cyan-600 text-white font-bold shadow-lg hover:shadow-xl transition-all border-2 border-white"
                    >
                        Try Calculator
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Testimonial Carousel */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="w-full max-w-4xl px-4 mb-16"
            >
                <div className="relative overflow-hidden mt-4 rounded-2xl bg-white/20 backdrop-blur-md p-8 shadow-lg border border-white/30">
                    <div className="relative h-64">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                                initial={{ opacity: 0, x: index > currentSlide ? 100 : -100 }}
                                animate={{
                                    opacity: index === currentSlide ? 1 : 0,
                                    x: index === currentSlide ? 0 : (index > currentSlide ? 100 : -100)
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <svg
                                    className="w-12 h-12 mb-4 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <p className="text-lg md:text-xl text-white mb-4">{testimonial.quote}</p>
                                <p className="font-bold text-white">{testimonial.author}</p>
                                <p className="text-sm text-white/80">{testimonial.role}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-all"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-all"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Indicators */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white/30'}`}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
                className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-purple-400 opacity-20 blur-xl"
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute top-1/3 right-10 w-48 h-48 rounded-full bg-pink-400 opacity-20 blur-xl"
                animate={{
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
        </div>
    )
}

export default Main