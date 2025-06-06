"use client";
import { useState } from "react";

export default function AddAchiever() {
  const [form, setForm] = useState({
    name: "",
    image: "",
    result: "",
    subject: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/achievers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const data = await res.json();
      alert(`🎉 Achiever added! ID: ${data.data._id}`);
      setForm({ name: "", image: "", result: "", subject: "", description: "" });
    } catch (err) {
      console.error("Submission error:", err);
      setError(err.message || "Failed to add achiever");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4 max-w-xl mx-auto bg-black text-white rounded">
      <h2 className="text-xl font-bold">Add New Achiever</h2>
      {error && <div className="text-red-500">{error}</div>}

      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={form.name}
        className="border p-2 w-full text-white"
        required
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
        value={form.image}
        className="border p-2 w-full text-white"
      />
      <input
        type="text"
        name="result"
        placeholder="Result (e.g., 95%)"
        onChange={handleChange}
        value={form.result}
        className="border p-2 w-full text-white"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject (e.g., Math)"
        onChange={handleChange}
        value={form.subject}
        className="border p-2 w-full text-white"
      />
      <textarea
        name="description"
        placeholder="Description (optional)"
        onChange={handleChange}
        value={form.description}
        className="border p-2 w-full text-white resize-none h-24"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className={`px-4 py-2 rounded ${isSubmitting ? "bg-gray-400" : "bg-blue-600"} text-white`}
      >
        {isSubmitting ? "Adding..." : "Add Achiever"}
      </button>
    </form>
  );
}
