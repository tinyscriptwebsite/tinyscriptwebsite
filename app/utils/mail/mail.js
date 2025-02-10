import nodemailer from "nodemailer";

// Create a Nodemailer transporter
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // GoDaddy's SMTP server
  port: 465, // Secure port for SMTP
  secure: true, // Use SSL
  auth: {
    user: process.env.EMAIL_USERNAME, // Your GoDaddy email user
    pass: process.env.EMAIL_PASSWORD, // Your GoDaddy email password
  },
  tls: {
    rejectUnauthorized: false, // This can be true in production
  },
});
