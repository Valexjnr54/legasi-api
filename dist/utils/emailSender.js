"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWelcomeEmail = sendWelcomeEmail;
exports.sendAssignTaskEmail = sendAssignTaskEmail;
exports.sendSubmitTaskEmail = sendSubmitTaskEmail;
exports.sendVerificationEmail = sendVerificationEmail;
// src/utils/emailSender.ts
const nodemailer_1 = __importDefault(require("nodemailer"));
const ejs_1 = __importDefault(require("ejs"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const transporter = nodemailer_1.default.createTransport({
    host: process.env.MAIL_HOST || "mail.legasi.org",
    port: 465,
    auth: {
        user: process.env.MAIL_USER || "support@legasi.org",
        pass: process.env.MAIL_PASSWORD || "#Kj6mv%!mo"
    }
});
async function sendWelcomeEmail(email, subject, user, temp_password) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/welcome.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    //   const template = await ejs.renderFile(templatePath, { fullname, email: email });
    const mailOptions = {
        from: 'no-reply@legasi.org',
        to: email,
        subject: subject,
        html: ejs_1.default.render(template, { user, email, temp_password }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
async function sendAssignTaskEmail(email, subject, user, project) {
    try {
        // Load the email template
        const templatePath = path_1.default.resolve(process.cwd(), 'src/templates/email-templates/assign_task.ejs');
        // Read the EJS template from the file
        const template = fs_1.default.readFileSync(templatePath, 'utf-8');
        const mailOptions = {
            from: 'no-reply@legasi.org',
            to: email,
            subject,
            html: ejs_1.default.render(template, { project, user, email }),
        };
        await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully to', email);
    }
    catch (err) {
        console.error('❌ Error sending email:', err);
        // Wrap the error so the controller sees a clean message
        const error = new Error(err.message || err.response || 'Failed to send assignment email');
        throw error;
    }
}
async function sendSubmitTaskEmail(email, subject, user, data) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/submit_task.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'no-reply@legasi.org',
        to: email,
        subject,
        html: ejs_1.default.render(template, { user, email, data }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
async function sendVerificationEmail(email, subject, verification_code, user) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/verification.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'no-reply@smarthome.com',
        to: email,
        subject: subject,
        html: ejs_1.default.render(template, { verification_code: verification_code, user: user, email: email }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
