"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectAuthRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../middlewares/authMiddleware/authenticationMiddleware");
const projectManagerAuthController_1 = require("../../controllers/Authentication/projectManagerAuthController");
exports.projectAuthRouter = express_1.default.Router();
exports.projectAuthRouter.post('/login', projectManagerAuthController_1.loginProjectManager);
// Secure the logout route with authentication middleware
exports.projectAuthRouter.post('/logout', authenticationMiddleware_1.authenticateJWT, projectManagerAuthController_1.logoutProjectManager);
exports.projectAuthRouter.post('/email-verification', authenticationMiddleware_1.authenticateJWT, projectManagerAuthController_1.verifyProjectEmail);
exports.projectAuthRouter.post('/change-password', authenticationMiddleware_1.authenticateJWT, projectManagerAuthController_1.changeProjectManagerPassword);
exports.projectAuthRouter.post('/change-temp-password', authenticationMiddleware_1.authenticateJWT, projectManagerAuthController_1.changeProjectManagerTemporalPassword);
exports.projectAuthRouter.get('/profile', authenticationMiddleware_1.authenticateJWT, projectManagerAuthController_1.profile);
exports.projectAuthRouter.put('/update-profile', authenticationMiddleware_1.authenticateJWT, projectManagerAuthController_1.update_profile);
