import React from 'react';
import map from "../assets/map.png";

const MapAndLocation = () => {
    return (
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
                    Our Locations in India
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left: India Map Image */}
                    <div className="w-full flex justify-center">
                        <div className="rounded-xl overflow-hidden w-[70%]">
                            <img
                                src={map}
                                alt="India Partner Cities"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Partner Program Info */}
                    <div className="text-center lg:text-left space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800">
                            Partner Business Program
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Designed exclusively to help <br />
                            <span className= " text-blue-600 font-semibold">Hously-</span>
                            <span className="px-2 bg-yellow-500 font-semibold rounded-lg text-black capitalize">finserv</span><br />
                            authorized partners can use the Hously Finserve Partner app to view earnings,
                            monitor case updates in real time, and gain privileged access to exclusive features.
                        </p>

                        {/* Branded Download Button */}
                        <div>
                            <a
                                href="#"
                                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
                            >
                                📥 Download Our App
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapAndLocation;
