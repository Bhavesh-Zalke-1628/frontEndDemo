import React from 'react';

function MapAndLocation() {
    return (
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Our Locations in India
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Left: Static India Map Image with city labels */}
                <div className="w-full">
                    <img
                        src="/images/india-map.png" // Update path as needed
                        alt="India Partner Cities"
                        className="rounded-lg shadow-md w-full h-auto"
                    />
                    <p className="text-center text-sm text-gray-500 mt-2">
                        Partner Locations Across India
                    </p>
                </div>

                {/* Right: Google Map Embed */}
                <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        title="India Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606868.033162581!2d77.41261577710513!3d23.259933306396804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43c7fbdd97f3%3A0x2b3a6e0e9c78a45e!2sIndia!5e0!3m2!1sen!2sin!4v1683825237362!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

            </div>
        </div>
    );
}

export default MapAndLocation;
