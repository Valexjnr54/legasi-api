"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTag = createTag;
exports.updateTag = updateTag;
exports.allTags = allTags;
exports.singleTag = singleTag;
exports.deleteTag = deleteTag;
const models_1 = require("../../models");
const express_validator_1 = require("express-validator");
const prisma = new models_1.PrismaClient();
async function createTag(request, response) {
    const { name } = request.body;
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
        const validationRules = [
            (0, express_validator_1.body)('name').notEmpty().withMessage('Name is required')
        ];
        await Promise.all(validationRules.map((rule) => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const tag = await prisma.tag.create({
            data: {
                name
            }
        });
        return response.status(200).json({ message: 'Tag created successfully', data: tag });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
async function updateTag(request, response) {
    const { name, description, slug } = request.body;
    const admin_id = request.user.adminId;
    const id = parseInt(request.query.tag_id, 10);
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        if (role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const validationRules = [
            (0, express_validator_1.body)('slug').optional().isSlug().withMessage('Slug must be a valid URL slug')
        ];
        await Promise.all(validationRules.map((rule) => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const tag = await prisma.tag.update({
            where: { id },
            data: {
                name
            }
        });
        return response.status(200).json({ message: 'Tag updated successfully', data: tag });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
async function allTags(request, response) {
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
        const tags = await prisma.tag.findMany({
            include: {
                blog: true
            },
            orderBy: { name: 'asc' }
        });
        return response.status(200).json({ message: 'Tags fetched successfully', data: tags });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
async function singleTag(request, response) {
    const id = parseInt(request.query.tag_id, 10);
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
        const tag = await prisma.tag.findUnique({
            where: { id },
            include: {
                blog: {
                    include: {
                        author: true,
                        category: true
                    }
                }
            }
        });
        if (!tag) {
            return response.status(404).json({ message: 'Tag not found' });
        }
        return response.status(200).json({ message: 'Tag fetched successfully', data: tag });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
async function deleteTag(request, response) {
    const id = parseInt(request.query.tag_id, 10);
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
        const tag = await prisma.tag.delete({
            where: { id }
        });
        return response.status(200).json({ message: 'Tag deleted successfully', data: tag });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
