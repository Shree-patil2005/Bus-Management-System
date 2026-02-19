"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useNavigate } from "react-router-dom";
// Using your local bus image asset
import vit from "./assets/vit.jpeg"; 

export default function Feedback() {
  const navigate = useNavigate();
  const addFeedback = useMutation(api.feedback.addFeedback);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    feedback: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addFeedback(form);
    alert("Thank you for your feedback 🙏");
    setForm({ name: "", phone: "", email: "", address: "", feedback: "" });
  };

  const inputStyle = "w-full px-4 py-3 border-b-2 border-gray-200 focus:border-orange-500 outline-none transition-all text-sm bg-gray-50/50";

  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f4] font-sans">
      
      {/* HEADER - Consistent with Admin Portal */}
      <div className="bg-orange-400 p-4 shadow-md text-center">
        <h1 className="text-white font-black text-xl md:text-2xl tracking-tighter uppercase">
          Maharashtra State Transport
        </h1>
        <span className="bg-white text-orange-600 px-4 py-1 rounded-full text-xs font-bold uppercase mt-1 inline-block shadow-sm">
          Passenger Feedback Portal
        </span>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-6xl bg-white rounded-xl shadow-2xl border-t-4 border-[#800000] overflow-hidden flex flex-col md:flex-row">
          
          {/* LEFT SIDE: FEEDBACK FORM */}
          <div className="w-full md:w-1/2 p-8 md:p-12 order-1">
            <div className="mb-10 text-center md:text-left">
              <h3 className="text-2xl font-black text-gray-800 uppercase tracking-tight">Your Feedback</h3>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Help us improve our service</p>
              <div className="w-16 h-1 bg-orange-500 mt-2 mx-auto md:mx-0"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div className="space-y-1">
    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Full Name</label>
    <input
      className={`${inputStyle} invalid:border-red-500`}
      placeholder="Enter Your Name"
      value={form.name}
      /* Pattern: Requires at least two words with a space */
      pattern="^[a-zA-Z]+\s+[a-zA-Z]+.*$"
      title="Please enter your full name (First and Last name)"
      onChange={(e) => setForm({ ...form, name: e.target.value })}
      required
    />
  </div>
  <div className="space-y-1">
    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Phone Number</label>
    <input
      type="tel"
      className={`${inputStyle} invalid:border-red-500`}
      placeholder="10-Digit Mobile Number"
      value={form.phone}
      /* Pattern: Exactly 10 digits */
      pattern="[0-9]{10}"
      maxLength="10"
      title="Please enter a valid 10-digit mobile number"
      onChange={(e) => {
        // Prevents anything except digits from being saved to state
        const val = e.target.value.replace(/\D/g, "");
        setForm({ ...form, phone: val });
      }}
      required
    />
  </div>
</div>

<div className="space-y-1">
  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Email Address</label>
  <input
    className={`${inputStyle} invalid:border-red-500`}
    type="email"
    placeholder="name@example.com"
    /* Pattern: Strict email validation for name@domain.com format */
    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    title="Please enter a valid email address"
    value={form.email}
    onChange={(e) => setForm({ ...form, email: e.target.value })}
    required
  />
</div>

<div className="space-y-1">
  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">City / Address</label>
  <input
    className={inputStyle}
    placeholder="Enter your location"
    value={form.address}
    onChange={(e) => setForm({ ...form, address: e.target.value })}
    required
  />
</div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Message</label>
                <textarea
                  className={`${inputStyle} resize-none`}
                  placeholder="Tell us about your journey..."
                  rows="3"
                  value={form.feedback}
                  onChange={(e) => setForm({ ...form, feedback: e.target.value })}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#800000] hover:bg-black text-white font-black py-4 rounded-lg uppercase tracking-[0.2em] transition-all shadow-xl active:scale-95 mt-4"
              >
                Submit Feedback
              </button>
            </form>
            
            <p className="text-center text-[10px] text-gray-400 mt-8 uppercase font-medium">
              Every suggestion makes our ST better
            </p>
          </div>

          {/* RIGHT SIDE: BUS IMAGE - With Maroon Gradient */}
          <div className="flex w-full md:w-1/2 min-h-75 md:min-h-full bg-gray-100 relative items-center justify-center overflow-hidden order-2">
            <img 
              src={vit}
              alt="MSRTC Bus" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            />
            {/* Dark Maroon Gradient Overlay (Matching Admin) */}
            <div className="absolute inset-0 bg-linear-to-t from-[#800000]/90 via-[#800000]/40 to-transparent"></div>
            
            <div className="relative z-10 text-center p-8 text-white">
              <h2 className="text-3xl font-black uppercase leading-none mb-2 tracking-tighter">Your Opnion Power us so much</h2>
              <p className="text-2xl font-bold opacity-80 tracking-widest uppercase">Shapes our service</p>
              <div className="mt-6 border-t border-white/20 pt-4">
                <p className="text-[25px] italic opacity-70">"Jan-Samanyansathi... Rasta Tithe S.T."</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-white py-4 text-center">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">
          Official MSRTC Feedback Portal © 2026
        </p>
      </footer>
    </div>
  );
}