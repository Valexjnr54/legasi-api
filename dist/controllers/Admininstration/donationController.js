"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allDonations = allDonations;
exports.singleDonation = singleDonation;
exports.donationStats = donationStats;
const models_1 = require("../../models");
const prisma = new models_1.PrismaClient();
async function allDonations(request, response) {
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
        const donations = await prisma.donation.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return response.status(200).json({ message: 'Donations fetched successfully', data: donations });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
async function singleDonation(request, response) {
    const id = parseInt(request.query.donation_id, 10);
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
        const donation = await prisma.donation.findUnique({
            where: { id }
        });
        if (!donation) {
            return response.status(404).json({ message: 'Donation not found' });
        }
        return response.status(200).json({ message: 'Donation fetched successfully', data: donation });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
async function donationStats(request, response) {
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
        // Total donations count
        const totalDonations = await prisma.donation.count();
        // Total donated amount
        const totalAmount = await prisma.donation.aggregate({
            _sum: { amount: true }
        });
        // Unique donors (by email)
        const uniqueDonors = await prisma.donation.findMany({
            select: { email: true },
            distinct: ["email"],
        });
        const totalDonors = uniqueDonors.length;
        // Donations by type
        const donationsByType = await prisma.donation.groupBy({
            by: ['type'],
            _count: { id: true },
            _sum: { amount: true }
        });
        // Calculate funded_project (sum of counts across all types)
        const fundedProject = donationsByType.reduce((sum, item) => sum + item._count.id, 0);
        const stats = {
            total_donations: totalDonations,
            total_amount: totalAmount._sum.amount || 0,
            total_donors: totalDonors,
            funded_project: fundedProject,
            donations_by_type: donationsByType.reduce((acc, item) => {
                acc[item.type] = {
                    count: item._count.id,
                    total_amount: item._sum.amount || 0
                };
                return acc;
            }, {})
        };
        return response.status(200).json({
            message: 'Donation statistics fetched successfully',
            data: stats
        });
    }
    catch (error) {
        return response.status(500).json({ message: error.message });
    }
}
