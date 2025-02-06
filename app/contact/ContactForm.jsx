"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    subject: "Select any service",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Enquiry sent successfully!");
        setFormData({
          name: "",
          email: "",
          companyName: "",
          subject: "Select a subject",
          message: "",
        });
      } else {
        toast.error("Failed to send enquiry.");
      }
    } catch (error) {
      console.error("Error sending Enquiry:", error);
      toast.error("Server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white w-full px-8 py-12 shadow-[0px_0px_15px_0px_rgba(16,184,219,0.2)] md:rounded-[2.5rem] md:mt-20 mt-10">
      <Toaster />
      <div className="mb-8">
        <h1 className="md:text-4xl text-2xl text-center text-black font-semibold mb-4">
          Contact Us
        </h1>
        <p className="text-center text-sm text-secondry">
          "Reach out to us for personalized assistance."
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="block text-black text-sm">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full p-2 border-[#4D869C] border rounded-md text-sm focus:outline-secondry"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block text-black text-sm">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-2 border-[#4D869C] border rounded-md text-sm focus:outline-secondry"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="company name" className="block text-black text-sm">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            className="mt-1 block w-full p-2 border-[#4D869C] border rounded-md text-sm focus:outline-secondry"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="block text-black text-sm">
            Services
          </label>
          <select
            id="subject"
            className="mt-1 block w-full p-2 border-[#4D869C] border rounded-md text-sm focus:outline-secondry text-gray-500"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option className="text-black">Select Any Service</option>
            <option className="text-black">UI/UX Design</option>
            <option className="text-black">Website Design & Development</option>
            <option className="text-black">Mobile App Development</option>
            <option className="text-black">E-commerce Development</option>
            <option className="text-black">Hire Full Stack Developer</option>
            <option className="text-black">Hire Dedicated Team</option>
            <option className="text-black">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-black text-sm">
            Message
          </label>
          <textarea
            id="message"
            className="mt-1 block w-full text-black p-2 border-[#4D869C] border rounded-md text-sm focus:outline-secondry"
            rows="3"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-2 flex items-center justify-center bg-white text-secondry hover:bg-secondry hover:text-white rounded-[1.5rem] border border-secondry duration-500"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
