// src/routes/authRoutes.ts
import express from 'express';
import { upload } from '../../middlewares/multerMiddleware';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import { changeProjectManagerPassword, changeProjectManagerTemporalPassword, loginProjectManager, logoutProjectManager, profile, update_profile, verifyProjectEmail } from '../../controllers/Authentication/projectManagerAuthController';

export const projectAuthRouter = express.Router();

projectAuthRouter.post('/login', loginProjectManager);
// Secure the logout route with authentication middleware
projectAuthRouter.post('/logout', authenticateJWT, logoutProjectManager);
projectAuthRouter.post('/email-verification', authenticateJWT, verifyProjectEmail);
projectAuthRouter.post('/change-password', authenticateJWT, changeProjectManagerPassword);
projectAuthRouter.post('/change-temp-password', authenticateJWT, changeProjectManagerTemporalPassword);
projectAuthRouter.get('/profile', authenticateJWT, profile)
projectAuthRouter.put('/update-profile', authenticateJWT, update_profile)