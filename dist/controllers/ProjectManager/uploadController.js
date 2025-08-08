"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageUpload = imageUpload;
exports.videoUpload = videoUpload;
exports.documentUpload = documentUpload;
const models_1 = require("../../models");
const cloudinary_1 = require("../../utils/cloudinary");
const fs_1 = __importDefault(require("fs"));
const prisma = new models_1.PrismaClient();
async function imageUpload(request, response) {
    const project_manager_id = request.user?.id;
    if (!project_manager_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        if (!request.file) {
            return response.status(400).json({ message: 'Package Image is required' });
        }
        const image_path = request.file.path;
        // Upload image to Cloudinary
        const uploadedImageUrl = await (0, cloudinary_1.uploadImage)(image_path, 'legasi/images/data_images/');
        // Delete the local file after uploading
        fs_1.default.unlink(image_path, (err) => {
            if (err) {
                console.error(`Error deleting file: ${image_path}`, err);
            }
        });
        if (uploadedImageUrl) {
            return response.status(200).json({
                message: 'Image uploaded successfully',
                image_url: uploadedImageUrl,
            });
        }
        else {
            return response.status(500).json({ message: 'Failed to upload image' });
        }
    }
    catch (error) {
        console.error('Image upload error:', error);
        return response.status(500).json({ message: 'Server error', error });
    }
}
async function videoUpload(request, response) {
    const project_manager_id = request.user?.id;
    if (!project_manager_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        if (!request.file) {
            return response.status(400).json({ message: 'Package Image is required' });
        }
        const video_path = request.file.path;
        // Upload image to Cloudinary
        const uploadedImageUrl = await (0, cloudinary_1.uploadVideo)(video_path, 'legasi/videos/data_videos/');
        // Delete the local file after uploading
        fs_1.default.unlink(video_path, (err) => {
            if (err) {
                console.error(`Error deleting file: ${video_path}`, err);
            }
        });
        if (uploadedImageUrl) {
            return response.status(200).json({
                message: 'Image uploaded successfully',
                video_url: uploadedImageUrl,
            });
        }
        else {
            return response.status(500).json({ message: 'Failed to upload image' });
        }
    }
    catch (error) {
        console.error('Image upload error:', error);
        return response.status(500).json({ message: 'Server error', error });
    }
}
async function documentUpload(request, response) {
    const project_manager_id = request.user?.id;
    if (!project_manager_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        if (!request.file) {
            return response.status(400).json({ message: 'Package Image is required' });
        }
        const file_path = request.file.path;
        // Upload image to Cloudinary
        const uploadedImageUrl = await (0, cloudinary_1.uploadFile)(file_path, 'legasi/documents/data_documents/');
        // Delete the local file after uploading
        fs_1.default.unlink(file_path, (err) => {
            if (err) {
                console.error(`Error deleting file: ${file_path}`, err);
            }
        });
        if (uploadedImageUrl) {
            return response.status(200).json({
                message: 'Image uploaded successfully',
                document_url: uploadedImageUrl,
            });
        }
        else {
            return response.status(500).json({ message: 'Failed to upload image' });
        }
    }
    catch (error) {
        console.error('Image upload error:', error);
        return response.status(500).json({ message: 'Server error', error });
    }
}
