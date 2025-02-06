"use client";

import React, { useState } from "react";
import Cookies from "universal-cookie";

const PortfolioForm = ({ addNewPromise }) => {
  const [formData, setFormData] = useState({
    image: "https://drive.google.com/uc?id=",
    title: "",
    href: "",
    description: "",
  });

  const cookies = new Cookies();
  const token = cookies.get("token");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewPromise(formData);
    setFormData({
      image: "",
      title: "",
      href: "",
      description: "",
    });
  };

  return token ? (
    <div className="portfolio-form w-full max-w-md bg-white shadow-md rounded-md overflow-hidden ">
      <h2 className="text-lg font-semibold text-gray-800 p-4 border-b border-gray-200">
        Add New Portfolio Item
      </h2>
      <form onSubmit={handleSubmit} className="p-4 text-black">
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL:(paste the id only)
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="href"
            className="block text-sm font-medium text-gray-700"
          >
            Href:
          </label>
          <input
            type="text"
            id="href"
            name="href"
            value={formData.href}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add
        </button>
      </form>
    </div>
  ) : null;
};

export default PortfolioForm;
