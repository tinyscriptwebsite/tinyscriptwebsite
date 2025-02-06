import { transporter } from "../../utils/mail/mail";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    // Validate inputs
    if (!name || !email) {
      return NextResponse.json(
        { status: 400, message: "Name and email are required" },
        { status: 400 }
      );
    }

    // Configure the email message to the user
    const userMailOptions = {
      from: process.env.USER_ID,
      to: email,
      subject: "Thank you for contacting us!",
      html: `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Hi ${name},</h2>
        <p>Thank you for showing interest in us. We will get back to you soon!</p>
        <br>
        <p>Best regards,</p>
        <p>TinyScript Soft Tech</p>
      </body>
    </html>
  `,
    };

    // Configure the email message to the company
    const companyMailOptions = {
      from: process.env.USER_ID,
      to: "info@wisaxis.com", // Replace with your company's email address
      subject: "New contact form submission",
      html: `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br>
        <p>Best regards,</p>
        <p>Your Team</p>
      </body>
    </html>
  `,
    };

    // Send the emails
    const [userEmailInfo, companyEmailInfo] = await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(companyMailOptions),
    ]);

    console.log("User email sent: ", userEmailInfo.messageId);
    console.log("Company email sent: ", companyEmailInfo.messageId);

    return NextResponse.json({
      message: "Emails sent successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error in About route post method:", error);
    return NextResponse.json({ error: "Internal server error" });
  }
}
