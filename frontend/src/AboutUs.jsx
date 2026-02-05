"use client";

import React from "react";
// Local assets from your file structure
import system from "./assets/system.png";
import nice from "./assets/nice.jpg";
import safety from "./assets/safety.webp";
import  deco from "./assets/deco.png";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f4] font-sans">
      
      {/* HEADER - Consistent with Dashboard/Admin */}
      <div className="bg-orange-400 p-4 md:p-6 shadow-md text-center">
        <h1 className="text-white font-black text-2xl md:text-3xl tracking-tighter uppercase">
          Maharashtra State Transport
        </h1>
        <div className="bg-white text-orange-600 px-6 py-1 rounded-full text-xs font-bold uppercase mt-2 inline-block shadow-sm">
          About Our Mission
        </div>
      </div>

      
        <main className="flex-1 max-w-6xl mx-auto w-full p-4 md:p-10">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#800000] uppercase tracking-tighter">
            Legacy of Service
          </h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-2"></div>
        </div>

        {/* SECTION 1: OUR SYSTEM */}
        <section className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg border-l-4 border-[#800000] overflow-hidden mb-10">
          <div className="w-full md:w-3/5 p-6 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🚍</span>
              <h2 className="text-xl md:text-2xl font-black text-gray-800 uppercase tracking-tight">Our Modern System</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base border-t pt-4 border-gray-100">
              Our Bus Reservation System is a modern, user-friendly platform that allows passengers to search buses, book tickets, and manage travel easily. Built with React and Convex for real-time security.
            </p>
          </div>
          <div className="w-full md:w-2/5 h-64 md:h-auto">
            <img 
              src={system} 
              alt="MSRTC System" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* SECTION 2: OUR BUSES */}
        <section className="flex flex-col md:flex-row-reverse bg-white rounded-xl shadow-lg border-r-4 border-orange-500 overflow-hidden mb-10">
          <div className="w-full md:w-3/5 p-6 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🚌</span>
              <h2 className="text-xl md:text-2xl font-black text-gray-800 uppercase tracking-tight">Our Premium Fleet</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base border-t pt-4 border-gray-100">
              We provide AC and Non-AC buses with comfortable seating and clean interiors. Each bus includes detailed stop information with transparent ticket pricing for every station. Its AC is always on wheather the bus is running or not it is alwasys on.
            </p>
          </div>
          <div className="w-full md:w-2/5 h-64 md:h-auto">
            <img 
              src={nice} 
              alt="MSRTC AC Bus" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* SECTION 3: SAFETY */}
        <section className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg border-l-4 border-[#800000] overflow-hidden mb-10">
          <div className="w-full md:w-3/5 p-6 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🛡</span>
              <h2 className="text-xl md:text-2xl font-black text-gray-800 uppercase tracking-tight">Safety & Security</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base border-t pt-4 border-gray-100">
              Passenger safety is our top priority. All buses undergo regular maintenance and drivers are professionally trained. All booking data is securely stored in the cloud.
            </p>
          </div>
          <div className="w-full md:w-2/5 h-64 md:h-auto">
            <img 
              src={safety} 
              alt="MSRTC Safety" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* SECTION 4: AWARDS */}
        <section className="flex flex-col md:flex-row-reverse bg-white rounded-xl shadow-lg border-r-4 border-orange-500 overflow-hidden mb-10">
          <div className="w-full md:w-3/5 p-6 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🏆</span>
              <h2 className="text-xl md:text-2xl font-black text-gray-800 uppercase tracking-tight">Awards & Recognition</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base border-t pt-4 border-gray-100">
              Our system has been recognized for innovation and reliable service. We continuously improve our platform to provide the best travel experience for millions of commuters.
            </p>
          </div>
          <div className="w-full md:w-2/5 h-64 md:h-auto">
            <img 
              src={deco} 
              alt="MSRTC Recognition" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-black text-white py-6 text-center border-t-4 border-orange-500">
        <p className="text-[11px] font-bold tracking-[0.4em] uppercase opacity-80">
          Official MSRTC Information Portal © 2026
        </p>
      </footer>
    </div>
  );
}