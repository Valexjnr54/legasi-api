"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.miscRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const miscController_1 = require("../controllers/miscController");
exports.miscRouter = express_1.default.Router();
exports.miscRouter.get('/blogs', miscController_1.allMiscBlogs);
exports.miscRouter.get('/blog', miscController_1.singleMiscBlog);
exports.miscRouter.post('/add-comment', miscController_1.add_comment);
exports.miscRouter.get('/fetch-comment', miscController_1.fetch_comment);
exports.miscRouter.get('/related-post', miscController_1.related_post);
exports.miscRouter.post('/contact-us', miscController_1.submitContactForm);
// Apply authentication middleware to protected routes
exports.miscRouter.post('/donations', miscController_1.createDonation);
exports.miscRouter.get('/donations/verify/:reference', miscController_1.verifyPayment);
// Webhook route - no authentication needed (but implement signature verification)
exports.miscRouter.post('/donations/webhook', miscController_1.handleWebhook);
exports.miscRouter.post('/add-volunteer-member', miscController_1.addVolunteer);
