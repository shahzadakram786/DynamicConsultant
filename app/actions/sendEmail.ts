'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  try {
    // 1. Extract the file
    const file = formData.get('file') as File | null;
    let attachment = null;

    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachment = {
        content: buffer,
        filename: file.name,
      };
    }

    // 2. Build the Email HTML with all your data
    // We extract keys manually here to ensure the order is professional for the client
    const htmlBody = `
      <div style="font-family: sans-serif; color: #333; max-width: 600px;">
        <h2 style="color: #000;">New Patient Inquiry</h2>
        <p>A new message has been sent from the website contact form.</p>
        <hr />
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0;"><strong>Recipient:</strong></td><td>${formData.get('recipient')}</td></tr>
          <tr><td style="padding: 8px 0;"><strong>First Name:</strong></td><td>${formData.get('firstName')}</td></tr>
          <tr><td style="padding: 8px 0;"><strong>Last Name:</strong></td><td>${formData.get('lastName')}</td></tr>
          <tr><td style="padding: 8px 0;"><strong>Email:</strong></td><td>${formData.get('email')}</td></tr>
          <tr><td style="padding: 8px 0;"><strong>Phone:</strong></td><td>${formData.get('phone')}</td></tr>
          <tr><td style="padding: 8px 0;"><strong>Preferred Name:</strong></td><td>${formData.get('nameYouGoBy') || 'N/A'}</td></tr>
          <tr><td style="padding: 8px 0;"><strong>Date of Birth:</strong></td><td>${formData.get('dateOfBirth')}</td></tr>
          <tr><td style="padding: 8px 0;"><strong>State:</strong></td><td>${formData.get('state')}</td></tr>
          <tr><td style="padding: 8px 0;"><strong>Confirm Phone:</strong></td><td>${formData.get('additionalPhone')}</td></tr>
        </table>
        <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 8px;">
          <strong>Practitioner Notes:</strong><br />
          ${formData.get('preferences') || 'No additional notes provided.'}
        </div>
        <p style="font-size: 12px; color: #777; margin-top: 20px;">
          The Driver's License document is attached to this email.
        </p>
      </div>
    `;

    // 3. Send via Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Update to verified domain later
      to: ['alyakram786@gmail.com'], // The email receiving the forms
      subject: `New Inquiry from ${formData.get('firstName')} ${formData.get('lastName')}`,
      html: htmlBody,
      attachments: attachment ? [attachment] : [],
    });

    if (error) return { success: false, error: error.message };
    return { success: true };

  } catch (err) {
    console.error("Submission Error:", err);
    return { success: false, error: "Internal Server Error" };
  }
}