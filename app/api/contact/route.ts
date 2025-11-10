// app/api/contact/route.ts (Next.js App Router)
import { EmailTemplateContact } from "@/lib/email-template-contact";
import { emailTemplateRecap } from "@/lib/email-template-recap";
import { mailProps } from "@/types/types";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ⚠️ Utilise des variables serveur (non NEXT_PUBLIC_)
const SMTP_SERVER_USERNAME = process.env.EMAIL_USERNAME!;
const SMTP_SERVER_PASSWORD = process.env.EMAIL_PASSWORD!;

const transporter = nodemailer.createTransport({
  host: "smtp.titan.email",
  port: 465,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
  // Inutile et potentiellement risqué :
  // tls: { rejectUnauthorized: false },
});

export async function POST(request: Request) {
  try {
    const { email, name, subject, message, phone }: mailProps = await request.json();

    if (!SMTP_SERVER_USERNAME || !SMTP_SERVER_PASSWORD) {
      return NextResponse.json(
        { error: "Les identifiants SMTP ne sont pas définis." },
        { status: 500 }
      );
    }

    if (!email || !name || !subject || !message || !phone) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    // 1) Notification interne (vers ta boîte). Le point clé est replyTo 👇
    const notificationToOwner = {
      from: `"${process.env.SITE_NAME ?? "Site Web"}" <${SMTP_SERVER_USERNAME}>`, // doit rester une adresse de TON domaine
      to: SMTP_SERVER_USERNAME,
      subject: `[Contact] ${subject}`,
      text: `De: ${name} <${email}> | Tel: ${phone}\n\n${message}`,
      html: EmailTemplateContact({ email, name, phone, subject, message }),
      replyTo: `"${name}" <${email}>`, // ✅ bouton Répondre => l'adresse du visiteur
      // (optionnel) envelope si tu veux forcer l’enveloppe SMTP
      // envelope: { from: SMTP_SERVER_USERNAME, to: SITE_MAIL_RECEIVER }
    };

    // 2) Accusé de réception pour le visiteur
    const confirmationToVisitor = {
      from: `"${process.env.SITE_NAME ?? "Support"}" <${SMTP_SERVER_USERNAME}>`,
      to: email,
      subject: "Nous avons bien reçu votre message",
      html: emailTemplateRecap({ email, name, phone, subject, message }),
    };

    const submittedMail = await transporter.sendMail(notificationToOwner);
    const confirmation = await transporter.sendMail(confirmationToVisitor);

    console.log("Notification ID:", submittedMail.messageId);
    console.log("Confirmation ID:", confirmation.messageId);

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { error: "Erreur interne lors de l'envoi de l'email." },
      { status: 500 }
    );
  }
}
