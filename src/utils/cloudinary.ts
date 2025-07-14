import cloudinary from '../config/cloudinaryConfig';

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
        const result = await cloudinary.uploader.upload(filePath, {
            resource_type: 'raw', // for non-media files
            folder: folderPath,
        });

        const fileUrl = result.secure_url;
        return fileUrl;
    } catch (error) {
        console.error("Error uploading file:", error);
    }
}