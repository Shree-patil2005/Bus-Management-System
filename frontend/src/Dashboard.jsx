"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useNavigate } from "react-router-dom";

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

    alert("Booking Successful! After payment, ticket PDF will be sent to your email 📩");

    setForm({
      name: "",
      mobile: "",
      email: "",
      source: "",
      destination: "",
      date: "",
      time: "",
      people: "",
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-60 bg-gray-900 text-white p-5 space-y-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full text-left px-4 py-2 rounded hover:bg-gray-700"
        >
          Book Ticket
        </button>

        <button
          onClick={() => navigate("/searchbus")}
          className="w-full text-left px-4 py-2 rounded hover:bg-gray-700"
        >
          View Bus
        </button>

        <button
          onClick={() => navigate("/feedback")}
          className="w-full text-left px-4 py-2 rounded hover:bg-gray-700"
        >
          Feedback
        </button>
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <div className="bg-white shadow p-4 text-center font-semibold text-lg">
          Bus Reservation System
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex justify-center">

          <div className="max-w-xl bg-white p-6 rounded shadow w-full">
            <h3 className="text-xl font-bold mb-4">Book Ticket</h3>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input className="input" placeholder="Name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required />

              <input className="input" placeholder="Mobile"
                value={form.mobile}
                onChange={e => setForm({ ...form, mobile: e.target.value })}
                required />

              <input className="input" placeholder="Email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required />

              <input className="input" placeholder="Source Station"
                value={form.source}
                onChange={e => setForm({ ...form, source: e.target.value })}
                required />

              <input className="input" placeholder="Destination Station"
                value={form.destination}
                onChange={e => setForm({ ...form, destination: e.target.value })}
                required />

              <div className="flex gap-3">
                <input type="date" className="input"
                  value={form.date}
                  onChange={e => setForm({ ...form, date: e.target.value })}
                  required />

                <input type="time" className="input"
                  value={form.time}
                  onChange={e => setForm({ ...form, time: e.target.value })}
                  required />
              </div>

              <input type="number" className="input" placeholder="Passengers"
                value={form.people}
                onChange={e => setForm({ ...form, people: e.target.value })}
                required />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Submit Booking
              </button>

            </form>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-white p-3 text-center text-sm border-t">
          © 2026 Bus Reservation System
        </div>

      </div>
    </div>
  );
}
