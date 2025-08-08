"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequestBody = void 0;
const validateRequestBody = (requiredFields) => {
    return (req, res, next) => {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                success: false,
                error: 'Empty Request',
                message: 'Request body cannot be empty',
                requiredFields,
                example: {
                    ...requiredFields.reduce((acc, field) => {
                        acc[field] = field.includes('email') ? 'user@example.com' :
                            field.includes('password') ? 'securePassword123' :
                                'Example ' + field;
                        return acc;
                    }, {})
                }
            });
        }
        const missingFields = requiredFields.filter(field => !req.body[field]);
        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                error: 'Missing Fields',
                message: 'Required fields are missing',
                missingFields,
                requiredFields
            });
        }
        next();
    };
};
exports.validateRequestBody = validateRequestBody;
