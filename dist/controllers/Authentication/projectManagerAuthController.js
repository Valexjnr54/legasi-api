"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginProjectManager = loginProjectManager;
exports.logoutProjectManager = logoutProjectManager;
exports.verifyProjectEmail = verifyProjectEmail;
exports.changeProjectManagerTemporalPassword = changeProjectManagerTemporalPassword;
exports.changeProjectManagerPassword = changeProjectManagerPassword;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../../models");
const config_1 = require("../../config/config");
const argon2 = __importStar(require("argon2"));
const express_validator_1 = require("express-validator");
const prisma = new models_1.PrismaClient();
async function loginProjectManager(request, response) {
    const { login_id, password } = request.body;
    try {
        const user = await prisma.project_manager.findFirst({
            where: {
                OR: [
                    { email: login_id },
                    { username: login_id }
                ]
            }
        });
        if (!user) {
            return response.status(401).json({ message: 'Invalid credentials' });
        }
        // Check if user password is null
        if (user.password === null) {
            return response.status(401).json({ error: 'Invalid email/username or password' });
        }
        if (!user.password.startsWith('$argon2')) {
            console.error('Password format is invalid:', user.password);
            return response.status(400).json({ message: 'Invalid password format in database' });
        }
        // Verify the password
        const passwordMatch = await argon2.verify(user.password, password);
        if (!passwordMatch) {
            response.status(401).json({ error: 'Invalid email or password' });
            return;
        }
        if (!config_1.Config.secret) {
            console.error('Jwt_secret is not defined!');
            response.status(500).json({ message: 'Internal Server Error' });
            return;
        }
        // Generate a JWT token for the admin
        const token = jsonwebtoken_1.default.sign({
            id: user.id,
            email: user.email,
            fullname: user.fullname,
            profile_image: user.profile_image,
            email_verification: user.email_verified,
            role: user.role
        }, config_1.Config.secret, { expiresIn: '24h' } // Add token expiration
        );
        response.status(200).json({
            token,
            success: true,
            message: 'Login successful',
            user
        });
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function logoutProjectManager(request, response) {
    try {
        // If you are using JWT tokens, you can clear the token on the client side by removing it from cookies or local storage.
        // Here, we'll focus on clearing the token from cookies.
        // Clear the JWT token from the client-side cookies
        response.clearCookie('jwt');
        // Optionally, you can perform additional tasks here, such as logging the Admin's logout action.
        // Send a success response to the client
        response.status(200).json({ message: 'Logout successful' });
    }
    catch (error) {
        // Handle any potential errors that may occur during the logout process.
        console.error('Error during logout:', error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function verifyProjectEmail(request, response) {
    // Validate request inputs
    const project_id = request.user.projectId;
    await (0, express_validator_1.body)('verificationCode').notEmpty().withMessage('Verification code is required').run(request);
    // Check if user_id is not present or undefined
    if (!project_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(422).json({ status: "fail", errors: errors.array() });
    }
    // Retrieve the user by user_id
    const project_manager = await prisma.project_manager.findUnique({ where: { id: project_id } });
    const role = project_manager?.role;
    const email = project_manager?.email;
    if (role !== 'project_manager') {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    const { verificationCode } = request.body;
    try {
        // Find the project_manager by email
        const admin = await prisma.project_manager.findUnique({
            where: { email },
        });
        if (!admin) {
            return response.status(404).json({ status: "fail", message: "Project Manager not found." });
        }
        // Check if already verified
        if (admin.email_verified) {
            return response.status(200).json({ status: "success", message: "Email already verified." });
        }
        // Validate the verification code
        if (admin.verification_code !== verificationCode) {
            return response.status(400).json({ status: "fail", message: "Invalid verification code." });
        }
        // Update the verification status
        await prisma.project_manager.update({
            where: { email },
            data: {
                email_verified: true,
                verification_code: null,
                status: "Active"
            },
        });
        return response.status(200).json({ status: "success", message: "Email verified successfully." });
    }
    catch (error) {
        console.error("Email Verification Error:", error);
        return response.status(500).json({ status: "error", message: "Something went wrong." });
    }
}
async function changeProjectManagerTemporalPassword(request, response) {
    const project_id = request.user?.projectId;
    if (!project_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    await (0, express_validator_1.body)('newPassword')
        .isLength({ min: 8 }).withMessage('New password must be at least 8 characters')
        .matches(/[A-Z]/).withMessage('New password must contain at least one uppercase letter')
        .matches(/[a-z]/).withMessage('New password must contain at least one lowercase letter')
        .matches(/[0-9]/).withMessage('New password must contain at least one number')
        .matches(/[\W]/).withMessage('New password must contain at least one special character')
        .run(request);
    await (0, express_validator_1.body)('confirmPassword')
        .notEmpty().withMessage('Password confirmation is required')
        .run(request);
    const result = (0, express_validator_1.validationResult)(request);
    const errors = result.array();
    if (request.body.newPassword !== request.body.confirmPassword) {
        return response.status(422).json({ status: "fail", errors: "Passwords do not match" });
    }
    if (errors.length > 0) {
        return response.status(422).json({ status: "fail", errors });
    }
    try {
        const user = await prisma.project_manager.findUnique({
            where: { id: project_id },
        });
        if (!user) {
            return response.status(404).json({ status: "fail", message: "User not found." });
        }
        if (user.role !== 'project_manager') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const hashedPassword = await argon2.hash(request.body.newPassword);
        await prisma.project_manager.update({
            where: { id: project_id },
            data: {
                password: hashedPassword,
                temporal_password: false
            },
        });
        return response.status(200).json({ status: "success", message: "Password updated successfully." });
    }
    catch (error) {
        console.error("Change Password Error:", error);
        return response.status(500).json({ status: "error", message: "Something went wrong." });
    }
}
async function changeProjectManagerPassword(request, response) {
    const project_id = request.user.projectId;
    if (!project_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    // Validate input fields
    await (0, express_validator_1.body)('currentPassword')
        .notEmpty().withMessage('Current password is required')
        .run(request);
    await (0, express_validator_1.body)('newPassword')
        .isLength({ min: 8 }).withMessage('New password must be at least 8 characters')
        .matches(/[A-Z]/).withMessage('New password must contain at least one uppercase letter')
        .matches(/[a-z]/).withMessage('New password must contain at least one lowercase letter')
        .matches(/[0-9]/).withMessage('New password must contain at least one number')
        .matches(/[\W]/).withMessage('New password must contain at least one special character')
        .run(request);
    await (0, express_validator_1.body)('confirmPassword')
        .notEmpty().withMessage('Password confirmation is required')
        .run(request);
    const result = (0, express_validator_1.validationResult)(request);
    const errors = result.array();
    // Manually confirm password match
    if (request.body.newPassword !== request.body.confirmPassword) {
        return response.status(422).json({ status: "fail", errors: "Password do not match" });
    }
    if (errors.length > 0) {
        return response.status(422).json({ status: "fail", errors });
    }
    if (!project_id) {
        // throw new Error("Missing project manager ID");
        return response.status(400).json({ message: 'Missing project manager ID', data: project_id });
    }
    // Retrieve the user by user_id
    const project_manager = await prisma.project_manager.findUnique({ where: { id: project_id } });
    const role = project_manager?.role;
    if (role !== 'project_manager') {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    const { currentPassword, newPassword } = request.body;
    const userId = request.user?.id;
    try {
        const user = await prisma.project_manager.findUnique({
            where: { id: userId },
        });
        if (!user) {
            return response.status(404).json({ status: "fail", message: "User not found." });
        }
        const isMatch = await argon2.verify(user.password, currentPassword);
        if (!isMatch) {
            return response.status(400).json({ status: "fail", message: "Incorrect current password." });
        }
        const hashedPassword = await argon2.hash(newPassword);
        await prisma.project_manager.update({
            where: { id: userId },
            data: {
                password: hashedPassword,
            },
        });
        return response.status(200).json({ status: "success", message: "Password updated successfully." });
    }
    catch (error) {
        console.error("Change Password Error:", error);
        return response.status(500).json({ status: "error", message: "Something went wrong." });
    }
}
