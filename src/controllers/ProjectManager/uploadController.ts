import { Request, Response } from 'express';
import { PrismaClient } from '../../models';
import { uploadFile, uploadImage, uploadVideo } from '../../utils/cloudinary';
import fs from 'fs';

const prisma = new PrismaClient();

export async function imageUpload(request: Request, response: Response) {
    const project_manager_id = request.user?.projectId;

    if (!project_manager_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    try {
        if (!request.file) {
            return response.status(400).json({ message: 'Package Image is required' });
        }

        const image_path = request.file.path;

        // Upload image to Cloudinary
        const uploadedImageUrl = await uploadImage(image_path, 'legasi/images/data_images/');

        // Delete the local file after uploading
        fs.unlink(image_path, (err) => {
            if (err) {
                console.error(`Error deleting file: ${image_path}`, err);
            }
        });

        if (uploadedImageUrl) {
            return response.status(200).json({
                message: 'Image uploaded successfully',
                image_url: uploadedImageUrl,
            });
        } else {
            return response.status(500).json({ message: 'Failed to upload image' });
        }
    } catch (error) {
        console.error('Image upload error:', error);
        return response.status(500).json({ message: 'Server error', error });
    }
}

export async function videoUpload(request: Request, response: Response) {
    const project_manager_id = request.user?.projectId;

    if (!project_manager_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    try {
        if (!request.file) {
            return response.status(400).json({ message: 'Package Image is required' });
        }

        const video_path = request.file.path;

        // Upload image to Cloudinary
        const uploadedImageUrl = await uploadVideo(video_path, 'legasi/videos/data_videos/');

        // Delete the local file after uploading
        fs.unlink(video_path, (err) => {
            if (err) {
                console.error(`Error deleting file: ${video_path}`, err);
            }
        });

        if (uploadedImageUrl) {
            return response.status(200).json({
                message: 'Image uploaded successfully',
                image_url: uploadedImageUrl,
            });
        } else {
            return response.status(500).json({ message: 'Failed to upload image' });
        }
    } catch (error) {
        console.error('Image upload error:', error);
        return response.status(500).json({ message: 'Server error', error });
    }
}

export async function documentUpload(request: Request, response: Response) {
    const project_manager_id = request.user?.projectId;

    if (!project_manager_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    try {
        if (!request.file) {
            return response.status(400).json({ message: 'Package Image is required' });
        }

        const file_path = request.file.path;

        // Upload image to Cloudinary
        const uploadedImageUrl = await uploadFile(file_path, 'legasi/documents/data_documents/');

        // Delete the local file after uploading
        fs.unlink(file_path, (err) => {
            if (err) {
                console.error(`Error deleting file: ${file_path}`, err);
            }
        });

        if (uploadedImageUrl) {
            return response.status(200).json({
                message: 'Image uploaded successfully',
                image_url: uploadedImageUrl,
            });
        } else {
            return response.status(500).json({ message: 'Failed to upload image' });
        }
    } catch (error) {
        console.error('Image upload error:', error);
        return response.status(500).json({ message: 'Server error', error });
    }
}