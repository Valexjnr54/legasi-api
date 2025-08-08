"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allDataEntry = allDataEntry;
exports.singleDataEntry = singleDataEntry;
exports.deleteDataEntry = deleteDataEntry;
const models_1 = require("../../models");
const prisma = new models_1.PrismaClient();
async function allDataEntry(request, response) {
    const admin_id = request.user.adminId;
    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_project = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_project?.role;
        // Check if the role is not 'User'
        if (role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const allDatas = await prisma.data_entry.findMany({
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
                project: {
                    include: { project_manager: true }
                },
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
    const admin_id = request.user.adminId;
    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_project = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_project?.role;
        // Check if the role is not 'User'
        if (role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const singleData = await prisma.data_entry.findUnique({
            where: {
                id: id
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
    const id = parseInt(request.query.project_id, 10);
    const admin_id = request.user.adminId;
    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_project = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_project?.role;
        // Check if the role is not 'User'
        if (role !== 'super_admin') {
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
