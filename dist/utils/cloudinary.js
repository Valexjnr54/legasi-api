"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = uploadImage;
exports.uploadVideo = uploadVideo;
exports.uploadFile = uploadFile;
const cloudinaryConfig_1 = __importDefault(require("../config/cloudinaryConfig"));
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
        const result = await cloudinaryConfig_1.default.uploader.upload(filePath, {
            resource_type: 'raw', // for non-media files
            folder: folderPath,
        });
        const fileUrl = result.secure_url;
        return fileUrl;
    }
    catch (error) {
        console.error("Error uploading file:", error);
    }
}
