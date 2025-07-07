// src/utils/emailSender.ts
import nodemailer, { TransportOptions, SentMessageInfo } from 'nodemailer';
import ejs from 'ejs';
import path from 'path';
import fs from "fs";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.MAIL_USER || "qmarthub@gmail.com",
    pass: process.env.MAIL_PASSWORD || "fukpospayyoomzlv"
  }
});

export async function sendWelcomeEmail(email: string, subject: string, user:object, temp_password:string) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/welcome.ejs');
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, 'utf-8');
//   const template = await ejs.renderFile(templatePath, { fullname, email: email });

  const mailOptions = {
    from: 'no-reply@coalcitysmarthome.com',
    to: email,
    subject: subject,
    html: ejs.render(template, { user, email, temp_password }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export async function sendDeliveryRequest(email: string, rider:object, deliveryDetail: object) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/delivery.ejs');
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, 'utf-8');

  const mailOptions = {
    from: 'info@riderapp.com',
    to: email,
    subject: 'Welcome to Riders App',
    html: ejs.render(template, { deliveryDetail:deliveryDetail, rider:rider, email:email }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export async function sendProposal(email: string, proposal: object) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/proposal.ejs');
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, 'utf-8');

  const mailOptions = {
    from: 'info@riderapp.com',
    to: email,
    subject: 'Welcome to Riders App',
    html: ejs.render(template, { proposal:proposal, email:email }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export async function sendApproval(email: string, deliveryDetail: object) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/approve.ejs');
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, 'utf-8');

  const mailOptions = {
    from: 'info@riderapp.com',
    to: email,
    subject: 'Welcome to Riders App',
    html: ejs.render(template, { deliveryDetail:deliveryDetail, email:email }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export async function sendReject(email: string, deliveryDetail: object) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/reject.ejs');
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, 'utf-8');

  const mailOptions = {
    from: 'info@riderapp.com',
    to: email,
    subject: 'Welcome to Riders App',
    html: ejs.render(template, { deliveryDetail:deliveryDetail, email:email }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export async function sendVerificationEmail(email:string, subject:string, verification_code:string, user:object) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/verification.ejs');
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, 'utf-8');

  const mailOptions = {
    from: 'no-reply@smarthome.com',
    to: email,
    subject: subject,
    html: ejs.render(template, { verification_code:verification_code, user:user, email:email }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}