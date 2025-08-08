"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../middlewares/authMiddleware/authenticationMiddleware");
const dataEntryController_1 = require("../../controllers/ProjectManager/dataEntryController");
const multerMiddleware_1 = require("../../middlewares/multerMiddleware");
const uploadController_1 = require("../../controllers/ProjectManager/uploadController");
const projectController_1 = require("../../controllers/ProjectManager/projectController");
const dashboardController_1 = require("../../controllers/ProjectManager/dashboardController");
exports.projectRouter = express_1.default.Router();
exports.projectRouter.get('/dashboard', authenticationMiddleware_1.authenticateJWT, dashboardController_1.dashboard);
exports.projectRouter.post('/create-data', authenticationMiddleware_1.authenticateJWT, dataEntryController_1.createDataEntry);
exports.projectRouter.get('/datas', authenticationMiddleware_1.authenticateJWT, dataEntryController_1.allDataEntry);
exports.projectRouter.get('/data', authenticationMiddleware_1.authenticateJWT, dataEntryController_1.singleDataEntry);
exports.projectRouter.put('/update-data', authenticationMiddleware_1.authenticateJWT, dataEntryController_1.updateDataEntry);
exports.projectRouter.delete('/delete-data', authenticationMiddleware_1.authenticateJWT, dataEntryController_1.deleteDataEntry);
exports.projectRouter.get('/projects', authenticationMiddleware_1.authenticateJWT, projectController_1.allProject);
exports.projectRouter.get('/project', authenticationMiddleware_1.authenticateJWT, projectController_1.singleProject);
exports.projectRouter.post('/upload-image', authenticationMiddleware_1.authenticateJWT, multerMiddleware_1.upload.single('image'), uploadController_1.imageUpload);
exports.projectRouter.post('/upload-video', authenticationMiddleware_1.authenticateJWT, multerMiddleware_1.upload.single('video'), uploadController_1.videoUpload);
exports.projectRouter.post('/upload-document', authenticationMiddleware_1.authenticateJWT, multerMiddleware_1.upload.single('document'), uploadController_1.documentUpload);
