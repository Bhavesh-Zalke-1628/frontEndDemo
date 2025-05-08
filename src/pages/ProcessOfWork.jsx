import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProcessOfWork = () => {
    const [hoveredStep, setHoveredStep] = useState(null);
    const [selectedStep, setSelectedStep] = useState(null);

    const steps = [
        {
            id: 1,
            title: "Discovery Phase",
            shortDescription: "Initial consultation",
            longDescription: "We conduct in-depth interviews and analysis to fully understand your business needs, goals, and challenges. Our team reviews your current financial situation and identifies key opportunities for growth and optimization.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            color: "bg-blue-100 text-blue-600"
        },
        {
            id: 2,
            title: "Strategic Planning",
            shortDescription: "Custom roadmap creation",
            longDescription: "Our experts develop a comprehensive financial strategy tailored to your specific objectives. We analyze market trends, assess risks, and create a detailed action plan with measurable milestones and timelines for implementation.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            ),
            color: "bg-purple-100 text-purple-600"
        },
        {
            id: 3,
            title: "Implementation",
            shortDescription: "Solution deployment",
            longDescription: "We execute the approved strategy with precision, handling all technical and administrative aspects. Our team manages the transition process, ensuring minimal disruption to your operations while maximizing financial efficiency gains.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            color: "bg-green-100 text-green-600"
        },
        {
            id: 4,
            title: "Ongoing Optimization",
            shortDescription: "Continuous improvement",
            longDescription: "We provide regular performance reviews and adjust strategies as needed. Our team monitors key metrics, identifies new opportunities, and refines approaches to ensure your financial objectives continue to be met and exceeded.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
            color: "bg-amber-100 text-amber-600"
        }
    ];

    const currentStep = hoveredStep || selectedStep;

    return (
        <div className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4"
                    >
                        Our Work Process
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        A transparent approach to achieving your financial objectives
                    </motion.p>
                </div>

                {/* Mobile View - Horizontal Scroll */}
                <div className="md:hidden mb-8">
                    <div className="overflow-x-auto pb-6 -mx-4 px-4">
                        <div className="flex space-x-6 w-max">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`w-64 flex-shrink-0 bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center ${selectedStep === step.id ? 'border-blue-500' : ''}`}
                                    onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
                                >
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center text-blue-500 font-bold shadow-sm">
                                        {index + 1}
                                    </div>
                                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${step.color} flex items-center justify-center`}>
                                        {step.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                                    <p className="text-sm text-gray-600">{step.shortDescription}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Desktop View */}
                <div className="hidden md:block relative">
                    {/* Progress line */}
                    <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -translate-y-1/2"></div>

                    <div className="grid grid-cols-4 gap-4 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                                onMouseEnter={() => setHoveredStep(step.id)}
                                onMouseLeave={() => setHoveredStep(null)}
                            >
                                {/* Step indicator */}
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center text-blue-500 font-bold shadow-sm">
                                    {index + 1}
                                </div>

                                {/* Step card */}
                                <div className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center h-full transition-all duration-300 ${hoveredStep === step.id ? 'shadow-lg transform -translate-y-2' : ''}`}>
                                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${step.color} flex items-center justify-center`}>
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.shortDescription}</p>
                                </div>

                                {/* Arrow connector */}
                                {index !== steps.length - 1 && (
                                    <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                                        <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Description Panel */}
                {currentStep && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-8 md:mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-4xl mx-auto shadow-sm"
                    >
                        <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                            {steps.find(step => step.id === currentStep).title}
                        </h4>
                        <p className="text-gray-700 text-sm md:text-base">
                            {steps.find(step => step.id === currentStep).longDescription}
                        </p>
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 md:mt-20 text-center"
                >
                    <button className="px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white rounded-lg md:rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg text-base md:text-lg">
                        Begin Your Financial Journey
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default ProcessOfWork;