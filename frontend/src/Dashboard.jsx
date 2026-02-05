"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useNavigate } from "react-router-dom";
import vit from "./assets/vit.jpeg";

export default function Dashboard() {
  const navigate = useNavigate();
  const addBooking = useMutation(api.bookings.addBooking);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    source: "",
    destination: "",
    date: "",
    time: "",
    people: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBooking({
      ...form,
      people: Number(form.people),
    });

    alert("Booking Successful! Ticket details sent to email 📩");
    setForm({ name: "", mobile: "", email: "", source: "", destination: "", date: "", time: "", people: "" });
  };

  const inputStyle = "w-full px-4 py-3 border-b-2 border-gray-200 focus:border-orange-500 outline-none transition-all text-sm bg-gray-50/50";

  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f4] font-sans">
      
      {/* HEADER */}
      <div className="bg-orange-400 p-4 shadow-md text-center">
        <h1 className="text-white font-black text-xl md:text-2xl tracking-tighter uppercase">
          Maharashtra State Transport
        </h1>
        <span className="bg-white text-orange-400 px-4 py-1 rounded-full text-xs font-bold uppercase mt-1 inline-block">
          Booking Portal
        </span>
      </div>

      <div className="flex flex-1 flex-col md:flex-row">
        
        {/* SIDEBAR */}
        <div className="w-full md:w-64 bg-white border-r border-gray-200 p-6 flex flex-col gap-6 shadow-sm">
          <h2 className="text-[#800000] font-black text-xs uppercase tracking-widest border-b pb-2">Menu</h2>
          
          <nav className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-2">
            <button
              onClick={() => navigate("/dashboard")}
              className="shrink-0 w-full text-left px-4 py-3 rounded-lg bg-[#800000] text-white font-bold shadow-lg transition-all text-sm"
            >
              🎫 Book Ticket
            </button>

            <button
              onClick={() => navigate("/searchbus")}
              className="shrink-0 w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700 font-bold transition-all text-sm border border-transparent hover:border-gray-200"
            >
              🚌 View Busses
            </button>

            <button
              onClick={() => navigate("/Preview")}
              className="shrink-0 w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700 font-bold transition-all text-sm border border-transparent hover:border-gray-200"
            >
              🙋🏼‍♀️Previews
            </button>

            <button
              onClick={() => navigate("/feedback")}
              className="shrink-0 w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700 font-bold transition-all text-sm border border-transparent hover:border-gray-200"
            >
              💬 Feedback
            </button>
          </nav>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 p-4 md:p-8 flex justify-center items-start">
          <div className="w-full max-w-6xl bg-white rounded-xl shadow-2xl border-t-4 border-[#800000] overflow-hidden flex flex-col md:flex-row">
            
            {/* LEFT SIDE: FORM */}
            <div className="w-full md:w-3/5 p-6 md:p-10 order-1">
              <div className="mb-8">
                <h3 className="text-2xl font-black text-gray-800 uppercase tracking-tight">Register Ticket</h3>
                <div className="w-16 h-1 bg-orange-500 mt-1"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input className={inputStyle} placeholder="Passenger Name"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                  <input className={inputStyle} placeholder="Mobile Number"
                    value={form.mobile} onChange={e => setForm({ ...form, mobile: e.target.value })} required />
                </div>

                <input className={inputStyle} placeholder="Email Address" type="email"
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input className={inputStyle} placeholder="From (Source)"
                    value={form.source} onChange={e => setForm({ ...form, source: e.target.value })} required />
                  <input className={inputStyle} placeholder="To (Destination)"
                    value={form.destination} onChange={e => setForm({ ...form, destination: e.target.value })} required />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Date</label>
                    <input type="date" className={inputStyle}
                      value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} required />
                  </div>
                  <div className="col-span-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Time</label>
                    <input type="time" className={inputStyle}
                      value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} required />
                  </div>
                  <div className="col-span-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Seats</label>
                    <input type="number" className={inputStyle} placeholder="0"
                      value={form.people} onChange={e => setForm({ ...form, people: e.target.value })} required />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#800000] hover:bg-black text-white font-black py-4 rounded-lg uppercase tracking-[0.2em] transition-all shadow-xl active:scale-95 mt-4"
                >
                  Confirm Booking
                </button>
              </form>
            </div>

            {/* RIGHT SIDE: IMAGE (Now visible on mobile too) */}
            <div className="flex w-full md:w-2/5 min-h-62.5 md:min-h-full bg-gray-100 relative items-center justify-center overflow-hidden order-2 md:order-2">
              <img 
                src={vit}
                alt="MSRTC Bus" 
                className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#800000]/80 via-transparent to-transparent"></div>
              <div className="relative z-10 text-center p-6 text-white">
                <p className="text-2xl md:text-3xl font-black uppercase leading-none mb-2">Safe & Reliable</p>
                <p className="text-xs md:text-sm font-medium opacity-80 italic">"जनसामान्यांसाठी.. रस्ता तिथे एस.टी..."</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-white py-4 text-center">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">
          MSRTC Fleet Management © 2026
        </p>
      </footer>
    </div>
  );
}