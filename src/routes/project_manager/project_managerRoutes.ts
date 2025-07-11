// src/routes/authRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import { allDataEntry, createDataEntry, deleteDataEntry, singleDataEntry, updateDataEntry } from '../../controllers/ProjectManager/dataEntryController';

export const projectRouter = express.Router();

projectRouter.post('/create-data', authenticateJWT, createDataEntry);
projectRouter.get('/datas', authenticateJWT, allDataEntry);
projectRouter.get('/data', authenticateJWT, singleDataEntry);
projectRouter.put('/update-data', authenticateJWT, updateDataEntry);
projectRouter.delete('/delete-data', authenticateJWT, deleteDataEntry);