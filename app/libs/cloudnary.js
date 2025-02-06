import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadFileInCloudinary = async (file) => {
  // Convert file to buffer for Cloudinary upload
  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = file.name.replaceAll(" ", "_");

  // Upload to Cloudinary
  const uploadResponse = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { folder: "job_resumes", resource_type: "raw", public_id: filename },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      )
      .end(buffer);
  });

  return uploadResponse.secure_url;
};

export { uploadFileInCloudinary };
