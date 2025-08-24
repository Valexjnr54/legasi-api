import cloudinary from '../config/cloudinaryConfig';
import path from 'path';

// Function to upload an image to a specific folder and get the URL
export async function uploadImage(ImagePath : any, FolderPath: any) {
    try {
        const result = await cloudinary.uploader.upload(ImagePath, {
            folder: FolderPath, // Replace with your desired folder name
        });

        const imageUrl = result.secure_url;

        return imageUrl; // Return the URL if needed
    } catch (error) {
        console.error("Error uploading image:", error);
    }
}

export async function uploadVideo(videoPath: string, folderPath: string) {
    try {
        const result = await cloudinary.uploader.upload(videoPath, {
            resource_type: 'video',
            folder: folderPath,
        });

        const videoUrl = result.secure_url;
        return videoUrl;
    } catch (error) {
        console.error("Error uploading video:", error);
    }
}

// Function to upload a file (non-image/video) to a specific folder and get the URL
export async function uploadFile(filePath: string, folderPath: string) {
  try {
    const normalizedFolder = folderPath.replace(/^\/|\/$/g, '');
    const publicId = path.basename(filePath, path.extname(filePath));

    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: 'raw',
      folder: normalizedFolder,
      public_id: publicId,
      type: 'upload',
      access_mode: "public"
    });

    if (!result) throw new Error("Upload failed: No response from Cloudinary");

    console.log("Uploaded URL:", result.secure_url);
    return result.secure_url;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error; // Re-throw to handle in calling function
  }
}