import { useAction } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importing logos and bus image
import busLogo from "./assets/bus.png";
import CM from "./assets/CM.jpeg";
import AC from "./assets/AC.jpg"; 

export default function Login() {
  const login = useAction(api.users.login);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      {/* 1. TOP ORANGE HELPLINE STRIP */}
      <header className="bg-[#ff8c00] text-white py-1 px-4 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-bold gap-1 md:gap-0">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          <span>टोल फ्री हेल्पलाईन: 1800 22 1250</span>
          <span>विद्यार्थ्यांसाठी: 1800 22 1251</span>
        </div>
      </header>

      {/* 2. MAIN LOGO SECTION */}
      <div className="bg-white py-3 md:py-4 px-4 md:px-6 flex justify-between items-center border-b shadow-sm">
        <div className="flex items-center gap-3 md:gap-4">
          <img src={busLogo} alt="MSRTC Logo" className="h-12 md:h-16 w-auto object-contain" />
          <div className="hidden sm:block">
            <h1 className="text-[#8b0000] font-bold text-sm md:text-xl leading-tight uppercase">Maharashtra State Road Transport Corporation</h1>
            <h2 className="text-gray-700 font-bold text-xs md:text-lg">महाराष्ट्र राज्य मार्ग परिवहन महामंडळ</h2>
          </div>
        </div>
        <img src={CM} alt="Maharashtra Government" className="h-12 md:h-14 object-contain rounded shadow-sm" />
      </div>

      {/* 3. NAVIGATION BAR (Blue) */}
      <nav className="bg-[#004a7c] text-white shadow-md">
        <div className="max-w-6xl mx-auto flex overflow-x-auto whitespace-nowrap scrollbar-hide">
          <ul className="flex text-[10px] md:text-xs font-bold uppercase tracking-wide">
            <li onClick={() => navigate("/")} className="px-6 py-3 border-r border-[#003a63] hover:bg-[#003a63] cursor-pointer">मुख्य पान</li>
            <li className="px-6 py-3 border-r border-[#003a63] hover:bg-[#003a63] cursor-pointer text-center">आमच्या विषयी</li>
            <li className="px-6 py-3 hover:bg-[#003a63] cursor-pointer text-center">संपर्क करा</li>
          </ul>
        </div>
      </nav>

      {/* 4. MAIN CONTENT AREA (Responsive Grid) */}
      <main className="grow flex items-center justify-center p-4 md:p-10 bg-linear-to-b from-gray-50 to-gray-200">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT SIDE: LOGIN FORM */}
          <div className="w-full max-w-md mx-auto bg-white shadow-2xl border border-gray-200 rounded-lg overflow-hidden flex flex-col justify-center">
            <div className="bg-[#8b0000] p-4 flex items-center gap-3">
              <div className="bg-white rounded-lg p-1.5 shadow-inner">
                <svg className="w-6 h-6 text-[#8b0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-base tracking-tight italic">वापरकर्ता लॉगिन (User Login)</h3>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
              <div>
                <label className="text-[11px] font-black text-gray-500 block mb-1.5 uppercase tracking-widest">ईमेल / Email Address</label>
                <div className="relative">
                  <input
                    required
                    type="email"
                    className="w-full border border-gray-300 p-3 pl-10 rounded text-sm focus:ring-2 focus:ring-[#ff8c00]/20 focus:border-[#ff8c00] outline-none transition-all"
                    placeholder="example@mail.com"
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                  <span className="absolute left-3 top-3 text-gray-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                  </span>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-black text-gray-500 block mb-1.5 uppercase tracking-widest">पासवर्ड / Password</label>
                <div className="relative">
                  <input
                    required
                    type="password"
                    className="w-full border border-gray-300 p-3 pl-10 rounded text-sm focus:ring-2 focus:ring-[#ff8c00]/20 focus:border-[#ff8c00] outline-none transition-all"
                    placeholder="••••••••"
                    onChange={e => setForm({ ...form, password: e.target.value })}
                  />
                  <span className="absolute left-3 top-3 text-gray-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                  </span>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#8b0000] hover:bg-[#6b0000] text-white font-bold py-3.5 rounded shadow-lg transition-transform active:scale-[0.98] uppercase text-sm tracking-wider"
              >
                लॉगिन करा / Login
              </button>
            </form>
            
            <div className="bg-gray-50 p-4 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-600">नवीन वापरकर्ता? <span onClick={() => navigate("/")} className="text-[#8b0000] font-bold cursor-pointer hover:underline">येथे नोंदणी करा</span></p>
            </div>
          </div>

          {/* RIGHT SIDE: BUS IMAGE (Now visible on Mobile) */}
          <div className="w-full flex items-center justify-center">
            <div className="bg-white p-3 md:p-4 rounded-lg shadow-xl border border-gray-200 w-full">
               <img 
                  src={AC} 
                  alt="MSRTC Shivshahi Bus" 
                  className="rounded-lg w-full h-48 md:h-auto object-cover"
               />
               <div className="mt-4 text-center">
                  <h2 className="text-[#8b0000] font-extrabold text-xl md:text-2xl">शिवशाही: अभिमानाची एस.टी.</h2>
                  <p className="text-gray-600 mt-1 md:mt-2 italic font-medium text-xs md:text-sm">"प्रवाशांच्या सेवेसाठी, सदैव तत्पर"</p>
               </div>
            </div>
          </div>

        </div>
      </main>

      {/* 5. FOOTER */}
      <footer className="bg-[#1a1a1a] text-white border-t-4 border-[#ff8c00] py-6 text-center">
        <p className="text-xs md:text-sm font-medium">© 2025 महाराष्ट्र राज्य मार्ग परिवहन महामंडळ. सर्व हक्क सुरक्षित.</p>
      </footer>
    </div>
  );
}