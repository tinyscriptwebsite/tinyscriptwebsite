import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { addJobSchema } from "@/app/utils/validations/schema";
import { useLoader } from "@/app/context/Load";

const AddAndEditJobModal = ({ isEdit, job, fetchJobs, closeModal }) => {
  const { showLoader, hideLoader } = useLoader();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addJobSchema),
  });

  useEffect(() => {
    if (isEdit) {
      reset(job);
    }
  }, [isEdit, job, reset]);

  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      showLoader();
      isEdit
        ? await axios.put("/api/career", data, {
            params: { id: job._id },
          })
        : await axios.post("/api/career", data);
      fetchJobs();
      toast.success(`Job ${isEdit ? "updated" : "added"} successfully!`);
      reset();
      closeModal();
    } catch (error) {
      console.log(error);
      toast.error("Failed to submit the application.");
    } finally {
      hideLoader();
    }
  };
  return (
    <div className="fixed inset-0 bg-[#837e8480] bg-opacity-50 flex z-50 items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-md md:w-1/2 w-full h-[70vh] hide-scrollbar overflow-y-auto">
        <div className="flex items-center">
          <span className="inline-block size-2 bg-background rounded-full mr-4"></span>
          <h3 className="text-2xl font-bold text-background font-raleway">
            {isEdit ? "Edit" : "Add"} Job
          </h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          {/* Job Title */}
          <div className="w-full">
            <label htmlFor="title" className="text-background">
              Job Title
            </label>
            <input
              className="px-2 border-background border-2 w-full mt-1 py-2 rounded-lg text-black focus:outline-none"
              {...register("title")}
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Job Description */}
          <div className="w-full mt-3">
            <label htmlFor="description" className="text-background">
              Job Description
            </label>
            <textarea
              className="px-2 resize-none border-background border-2 w-full mt-1 py-2 rounded-lg text-black focus:outline-none"
              {...register("description")}
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Experience Field */}
          <div className="w-full mt-4">
            <label htmlFor="experience" className="text-background">
              Experience (Years)
            </label>
            <input
              type="number"
              className="px-2 border-background border-2 w-full mt-1 py-2 rounded-lg text-black focus:outline-none"
              {...register("experience")}
            />
            {errors.experience && (
              <p className="text-red-500 text-xs mt-1">
                {errors.experience.message}
              </p>
            )}
          </div>

          {/* Location */}
          <div className="w-full mt-4">
            <label htmlFor="location" className="text-background">
              Location
            </label>
            <input
              className="px-2 border-background border-2 w-full mt-1 py-2 rounded-lg text-black focus:outline-none"
              {...register("location")}
            />
            {errors.location && (
              <p className="text-red-500 text-xs mt-1">
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Job Type */}
          <div className="w-full mt-4">
            <label htmlFor="jobType" className="text-background">
              Job Type
            </label>
            <select
              className="px-2 border-background border-2 w-full mt-1 py-2 rounded-lg text-black focus:outline-none"
              {...register("jobType")}
            >
              <option value="">Select job type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
              <option value="Freelance">Freelance</option>
            </select>
            {errors.jobType && (
              <p className="text-red-500 text-xs mt-1">
                {errors.jobType.message}
              </p>
            )}
          </div>

          {/* Category */}
          <div className="w-full mt-4">
            <label htmlFor="category" className="text-background">
              Category
            </label>
            <input
              className="px-2 border-background border-2 w-full mt-1 py-2 rounded-lg text-black focus:outline-none"
              {...register("category")}
            />
            {errors.category && (
              <p className="text-red-500 text-xs mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end mt-8">
            <button
              type="button"
              className="text-background border-background transition-all hover:bg-background text-black hover:bg-black hover:text-white border-2 font-semibold px-4 py-2 rounded mr-2"
              onClick={() => closeModal()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-background border-2 text-black  hover:bg-black  transition-all hover:text-white hover:border-2 hover:border-background font-semibold px-4 py-2 rounded mr-2"
            >
              {isEdit ? "Update Job" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAndEditJobModal;
