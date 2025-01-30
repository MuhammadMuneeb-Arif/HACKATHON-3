"use client";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all required fields.");
      return;
    }
    setStatus("Message sent successfully!");
    console.log("Form Data:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (

    <div >
<Navbar />

   
    <div className="max-w-4xl mx-auto py-12 px-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
      <p className="text-gray-600 text-center mb-8">
        Have questions or feedback? Fill out the form below and we’ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1  gap-4">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-medium">Full Name*</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium">Email Address*</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label className="block text-gray-700 font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter the subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-gray-700 font-medium">Message*</label>
          <textarea
            name="message"
            placeholder="Write your message here..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition font-semibold"
        >
          Send Message
        </button>

        {/* Status Message */}
        {status && <p className="text-center mt-4 text-green-600">{status}</p>}
      </form>

      {/* Contact Details */}
      <div className="mt-10 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Other Ways to Contact Us</h2>
        <p className="text-gray-600 mt-2">Email: support@example.com</p>
        <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
        <p className="text-gray-600"> 21 New York Street<br />
              New York City<br />
              United States of America<br />
              432 34</p>
      </div>

      <div className="text-center mt-6">
        <a href="./home" className="text-blue-600 hover:underline">
          ← Back to Home
        </a>
      </div>
    </div>
    <Footer />
    </div>
  );
}
