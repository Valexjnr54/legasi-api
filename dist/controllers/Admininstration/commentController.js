"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allComments = allComments;
exports.singleComment = singleComment;
exports.deleteComment = deleteComment;
exports.approveComment = approveComment;
exports.getApprovedComments = getApprovedComments;
exports.getPendingComments = getPendingComments;
const models_1 = require("../../models");
const prisma = new models_1.PrismaClient();
async function allComments(request, response) {
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
        const comments = await prisma.comment.findMany({
            include: {
                blog: true
            },
            orderBy: { createdAt: 'desc' }
        });
        return response.status(200).json({ message: 'Comments fetched successfully', data: comments });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
async function singleComment(request, response) {
    const id = parseInt(request.query.comment_id, 10);
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
        const comment = await prisma.comment.findUnique({
            where: { id },
            include: {
                blog: true
            }
        });
        if (!comment) {
            return response.status(404).json({ message: 'Comment not found' });
        }
        return response.status(200).json({ message: 'Comment fetched successfully', data: comment });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
async function deleteComment(request, response) {
    const id = parseInt(request.query.comment_id, 10);
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
        const comment = await prisma.comment.delete({
            where: { id }
        });
        return response.status(200).json({ message: 'Comment deleted successfully', data: comment });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
async function approveComment(request, response) {
    const admin_id = request.user.adminId;
    const id = parseInt(request.query.comment_id, 10);
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        if (role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const comment = await prisma.comment.update({
            where: { id },
            data: {
                approved: true
            },
            include: {
                blog: true
            }
        });
        return response.status(200).json({ message: 'Comment approved successfully', data: comment });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
async function getApprovedComments(request, response) {
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
        const comments = await prisma.comment.findMany({
            where: {
                approved: true
            },
            include: {
                blog: true
            },
            orderBy: { createdAt: 'desc' }
        });
        return response.status(200).json({ message: 'Approved comments fetched successfully', data: comments });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
async function getPendingComments(request, response) {
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
        const comments = await prisma.comment.findMany({
            where: {
                approved: false
            },
            include: {
                blog: true
            },
            orderBy: { createdAt: 'desc' }
        });
        return response.status(200).json({ message: 'Pending comments fetched successfully', data: comments });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
