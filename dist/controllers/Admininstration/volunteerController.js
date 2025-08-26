"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allVolunteers = allVolunteers;
exports.singleVolunteer = singleVolunteer;
exports.deleteVolunteer = deleteVolunteer;
exports.approveVolunteer = approveVolunteer;
exports.getApprovedVolunteers = getApprovedVolunteers;
exports.getPendingVolunteers = getPendingVolunteers;
const models_1 = require("../../models");
const prisma = new models_1.PrismaClient();
async function allVolunteers(request, response) {
    const admin_id = request.user.adminId;
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        if (role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const volunteers = await prisma.volunteerApplication.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return response.status(200).json({ message: 'Volunteers fetched successfully', data: volunteers });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
async function singleVolunteer(request, response) {
    const id = parseInt(request.query.volunteer_id, 10);
    const admin_id = request.user.adminId;
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        if (role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const volunteer = await prisma.volunteerApplication.findUnique({
            where: { id },
        });
        if (!volunteer) {
            return response.status(404).json({ message: 'Volunteer not found' });
        }
        return response.status(200).json({ message: 'Volunteer fetched successfully', data: volunteer });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
async function deleteVolunteer(request, response) {
    const id = parseInt(request.query.volunteer_id, 10);
    const admin_id = request.user.adminId;
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        if (role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const volunteer = await prisma.volunteerApplication.delete({
            where: { id }
        });
        return response.status(200).json({ message: 'Volunteer deleted successfully', data: volunteer });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
async function approveVolunteer(request, response) {
    const admin_id = request.user.adminId;
    const id = parseInt(request.query.volunteer_id, 10);
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        if (role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const volunteer = await prisma.volunteerApplication.update({
            where: { id },
            data: {
                approved: true
            },
        });
        return response.status(200).json({ message: 'Volunteer approved successfully', data: volunteer });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
async function getApprovedVolunteers(request, response) {
    const admin_id = request.user.adminId;
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        if (role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const volunteers = await prisma.volunteerApplication.findMany({
            where: {
                approved: true
            },
            orderBy: { createdAt: 'desc' }
        });
        return response.status(200).json({ message: 'Approved volunteers fetched successfully', data: volunteers });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
async function getPendingVolunteers(request, response) {
    const admin_id = request.user.adminId;
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        if (role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const volunteers = await prisma.volunteerApplication.findMany({
            where: {
                approved: false
            },
            orderBy: { createdAt: 'desc' }
        });
        return response.status(200).json({ message: 'Pending volunteers fetched successfully', data: volunteers });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
