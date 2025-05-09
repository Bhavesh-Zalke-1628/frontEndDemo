import React, { useState } from "react";
import { motion } from "framer-motion";

const calculators = [
    {
        id: 1,
        title: "Loan EMI Calculator",
        description: "Calculate your monthly loan payments based on interest rate and tenure.",
        icon: "📊",
        formula: (p, r, n) => ((p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)).toFixed(2),
        inputs: [
            { label: "Loan Amount", unit: "₹" },
            { label: "Interest Rate", unit: "%" },
            { label: "Loan Tenure", unit: "years" }
        ]
    },
    {
        id: 2,
        title: "Compound Interest",
        description: "Calculate how your investments grow with compound interest.",
        icon: "📈",
        formula: (p, r, t) => (p * Math.pow(1 + r, t)).toFixed(2),
        inputs: [
            { label: "Principal Amount", unit: "₹" },
            { label: "Annual Rate", unit: "%" },
            { label: "Time Period", unit: "years" }
        ]
    },
    {
        id: 3,
        title: "Investment Growth",
        description: "Estimate future value of your investments.",
        icon: "💰",
        formula: (p, r, t) => (p * (1 + r * t)).toFixed(2),
        inputs: [
            { label: "Initial Investment", unit: "₹" },
            { label: "Expected Return", unit: "%" },
            { label: "Investment Period", unit: "years" }
        ]
    },
    {
        id: 4,
        title: "Mortgage Calculator",
        description: "Calculate monthly home loan payments.",
        icon: "🏠",
        formula: (p, r, n) => ((p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)).toFixed(2),
        inputs: [
            { label: "Home Value", unit: "₹" },
            { label: "Interest Rate", unit: "%" },
            { label: "Loan Term", unit: "years" }
        ]
    }
];

function Calculator() {
    const [selectedCalc, setSelectedCalc] = useState(calculators[0]);
    const [inputValues, setInputValues] = useState(["", "", ""]);
    const [result, setResult] = useState(null);
    const [isCalculating, setIsCalculating] = useState(false);

    const calculate = () => {
        setIsCalculating(true);
        setTimeout(() => {
            const numericValues = inputValues.map(val => parseFloat(val) || 0);
            numericValues[1] = numericValues[1] / 100; // Convert rate from % to decimal
            const result = selectedCalc.formula(...numericValues);
            setResult(result);
            setIsCalculating(false);
        }, 800);
    };

    const handleInputChange = (index, value) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
        setResult(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-7xl mx-auto"
            >
                <div className="text-center mb-12">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Financial Calculators
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Powerful tools to help you plan your finances and make informed decisions
                    </motion.p>
                </div>

                {/* Mobile View */}
                <div className="lg:hidden">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-8"
                    >
                        <div className="flex items-center mb-6">
                            <div className="text-3xl mr-4">{selectedCalc.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-800">{selectedCalc.title}</h3>
                        </div>

                        <div className="space-y-5 mb-8">
                            {selectedCalc.inputs.map((input, index) => (
                                <div key={index}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {input.label}
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(index, e.target.value)}
                                            className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder={`Enter ${input.label}`}
                                        />
                                        <span className="absolute left-3 top-3 text-gray-500">
                                            {input.unit}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={calculate}
                            disabled={isCalculating}
                            className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all ${isCalculating ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                        >
                            {isCalculating ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Calculating...
                                </span>
                            ) : (
                                "Calculate"
                            )}
                        </motion.button>

                        {result !== null && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100"
                            >
                                <p className="text-sm text-blue-800 mb-1">Result</p>
                                <p className="text-3xl font-bold text-blue-600">
                                    ₹{Number(result).toLocaleString()}
                                </p>
                                <p className="text-xs text-blue-500 mt-2">
                                    {selectedCalc.title.includes("Loan") || selectedCalc.title.includes("Mortgage")
                                        ? "Monthly Payment"
                                        : "Total Amount"}
                                </p>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Horizontal scrollable calculator list */}
                    <div className="overflow-x-auto pb-6 -mx-4 px-4">
                        <div className="flex space-x-6 w-max">
                            {calculators.map((calc) => (
                                <motion.div
                                    key={calc.id}
                                    whileHover={{ y: -5 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`bg-white p-6 rounded-xl shadow-md cursor-pointer transition-all duration-300 border-2 w-96 flex-shrink-0 ${selectedCalc.id === calc.id ? 'border-blue-500' : 'border-transparent hover:border-blue-200'}`}
                                    onClick={() => {
                                        setSelectedCalc(calc);
                                        setInputValues(["", "", ""]);
                                        setResult(null);
                                    }}
                                >
                                    <div className="text-3xl mb-3">{calc.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{calc.title}</h3>
                                    <p className="text-gray-600 text-sm">{calc.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Desktop View */}
                <div className="hidden lg:grid grid-cols-3 gap-8 mt-12">
                    {/* Calculator Options */}
                    <div className="col-span-1 space-y-4">
                        {calculators.map((calc) => (
                            <motion.div
                                key={calc.id}
                                whileHover={{ y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                className={`bg-white p-6 rounded-xl shadow-md cursor-pointer transition-all duration-300 border-2 ${selectedCalc.id === calc.id ? 'border-blue-500' : 'border-transparent hover:border-blue-200'}`}
                                onClick={() => {
                                    setSelectedCalc(calc);
                                    setInputValues(["", "", ""]);
                                    setResult(null);
                                }}
                            >
                                <div className="text-3xl mb-3">{calc.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{calc.title}</h3>
                                <p className="text-gray-600 text-sm">{calc.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Calculator Form & Result */}
                    <div className="col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <div className="flex items-center mb-6">
                            <div className="text-3xl mr-4">{selectedCalc.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-800">{selectedCalc.title}</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            {selectedCalc.inputs.map((input, index) => (
                                <div key={index}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {input.label}
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(index, e.target.value)}
                                            className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder={`Enter ${input.label}`}
                                        />
                                        <span className="absolute left-3 top-3 text-gray-500">
                                            {input.unit}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={calculate}
                            disabled={isCalculating}
                            className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all ${isCalculating ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                        >
                            {isCalculating ? "Calculating..." : "Calculate"}
                        </motion.button>

                        {result !== null && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100"
                            >
                                <p className="text-sm text-blue-800 mb-1">Result</p>
                                <p className="text-3xl font-bold text-blue-600">
                                    ₹{Number(result).toLocaleString()}
                                </p>
                                <p className="text-xs text-blue-500 mt-2">
                                    {selectedCalc.title.includes("Loan") || selectedCalc.title.includes("Mortgage")
                                        ? "Monthly Payment"
                                        : "Total Amount"}
                                </p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Calculator;
