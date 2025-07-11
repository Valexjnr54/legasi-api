import cloudinary from '../config/cloudinaryConfig';

// Function to upload an image to a specific folder and get the URL
async function uploadImage(ImagePath : any, FolderPath: any) {
    try {
        const result = await cloudinary.uploader.upload(ImagePath, {
            folder: FolderPath, // Replace with your desired folder name
        });

        const imageUrl = result.secure_url;
        // console.log("Image URL:", imageUrl);

        // Save imageUrl to your database here
        // You should use a database library or framework to save the URL to your database

        return imageUrl; // Return the URL if needed
    } catch (error) {
        console.error("Error uploading image:", error);
    }
}

export default uploadImage;