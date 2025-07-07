// src/controllers/authController.ts
import { Request, Response } from "express";
import { PrismaClient } from "../../models";
import crypto from 'crypto';
import * as argon2 from 'argon2';
import { body, validationResult } from "express-validator";
import { sendVerificationEmail, sendWelcomeEmail } from "../../utils/emailSender";

const prisma = new PrismaClient();

function generateVerificationCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function generateTempPassword(): string {
  return crypto.randomBytes(5).toString('hex'); // 10 characters
}

export async function createProjectManager(request: Request, response: Response) {
    const { fullname, username, email, phone_number } = request.body;
    const admin_id = request.user.adminId;

    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    try {
    const validationRules = [
      body('fullname').notEmpty().withMessage('Full Name is required'),
      body('email').isEmail().withMessage('Invalid email address'),
      body('username').notEmpty().withMessage('Username is Required'),
      body('phone_number').notEmpty().withMessage('Phone Number is required'),
    ];
    await Promise.all(validationRules.map(rule => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    // Retrieve the user by user_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    // Check if the role is not 'User'
    if (role !== 'super_admin') {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    const existing = await prisma.project_manager.findUnique({ where: { email } });
    if (existing) {
      return response.status(400).json({ message: 'Email already registered' });
    }

    const tempPassword = generateTempPassword();
    const hashedPassword = await argon2.hash(tempPassword);
    const verificationCode = generateVerificationCode();
    const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    const newAdmin = await prisma.project_manager.create({
      data: {
        fullname,
        email,
        username,
        phone_number,
        password: hashedPassword,
        verification_code: verificationCode,
      },
    });

//     const message = `Hello ${fullname},

// You have been added as a Project Manager on Legasi.

// Temporary Password: ${tempPassword}
// Email Verification Code: ${verificationCode} (expires in 10 mins)

// You will be required to change your password after first login.
// `;

    await sendWelcomeEmail(email, 'Welcome to Legasi – Your Journey Starts Here! 🚀', newAdmin, tempPassword);
    await sendVerificationEmail(email, 'Your Project Manager Access & Email Verification', verificationCode, newAdmin);

    return response.status(201).json({ message: 'Project Manager created and verification email sent', newAdmin });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function allProjectManager(request: Request, response: Response) {
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

    const allUsers = await prisma.project_manager.findMany({
      select:{
        id:true,
        fullname:true,
        username:true,
        email:true,
        phone_number:true,
        role:true,
        profile_image:true,
        createdAt: true,
        updatedAt: true
      },
    });
    if(allUsers.length <= 0){
      return response.status(404).json({ message: 'No User(s) Found' });
    }
    return response.status(200).json({message: 'User(s) fetched', data: allUsers });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function singleProjectManager(request: Request, response: Response) {
    const id: number = parseInt(request.query.user_id as string, 10)
    const admin_id = request.user.adminId;

    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    if (!id) {
        return response.status(403).json({ message: 'User ID required' });
    }

    try {
    // Retrieve the user by user_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    // Check if the role is not 'User'
    if (role !== 'super_admin') {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    const singleUser = await prisma.project_manager.findUnique({
        where: {
            id: id
        },
        select:{
            id:true,
            fullname:true,
            username:true,
            email:true,
            phone_number:true,
            role:true,
            profile_image:true,
            createdAt: true,
            updatedAt: true
        },
    });
    if (!singleUser) {
        return response.status(404).json({ message: 'User not found' });
    }
    return response.status(200).json({message: 'User fetched', data: singleUser });
    } catch (error) {
    console.log(error)
    return response.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function deleteProjectManager (request: Request, response: Response) {
    const id: number = parseInt(request.query.user_id as string, 10)
      const admin_id = request.user.adminId;
    
      // Check if user_id is not present or undefined
      if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
      }

      if (!id) {
        return response.status(403).json({ message: 'User ID required' });
      }
    
      try {
        // Retrieve the user by user_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
    
        // Check if the role is not 'User'
        if (role !== 'super_admin') {
          return response.status(403).json({ message: 'Unauthorized User' });
        }

        const user = await prisma.project_manager.findUnique({
            where:{id}
        });

        if (!user) {
            return response.status(404).json({ message: 'Record not found' });
        }
    
        // Create a new delivery entry in the database
        const deleteUser = await prisma.project_manager.delete({
          where:{
            id
          },
        });
        if (!deleteUser) {
          return response.status(403).json({ message: 'Unable to delete User' });
        }
        return response.status(201).json({ message: 'User was deleted successfully' });
      } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
      }
}