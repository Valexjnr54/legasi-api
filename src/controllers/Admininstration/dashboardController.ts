import { PrismaClient } from "../../models";
import { Request, Response } from 'express';
import { data_entry, project_manager, category } from '../../models/index';

const prisma = new PrismaClient();

export async function dashboard(request: Request, response: Response) {
    
  const admin_id = request.user.adminId;

  // Check if user_id is not present or undefined
  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    // Retrieve the user by user_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    // Check if the role is not 'User'
    if (role !== 'super_admin') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    const data_entry_count = await prisma.data_entry.count({});

    const project_count = await prisma.project.count({});

    const project_manager_count = await prisma.project_manager.count({})

    const blog_count = await prisma.blogs.count({});

    const comment_count = await prisma.comment.count({});

    const category_count = await prisma.category.count({});

    const tag_count = await prisma.tag.count({});

    const recent_data_entry = await prisma.data_entry.findMany({
        orderBy: {
            createdAt: 'desc',
        },
        take: 5,
        include: {
            project: true, // Include project details
        },
    });

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
      }, {} as Record<string, { count: number; total_amount: number }>)
    };
    
    return response.status(200).json({message: 'Project(s) fetched', data: {project_count, project_manager_count, blog_count, comment_count, category_count, tag_count, data_entry_count, recent_data_entry, stats} });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}