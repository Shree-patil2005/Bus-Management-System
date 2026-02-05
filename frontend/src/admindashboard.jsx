"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Using the same asset you used for the dashboard
import vit from "./assets/vit.jpeg"; 

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: "",
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded admin credentials
    if (
      form.id === "2023" &&
      form.email === "shreepatil@gmail.com" &&
      form.password === "shree@123"
    ) {
      alert("Admin Login Successful ✅");
      navigate("/adminbus");
    } else {
      alert("Invalid Admin Credentials ❌");
    }
  };

  const inputStyle = "w-full px-4 py-3 border-b-2 border-gray-200 focus:border-orange-500 outline-none transition-all text-sm bg-gray-50/50";

  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f4] font-sans">
      
      {/* HEADER - Consistent with Landing & Dashboard */}
      <div className="bg-orange-400 p-4 shadow-md text-center">
        <h1 className="text-white font-black text-xl md:text-2xl tracking-tighter uppercase">
          Maharashtra State Transport
        </h1>
        <span className="bg-white text-orange-600 px-4 py-1 rounded-full text-xs font-bold uppercase mt-1 inline-block">
          Administrative Portal
        </span>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-5xl bg-white rounded-xl shadow-2xl border-t-4 border-[#800000] overflow-hidden flex flex-col md:flex-row">
          
          {/* LEFT SIDE: LOGIN FORM */}
          <div className="w-full md:w-1/2 p-8 md:p-12 order-1">
            <div className="mb-10 text-center md:text-left">
              <h3 className="text-2xl font-black text-gray-800 uppercase tracking-tight">Admin Login</h3>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Authorized Access Only</p>
              <div className="w-16 h-1 bg-orange-500 mt-2 mx-auto md:mx-0"></div>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Official ID</label>
                <input
                  type="text"
                  placeholder="Enter Admin ID"
                  value={form.id}
                  onChange={(e) => setForm({ ...form, id: e.target.value })}
                  className={inputStyle}
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="admin@msrtc.gov.in"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputStyle}
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Secure Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className={inputStyle}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#800000] hover:bg-black text-white font-black py-4 rounded-lg uppercase tracking-[0.2em] transition-all shadow-xl active:scale-95 mt-4"
              >
                Access Dashboard
              </button>
            </form>
            
            <p className="text-center text-[10px] text-gray-400 mt-8 uppercase font-medium">
              Forgot Credentials? Contact System Administrator
            </p>
          </div>

          {/* RIGHT SIDE: BUS IMAGE - Visible on Mobile & Desktop */}
          <div className="flex w-full md:w-1/2 min-h-62.5 md:min-h-full bg-gray-100 relative items-center justify-center overflow-hidden order-2">
            <img 
              src={vit}
              alt="MSRTC Fleet" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            />
            {/* Dark Maroon Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#800000]/90 via-[#800000]/40 to-transparent"></div>
            
            <div className="relative z-10 text-center p-8 text-white">
              <h2 className="text-3xl font-black uppercase leading-none mb-2 tracking-tighter">Fleet Control</h2>
              <p className="text-xs font-bold opacity-80 tracking-widest uppercase">Security • Integrity • Service</p>
              <div className="mt-6 border-t border-white/20 pt-4">
                <p className="text-[10px] italic opacity-70">"Serving the citizens of Maharashtra since 1948"</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER - Consistent with Fleet Management Style */}
      <footer className="bg-black text-white py-4 text-center">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">
          MSRTC Admin Control © 2026
        </p>
      </footer>
    </div>
  );
}