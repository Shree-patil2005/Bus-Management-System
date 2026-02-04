import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="text"
            placeholder="Admin ID"
            value={form.id}
            onChange={(e) => setForm({ ...form, id: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="email"
            placeholder="Admin Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
