"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
// Importing assets based on your project structure
import vit from "./assets/vit.jpeg";


export default function ContactUs() {
  const addContact = useMutation(api.contact.addContact);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    issue: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addContact(form);
    alert("Your message has been submitted successfully ✅");
    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
      issue: "",
    });
  };

  const inputStyle = "w-full px-4 py-3 border-b-2 border-gray-200 focus:border-orange-500 outline-none transition-all text-sm bg-gray-50/50";

  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f4] font-sans">
      
      {/* HEADER - With Logo on Left */}
      <div className="bg-orange-400 p-4 md:p-4 shadow-md relative flex items-center justify-center">
        

        <div className="text-center">
          <h1 className="text-white font-black text-xl md:text-3xl tracking-tighter uppercase leading-tight">
            Maharashtra State Transport
          </h1>
          <div className="bg-white text-orange-600 px-6 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase mt-1 md:mt-2 inline-block shadow-sm">
            Helpdesk & Support
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-6xl bg-white rounded-xl shadow-2xl border-t-4 border-[#800000] overflow-hidden flex flex-col md:flex-row">
          
          {/* LEFT SIDE: CONTACT FORM */}
          <div className="w-full md:w-3/5 p-6 md:p-12 order-1">
            <div className="mb-8">
              <h3 className="text-2xl font-black text-gray-800 uppercase tracking-tight">Contact Us</h3>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">We are here to help you</p>
              <div className="w-16 h-1 bg-orange-500 mt-2"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
  className={`${inputStyle} invalid:border-red-500`}
  placeholder="Full Name"
  value={form.name}
  /* Pattern: At least two words (First and Last name) */
  pattern="^[a-zA-Z]+\s+[a-zA-Z]+.*$"
  title="Please enter your full name (First and Last name)"
  onChange={(e) => setForm({ ...form, name: e.target.value })}
  required
/>
                <input
  type="tel"
  className={`${inputStyle} invalid:border-red-500`}
  placeholder="Phone Number (10 digits)"
  value={form.phone}
  /* Pattern: Exactly 10 numeric digits */
  pattern="[0-9]{10}"
  maxLength="10"
  title="Please enter a 10-digit phone number"
  onChange={(e) => {
    // Strips non-numeric characters automatically
    const val = e.target.value.replace(/\D/g, "");
    setForm({ ...form, phone: val });
  }}
  required
/>
              </div>

              <input
  type="email"
  className={`${inputStyle} invalid:border-red-500`}
  placeholder="Email Address"
  /* Pattern: Strict email validation */
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  title="Please enter a valid email address (e.g. name@mail.com)"
  value={form.email}
  onChange={(e) => setForm({ ...form, email: e.target.value })}
  required
/>

              <input
  className={inputStyle}
  placeholder="Residential Address"
  value={form.address}
  onChange={(e) => setForm({ ...form, address: e.target.value })}
  required
/>

              <textarea
  className={`${inputStyle} resize-none`}
  placeholder="Describe the issue you are facing..."
  rows="4"
  value={form.issue}
  onChange={(e) => setForm({ ...form, issue: e.target.value })}
  required
/>

              <button
                type="submit"
                className="w-full bg-[#800000] hover:bg-black text-white font-black py-4 rounded-lg uppercase tracking-[0.2em] transition-all shadow-xl active:scale-95 mt-4"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* RIGHT SIDE: IMAGE - Responsive and Visible on Mobile */}
          <div className="flex w-full md:w-2/5 min-h-62.5 md:min-h-full bg-gray-100 relative items-center justify-center overflow-hidden order-2">
            <img 
              src={vit}
              alt="MSRTC Support" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#800000]/90 via-[#800000]/40 to-transparent"></div>
            
            <div className="relative z-10 text-center p-8 text-white">
              <h2 className="text-3xl font-black uppercase leading-none mb-2 tracking-tighter">Support</h2>
              <p className="text-[20px] font-bold opacity-90 tracking-widest uppercase">Available 24/7 for you</p>
              <div className="mt-6 border-t border-white/20 pt-4">
                <p className="text-[30px] italic opacity-90">"Jan-Samanyansathi... Rasta Tithe S.T."</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER - Matching Admin/Dashboard Style */}
      <footer className="bg-black text-white py-4 text-center">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">
          MSRTC Fleet Management © 2026
        </p>
      </footer>
    </div>
  );
}