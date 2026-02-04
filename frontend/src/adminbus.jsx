import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState } from "react";

export default function AdminBus() {
  const addBus = useMutation(api.buses.addBus);
  const deleteBus = useMutation(api.buses.deleteBus);
  const buses = useQuery(api.buses.getAllBuses);

  const [bus, setBus] = useState({ busNo: "", source: "", destination: "", seats: "", type: "AC" });
  const [stops, setStops] = useState([]);

  const handleStopChange = (i, field, value) => {
    const copy = [...stops];
    copy[i][field] = value;
    setStops(copy);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stops.length) return alert("Please add at least one stop");
    try {
      await addBus({
        ...bus, 
        seats: Number(bus.seats),
        stops: stops.map((s, i) => ({ ...s, stopOrder: i + 1, priceTillHere: Number(s.priceTillHere) })),
      });
      alert("Bus Added Successfully");
      setBus({ busNo: "", source: "", destination: "", seats: "", type: "AC" });
      setStops([]);
    } catch (err) { alert(err.message); }
  };

  const inputStyle = "w-full p-3 bg-white border border-gray-300 rounded focus:border-orange-500 outline-none text-base transition-all";

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
      {/* MSRTC Style Header */}
      <header className="bg-orange-400 border-b-4 border-black p-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-2">
          <h1 className="text-xl font-black text-white uppercase tracking-tight leading-none">
            Maharashtra State Transport
          </h1>
          <div className="bg-orange-500 text-white px-4 py-1 text-sm font-bold rounded-full">
            Admin Portal
          </div>
        </div>
      </header>

      <main className="grow max-w-6xl mx-auto w-full p-4 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Registration Form */}
        <section className="bg-white shadow rounded-lg border-t-4 border-red-800 p-5 md:p-8 h-fit">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2 uppercase tracking-wide">Register New Bus</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input placeholder="Bus Number" value={bus.busNo} onChange={e => setBus({...bus, busNo: e.target.value})} className={inputStyle} required />
            
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="From" value={bus.source} onChange={e => setBus({...bus, source: e.target.value})} className={inputStyle} required />
              <input placeholder="To" value={bus.destination} onChange={e => setBus({...bus, destination: e.target.value})} className={inputStyle} required />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <input type="number" placeholder="Seats" value={bus.seats} onChange={e => setBus({...bus, seats: e.target.value})} className={inputStyle} required />
              <select value={bus.type} onChange={e => setBus({...bus, type: e.target.value})} className={inputStyle}>
                <option value="AC">AC</option>
                <option value="Non-AC">Non-AC</option>
              </select>
            </div>

            <div className="pt-4 border-t">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Route Stops</span>
                <button type="button" onClick={() => setStops([...stops, { stopName: "", priceTillHere: "" }])} className="text-red-700 text-xs font-black hover:underline underline-offset-4">
                  + ADD STOP
                </button>
              </div>
              
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {stops.map((s, i) => (
                  <div key={i} className="flex gap-2">
                    <input placeholder="Stop" value={s.stopName} onChange={e => handleStopChange(i, "stopName", e.target.value)} className={inputStyle} required />
                    <input type="number" placeholder="Fare" value={s.priceTillHere} onChange={e => handleStopChange(i, "priceTillHere", e.target.value)} className={`${inputStyle} w-24`} required />
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-red-800 hover:bg-red-900 text-white py-3 rounded font-bold uppercase tracking-widest shadow-md transition-all active:scale-95">
              Add Bus
            </button>
          </form>
        </section>

        {/* Fleet List */}
        <section className="space-y-4">
          <h2 className="text-sm font-black text-gray-500 uppercase tracking-[0.2em] border-l-4 border-orange-500 pl-3">Current Fleet</h2>
          <div className="grid grid-cols-1 gap-4 max-h-[70vh] overflow-y-auto pr-2">
            {buses?.map((b) => (
              <div key={b._id} className="bg-white border-l-4 border-red-700 rounded shadow-sm p-4 relative">
                <div className="flex justify-between pr-8">
                  <div>
                    <h3 className="text-lg font-black text-slate-800">{b.busNo}</h3>
                    <p className="text-sm text-gray-500 font-bold uppercase">{b.source} → {b.destination}</p>
                  </div>
                  <button onClick={() => deleteBus({ id: b._id })} className="text-red-500 hover:text-red-700 font-bold text-xs p-1">DELETE</button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 border-t pt-2">
                  <span className="text-[10px] font-bold bg-orange-100 text-orange-700 px-2 rounded uppercase">{b.type}</span>
                  {b.stops?.map((s, i) => (
                    <span key={i} className="text-[10px] font-medium bg-gray-100 text-gray-600 px-2 rounded">
                      {s.stopName} (₹{s.priceTillHere})
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-6 mt-10 text-center text-xs font-bold uppercase tracking-widest border-t-4 border-[#ff8c00]">
        MSRTC Fleet Management © 2025
      </footer>
    </div>
  );
}