import { Request, Response } from 'express';
import { PrismaClient } from '../../models';
import { body, validationResult } from 'express-validator';

const prisma = new PrismaClient();

export async function allComments(request: Request, response: Response) {
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
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}

export async function singleComment(request: Request, response: Response) {
  const id: number = parseInt(request.query.comment_id as string, 10);
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
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}

export async function deleteComment(request: Request, response: Response) {
  const id: number = parseInt(request.query.comment_id as string, 10);
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
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}

export async function approveComment(request: Request, response: Response) {
  const admin_id = request.user.adminId;
  const id: number = parseInt(request.query.comment_id as string, 10);

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
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}

export async function getApprovedComments(request: Request, response: Response) {
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
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}

export async function getPendingComments(request: Request, response: Response) {
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
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}