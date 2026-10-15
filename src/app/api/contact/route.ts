import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate inputs
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Name is required.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Message cannot be empty.' },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST || 'smtp.hostinger.com';
    const port = Number(process.env.SMTP_PORT) || 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const recipient = process.env.CONTACT_RECEIVER_EMAIL || 'sharmaneeraj1810@gmail.com';

    if (!user || !pass) {
      console.error('[SMTP Config Error] Missing SMTP_USER or SMTP_PASS environment variables.');
      return NextResponse.json(
        { success: false, error: 'Email service is currently unconfigured.' },
        { status: 500 }
      );
    }

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // SSL for 465, TLS/STARTTLS for 587
      auth: {
        user,
        pass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim();
    const sanitizedMessage = message.trim();
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    // Send Notification Email to Neeraj
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${user}>`,
      to: recipient,
      replyTo: `${sanitizedName} <${sanitizedEmail}>`,
      subject: `[Portfolio Inquiry] New message from ${sanitizedName}`,
      text: `You received a new inquiry from your portfolio website:\n\nName: ${sanitizedName}\nEmail: ${sanitizedEmail}\nDate: ${timestamp} (IST)\n\nMessage:\n${sanitizedMessage}\n\n---\nSent via neerajkumar.dev`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F8F1E8; margin: 0; padding: 24px; color: #29251F; }
            .container { max-width: 600px; margin: 0 auto; background: #FFFCF7; border-radius: 16px; border: 1px solid #EAD8C8; overflow: hidden; box-shadow: 0 4px 16px rgba(41,37,31,0.06); }
            .header { background: #965239; padding: 24px 32px; color: #FFFCF7; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.01em; }
            .header p { margin: 4px 0 0 0; font-size: 13px; opacity: 0.85; }
            .content { padding: 32px; }
            .field-row { margin-bottom: 20px; }
            .field-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #965239; margin-bottom: 4px; }
            .field-value { font-size: 15px; color: #29251F; font-weight: 500; }
            .message-box { background: #F8F1E8; border: 1px solid #EAD8C8; border-radius: 12px; padding: 18px; margin-top: 8px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #29251F; }
            .footer { padding: 20px 32px; background: #F2E4D8; border-top: 1px solid #EAD8C8; font-size: 12px; color: #6E675F; text-align: center; }
            .reply-btn { display: inline-block; background: #B76E4F; color: #FFFCF7 !important; padding: 10px 20px; border-radius: 999px; text-decoration: none; font-size: 13px; font-weight: 600; margin-top: 16px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Portfolio Inquiry</h1>
              <p>Submitted through the contact form on your portfolio website</p>
            </div>
            <div class="content">
              <div class="field-row">
                <div class="field-label">Sender Name</div>
                <div class="field-value">${sanitizedName}</div>
              </div>
              <div class="field-row">
                <div class="field-label">Sender Email</div>
                <div class="field-value"><a href="mailto:${sanitizedEmail}" style="color: #965239; text-decoration: underline;">${sanitizedEmail}</a></div>
              </div>
              <div class="field-row">
                <div class="field-label">Received At</div>
                <div class="field-value" style="font-size: 13px; color: #6E675F;">${timestamp} (IST)</div>
              </div>
              <div class="field-row">
                <div class="field-label">Message</div>
                <div class="message-box">${sanitizedMessage}</div>
              </div>
              <div>
                <a href="mailto:${sanitizedEmail}?subject=Re: Portfolio Inquiry" class="reply-btn">Reply to ${sanitizedName}</a>
              </div>
            </div>
            <div class="footer">
              This email was automatically dispatched by your Next.js portfolio application.
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully! Neeraj will get back to you soon.' },
      { status: 200 }
    );
  } catch (err: unknown) {
    const error = err as Error;
    console.error('[Contact Form API Error]', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to send message via SMTP. Please try again or email directly.',
      },
      { status: 500 }
    );
  }
}
