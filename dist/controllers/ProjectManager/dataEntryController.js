"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDataEntry = createDataEntry;
exports.updateDataEntry = updateDataEntry;
exports.allDataEntry = allDataEntry;
exports.singleDataEntry = singleDataEntry;
exports.deleteDataEntry = deleteDataEntry;
const models_1 = require("../../models");
const express_validator_1 = require("express-validator");
const emailSender_1 = require("../../utils/emailSender");
const prisma = new models_1.PrismaClient();
async function createDataEntry(request, response) {
    const { project_id, date, location, description, image_url, video_url, document_url, metadata } = request.body;
    const project_manager_id = request.user.id;
    // Check if user_id is not present or undefined
    if (!project_manager_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const project_manager = await prisma.project_manager.findUnique({ where: { id: project_manager_id } });
        if (!project_manager) {
            return response.status(400).json({ message: 'Project manager not found' });
        }
        const role = project_manager?.role;
        // Check if the role is not 'User'
        if (role !== 'project_manager') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        // Validation rules
        const validationRules = [
            (0, express_validator_1.body)('project_id').notEmpty().withMessage('Project ID is required'),
            (0, express_validator_1.body)('location').notEmpty().withMessage('Location is required'),
            (0, express_validator_1.body)('date').notEmpty().withMessage('Activity date is required').isISO8601().withMessage('Activity date must be a valid date'),
            (0, express_validator_1.body)('description').notEmpty().withMessage('Activity Description is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map((rule) => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const addData = await prisma.data_entry.create({
            data: {
                project_id,
                location,
                date: new Date(date),
                image_url,
                video_url,
                document_url,
                description,
                metadata
            },
            select: {
                id: true,
                project_id: true,
                date: true,
                location: true,
                description: true,
                image_url: true,
                video_url: true,
                document_url: true,
                metadata: true,
                project: true,
                createdAt: true,
                updatedAt: true
            }
        });
        await (0, emailSender_1.sendSubmitTaskEmail)('info@legasi.org', 'Data Entry Submitted', project_manager, addData);
        return response.status(200).json({ message: 'Data has been entered', data: addData });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
async function updateDataEntry(request, response) {
    const { project_id, date, location, description, image_url, video_url, document_url, metadata } = request.body;
    const project_manager_id = request.user.id;
    const id = parseInt(request.query.data_entry_id, 10);
    // Check if user_id is not present or undefined
    if (!project_manager_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_project = await prisma.project_manager.findUnique({ where: { id: project_manager_id } });
        const role = check_project?.role;
        // Check if the role is not 'User'
        if (role !== 'project_manager') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        // Validation rules
        const validationRules = [
            (0, express_validator_1.body)('project_id').notEmpty().withMessage('Project ID is required'),
            (0, express_validator_1.body)('location').notEmpty().withMessage('Location is required'),
            (0, express_validator_1.body)('date').notEmpty().withMessage('Activity date is required').isISO8601().withMessage('Activity date must be a valid date'),
            (0, express_validator_1.body)('description').notEmpty().withMessage('Activity Description is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map((rule) => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const updateData = await prisma.data_entry.update({
            where: {
                id
            },
            data: {
                project_id,
                location,
                date,
                image_url,
                video_url,
                document_url,
                description,
                metadata
            },
            select: {
                id: true,
                project_id: true,
                date: true,
                location: true,
                description: true,
                image_url: true,
                video_url: true,
                document_url: true,
                metadata: true,
                project: true,
                createdAt: true,
                updatedAt: true
            }
        });
        if (!updateData) {
            return response.status(403).json({ message: 'Unable to update Data' });
        }
        return response.status(200).json({ message: 'Project updated', data: updateData });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function allDataEntry(request, response) {
    const project_manager_id = request.user.id;
    // Check if user_id is not present or undefined
    if (!project_manager_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_project = await prisma.project_manager.findUnique({ where: { id: project_manager_id } });
        const role = check_project?.role;
        // Check if the role is not 'User'
        if (role !== 'project_manager') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const allDatas = await prisma.data_entry.findMany({
            where: {
                project: {
                    project_manager_id: project_manager_id // replace with the actual project manager ID you want to filter by
                }
            },
            select: {
                id: true,
                project_id: true,
                date: true,
                location: true,
                description: true,
                image_url: true,
                video_url: true,
                document_url: true,
                metadata: true,
                project: true,
                createdAt: true,
                updatedAt: true
            }
        });
        if (allDatas.length <= 0) {
            return response.status(200).json({ message: 'No Data Entry(s) Found', data: allDatas });
        }
        return response.status(200).json({ message: 'Data Entry(s) fetched', data: allDatas });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function singleDataEntry(request, response) {
    const id = parseInt(request.query.data_entry_id, 10);
    const project_manager_id = request.user.id;
    // Check if user_id is not present or undefined
    if (!project_manager_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_project = await prisma.project_manager.findUnique({ where: { id: project_manager_id } });
        const role = check_project?.role;
        // Check if the role is not 'User'
        if (role !== 'project_manager') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const singleData = await prisma.data_entry.findUnique({
            where: {
                id: id,
                project: {
                    project_manager_id: project_manager_id // replace with the actual project manager ID you want to filter by
                }
            },
            select: {
                id: true,
                project_id: true,
                date: true,
                location: true,
                description: true,
                image_url: true,
                video_url: true,
                document_url: true,
                metadata: true,
                project: true,
                createdAt: true,
                updatedAt: true
            }
        });
        if (!singleData) {
            return response.status(404).json({ message: 'No Data Entry Found' });
        }
        return response.status(200).json({ message: 'Project fetched', data: singleData });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function deleteDataEntry(request, response) {
    const id = parseInt(request.query.data_entry_id, 10);
    const project_manager_id = request.user.id;
    // Check if user_id is not present or undefined
    if (!project_manager_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_project = await prisma.project_manager.findUnique({ where: { id: project_manager_id } });
        const role = check_project?.role;
        // Check if the role is not 'User'
        if (role !== 'project_manager') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        // Create a new delivery entry in the database
        const deleteData = await prisma.data_entry.delete({
            where: {
                id
            },
        });
        if (!deleteData) {
            return response.status(403).json({ message: 'Unable to delete Project' });
        }
        return response.status(200).json({ message: 'Project was deleted successfully' });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
