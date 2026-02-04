import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import your asset
import busImg from "./assets/AC.jpg"; 


export default function SearchBus() {
  const navigate = useNavigate();
  const buses = useQuery(api.buses.getAllBuses);
  const [search, setSearch] = useState("");

  const filtered = buses?.filter(
    b =>
      b.source.toLowerCase().includes(search.toLowerCase()) ||
      b.destination.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
      {/* MSRTC Style Header */}
      <header className="bg-orange-400 border-b-4 border-black p-4 shadow-md">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
            Maharashtra State Road Transport Corporation
          </h1>
          <p className="text-white text-[10px] font-bold uppercase tracking-[0.3em] opacity-90">
            Official Passenger Portal
          </p>
        </div>
      </header>

      <main className="grow max-w-5xl mx-auto w-full p-4 md:p-6">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-xl mx-auto">
            <input
              placeholder="Search destination..."
              className="w-full p-3 pl-10 bg-white border-2 border-gray-300 rounded-xl focus:border-orange-500 outline-none text-base font-bold shadow-sm"
              onChange={e => setSearch(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">🔍</div>
          </div>
        </div>

        {/* Bus List */}
        <div className="grid grid-cols-1 gap-5">
          {filtered?.map((b) => (
            <div key={b._id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row border-l-10 border-red-800 border-y border-r">
              
              {/* Left Side: Ticket Details */}
              <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tighter">{b.busNo}</h2>
                    <span className="bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-md uppercase">
                      {b.type}
                    </span>
                  </div>

                  {/* Balanced Route Display */}
                  <div className="flex items-center gap-3 my-4">
                    <div className="flex-1">
                      <p className="text-[10px] font-black text-red-700 uppercase mb-1">FROM</p>
                      <p className="text-2xl font-black text-slate-900 uppercase leading-none">{b.source}</p>
                    </div>
                    
                    <div className="text-orange-500 text-2xl font-black">→</div>
                    
                    <div className="flex-1 text-right">
                      <p className="text-[10px] font-black text-red-700 uppercase mb-1">TO</p>
                      <p className="text-2xl font-black text-slate-900 uppercase leading-none">{b.destination}</p>
                    </div>
                  </div>

                  {/* Intermediate Stops */}
                  <div className="mb-4">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">STOPS & FARES</p>
                    <div className="flex flex-wrap gap-1.5">
                      {b.stops.map((s, i) => (
                        <div key={i} className="text-[11px] font-bold bg-slate-50 border border-slate-200 px-2 py-0.5 rounded text-slate-600">
                          {s.stopName} <span className="text-red-700 ml-1">₹{s.priceTillHere}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-slate-100 mt-2">
                  <p className="text-sm font-black text-slate-500 uppercase">
                    Seats: <span className="text-red-700 text-xl">{b.seats}</span>
                  </p>
                  <button onClick={() => navigate("/Dashboard")} className="bg-orange-500 hover:bg-black text-white font-black text-xs px-6 py-3 rounded-lg uppercase tracking-widest transition-all shadow-md active:scale-95">
                    BOOK NOW
                  </button>
                </div>
              </div>

              {/* Right Side: Image (Scaled Down) */}
              <div className="md:w-75 w-full bg-slate-50 flex items-center justify-center p-3 border-l border-gray-100">
                <img 
                  src={busImg} 
                  alt="Bus" 
                  className="w-full h-40 md:h-48 object-cover rounded-lg shadow-sm"
                />
              </div>

            </div>
          ))}
        </div>
      </main>

      <footer className="bg-black text-white py-6 text-center mt-8 border-t-4 border-[#ff8c00]">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 text-white">Safe · Reliable · Punctual</p>
      </footer>
    </div>
  );
}