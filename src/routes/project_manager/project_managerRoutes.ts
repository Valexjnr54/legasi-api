// src/routes/authRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import { allDataEntry, createDataEntry, deleteDataEntry, singleDataEntry, updateDataEntry } from '../../controllers/ProjectManager/dataEntryController';
import { upload } from '../../middlewares/multerMiddleware';
import { documentUpload, imageUpload, videoUpload } from '../../controllers/ProjectManager/uploadController';
import { allProject, singleProject } from '../../controllers/ProjectManager/projectController';
import { dashboard } from '../../controllers/ProjectManager/dashboardController';

export const projectRouter = express.Router();

projectRouter.get('/dashboard', authenticateJWT, dashboard)

projectRouter.post('/create-data', authenticateJWT, createDataEntry);
projectRouter.get('/datas', authenticateJWT, allDataEntry);
projectRouter.get('/data', authenticateJWT, singleDataEntry);
projectRouter.put('/update-data', authenticateJWT, updateDataEntry);
projectRouter.delete('/delete-data', authenticateJWT, deleteDataEntry);

projectRouter.get('/projects',authenticateJWT, allProject);
projectRouter.get('/project',authenticateJWT, singleProject);

projectRouter.post('/upload-image', authenticateJWT, upload.single('image'), imageUpload)
projectRouter.post('/upload-video', authenticateJWT, upload.single('video'), videoUpload)
projectRouter.post('/upload-document', authenticateJWT, upload.single('document'), documentUpload)