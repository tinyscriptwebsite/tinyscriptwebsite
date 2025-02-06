import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoader } from "@/app/context/Load";
import applyImage from "../../assets/newfigma/Career/Apply For Job Image.svg";
import toast from "react-hot-toast";
import * as yup from "yup";
import { FaXmark } from "react-icons/fa6";
import Image from "next/image";

const ApplicationModal = ({ job, closeModal }) => {
  const [fileName, setFileName] = useState("");
  const { showLoader, hideLoader } = useLoader();
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be less than 50 characters"),

    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"),

    phone: yup
      .string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"), // Adjust regex based on your phone number format

    resume: yup
      .mixed()
      .required("Resume is required")
      .test("fileSize", "File size is too large", (value) => {
        if (!value) return true; // If no file is provided, skip this test
        return value.size <= 5 * 1024 * 1024; // 5MB limit
      })
      .test("fileType", "Unsupported file format", (value) => {
        if (!value) return true; // If no file is provided, skip this test
        return [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(value.type);
      }),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setValue("resume", file);
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("jobId", job._id);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    if (data.resume) {
      formData.append("resume", data.resume);
    }
    try {
      showLoader();
      await axios.post("/api/career/job", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Application submitted successfully!");
      closeModal();
    } catch (error) {
      toast.error("Failed to submit the application.");
      console.error("Error submitting form:", error);
      closeModal();
    } finally {
      hideLoader();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white p-8 rounded-2xl shadow-md flex justify-between items-center w-fit max-h-[80%] overflow-y-scroll mt-20 no-scrollbar">
        <button onClick={closeModal} className="absolute top-4 right-4">
          <FaXmark />
        </button>
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-4 text-secondry">
            <span className="size-1 rounded-full bg-secondry inline-block"></span>{" "}
            Apply for {job.title}
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name")}
                className="w-full px-3 py-2 border rounded border-black"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email")}
                className="w-full px-3 py-2 border rounded border-black"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block">
                Phone<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phone"
                {...register("phone")}
                className="w-full px-3 py-2 border rounded border-black"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block">
                Resume<span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="resume"
                id="resume"
                onChange={handleFileChange}
                className="hidden"
              />

              <label
                htmlFor="resume"
                className="block h-11 w-full border-black border rounded relative cursor-pointer overflow-hidden"
              >
                <span className="bg-black px-3 py-2 text-white absolute h-full leading-8">
                  {fileName || "Choose File"}
                </span>
              </label>

              {errors.resume && (
                <span className="text-red-500 text-sm">
                  {errors.resume.message}
                </span>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="relative border-secondry border text-secondry backdrop-blur-custom md:px-10 px-6 py-2 rounded-full font-bold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/2 md:block hidden">
          <Image className="w-4/5 mx-auto" src={applyImage} alt="applyImage" />
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;
