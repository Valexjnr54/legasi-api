import { Request, Response } from 'express';
import { PrismaClient } from '../../models';
import { Config } from '../../config/config';
import { body, validationResult } from 'express-validator';
import fs from 'fs';

const prisma = new PrismaClient();

export async function createProject(request: Request, response: Response) {
  const { project_name, project_manager_id, start_date, end_date, description, target_entry } = request.body;
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

    // Validation rules
    const validationRules = [
        body('project_name').notEmpty().withMessage('Project Name is required'),
        body('project_manager_id').notEmpty().withMessage('Project Manager ID is required'),
        body('end_date').notEmpty().withMessage('End date is required').isISO8601().withMessage('End date must be a valid date'),
        body('start_date').notEmpty().withMessage('Start date is required').isISO8601().withMessage('Start date must be a valid date').custom((start, { req }) => {
            const startDate = new Date(start);
            const endDate = new Date(req.body.end_date);
            if (startDate > endDate) {
            throw new Error('Start date cannot be after end date');
            }
            return true;
        }),
        body('target_entry').notEmpty().withMessage('Target entry is required').isInt({ min: 1 }).withMessage('Target entry must be a positive integer')
    ];
  
    // Apply validation rules to the request
    await Promise.all(validationRules.map((rule) => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
    }

    const addProject = await prisma.project.create({
        data: {
            project_name,
            project_manager_id,
            start_date,
            end_date,
            description,
            target_entry
        },
        select:{
            id:true,
            project_name:true,
            project_manager_id:true,
            start_date:true,
            end_date:true,
            description:true,
            target_entry:true,
            project_manager:true,
            createdAt: true,
            updatedAt: true
        }
    })
    return response.status(200).json({ message: 'Project has been created', data: addProject });
  } catch (error) {
    return response.status(500).json({ message: error})
  }
}

export async function updateProject(request: Request, response: Response) {
  const { project_name, project_manager_id, start_date, end_date, description, target_entry } = request.body;
  const admin_id = request.user.adminId;
  const id: number = parseInt(request.query.project_id as string, 10)

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

    // Validation rules
    const validationRules = [
        body('project_name').notEmpty().withMessage('Project Name is required'),
        body('project_manager_id').notEmpty().withMessage('Project Manager ID is required'),
        body('end_date').notEmpty().withMessage('End date is required').isISO8601().withMessage('End date must be a valid date'),
        body('start_date').notEmpty().withMessage('Start date is required').isISO8601().withMessage('Start date must be a valid date').custom((start, { req }) => {
            const startDate = new Date(start);
            const endDate = new Date(req.body.end_date);
            if (startDate > endDate) {
            throw new Error('Start date cannot be after end date');
            }
            return true;
        }),
        body('target_entry').notEmpty().withMessage('Target entry is required').isInt({ min: 1 }).withMessage('Target entry must be a positive integer')
    ];
  
    // Apply validation rules to the request
    await Promise.all(validationRules.map((rule) => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
    }

    const updateProject = await prisma.project.update({
      where:{
        id
      },
      data: {
        project_name,
        project_manager_id,
        start_date,
        end_date,
        description,
        target_entry
      },
      select:{
        id:true,
        project_name:true,
        project_manager_id:true,
        start_date:true,
        end_date:true,
        description:true,
        target_entry:true,
        project_manager:true,
        createdAt: true,
        updatedAt: true
      }
    })

    if (!updateProject) {
      return response.status(403).json({ message: 'Unable to update Project' });
    }
    return response.status(200).json({ message: 'Project updated', data: updateProject });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function allProject(request: Request, response: Response) {
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

    const allProjects = await prisma.project.findMany({
      select:{
        id:true,
        project_name:true,
        project_manager_id:true,
        start_date:true,
        end_date:true,
        description:true,
        target_entry:true,
        project_manager:true,
        createdAt: true,
        updatedAt: true
      },
    });
    if(allProjects.length <= 0){
      return response.status(404).json({ message: 'No Project(s) Found' });
    }
    return response.status(200).json({message: 'Project(s) fetched', data: allProjects });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function singleProject(request: Request, response: Response) {
  const id: number = parseInt(request.query.project_id as string, 10)
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

    const singleProject = await prisma.project.findUnique({
      where: {
        id: id
      },
      select:{
        id:true,
        project_name:true,
        project_manager_id:true,
        start_date:true,
        end_date:true,
        description:true,
        target_entry:true,
        project_manager:true,
        createdAt: true,
        updatedAt: true
      },
    });
    if (!singleProject) {
      return response.status(404).json({ message: 'No Project Found' });
    }
    return response.status(200).json({message: 'Project fetched', data: singleProject });
  } catch (error) {
    console.log(error)
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function deleteProject(request: Request, response: Response) {
  const id: number = parseInt(request.query.project_id as string, 10)
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

    // Create a new delivery entry in the database
    const deleteProject = await prisma.project.delete({
      where:{
        id
      },
    });
    if (!deleteProject) {
      return response.status(403).json({ message: 'Unable to delete Project' });
    }
    return response.status(204).json({ message: 'Project was deleted successfully' });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}