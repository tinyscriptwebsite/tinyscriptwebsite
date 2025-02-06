import { NextResponse } from "next/server";
import { transporter } from "../../utils/mail/mail";

// route for CTA Mail
export async function POST(request) {
  try {
    const body = await request.json();

    if (body.isSubscribe) {
      // Configure the email message to the user
      const userMailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: body.email,
        subject: "Thank you for subscribing to our newsletter!",
        text: `
        Hi Dear,

        Thank you for subscribing to our newsletter!
        `,
      };

      // Configure the email message to the company
      const companyMailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: "info@wisaxis.com", // Replace with your company's email address
        subject: "New newsletter subscription",
        text: `
        You have a new newsletter subscription:
        
        Email: ${body.email}
        `,
      };

      const [userEmailInfo, companyEmailInfo] = await Promise.all([
        transporter.sendMail(userMailOptions),
        transporter.sendMail(companyMailOptions),
      ]);

      console.log(userEmailInfo);
      console.log(companyEmailInfo);

      return NextResponse.json({
        status: 200,
        success: true,
        message: "Thank you for subscribing to our newsletter!",
      });

      // Send the emails without await so that user can not wait
    } else {
      // Configure the email message to the user
      const userMailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: body.email,
        subject: "Thank you for contacting us!",
        html: `
            <html>
              <body style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2>Hi ${body.name},</h2>
                <p>Thank you for contacting us. We will get back to you soon!</p>
                <p><strong>Company Name:</strong> ${body.companyName}</p>
                <p><strong>Your Message:</strong> ${body.message}</p>
                <p><strong>Your Subject:</strong> ${body.subject}</p> 
                <br>
                <p>Best regards,</p>
                <p>TinyScript Soft Tech</p>
              </body>
            </html>`,
      };
      // Configure the email message to the company
      const companyMailOptions = {
        from: process.env.EMAIL_USERNAME,
        // to: "besharamcode@gmail.com", // Replace with your company's email address
        to: [
          "contact@tinyscript.in",
          "akash.patel@tinyscript.in",
          "sagar.patel@tinyscript.in",
          "ravi.chaudhari@tinyscript.in",
          "akkupatel2392@gmail.com",
        ], // Replace with your company's email address
        subject: "New contact form submission",
        html: `
              <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.6;">
                  <h2>New Contact Form Submission</h2>
                  <p><strong>Name:</strong> ${body.name}</p>
                  <p><strong>Company Name:</strong> ${body.name}</p>
                  <p><strong>Email:</strong> ${body.email}</p>
                  <p><strong>Subject:</strong> ${body.subject}</p> 
                  <p><strong>Message:</strong> ${body.message}</p>
                  <br>
                  <p>Best regards,</p>
                  <p>Your Team</p>
                </body>
              </html>`,
      };

      // Send the emails without await so that user can not wait
      const [userEmailInfo, companyEmailInfo] = await Promise.all([
        transporter.sendMail(userMailOptions),
        transporter.sendMail(companyMailOptions),
      ]);

      console.log(userEmailInfo);
      console.log(companyEmailInfo);

      return NextResponse.json({
        message: "Thank you for your message! We will get back to you soon.",
        success: true,
      });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Internal server error" });
  }
}
