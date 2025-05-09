import React from 'react';
import { motion } from 'framer-motion';

const LoanAndOffer = () => {
    const loanOffers = [
        {
            id: 1,
            title: "Home Loan",
            rate: "6.5%",
            features: [
                "Up to 30 years tenure",
                "90% of property value",
                "Instant approval",
                "Flexible repayment"
            ],
            color: "from-blue-600 to-blue-800",
            bgColor: "bg-blue-25",
            iconColor: "text-blue-600"
        },
        {
            id: 2,
            title: "Personal Loan",
            rate: "10.2%",
            features: [
                "Up to ₹25 lakhs",
                "Quick disbursal",
                "No collateral",
                "5-7 year tenure"
            ],
            color: "from-gray-600 to-gray-800",
            bgColor: "bg-gray-25",
            iconColor: "text-gray-600"
        },
        {
            id: 3,
            title: "Car Loan",
            rate: "7.8%",
            features: [
                "100% on-road funding",
                "Low processing fee",
                "Flexible EMI options",
                "Up to 7 years"
            ],
            color: "from-green-600 to-green-800",
            bgColor: "bg-green-25",
            iconColor: "text-green-600"
        },
        {
            id: 4,
            title: "Business Loan",
            rate: "12.5%",
            features: [
                "Up to ₹1 crore",
                "Minimal documentation",
                "Collateral-free",
                "Custom repayment"
            ],
            color: "from-indigo-600 to-indigo-800",
            bgColor: "bg-indigo-25",
            iconColor: "text-indigo-600"
        }
    ];

    return (
        <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Loan & Offer Options
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Explore our competitive loan products tailored for your needs
                    </p>
                </motion.div>

                {/* Desktop Grid (shows on screens ≥ 1024px) */}
                <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {loanOffers.map((offer) => (
                        <motion.div
                            key={offer.id}
                            className={`${offer.bgColor} dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        >
                            {/* Gradient header */}
                            <div className={`h-2 bg-gradient-to-r ${offer.color}`}></div>

                            {/* Card content */}
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                                        {offer.title}
                                    </h3>
                                    <div className="mb-5">
                                        <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                            Interest Rate
                                        </p>
                                        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                                            {offer.rate}
                                        </p>
                                    </div>
                                    <ul className="space-y-3 mb-6">
                                        {offer.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <div className={`p-1 rounded-full mr-3 bg-white dark:bg-gray-700`}>
                                                    <svg
                                                        className={`h-4 w-4 ${offer.iconColor} dark:text-white`}
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                </div>
                                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <button
                                    className={`w-full py-2.5 px-5 rounded-md font-medium text-sm transition-all duration-300 bg-gradient-to-r ${offer.color} text-white hover:opacity-90`}
                                >
                                    Apply Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Horizontal Scroll (shows on screens < 1024px) */}
                <div className="lg:hidden overflow-x-auto pb-6 -mx-4 px-4">
                    <div className="flex space-x-6 w-max min-h-[400px]">
                        {loanOffers.map((offer) => (
                            <motion.div
                                key={offer.id}
                                className={`${offer.bgColor} dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 w-72 flex-shrink-0 flex flex-col`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            >
                                {/* Gradient header */}
                                <div className={`h-2 bg-gradient-to-r ${offer.color}`}></div>

                                {/* Card content */}
                                <div className="p-6 flex flex-col h-full">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                                            {offer.title}
                                        </h3>
                                        <div className="mb-5">
                                            <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                                Interest Rate
                                            </p>
                                            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                                                {offer.rate}
                                            </p>
                                        </div>
                                        <ul className="space-y-3 mb-6">
                                            {offer.features.map((feature, i) => (
                                                <li key={i} className="flex items-start">
                                                    <div className={`p-1 rounded-full mr-3 bg-white dark:bg-gray-700`}>
                                                        <svg
                                                            className={`h-4 w-4 ${offer.iconColor} dark:text-white`}
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button
                                        className={`w-full py-2.5 px-5 rounded-md font-medium text-sm transition-all duration-300 bg-gradient-to-r ${offer.color} text-white hover:opacity-90`}
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoanAndOffer;
