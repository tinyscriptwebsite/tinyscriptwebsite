import * as Yup from "yup";

export const homeContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot exceed 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\+?[1-9]\d{1,9}$/, "Invalid phone number format")
    .required("Phone number is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters long")
    .max(500, "Message cannot exceed 500 characters")
    .required("Message is required"),
});

export const careersSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot exceed 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const footerContactSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const addJobSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .required("Job title is required")
    .min(3, "Job title must be at least 3 characters long"),
  description: Yup.string().trim().required("Job description is required"),
  experience: Yup.string().required("Experience is required"),
  location: Yup.string().trim().required("Job location is required"),
  jobType: Yup.string()
    .required("Job type is required")
    .oneOf(
      ["Full-Time", "Part-Time", "Contract", "Internship", "Freelance"],
      "Invalid job type"
    ),
  category: Yup.string().trim().required("Job category is required"),
});
