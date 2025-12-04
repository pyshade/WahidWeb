import { Request, Response } from "express";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(1, "Message is required"),
});

export async function handleContact(req: Request, res: Response) {
    try {
        const { name, email, subject, message } = contactSchema.parse(req.body);

        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            console.error("RESEND_API_KEY is missing");
            return res.status(500).json({ error: "Server configuration error" });
        }

        const resend = new Resend(apiKey);

        const { data, error } = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>", // Default Resend testing domain
            to: [process.env.CONTACT_EMAIL || "delivered@resend.dev"], // Recipient email
            subject: `New Contact Form Submission: ${subject}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
            replyTo: email,
        });

        if (error) {
            console.error("Resend error:", error);
            return res.status(500).json({ error: "Failed to send email" });
        }

        return res.json({ success: true, data });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ error: error.errors[0].message });
        }
        console.error("Contact handler error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
