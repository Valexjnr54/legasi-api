"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allMiscBlogs = allMiscBlogs;
exports.singleMiscBlog = singleMiscBlog;
exports.related_post = related_post;
exports.add_comment = add_comment;
exports.fetch_comment = fetch_comment;
exports.createDonation = createDonation;
exports.verifyPayment = verifyPayment;
exports.handleWebhook = handleWebhook;
const models_1 = require("../models");
const express_validator_1 = require("express-validator");
const axios_1 = __importDefault(require("axios"));
const prisma = new models_1.PrismaClient();
// Squadco configuration
const SQUADCO_CONFIG = {
    baseURL: process.env.SQUADCO_BASE_URL || 'https://sandbox-api-d.squadco.com',
    publicKey: process.env.SQUADCO_PUBLIC_KEY || '',
    secretKey: process.env.SQUADCO_SECRET_KEY || '',
};
// Initialize Squadco API client
const squadApi = axios_1.default.create({
    baseURL: SQUADCO_CONFIG.baseURL,
    headers: {
        'Authorization': `Bearer ${SQUADCO_CONFIG.secretKey}`,
        'Content-Type': 'application/json'
    }
});
// Updated type guard for SquadPaymentResponse
function isSquadPaymentResponse(response) {
    return response &&
        typeof response.status === 'number' &&
        typeof response.success === 'boolean' &&
        typeof response.message === 'string' &&
        response.data &&
        typeof response.data.transaction_ref === 'string' &&
        typeof response.data.checkout_url === 'string';
}
// Updated type guard for SquadPaymentVerificationResponse
function isSquadVerificationResponse(response) {
    return response &&
        typeof response.status === 'number' &&
        typeof response.success === 'boolean' &&
        typeof response.message === 'string' &&
        response.data &&
        typeof response.data.transaction_ref === 'string' &&
        typeof response.data.transaction_status === 'string' &&
        typeof response.data.transaction_amount === 'number';
}
async function allMiscBlogs(request, response) {
    try {
        // Get page and limit from query parameters, with defaults
        const page = parseInt(request.query.page) || 1;
        const limit = parseInt(request.query.limit) || 12;
        // Calculate offset for pagination
        const offset = (page - 1) * limit;
        // Get total count of published blogs
        const totalBlogs = await prisma.blogs.count({
            where: { published: true }
        });
        // Calculate total pages
        const totalPages = Math.ceil(totalBlogs / limit);
        // Get paginated blogs
        const blogs = await prisma.blogs.findMany({
            where: { published: true },
            include: {
                author: true,
                category: true,
                tags: true,
                comments: true
            },
            orderBy: { createdAt: 'desc' },
            skip: offset,
            take: limit
        });
        return response.status(200).json({
            message: 'Blogs fetched successfully',
            data: blogs,
            pagination: {
                currentPage: page,
                totalPages: totalPages,
                totalBlogs: totalBlogs,
                hasNext: page < totalPages,
                hasPrev: page > 1,
                limit: limit
            }
        });
    }
    catch (error) {
        console.error('Error fetching blogs:', error);
        return response.status(500).json({ message: 'Internal server error' });
    }
}
async function singleMiscBlog(request, response) {
    const slug = request.query.slug;
    if (!slug) {
        return response.status(403).json({ message: 'Slug is Required' });
    }
    try {
        const blog = await prisma.blogs.findFirst({
            where: { slug },
            include: {
                author: true,
                category: true,
                tags: true,
                comments: true
            }
        });
        if (!blog) {
            return response.status(404).json({ message: 'Blog not found' });
        }
        return response.status(200).json({ message: 'Blog fetched successfully', data: blog });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
async function related_post(request, response) {
    try {
        // Get the current post ID and category ID from query parameters
        const currentPostId = parseInt(request.query.postId);
        const categoryId = parseInt(request.query.categoryId);
        const limit = parseInt(request.query.limit) || 2;
        // Get total count of published blogs (excluding the current post)
        const totalBlogs = await prisma.blogs.count({
            where: {
                published: true,
                NOT: {
                    id: currentPostId
                }
            }
        });
        // If there are not enough blogs, just get all published blogs (excluding current)
        if (totalBlogs <= limit) {
            const blogs = await prisma.blogs.findMany({
                where: {
                    published: true,
                    NOT: {
                        id: currentPostId
                    }
                },
                include: {
                    author: true,
                    category: true,
                    tags: true,
                },
                orderBy: { createdAt: 'desc' }
            });
            return response.status(200).json({
                message: 'Related posts fetched successfully',
                data: blogs
            });
        }
        // Get random blogs (excluding the current post)
        // This approach uses ORDER BY RAND() which works in SQLite
        // For other databases, you might need a different approach
        const blogs = await prisma.$queryRaw `
      SELECT * FROM blogs 
      WHERE published = true 
      AND id != ${currentPostId}
      ORDER BY RAND() 
      LIMIT ${limit}
    `;
        // For PostgreSQL, use: ORDER BY RAND()
        // For MySQL, use: ORDER BY RAND()
        // We need to manually include the relations since raw queries don't support include
        const blogIds = blogs.map((blog) => blog.id);
        const blogsWithRelations = await prisma.blogs.findMany({
            where: {
                id: { in: blogIds }
            },
            include: {
                author: true,
                category: true,
                tags: true,
            }
        });
        return response.status(200).json({
            message: 'Related posts fetched successfully',
            data: blogsWithRelations
        });
    }
    catch (error) {
        console.error('Error fetching related posts:', error);
        return response.status(500).json({ message: 'Internal server error' });
    }
}
async function add_comment(request, response) {
    // Don't destructure cover_image from request.body since it comes from the file upload
    const { author, email, content, blog_id } = request.body;
    try {
        const validationRules = [
            (0, express_validator_1.body)('author').notEmpty().withMessage('Author is required').isLength({ min: 3 }).withMessage('Title must be at least 3 characters'),
            (0, express_validator_1.body)('content').notEmpty().withMessage('Content is required'),
            (0, express_validator_1.body)('blog_id').notEmpty().withMessage('blog ID is required').isInt().withMessage('Category ID must be an integer'),
            (0, express_validator_1.body)('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Must be an Email'),
        ];
        await Promise.all(validationRules.map((rule) => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const comment = await prisma.comment.create({
            data: {
                author,
                content,
                blog_id,
                email,
                approved: false
            }
        });
        return response.status(201).json({ message: 'Blog created successfully', data: comment });
    }
    catch (error) {
        console.error('Blog creation error:', error);
        // Handle Prisma validation errors specifically
        if (error instanceof models_1.Prisma.PrismaClientValidationError) {
            return response.status(400).json({
                message: 'Validation error - check your input data',
                error: process.env.NODE_ENV === 'development' ? error.message : undefined
            });
        }
        // Handle other Prisma errors
        if (error instanceof models_1.Prisma.PrismaClientKnownRequestError) {
            return response.status(400).json({
                message: 'Database error',
                error: process.env.NODE_ENV === 'development' ? error.message : undefined
            });
        }
        return response.status(500).json({
            message: 'Internal server error',
            error: process.env.NODE_ENV === 'development' ? error : undefined
        });
    }
}
async function fetch_comment(request, response) {
    // Don't destructure cover_image from request.body since it comes from the file upload
    const { blog_id } = request.body;
    try {
        const validationRules = [
            (0, express_validator_1.body)('blog_id').notEmpty().withMessage('blog ID is required').isInt().withMessage('Blog ID must be an integer'),
        ];
        await Promise.all(validationRules.map((rule) => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const comments = await prisma.comment.findMany({
            where: {
                blog_id,
            }
        });
        return response.status(201).json({ message: 'Blog fetched successfully', data: comments });
    }
    catch (error) {
        console.error('Blog creation error:', error);
        // Handle Prisma validation errors specifically
        if (error instanceof models_1.Prisma.PrismaClientValidationError) {
            return response.status(400).json({
                message: 'Validation error - check your input data',
                error: process.env.NODE_ENV === 'development' ? error.message : undefined
            });
        }
        // Handle other Prisma errors
        if (error instanceof models_1.Prisma.PrismaClientKnownRequestError) {
            return response.status(400).json({
                message: 'Database error',
                error: process.env.NODE_ENV === 'development' ? error.message : undefined
            });
        }
        return response.status(500).json({
            message: 'Internal server error',
            error: process.env.NODE_ENV === 'development' ? error : undefined
        });
    }
}
async function createDonation(request, response) {
    const { amount, type, currency, fullName, email } = request.body;
    try {
        const validationRules = [
            (0, express_validator_1.body)('amount').notEmpty().withMessage('Amount is required').isFloat({ min: 0.01 }).withMessage('Amount must be greater than 0'),
            (0, express_validator_1.body)('fullName').notEmpty().withMessage('Full name is required'),
            (0, express_validator_1.body)('email').isEmail().withMessage('Valid email is required'),
            (0, express_validator_1.body)('type').isIn(['general', 'education', 'livelihood', 'peace']).withMessage('Invalid donation type'),
            (0, express_validator_1.body)('currency').optional().isLength({ min: 3, max: 3 }).withMessage('Currency must be 3 characters')
        ];
        await Promise.all(validationRules.map((rule) => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // Generate a unique reference for the transaction
        const reference = `DON_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        // Create donation record with pending status
        const donation = await prisma.donation.create({
            data: {
                amount,
                type,
                currency: currency || 'NGN',
                fullName,
                email,
                reference,
                status: 'pending'
            }
        });
        // Prepare payment data for Squadco
        const paymentData = {
            amount: amount * 100, // Convert to kobo (smallest currency unit)
            email: email,
            currency: currency || "NGN",
            initiate_type: "inline",
            transaction_ref: reference,
            customer_name: fullName,
            metadata: {
                donationId: donation.id,
                donationType: type,
            },
            pass_charge: false,
            callback_url: `${process.env.FRONTEND_URL}/payment-verification`,
        };
        // Make request to Squadco API
        const squadResponse = await squadApi.post('/transaction/initiate', paymentData);
        // Use type guard to check response structure
        if (isSquadPaymentResponse(squadResponse.data)) {
            const responseData = squadResponse.data;
            // Update donation with payment URL (now checkout_url instead of payment_url)
            await prisma.donation.update({
                where: { id: donation.id },
                data: {
                    paymentUrl: responseData.data.checkout_url
                }
            });
            return response.status(200).json({
                message: 'Donation created successfully',
                data: {
                    donation,
                    paymentUrl: responseData.data.checkout_url
                }
            });
        }
        else {
            // Handle unexpected response format
            console.error('Unexpected Squadco response format:', squadResponse.data);
            // Update donation status to failed
            await prisma.donation.update({
                where: { id: donation.id },
                data: { status: 'failed' }
            });
            return response.status(400).json({
                message: 'Failed to initialize payment with Squadco: Unexpected response format'
            });
        }
    }
    catch (error) {
        // Check if it's an axios error
        if (error.response) {
            // The request was made and the server responded with a status code
            console.error('Squadco API error response:', error.response.data);
            return response.status(500).json({
                message: 'Payment gateway error',
                error: process.env.NODE_ENV === 'development' ? error.response.data : undefined
            });
        }
        else if (error.request) {
            // The request was made but no response was received
            console.error('No response from Squadco API:', error.request);
            return response.status(500).json({
                message: 'No response received from payment gateway'
            });
        }
        else {
            // Something else happened
            console.error('Donation creation error:', error.message);
            return response.status(500).json({
                message: 'Internal server error',
                error: process.env.NODE_ENV === 'development' ? error.message : undefined
            });
        }
    }
}
async function verifyPayment(request, response) {
    const { reference } = request.params;
    try {
        // Test database connection first
        await prisma.$connect();
        // Verify payment with Squadco
        const squadResponse = await squadApi.get(`/transaction/verify/${reference}`);
        // Use type guard to check response structure
        if (isSquadVerificationResponse(squadResponse.data)) {
            const responseData = squadResponse.data;
            const paymentData = responseData.data;
            // Update donation status based on transaction_status
            let status = 'pending';
            if (paymentData.transaction_status === 'success')
                status = 'completed';
            if (paymentData.transaction_status === 'failed')
                status = 'failed';
            const donation = await prisma.donation.update({
                where: { reference },
                data: {
                    status,
                    paymentData: paymentData
                }
            });
            return response.status(200).json({
                success: true,
                data: {
                    donation,
                    paymentStatus: paymentData.transaction_status,
                    amount: paymentData.transaction_amount / 100, // Convert back from kobo
                    currency: paymentData.transaction_currency_id,
                    fee: paymentData.fee / 100, // Convert back from kobo
                    merchantAmount: paymentData.merchant_amount / 100 // Convert back from kobo
                }
            });
        }
        else {
            // Handle unexpected response format
            console.error('Unexpected Squadco verification response format:', squadResponse.data);
            return response.status(400).json({
                success: false,
                message: 'Payment verification failed: Unexpected response format'
            });
        }
    }
    catch (error) {
        console.error('Payment verification error:', error);
        // Handle database connection errors specifically
        if (error.code === 'P1001' || error.code === 'P1017') {
            return response.status(500).json({
                message: 'Database connection error. Please check your database credentials and connection.'
            });
        }
        // Check if it's an axios error
        if (error.response) {
            console.error('Squadco verification API error:', error.response.data);
            return response.status(500).json({
                message: 'Payment gateway error',
                error: process.env.NODE_ENV === 'development' ? error.response.data : undefined
            });
        }
        else if (error.request) {
            console.error('No response from Squadco API:', error.request);
            return response.status(500).json({
                message: 'No response received from payment gateway'
            });
        }
        else {
            console.error('Payment verification error:', error.message);
            return response.status(500).json({
                message: 'Internal server error',
                error: process.env.NODE_ENV === 'development' ? error.message : undefined
            });
        }
    }
    finally {
        // Always disconnect from Prisma
        await prisma.$disconnect();
    }
}
// Also update your webhook handler to use the correct field names
async function handleWebhook(request, response) {
    try {
        const webhookData = request.body;
        // Verify the webhook signature here (implementation depends on Squadco's method)
        // Process the webhook based on the event
        if (webhookData.event === 'charge.success') {
            const reference = webhookData.data.transaction_ref;
            // Update donation status to completed
            await prisma.donation.update({
                where: { reference },
                data: {
                    status: 'completed',
                    paymentData: webhookData.data
                }
            });
            console.log('Payment successful for reference:', reference);
        }
        else if (webhookData.event === 'charge.failed') {
            const reference = webhookData.data.transaction_ref;
            // Update donation status to failed
            await prisma.donation.update({
                where: { reference },
                data: {
                    status: 'failed',
                    paymentData: webhookData.data
                }
            });
            console.log('Payment failed for reference:', reference);
        }
        response.status(200).json({ received: true });
    }
    catch (error) {
        console.error('Webhook error:', error.message);
        response.status(500).json({ error: 'Webhook processing failed' });
    }
}
// Utility function to verify webhook signature (placeholder - implement based on Squadco docs)
function verifySignature(signature, payload) {
    if (!signature)
        return false;
    // Implement actual signature verification based on Squadco's documentation
    // This typically involves creating a HMAC signature and comparing it to the provided signature
    return true; // Placeholder
}
