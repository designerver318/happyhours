"use client"; // Required for form handling

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here (e.g., API call)
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="bg-gradient-to-b to-white from-[#2d1a6b60] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl lg:text-4xl text-center mbl uppercase text-[#2d1a6b] mb-10">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Contact Details & Map */}
          <div className="bg-white p-6 rounded-tl-3xl rounded-br-3xl shadow-md">
            <h2 className="text-2xl mb uppercase text-[#b12f3e] mb-5">Get in Touch</h2>
            <div className="space-y-4">
              <Link
                href="tel:+919999999999"
                className="flex justify-start items-center gap-3 hover:bg-gray-50 p-2 rounded transition-colors"
              >
                <h3 className="text-lg font-medium text-gray-800">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="20" width="20">
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                  </svg>
                </h3>
                <p className="text-black mm hover:text-[#b12f3e] transition-colors">
                  +91 9999999999
                </p>
              </Link>

              <Link
                href="https://maps.google.com?q=123+School+Street,+Education+City,+EC+12345"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-start items-center gap-3 hover:bg-gray-50 p-2 rounded transition-colors"
              >
                <h3 className="text-lg font-medium text-gray-800">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                  </svg>
                </h3>
                <p className="text-black mm hover:text-[#b12f3e] transition-colors">
                  Nimbahera Road, Raila (Banera)
                </p>
              </Link>
              <div>
                <div className="mt-2 aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14388.085763315104!2d74.6230352!3d25.6374139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3969202ba3a9b53b%3A0x601733d694f1cd5c!2sHappy%20Hours%20School!5e0!3m2!1sen!2sin!4v1749207443578!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Enquiry Form */}
          <div className="bg-white p-6 rounded-tl-3xl rounded-br-3xl shadow-md">
            <h2 className="text-2xl mb uppercase text-[#b12f3e] mb-5">Enquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-tl-2xl rounded-br-2xl shadow-sm focus:outline-none focus:ring-[#b12f3e] focus:border-[#b12f3e]"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-tl-2xl rounded-br-2xl shadow-sm focus:outline-none focus:ring-[#b12f3e] focus:border-[#b12f3e]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email (Optional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-tl-2xl rounded-br-2xl shadow-sm focus:outline-none focus:ring-[#b12f3e] focus:border-[#b12f3e]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-tl-2xl rounded-br-2xl shadow-sm focus:outline-none focus:ring-[#b12f3e] focus:border-[#b12f3e]"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#2d1a6b] text-white py-2 px-4 rounded-tl-2xl rounded-br-2xl transition-all duration-200 cursor-pointer hover:bg-[#1f104e] focus:outline-none "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}