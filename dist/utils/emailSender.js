"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWelcomeEmail = sendWelcomeEmail;
exports.sendDeliveryRequest = sendDeliveryRequest;
exports.sendProposal = sendProposal;
exports.sendApproval = sendApproval;
exports.sendReject = sendReject;
exports.sendVerificationEmail = sendVerificationEmail;
// src/utils/emailSender.ts
const nodemailer_1 = __importDefault(require("nodemailer"));
const ejs_1 = __importDefault(require("ejs"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const transporter = nodemailer_1.default.createTransport({
    host: process.env.MAIL_HOST || "smtp.gmail.com",
    port: 465,
    auth: {
        user: process.env.MAIL_USER || "qmarthub@gmail.com",
        pass: process.env.MAIL_PASSWORD || "fukpospayyoomzlv"
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
async function sendDeliveryRequest(email, rider, deliveryDetail) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/delivery.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'info@riderapp.com',
        to: email,
        subject: 'Welcome to Riders App',
        html: ejs_1.default.render(template, { deliveryDetail: deliveryDetail, rider: rider, email: email }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
async function sendProposal(email, proposal) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/proposal.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'info@riderapp.com',
        to: email,
        subject: 'Welcome to Riders App',
        html: ejs_1.default.render(template, { proposal: proposal, email: email }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
async function sendApproval(email, deliveryDetail) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/approve.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'info@riderapp.com',
        to: email,
        subject: 'Welcome to Riders App',
        html: ejs_1.default.render(template, { deliveryDetail: deliveryDetail, email: email }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
async function sendReject(email, deliveryDetail) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/reject.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'info@riderapp.com',
        to: email,
        subject: 'Welcome to Riders App',
        html: ejs_1.default.render(template, { deliveryDetail: deliveryDetail, email: email }),
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
