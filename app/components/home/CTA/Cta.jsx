"use client";

import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

const Cta = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const toggleService = (service) => {
    if (services.includes(service)) {
      setServices(services.filter((s) => s !== service));
    } else {
      setServices([...services, service]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          services,
        }),
      });
      console.log(response);
      if (response.ok) {
        console.log("Email sent successfully!");
        toast.success("Email sent successfully");
        // Reset form state or show success message to user
      } else {
        console.error("Failed to send email");
        toast.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Server error");
    } finally {
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setServices([]);
    }
  };

  return (
    <div className="bg-[#28293E] flex flex-col w-full items-center gap-4 md:justify-between  py-16 px-[5%] pt-8">
      <Toaster />
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="loader"></div>
        </div>
      )}
      <div className="w-full text-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl mb-8">
          Let's Talk On Something <span className="text-[#4D869C]">Great</span>
          Together
        </h1>
        {/* <div className="flex items-center gap-2 my-6">
          <IoIosMail className="text-[#4D869C] h-8 w-8" />
          contact@tinyscript.in
        </div>
        <div className="flex items-center gap-2 my-6">
          <FaPhone className="text-[#4D869C] h-6 w-6 rotate-180" />
          +91 9904725163
        </div> */}
        {/* <div className="flex items-start gap-2 my-6">
          <FaLocationDot className="text-[#4D869C] h-8 w-8" />
          <div className="flex flex-col gap-4">
            <div>
              Office Address : Sanidhya Arcade And Bungalows Villa-213, Vastral,
              Ahmedabad, Gujarat 382418
            </div>
            <div>
              Registered Address: 118, Gajanan Industrial Hub-2, Opp. Ramvadi
              Bridge, GIDC Vatva, Ahmedabad, Gujarat, INDIA – 382445
            </div>
          </div>
        </div> */}
      </div>
      <div className="w-full max-w-[720px] bg-white p-4 rounded-lg">
        <h3 className="text-[#4D869C] font-bold my-3">I'm interested In:</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => toggleService("UX/UI design")}
            className={`text-[#4D869C] p-2 rounded-full border-2 border-gray-300 hover:bg-[#4D869C] hover:border-white hover:text-white ${
              services.includes("UX/UI design")
                ? "border-white bg-[#4D869C] text-white"
                : ""
            }`}
          >
            UX/UI design
          </button>
          <button
            onClick={() => toggleService("Web Design")}
            className={`text-[#4D869C] p-2 rounded-full border-2 border-gray-300 hover:bg-[#4D869C] hover:border-white hover:text-white ${
              services.includes("Web Design")
                ? "border-white bg-[#4D869C] text-white"
                : ""
            }`}
          >
            Web Design
          </button>
          <button
            onClick={() => toggleService("Web Development")}
            className={`text-[#4D869C] p-2 rounded-full border-2 border-gray-300 hover:bg-[#4D869C] hover:border-white hover:text-white ${
              services.includes("Web Development")
                ? "border-white bg-[#4D869C] text-white"
                : ""
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => toggleService("App Development")}
            className={`text-[#4D869C] p-2 rounded-full border-2 border-gray-300 hover:bg-[#4D869C] hover:border-white hover:text-white ${
              services.includes("App Development")
                ? "border-white bg-[#4D869C] text-white"
                : ""
            }`}
          >
            App Development
          </button>
          <button
            onClick={() => toggleService("Software Development")}
            className={`text-[#4D869C] p-2 rounded-full border-2 border-gray-300 hover:bg-[#4D869C] hover:border-white hover:text-white ${
              services.includes("Software Development")
                ? "border-white bg-[#4D869C] text-white"
                : ""
            }`}
          >
            Software Development
          </button>
          <button
            onClick={() => toggleService("Shopify")}
            className={`text-[#4D869C] p-2 rounded-full border-2 border-gray-300 hover:bg-[#4D869C] hover:border-white hover:text-white ${
              services.includes("Shopify")
                ? "border-white bg-[#4D869C] text-white"
                : ""
            }`}
          >
            Shopify
          </button>
          <button
            onClick={() => toggleService("Other")}
            className={`text-[#4D869C] p-2 rounded-full border-2 border-gray-300 hover:bg-[#4D869C] hover:border-white hover:text-white ${
              services.includes("Other")
                ? "border-white bg-[#4D869C] text-white"
                : ""
            }`}
          >
            Other
          </button>
        </div>
        <div className="mt-6">
          <label htmlFor="name" className="text-[#4D869C] mb-1 block">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="border-b w-full text-black border-[#4D869C] outline-none py-1 px-2 mb-4"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mt-6">
          <label htmlFor="email" className="text-[#4D869C] mb-1 block">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="border-b w-full text-black border-[#4D869C] outline-none py-1 px-2 mb-4"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="mt-6">
          <label htmlFor="message" className="text-[#4D869C] mb-1 block">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Message"
            className="border-b text-black w-full border-[#4D869C] outline-none py-1 px-2 mb-4"
            rows="4"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-[#4D869C] text-white py-2 px-4 rounded-md hover:bg-[#508499c4]"
        >
          Submit
        </button>
      </div>
      <style jsx>{`
        .loader {
          border: 16px solid #f3f3f3;
          border-radius: 50%;
          border-top: 16px solid #3498db;
          width: 120px;
          height: 120px;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Cta;
