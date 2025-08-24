// src/routes/authRoutes.ts
import express from 'express';
import { add_comment, allMiscBlogs, createDonation, fetch_comment, handleWebhook, related_post, singleMiscBlog, verifyPayment } from '../controllers/miscController';

export const miscRouter = express.Router();
miscRouter.get('/blogs', allMiscBlogs);
miscRouter.get('/blog', singleMiscBlog);

miscRouter.post('/add-comment', add_comment)
miscRouter.get('/fetch-comment', fetch_comment)
miscRouter.get('/related-post', related_post)

// Apply authentication middleware to protected routes
miscRouter.post('/donations', createDonation);
miscRouter.get('/donations/verify/:reference', verifyPayment);

// Webhook route - no authentication needed (but implement signature verification)
miscRouter.post('/donations/webhook', handleWebhook);
