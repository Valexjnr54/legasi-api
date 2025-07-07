// src/routes/authRoutes.ts
import express from 'express';
import { upload } from '../../middlewares/multerMiddleware';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import { allProjectManager, createProjectManager, deleteProjectManager, singleProjectManager } from '../../controllers/Admininstration/projectManagerController';

export const adminRouter = express.Router();

adminRouter.post('/create-project-manager', authenticateJWT, createProjectManager);
adminRouter.get('/project-managers', authenticateJWT, allProjectManager);
adminRouter.get('/project-manager', authenticateJWT, singleProjectManager);
adminRouter.delete('/delete-project-manager', authenticateJWT, deleteProjectManager);