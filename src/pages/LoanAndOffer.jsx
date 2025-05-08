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
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
            {/* Content */}

            <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-center text-gray-900 mb-2"
                    >
                        Loan & Offer Options
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-center text-gray-600 mb-12"
                    >
                        Explore our competitive loan products tailored for your needs
                    </motion.p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {loanOffers.map((offer) => (
                            <motion.div
                                key={offer.id}
                                className={`${offer.bgColor} rounded-xl overflow-hidden shadow-sm border border-gray-100`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ y: -3, shadow: "lg" }}
                            >
                                {/* Gradient header */}
                                <div className={`h-2 bg-gradient-to-r ${offer.color}`}></div>

                                <div className="p-6 flex flex-col h-full">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-3">{offer.title}</h3>
                                        <div className="mb-5">
                                            <p className="text-xs uppercase tracking-wider text-gray-500">Interest Rate</p>
                                            <p className="text-2xl font-bold text-gray-900 mt-1">{offer.rate}</p>
                                        </div>
                                        <ul className="space-y-3 mb-6">
                                            {offer.features.map((feature, i) => (
                                                <li key={i} className="flex items-start">
                                                    <div className={`p-1 rounded-full mr-3 bg-white`}>
                                                        <svg className={`h-4 w-4 ${offer.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-sm text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button className={`w-full py-2.5 px-5 rounded-md font-medium text-sm transition-all duration-300 bg-gradient-to-r ${offer.color} text-white hover:opacity-90`}>
                                        Apply Now
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

// Add these to your tailwind.config.js if needed
// theme: {
//   extend: {
//     colors: {
//       'blue-25': '#f5f9ff',
//       'gray-25': '#fcfcfc',
//       'green-25': '#f5fffa',
//       'indigo-25': '#f5f7ff'
//     }
//   }
// }

export default LoanAndOffer;