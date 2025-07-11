// src/routes/authRoutes.ts
import express from 'express';
import { upload } from '../../middlewares/multerMiddleware';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import { allProjectManager, createProjectManager, deleteProjectManager, singleProjectManager } from '../../controllers/Admininstration/projectManagerController';
import { allProject, createProject, deleteProject, singleProject, updateProject } from '../../controllers/Admininstration/projectController';

export const adminRouter = express.Router();

adminRouter.post('/create-project-manager', authenticateJWT, createProjectManager);
adminRouter.get('/project-managers', authenticateJWT, allProjectManager);
adminRouter.get('/project-manager', authenticateJWT, singleProjectManager);
adminRouter.delete('/delete-project-manager', authenticateJWT, deleteProjectManager);

adminRouter.post('/create-project', authenticateJWT, createProject);
adminRouter.get('/projects', authenticateJWT, allProject);
adminRouter.get('/project', authenticateJWT, singleProject);
adminRouter.put('/update-project', authenticateJWT, updateProject);
adminRouter.delete('/delete-project', authenticateJWT, deleteProject);