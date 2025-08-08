"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboard = dashboard;
const models_1 = require("../../models");
const prisma = new models_1.PrismaClient();
async function dashboard(request, response) {
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
        const data_entry_count = await prisma.data_entry.count({
            where: {
                project: {
                    project_manager_id,
                },
            },
        });
        const project_count = await prisma.project.count({
            where: { project_manager_id },
        });
        const recent_data_entry = await prisma.data_entry.findMany({
            where: {
                project: {
                    project_manager_id,
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
            take: 5,
            include: {
                project: true, // Include project details
            },
        });
        return response.status(200).json({ message: 'Project(s) fetched', data: { project_count, data_entry_count, recent_data_entry } });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
