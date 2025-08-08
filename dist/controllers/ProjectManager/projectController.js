"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allProject = allProject;
exports.singleProject = singleProject;
const models_1 = require("../../models");
const prisma = new models_1.PrismaClient();
async function allProject(request, response) {
    const project_manager_id = request.user.id;
    // Check if user_id is not present or undefined
    if (!project_manager_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_admin = await prisma.project_manager.findUnique({ where: { id: project_manager_id } });
        const role = check_admin?.role;
        // Check if the role is not 'User'
        if (role !== 'project_manager') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const allProjects = await prisma.project.findMany({
            where: { project_manager_id },
            select: {
                id: true,
                project_name: true,
                project_manager_id: true,
                start_date: true,
                end_date: true,
                description: true,
                target_entry: true,
                project_manager: true,
                createdAt: true,
                updatedAt: true
            },
        });
        return response.status(200).json({ message: 'Project(s) fetched', data: allProjects });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function singleProject(request, response) {
    const id = parseInt(request.query.project_id, 10);
    const project_manager_id = request.user.id;
    // Check if user_id is not present or undefined
    if (!project_manager_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_admin = await prisma.project_manager.findUnique({ where: { id: project_manager_id } });
        const role = check_admin?.role;
        // Check if the role is not 'User'
        if (role !== 'project_manager') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const singleProject = await prisma.project.findUnique({
            where: {
                id: id,
                project_manager_id
            },
            select: {
                id: true,
                project_name: true,
                project_manager_id: true,
                start_date: true,
                end_date: true,
                description: true,
                target_entry: true,
                project_manager: true,
                data_entry: true,
                createdAt: true,
                updatedAt: true
            }
        });
        if (!singleProject) {
            return response.status(404).json({ message: 'No Project Found' });
        }
        return response.status(200).json({ message: 'Project fetched', data: singleProject });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
