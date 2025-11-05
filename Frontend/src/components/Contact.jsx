import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! ✅");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-6 md:px-20">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded-lg text-white font-semibold transition-all duration-300"
      >
        ← Back
      </button>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 text-gradient bg-clip-text text-transparent bg-pink-500">
          Contact Us
        </h1>
        <p className="text-gray-300 mb-8">
          Have questions or feedback? We'd love to hear from you! Fill out the form below and we will get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-4 rounded-xl bg-gray-800 text-white outline-none focus:ring-2 focus:ring-pink-500 transition-all"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-4 rounded-xl bg-gray-800 text-white outline-none focus:ring-2 focus:ring-pink-500 transition-all"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="6"
            className="p-4 rounded-xl bg-gray-800 text-white outline-none focus:ring-2 focus:ring-pink-500 transition-all"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold py-3 px-6 rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
