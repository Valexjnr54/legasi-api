import { Request, Response } from 'express';
import { PrismaClient } from '../../models';
import { Config } from '../../config/config';
import { body, validationResult } from 'express-validator';
import fs from 'fs';

const prisma = new PrismaClient();

export async function createDataEntry(request: Request, response: Response) {
  const { project_id, date, location, description, image_url, video_url, document_url, metadata  } = request.body;
  const project_manager_id = request.user.projectId;

  // Check if user_id is not present or undefined
  if (!project_manager_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    // Retrieve the user by user_id
    const check_project = await prisma.project_manager.findUnique({ where: { id: project_manager_id } });
    const role = check_project?.role;

    // Check if the role is not 'User'
    if (role !== 'project_manager') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    // Validation rules
    const validationRules = [
        body('project_id').notEmpty().withMessage('Project ID is required'),
        body('location').notEmpty().withMessage('Location is required'),
        body('date').notEmpty().withMessage('Activity date is required').isISO8601().withMessage('Activity date must be a valid date'),
        body('description').notEmpty().withMessage('Activity Description is required'),
    ];
  
    // Apply validation rules to the request
    await Promise.all(validationRules.map((rule) => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
    }

    const addData = await prisma.data_entry.create({
        data: {
            project_id,
            location,
            date,
            image_url,
            video_url,
            document_url,
            description,
            metadata
        },
        select:{
            id:true,
            project_id:true,
            date:true,
            location:true,
            description:true,
            image_url:true,
            video_url:true,
            document_url:true,
            metadata:true,
            project:true,
            createdAt: true,
            updatedAt: true
        }
    })
    return response.status(200).json({ message: 'Data has been entered', data: addData });
  } catch (error) {
    return response.status(500).json({ message: error})
  }
}

export async function updateDataEntry(request: Request, response: Response) {
  const { project_id, date, location, description, image_url, video_url, document_url, metadata } = request.body;
  const project_manager_id = request.user.projectId;
  const id: number = parseInt(request.query.data_entry_id as string, 10)

  // Check if user_id is not present or undefined
  if (!project_manager_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    // Retrieve the user by user_id
    const check_project = await prisma.project_manager.findUnique({ where: { id: project_manager_id } });
    const role = check_project?.role;

    // Check if the role is not 'User'
    if (role !== 'project_manager') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    // Validation rules
    const validationRules = [
        body('project_id').notEmpty().withMessage('Project ID is required'),
        body('location').notEmpty().withMessage('Location is required'),
        body('date').notEmpty().withMessage('Activity date is required').isISO8601().withMessage('Activity date must be a valid date'),
        body('description').notEmpty().withMessage('Activity Description is required'),
    ];
  
    // Apply validation rules to the request
    await Promise.all(validationRules.map((rule) => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
    }

    const updateData = await prisma.data_entry.update({
      where:{
        id
      },
      data: {
            project_id,
            location,
            date,
            image_url,
            video_url,
            document_url,
            description,
            metadata
        },
        select:{
            id:true,
            project_id:true,
            date:true,
            location:true,
            description:true,
            image_url:true,
            video_url:true,
            document_url:true,
            metadata:true,
            project:true,
            createdAt: true,
            updatedAt: true
        }
    })

    if (!updateData) {
      return response.status(403).json({ message: 'Unable to update Data' });
    }
    return response.status(200).json({ message: 'Project updated', data: updateData });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function allDataEntry(request: Request, response: Response) {
  const project_manager_id = request.user.projectId;

  // Check if user_id is not present or undefined
  if (!project_manager_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    // Retrieve the user by user_id
    const check_project = await prisma.project_manager.findUnique({ where: { id: project_manager_id } });
    const role = check_project?.role;

    // Check if the role is not 'User'
    if (role !== 'project_manager') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    const allDatas = await prisma.data_entry.findMany({
      select:{
            id:true,
            project_id:true,
            date:true,
            location:true,
            description:true,
            image_url:true,
            video_url:true,
            document_url:true,
            metadata:true,
            project:true,
            createdAt: true,
            updatedAt: true
        }
    });
    if(allDatas.length <= 0){
      return response.status(200).json({ message: 'No Data Entry(s) Found', data:allDatas });
    }
    return response.status(200).json({message: 'Data Entry(s) fetched', data: allDatas });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function singleDataEntry(request: Request, response: Response) {
  const id: number = parseInt(request.query.data_entry_id as string, 10)
  const project_manager_id = request.user.projectId;

  // Check if user_id is not present or undefined
  if (!project_manager_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    // Retrieve the user by user_id
    const check_project = await prisma.project_manager.findUnique({ where: { id: project_manager_id } });
    const role = check_project?.role;

    // Check if the role is not 'User'
    if (role !== 'project_manager') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    const singleData = await prisma.data_entry.findUnique({
      where: {
        id: id
      },
      select:{
            id:true,
            project_id:true,
            date:true,
            location:true,
            description:true,
            image_url:true,
            video_url:true,
            document_url:true,
            metadata:true,
            project:true,
            createdAt: true,
            updatedAt: true
        }
    });
    if (!singleData) {
      return response.status(404).json({ message: 'No Data Entry Found' });
    }
    return response.status(200).json({message: 'Project fetched', data: singleData });
  } catch (error) {
    console.log(error)
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function deleteDataEntry(request: Request, response: Response) {
  const id: number = parseInt(request.query.project_id as string, 10)
  const project_manager_id = request.user.projectId;

  // Check if user_id is not present or undefined
  if (!project_manager_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    // Retrieve the user by user_id
    const check_project = await prisma.project_manager.findUnique({ where: { id: project_manager_id } });
    const role = check_project?.role;

    // Check if the role is not 'User'
    if (role !== 'project_manager') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    // Create a new delivery entry in the database
    const deleteData = await prisma.data_entry.delete({
      where:{
        id
      },
    });
    if (!deleteData) {
      return response.status(403).json({ message: 'Unable to delete Project' });
    }
    return response.status(200).json({ message: 'Project was deleted successfully' });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}