"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = uploadImage;
exports.uploadVideo = uploadVideo;
exports.uploadFile = uploadFile;
const cloudinaryConfig_1 = __importDefault(require("../config/cloudinaryConfig"));
const path_1 = __importDefault(require("path"));
// Function to upload an image to a specific folder and get the URL
async function uploadImage(ImagePath, FolderPath) {
    try {
        const result = await cloudinaryConfig_1.default.uploader.upload(ImagePath, {
            folder: FolderPath, // Replace with your desired folder name
        });
        const imageUrl = result.secure_url;
        return imageUrl; // Return the URL if needed
    }
    catch (error) {
        console.error("Error uploading image:", error);
    }
}
async function uploadVideo(videoPath, folderPath) {
    try {
        const result = await cloudinaryConfig_1.default.uploader.upload(videoPath, {
            resource_type: 'video',
            folder: folderPath,
        });
        const videoUrl = result.secure_url;
        return videoUrl;
    }
    catch (error) {
        console.error("Error uploading video:", error);
    }
}
// Function to upload a file (non-image/video) to a specific folder and get the URL
async function uploadFile(filePath, folderPath) {
    try {
        const normalizedFolder = folderPath.replace(/^\/|\/$/g, '');
        const publicId = path_1.default.basename(filePath, path_1.default.extname(filePath));
        const result = await cloudinaryConfig_1.default.uploader.upload(filePath, {
            resource_type: 'raw',
            folder: normalizedFolder,
            public_id: publicId,
            type: 'upload',
            access_mode: "public"
        });
        if (!result)
            throw new Error("Upload failed: No response from Cloudinary");
        console.log("Uploaded URL:", result.secure_url);
        return result.secure_url;
    }
    catch (error) {
        console.error("Error uploading file:", error);
        throw error; // Re-throw to handle in calling function
    }
}
