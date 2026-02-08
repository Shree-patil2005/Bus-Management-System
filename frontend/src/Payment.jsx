"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";

// Assets
import qr from "./assets/gpay-qr.jpeg";
import vit from "./assets/vit.jpeg"; // Your bus image asset

export default function Payment() {
  const addPayment = useMutation(api.payments.addPayment);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
  });

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "normal");
    doc.setFontSize(18);
    doc.setTextColor(128, 0, 0); // Maroon header
    doc.text("MSRTC PAYMENT RECEIPT", 20, 20);
    
    doc.setDrawColor(255, 140, 0); // Orange line
    doc.line(20, 25, 190, 25);

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Name: ${form.name}`, 20, 40);
    doc.text(`Email: ${form.email}`, 20, 50);
    doc.text(`Phone: ${form.phone}`, 20, 60);
    doc.text(`Amount Paid: Rs. ${form.amount}`, 20, 70);

    doc.text("Status: Verified / Paid", 20, 90);
    doc.text("Note: Ticket details will be sent to your registered email.", 20, 105);

    doc.setFontSize(10);
    doc.text("Safe journey with Maharashtra State Transport.", 20, 140);
    doc.save("MSRTC-Payment-Receipt.pdf");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPayment({
      name: form.name,
      email: form.email,
      phone: form.phone,
      amount: Number(form.amount),
    });

    generatePDF();
    alert("Payment recorded successfully. Receipt downloaded ✅");
    setForm({ name: "", email: "", phone: "", amount: "" });
  };

  const inputStyle = "w-full px-4 py-3 border-b-2 border-gray-200 focus:border-orange-500 outline-none transition-all text-sm bg-gray-50/50";

  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f4] font-sans">
      
      {/* 1. HEADER */}
      <div className="bg-orange-400 p-4 shadow-md text-center">
        <h1 className="text-white font-black text-xl md:text-2xl tracking-tighter uppercase leading-tight">
          Maharashtra State Transport
        </h1>
        <span className="bg-white text-orange-600 px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase mt-1 inline-block shadow-sm">
          Secure Payment Gateway
        </span>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-6xl bg-white rounded-xl shadow-2xl border-t-4 border-[#800000] overflow-hidden flex flex-col md:flex-row">
          
          {/* LEFT SIDE: PAYMENT FORM & QR */}
          <div className="w-full md:w-1/2 p-6 md:p-12 order-1 flex flex-col justify-center">
            <div className="mb-8 text-center md:text-left">
              <h3 className="text-2xl font-black text-gray-800 uppercase tracking-tight">Complete Payment</h3>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Scan QR to pay via UPI</p>
              <div className="w-16 h-1 bg-orange-500 mt-2 mx-auto md:mx-0"></div>
            </div>

            {/* QR Section */}
            <div className="bg-gray-50 p-4 rounded-lg border border-dashed border-gray-300 mb-8 flex flex-col items-center">
              <img src={qr} alt="UPI QR" className="w-40 md:w-48 h-auto shadow-sm rounded-sm" />
              <p className="mt-3 text-[15px] font-bold text-gray-400 uppercase text-center tracking-tighter">
                GPay / PhonePe / Paytm / Any UPI App
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  className={inputStyle}
                  placeholder="Full Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  className={inputStyle}
                  placeholder="Phone"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              <input
                className={inputStyle}
                placeholder="Email Address"
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <input
                type="number"
                className={inputStyle}
                placeholder="Amount (Rs.)"
                required
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
              />

              <button
                type="submit"
                className="w-full bg-[#800000] hover:bg-black text-white font-black py-4 rounded-lg uppercase tracking-[0.2em] transition-all shadow-xl active:scale-95 mt-4"
              >
                I Have Paid
              </button>
            </form>
          </div>

          {/* RIGHT SIDE: BUS IMAGE & MESSAGE */}
          <div className="flex w-full md:w-1/2 min-h-75 md:min-h-full bg-gray-100 relative items-center justify-center overflow-hidden order-2">
            <img 
              src={vit}
              alt="MSRTC Bus" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            />
            {/* Maroon Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#800000]/95 via-[#800000]/40 to-transparent"></div>
            
            <div className="relative z-10 text-center p-8 text-white">
              <h2 className="text-3xl md:text-4xl font-black uppercase leading-none mb-2 tracking-tighter">Confrim Your Ticket</h2>
              <p className="text-lg font-bold opacity-90 tracking-widest uppercase">Fast • Reliable • Digital</p>
              
              <div className="mt-8 border-t border-white/20 pt-6">
                <p className="text-[18px] leading-relaxed italic opacity-80">
                  "Your seat will be confirmed instantly after <br className="hidden md:block"/> payment verification."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. FOOTER */}
      <footer className="bg-black text-white py-4 text-center mt-auto">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">
          Official MSRTC Payment Gateway © 2026
        </p>
      </footer>
    </div>
  );
}