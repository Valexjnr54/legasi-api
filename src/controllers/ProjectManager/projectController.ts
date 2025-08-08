import { Request, Response } from 'express';
import { PrismaClient } from '../../models';
import { Config } from '../../config/config';
import { body, validationResult } from 'express-validator';
import fs from 'fs';

const prisma = new PrismaClient();

export async function allProject(request: Request, response: Response) {
    
  const project_manager_id = request.user.id;

  // Check if user_id is not present or undefined
  if (!project_manager_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    // Retrieve the user by user_id
    const check_admin = await prisma.project_manager.findUnique({ where: { id: project_manager_id } });
    const role = check_admin?.role;

    // Check if the role is not 'User'
    if (role !== 'project_manager') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    const allProjects = await prisma.project.findMany({
        where:{project_manager_id},
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
    
    return response.status(200).json({message: 'Project(s) fetched', data: allProjects });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function singleProject(request: Request, response: Response) {
  const id: number = parseInt(request.query.project_id as string, 10)
  const project_manager_id = request.user.id;

  // Check if user_id is not present or undefined
  if (!project_manager_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    // Retrieve the user by user_id
    const check_admin = await prisma.project_manager.findUnique({ where: { id: project_manager_id } });
    const role = check_admin?.role;

    // Check if the role is not 'User'
    if (role !== 'project_manager') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    const singleProject = await prisma.project.findUnique({
      where: {
        id: id,
        project_manager_id
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
        data_entry: true,
        createdAt: true,
        updatedAt: true
      }
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
