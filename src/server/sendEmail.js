'use server';

import nodemailer from 'nodemailer';

export async function sendContactEmail(formData) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const name = formData.get('name') || `${formData.get('firstName')} ${formData.get('lastName')}`;
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service') || 'General Inquiry';
    const message = formData.get('message');
    const address = formData.get('address');
    const city = formData.get('city');
    const state = formData.get('state');
    const zip = formData.get('zip');

    let fullAddress = '';
    if (address || city || state || zip) {
       fullAddress = `${address || ''}, ${city || ''}, ${state || ''} ${zip || ''}`;
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to the same address as requested
      subject: `New Lead: ${service} from ${name}`,
      html: `
        <h2>New Website Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Requested:</strong> ${service}</p>
        ${fullAddress ? `<p><strong>Address:</strong> ${fullAddress}</p>` : ''}
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error: 'Failed to send email' };
  }
}
