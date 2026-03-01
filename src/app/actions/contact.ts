"use server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(data: ContactFormData): Promise<ContactResult> {
  const { name, email, message } = data;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { success: false, error: "All fields are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Invalid email address." };
  }

  if (message.trim().length < 10) {
    return { success: false, error: "Message is too short." };
  }

  try {
    // Integration point: replace with your preferred email service.
    // Examples: Resend, SendGrid, Nodemailer, or a third-party webhook.
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Portfolio <noreply@yourdomain.com>',
    //   to: personalInfo.email,
    //   subject: `Contact from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    // });

    console.log("Contact form submission:", { name, email, message });

    return { success: true };
  } catch {
    return { success: false, error: "Failed to send message. Please try again." };
  }
}
