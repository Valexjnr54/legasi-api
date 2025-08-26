import { Request, Response } from 'express';
import { PrismaClient } from '../../models';
import { body, validationResult } from 'express-validator';

const prisma = new PrismaClient();

export async function allVolunteers(request: Request, response: Response) {
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
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}

export async function singleVolunteer(request: Request, response: Response) {
  const id: number = parseInt(request.query.volunteer_id as string, 10);
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
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}

export async function deleteVolunteer(request: Request, response: Response) {
  const id: number = parseInt(request.query.volunteer_id as string, 10);
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
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}

export async function approveVolunteer(request: Request, response: Response) {
  const admin_id = request.user.adminId;
  const id: number = parseInt(request.query.volunteer_id as string, 10);

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
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}

export async function getApprovedVolunteers(request: Request, response: Response) {
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
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}

export async function getPendingVolunteers(request: Request, response: Response) {
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
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}