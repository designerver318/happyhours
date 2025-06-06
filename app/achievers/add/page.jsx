"use client";
import { useState } from "react";

export default function AddAchiever() {
  const [form, setForm] = useState({
    name: "",
    image: "",
    result: "",
    subject: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/achievers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert("Achiever added!");
    setForm({ name: "", image: "", result: "", subject: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4 max-w-xl mx-auto bg-black">
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={form.name}
        className="border p-2 w-full"
        required
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
        value={form.image}
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="result"
        placeholder="Result (e.g., 95%)"
        onChange={handleChange}
        value={form.result}
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject (e.g., Mathematics)"
        onChange={handleChange}
        value={form.subject}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Achiever
      </button>
    </form>
  );
}
