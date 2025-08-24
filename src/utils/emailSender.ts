// src/utils/emailSender.ts
import nodemailer, { TransportOptions, SentMessageInfo } from 'nodemailer';
import ejs from 'ejs';
import path from 'path';
import fs from "fs";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || "mail.legasi.org",
  port: 465,
  auth: {
    user: process.env.MAIL_USER || "support@legasi.org",
    pass: process.env.MAIL_PASSWORD || "#Kj6mv%!mo"
  }
});

export async function sendWelcomeEmail(email: string, subject: string, user:object, temp_password:string) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/welcome.ejs');
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, 'utf-8');
//   const template = await ejs.renderFile(templatePath, { fullname, email: email });

  const mailOptions = {
    from: 'no-reply@legasi.org',
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

export async function sendAssignTaskEmail(email: string, subject: string, user: object, project: object) {
  try {
    // Load the email template
    const templatePath = path.resolve(process.cwd(), 'src/templates/email-templates/assign_task.ejs');

    // Read the EJS template from the file
    const template = fs.readFileSync(templatePath, 'utf-8');

    const mailOptions = {
      from: 'no-reply@legasi.org',
      to: email,
      subject,
      html: ejs.render(template, { project, user, email }),
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully to', email);
  } catch (err: any) {
    console.error('❌ Error sending email:', err);

    // Wrap the error so the controller sees a clean message
    const error = new Error(
      err.message || err.response || 'Failed to send assignment email'
    );
    throw error;
  }
}


export async function sendSubmitTaskEmail(email: string, subject:string, user: object, data:object) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/submit_task.ejs');
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, 'utf-8');

  const mailOptions = {
    from: 'no-reply@legasi.org',
    to: email,
    subject,
    html: ejs.render(template, { user, email, data }),
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