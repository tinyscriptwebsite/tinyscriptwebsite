import { NextResponse } from "next/server";
import { transporter } from "@/app/utils/mail/mail";
import JobModel from "@/model/Job";
import { Types } from "mongoose";
import { uploadFileInCloudinary } from "@/app/libs/cloudnary";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const jobId = formData.get("jobId");
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const file = formData.get("resume");

    if (!jobId || !name || !email || !phone || !file) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!Types.ObjectId.isValid(jobId)) {
      return NextResponse.json({ error: "Invalid Job ID format" });
    }

    const objectId = new Types.ObjectId(jobId);
    console.log("Object ID:", objectId);
    if (!file) {
      return NextResponse.json(
        { error: "No files received." },
        { status: 400 }
      );
    }
    const resumeUrl = await uploadFileInCloudinary(file);
    const filename = file.name.replaceAll(" ", "_");

    console.log("Resume URL:", resumeUrl);
    console.log("Filename:", filename);

    const findJob = await JobModel.findById(objectId);
    if (!findJob) {
      return NextResponse.json({ error: "Job not found" });
    }

    const { title } = findJob;
    const mailOptions = {
      from: process.env.USER_ID,
      to: [
        "contact@tinyscript.in",
        "akash.patel@tinyscript.in",
        "sagar.patel@tinyscript.in",
        "ravi.chaudhari@tinyscript.in",
        "akkupatel2392@gmail.com",
      ],
      subject: "Job Application",
      html: `<html>
      <body>
        <p>Hi TinyScript Soft Tech,</p>
        <p>New Application for the <strong>${title}</strong> position at your company.</p>
        <p>They have the following details:</p>
        <br>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <br><br>
        <p>Please review the attached resume and get back to them as soon as possible.</p>
        <br>
      </body>
    </html>`,
      attachments: [
        {
          filename: filename, // Name of the attachment
          path: resumeUrl, // Path to the file
        },
      ],
    };

    const mailOptions1 = {
      from: process.env.USER_ID,
      to: email,
      subject: "Job Application",
      html: `<html>
      <body>
        <p>Hi ${name},</p>
        <p>Thank you for your interest in the <strong>${title}</strong> position at TinyScript Soft Tech. We have received your application and will review it shortly.</p>
        <p>If your qualifications match our needs, we will contact you for the next steps.</p>
        <p>Thank you for your time and effort in applying to our company. We will get back to you soon.</p>
        <br>
        <p><strong>Regards,</strong></p>
        <p>TinyScript Soft Tech</p>
      </body>
    </html>`,
    };

    const [mailOptionsInfo, mailOptions1Info] = await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(mailOptions1),
    ]);

    console.log("mailOptionsInfo", mailOptionsInfo);
    console.log("mailOptions1Info", mailOptions1Info);

    return NextResponse.json({
      success: true,
      message: "Mail sent successfully",
    });
  } catch (error) {
    console.error("Error details:", error);
    return NextResponse.json({ error: "Internal server error" });
  }
}
