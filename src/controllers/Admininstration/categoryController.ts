import { Request, Response } from 'express';
import { PrismaClient } from '../../models';
import { body, validationResult } from 'express-validator';

const prisma = new PrismaClient();

export async function createCategory(request: Request, response: Response) {
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
      body('name').notEmpty().withMessage('Name is required'),
    ];

    await Promise.all(validationRules.map((rule) => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const category = await prisma.category.create({
      data: {
        name
      }
    });

    return response.status(200).json({ message: 'Category created successfully', data: category });
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}

export async function updateCategory(request: Request, response: Response) {
  const { name, description, slug } = request.body;
  const admin_id = request.user.adminId;
  const id: number = parseInt(request.query.category_id as string, 10);

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
      body('slug').optional().isSlug().withMessage('Slug must be a valid URL slug')
    ];

    await Promise.all(validationRules.map((rule) => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const category = await prisma.category.update({
      where: { id },
      data: {
        name
      }
    });

    return response.status(200).json({ message: 'Category updated successfully', data: category });
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}

export async function allCategories(request: Request, response: Response) {
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

    const categories = await prisma.category.findMany({
      include: {
        blog: true
      },
      orderBy: { name: 'asc' }
    });

    return response.status(200).json({ message: 'Categories fetched successfully', data: categories });
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}

export async function singleCategory(request: Request, response: Response) {
  const id: number = parseInt(request.query.category_id as string, 10);
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

    const category = await prisma.category.findUnique({
      where: { id },
      include: {
        blog: {
          include: {
            author: true,
            tags: true
          }
        }
      }
    });

    if (!category) {
      return response.status(404).json({ message: 'Category not found' });
    }

    return response.status(200).json({ message: 'Category fetched successfully', data: category });
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}

export async function deleteCategory(request: Request, response: Response) {
  const id: number = parseInt(request.query.category_id as string, 10);
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

    const category = await prisma.category.delete({
      where: { id }
    });

    return response.status(200).json({ message: 'Category deleted successfully', data: category });
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}