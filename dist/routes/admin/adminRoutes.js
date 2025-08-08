"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../middlewares/authMiddleware/authenticationMiddleware");
const projectManagerController_1 = require("../../controllers/Admininstration/projectManagerController");
const projectController_1 = require("../../controllers/Admininstration/projectController");
const dataEntryController_1 = require("../../controllers/Admininstration/dataEntryController");
const dashboardController_1 = require("../../controllers/Admininstration/dashboardController");
exports.adminRouter = express_1.default.Router();
exports.adminRouter.post('/create-project-manager', authenticationMiddleware_1.authenticateJWT, projectManagerController_1.createProjectManager);
exports.adminRouter.get('/project-managers', authenticationMiddleware_1.authenticateJWT, projectManagerController_1.allProjectManager);
exports.adminRouter.get('/project-manager', authenticationMiddleware_1.authenticateJWT, projectManagerController_1.singleProjectManager);
exports.adminRouter.delete('/delete-project-manager', authenticationMiddleware_1.authenticateJWT, projectManagerController_1.deleteProjectManager);
exports.adminRouter.post('/create-project', authenticationMiddleware_1.authenticateJWT, projectController_1.createProject);
exports.adminRouter.get('/projects', authenticationMiddleware_1.authenticateJWT, projectController_1.allProject);
exports.adminRouter.get('/project', authenticationMiddleware_1.authenticateJWT, projectController_1.singleProject);
exports.adminRouter.put('/update-project', authenticationMiddleware_1.authenticateJWT, projectController_1.updateProject);
exports.adminRouter.delete('/delete-project', authenticationMiddleware_1.authenticateJWT, projectController_1.deleteProject);
exports.adminRouter.get('/datas', authenticationMiddleware_1.authenticateJWT, dataEntryController_1.allDataEntry);
exports.adminRouter.get('/data', authenticationMiddleware_1.authenticateJWT, dataEntryController_1.singleDataEntry);
exports.adminRouter.delete('/delete-data', authenticationMiddleware_1.authenticateJWT, dataEntryController_1.deleteDataEntry);
exports.adminRouter.get('/dashboard', authenticationMiddleware_1.authenticateJWT, dashboardController_1.dashboard);
