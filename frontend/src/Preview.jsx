"use client";

import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { useNavigate } from "react-router-dom";
// Using the same high-quality asset for the cards
import vit from "./assets/vit.jpeg"; 


export default function Preview() {
  const feedbacks = useQuery(api.feedback.getAllFeedbacks);
  const navigate = useNavigate();

  if (!feedbacks) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f4f4]">
        <div className="animate-pulse text-orange-600 font-black uppercase tracking-widest">
          Loading Feedbacks...
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f4] font-sans">
      
      {/* HEADER - Consistent with Admin Portal */}
      <div className="bg-orange-400 p-4 shadow-md text-center">
        <h1 className="text-white font-black text-xl md:text-2xl tracking-tighter uppercase">
          Maharashtra State Transport
        </h1>
        <span className="bg-white text-orange-600 px-4 py-1 rounded-full text-xs font-bold uppercase mt-1 inline-block shadow-sm">
          Feedback Management Console
        </span>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 max-w-6xl mx-auto w-full p-4 md:p-10">
        
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#800000] uppercase tracking-tighter">
            Are Users Feedbacks
          </h2>
          <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.3em] mt-1">
            Real-time feedback from our commuters
          </p>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-3"></div>
        </div>

        {feedbacks.length === 0 ? (
          <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-[#800000] text-center">
            <p className="text-gray-400 font-bold uppercase tracking-widest">No feedback received yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {feedbacks.map((f) => (
              <div
                key={f._id}
                className="bg-white rounded-xl shadow-xl border-l-8 border-[#800000] overflow-hidden flex flex-col md:flex-row transition-transform hover:scale-[1.01]"
              >
                {/* LEFT SIDE: FEEDBACK DETAILS */}
                <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-black text-gray-800 uppercase tracking-tight">
                        {f.name}
                      </h3>
                      <span className="text-[9px] font-bold bg-orange-100 text-orange-700 px-2 py-1 rounded uppercase">
                         Verified User
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      <p className="text-[11px] text-gray-500 font-bold uppercase">
                        <span className="text-[#800000]">Email:</span> {f.email}
                      </p>
                      <p className="text-[11px] text-gray-500 font-bold uppercase">
                        <span className="text-[#800000]">Phone:</span> {f.phone}
                      </p>
                      <p className="text-[11px] text-gray-500 font-bold uppercase sm:col-span-2">
                        <span className="text-[#800000]">Location:</span> {f.address}
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-400 italic text-gray-700 text-sm md:text-base">
                      "{f.feedback}"
                    </div>
                  </div>

                  <p className="text-[10px] text-gray-400 font-black uppercase mt-6 tracking-widest">
                    Received on: {new Date(f.createdAt).toLocaleString()}
                  </p>
                </div>

                {/* RIGHT SIDE: BUS IMAGE (Visible on Mobile) */}
                <div className="w-full md:w-2/5 h-48 md:h-auto relative overflow-hidden">
                  <img 
                    src={vit}
                    alt="MSRTC Fleet" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Maroon Overlay matching Admin theme */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#800000]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                     <p className="text-white text-[10px] font-black uppercase tracking-widest opacity-90 border-b border-white/30 pb-1">
                       ST Service Improvement
                     </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-black text-white py-6 text-center border-t-4 border-orange-500 mt-10">
        <p className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-70">
          MSRTC Official Monitoring Portal © 2026
        </p>
      </footer>
    </div>
  );
}