"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import {
  FaMapMarker,
  FaPhone,
  FaAddressBook,
  FaFax,
  FaGlobe,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const notifysuccess = (props) => toast.success(props);
const notifyfailure = (props) => toast.error(props);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
        notifysuccess("Email sent successfully");
        // Reset form state or show success message to user
      } else {
        console.error("Failed to send email");
        notifyfailure("Failed to send email");
      }
      console.log(response);
    } catch (error) {
      console.error("Error sending email:", error);
      notifyfailure("server error");
    } finally {
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
    }
  };

  return (
    <div className="w-full mx-auto bg-slate-600 rounded-lg shadow-lg flex flex-col lg:flex-row lg:space-x-8 py-0 lg:py-0  my-[10rem] flex-2">
      <div className="w-full lg:w-1/2 px-8 lg:px-0 py-12 lg:items-center justify-center flex-1">
        <h2 className="text-3xl font-semibold mb-4 text-white text-center">
          Contact Form
        </h2>
        {/* <h1 className="text-4xl font-bold mb-8 text-gray-800">Get In Touch</h1> */}
        <form onSubmit={handleSubmit} className="px-6 text-black">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full py-3 px-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full py-3 px-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full py-3 px-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full py-3 px-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full py-3 px-4 text-black mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          ></textarea>
          <button
            type="submit"
            className="bg-[#1b7a87b0] text-white py-3 px-8 rounded-md transition duration-300 ease-in-out hover:bg-transparent hover:text-secondry border border-[#2FE6FF]"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="w-full lg:w-1/2 bg-[#2aa2b1b0] text-white rounded-lg p-8 flex flex-col justify-between flex-1">
        <div className="p-6">
          {/* <h4 className="text-xl font-semibold mb-4">Contact Us</h4> */}
          <h1 className="text-3xl font-bold mb-4">Mailing Address</h1>
          <p className="flex items-center mb-2 text-white">
            <p className="text-white">
              <span className="text-white mt-2 font-bold">
                Office Address :{" "}
              </span>
              Sanidhya Arcade And Bunglows Villa-13, Vastral, Ahmedabad,
              Gujarat 382418
              <br></br>
              <span className="text-white mt-2 font-bold">
                {" "}
                Registered Address:{" "}
              </span>{" "}
              118, Gajanan Industrial Hub-2, Opp. Ramvadi Bridge, GIDC Vatva,
              Ahmedabad, Gujarat, INDIA – 382445
            </p>
          </p>
          <p className="flex items-center mb-2 text-white">
            <FaPhone className="mr-2" />
            +91 7490935158/6352063734
          </p>
          <p className="flex items-center mb-2 text-white">
            <FaAddressBook className="mr-2" />
            contact@tinyscript.in
          </p>

          <p className="flex items-center mb-2 text-white">
            <FaGlobe className="mr-2" />
            www.tinyscript.in
          </p>
        </div>
        <div className="flex justify-center"></div>
      </div>
    </div>
  );
};

export default ContactForm;
