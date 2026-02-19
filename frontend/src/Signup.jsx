import { useAction } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import busLogo from "./assets/bus.png";
import CM from "./assets/CM.jpeg";
import AC from "./assets/AC.jpg";
import EV from "./assets/EV.jpeg";

export default function Signup() {
  const navigate = useNavigate();
  const signup = useAction(api.users.signup);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(form);
      alert("नोंदणी यशस्वी झाली!"); 
      navigate("/Login"); 
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans overflow-x-hidden">
      {/* 1. TOP ORANGE HELPLINE STRIP */}
      <header className="bg-[#ff8c00] text-white py-1 px-4 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-bold gap-1 md:gap-0">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          <span>टोल फ्री हेल्पलाईन: १८०० २२ १२५००</span>
          <span className="hidden sm:inline">|</span>
          <span>विद्यार्थ्यांसाठी: १८०० २२ १२५१</span>
        </div>
        <div className="flex gap-3 items-center">
          <button 
            onClick={() => navigate("/english")} 
            className="cursor-pointer hover:underline"
          >
            English
          </button>
          <button 
            onClick={() => navigate("/admindashboard")}  
            className="bg-white text-[#ff8c00] px-3 py-0.5 rounded shadow-sm cursor-pointer"
          >
            प्रशासक
          </button>
        </div>
      </header>

      {/* 2. MAIN LOGO SECTION */}
      <div className="bg-white py-3 md:py-4 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center border-b shadow-sm gap-4">
        <div className="flex items-center gap-3 md:gap-4 animate-fadeIn">
          <img 
            src={busLogo} 
            alt="MSRTC Logo" 
            className="h-12 md:h-16 w-auto object-contain"
          />
          <div className="text-center md:text-left">
            <h1 className="text-[#8b0000] font-bold text-sm md:text-xl leading-tight uppercase">
              Maharashtra State Road Transport Corporation
            </h1>
            <h2 className="text-gray-700 font-bold text-xs md:text-lg">
              महाराष्ट्र राज्य मार्ग परिवहन महामंडळ
            </h2>
          </div>
        </div>
        
        <div className="flex items-center gap-4 animate-fadeIn delay-100">
           <img 
            src={CM} 
            alt="Maharashtra Government" 
            className="h-12 md:h-14 object-contain rounded shadow-sm"
          />
        </div>
      </div>

      {/* 3. NAVIGATION BAR */}
      <nav className="bg-[#004a7c] text-white shadow-md sticky top-0 z-50">
  <div className="max-w-6xl mx-auto flex overflow-x-auto whitespace-nowrap scrollbar-hide">
    <ul className="flex text-[10px] md:text-xs font-bold uppercase tracking-wide">
      <button 
        onClick={() => navigate("/")} 
        className="px-4 md:px-6 py-3 border-r border-[#003a63] hover:bg-orange-400 hover:scale-110 transition-all duration-300 cursor-pointer ease-in-out origin-center"
      >
        मुख्य पान
      </button>
      <button 
        onClick={() => navigate("/AboutUS")} 
        className="px-4 md:px-6 py-3 border-r border-[#003a63] hover:bg-orange-400 hover:scale-110 transition-all duration-300 cursor-pointer ease-in-out origin-center"
      >
        आमच्या विषयी
      </button>
      <button 
        onClick={() => navigate("/Preview")} 
        className="px-4 md:px-6 py-3 border-r border-[#003a63] hover:bg-orange-400 hover:scale-110 transition-all duration-300 cursor-pointer ease-in-out origin-center"
      >
        आढावा
      </button>
      <button 
        onClick={() => navigate("/ContactUs")} 
        className="px-4 md:px-6 py-3 hover:bg-orange-400 hover:scale-110 transition-all duration-300 cursor-pointer ease-in-out origin-center"
      >
        संपर्क करा
      </button>
    </ul>
  </div>
</nav>

      {/* 4. MAIN CONTENT AREA */}
      <main className="max-w-6xl mx-auto p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-2 md:mt-4">
        
        {/* Signup Form Card */}
        <div className="md:col-span-1 order-1 md:order-1 animate-slideInLeft">
          <div className="bg-white shadow-xl border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-[#8b0000] p-4 flex items-center gap-3">
              <div className="bg-white rounded-lg p-1.5">
                 <svg className="w-5 h-5 text-[#8b0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                 </svg>
              </div>
              <h3 className="text-white font-bold text-sm md:text-base">नवीन खाते</h3>
            </div>

            <form onSubmit={handleSubmit} className="p-5 md:p-6 space-y-4 md:space-y-5">
              <div>
                <label className="text-[10px] font-black text-gray-500 block mb-1 uppercase tracking-widest">पहिले नाव</label>
                <input
                  required
                  type="text"
                  pattern="^[A-Za-z\u0900-\u097F\s]{2,}$"
                  className="w-full border border-gray-300 p-2.5 rounded text-sm focus:border-[#ff8c00] outline-none invalid:border-red-500"
                  placeholder="उदा. विनोद पाटील"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div>
                <label className="text-[10px] font-black text-gray-500 block mb-1 uppercase tracking-widest">ईमेल</label>
                <input
                  required
                  type="email"
                  className="w-full border border-gray-300 p-2.5 rounded text-sm focus:border-[#ff8c00] outline-none invalid:border-red-500"
                  placeholder="example@gmail.com"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div>
                <label className="text-[10px] font-black text-gray-500 block mb-1 uppercase tracking-widest">पासवर्ड</label>
                <input
                  required
                  type="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}"
                  title="किमान ८ अक्षरे, मोठे/लहान अक्षर, अंक आणि चिन्ह"
                  className="w-full border border-gray-300 p-2.5 rounded text-sm focus:border-[#ff8c00] outline-none invalid:border-red-500"
                  placeholder="••••••••"
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <p className="text-[10px] text-gray-400 mt-1 italic">
                  किमान ८ अक्षरे (A, a, 123, #)
                </p>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#8b0000] hover:bg-[#6b0000] text-white font-bold py-3 rounded shadow-lg active:scale-95 uppercase text-xs md:text-sm transition-all"
              >
                नोंदणी करा
              </button>
            </form>
            <div className="bg-gray-50 p-4 border-t border-gray-100 text-center font-medium">
                <p className="text-xs text-gray-600">आधीच नोंदणी केली आहे? <span onClick={() => navigate("/Login")} className="text-[#8b0000] font-bold cursor-pointer hover:underline">इथे लॉगिन करा</span></p>
            </div>
          </div>
        </div>

        {/* Informational Column */}
        <div className="md:col-span-2 space-y-6 order-2 md:order-2">
          <div className="bg-white p-6 md:p-8 border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-xl md:text-3xl font-extrabold text-[#8b0000] mb-3 border-b-2 border-[#ff8c00] pb-2 animate-fadeInUp">
              जनसामान्यांसाठी.. रस्ता तिथे एस.टी...
            </h2>
            
            <p className="text-gray-700 leading-relaxed text-sm md:text-lg mb-4 animate-fadeInUp delay-100">
              नोंदणीकृत वापरकर्त्यांना बस बुकिंग आणि महामंडळाच्या नवीन घोषणांबद्दल त्वरित माहिती मिळवण्याची सुविधा मिळते.
            </p>
            
            <div className="bg-orange-50 p-4 border-l-4 md:border-l-8 border-[#ff8c00] rounded-r-lg animate-fadeInUp delay-200">
              <p className="text-xs md:text-sm text-gray-700 font-medium italic">
                "सुरक्षित आणि कार्यक्षम वाहतूक सेवा प्रदान करणे हे आमचे ध्येय आहे."
              </p>
            </div>

            {/* BUS PHOTOS LOOPING FROM RIGHT TO LEFT */}
            <div className="mt-8 overflow-hidden relative w-full">
              <div className="flex animate-marquee whitespace-nowrap gap-4 py-2">
                {/* Duplicate images to create a seamless loop */}
                {[AC, EV, AC, EV].map((img, index) => (
                  <div key={index} className="shrink-0 w-64 md:w-80 h-36 md:h-48 rounded overflow-hidden border border-gray-200 shadow-md">
                    <img src={img} alt="Bus" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                ))}
                {/* Same set repeated for infinite scroll */}
                {[AC, EV, AC, EV].map((img, index) => (
                  <div key={`loop-${index}`} className="shrink-0 w-64 md:w-80 h-36 md:h-48 rounded overflow-hidden border border-gray-200 shadow-md">
                    <img src={img} alt="Bus" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-16 bg-[#1a1a1a] text-white border-t-4 border-[#ff8c00]">
        <div className="max-w-6xl mx-auto p-4 text-center">
          <p className="text-sm font-medium">© 2026 महाराष्ट्र राज्य मार्ग परिवहन महामंडळ. सर्व हक्क सुरक्षित.</p>
          <div className="flex justify-center gap-6 mt-4 opacity-60 text-[10px] uppercase tracking-widest">
            <p className="hover:text-[#ff8c00] cursor-pointer">- महाराष्ट्र राज्य मार्ग परिवहन महामंडळ</p>
            <p className="hover:text-[#ff8c00] cursor-pointer">- लाल परी</p>
          </div>
        </div>
      </footer>

      {/* STYLES FOR ANIMATIONS */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: fit-content;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
      `}</style>
    </div>
  );
}