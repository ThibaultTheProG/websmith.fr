/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as nodemailer from "nodemailer";
import { defineSecret } from "firebase-functions/params";

// Définition des secrets pour les informations d'email
const emailUser = defineSecret("EMAIL_USER");
const emailPass = defineSecret("EMAIL_PASS");
const emailHost = defineSecret("EMAIL_HOST");
const emailPort = defineSecret("EMAIL_PORT");
const emailRecipient = defineSecret("EMAIL_RECIPIENT");

// Interface pour les données du formulaire
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  projectDescription: string;
}

// Fonction pour envoyer un email
export const sendContactEmail = onRequest(
  {
    secrets: [emailUser, emailPass, emailHost, emailPort, emailRecipient],
    cors: true,
    region: "europe-west1",
  },
  async (req, res) => {
    // Vérifier que la méthode est POST
    if (req.method !== "POST") {
      res.status(405).send("Méthode non autorisée");
      return;
    }

    try {
      const formData: FormData = req.body;

      // Vérification des données requises
      if (
        !formData.fullName ||
        !formData.email ||
        !formData.phone ||
        !formData.subject ||
        !formData.projectDescription
      ) {
        res.status(400).send("Données de formulaire incomplètes");
        return;
      }

      // Configuration du transporteur d'email
      const transporter = nodemailer.createTransport({
        host: emailHost.value(),
        port: parseInt(emailPort.value()),
        secure: true,
        auth: {
          user: emailUser.value(),
          pass: emailPass.value(),
        },
      });

      // Contenu de l'email
      const mailOptions = {
        from: emailUser.value(),
        to: emailRecipient.value(),
        subject: `Nouveau message de contact: ${formData.subject}`,
        html: `
          <h2>Nouveau message de contact</h2>
          <p><strong>Nom:</strong> ${formData.fullName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Téléphone:</strong> ${formData.phone}</p>
          <p><strong>Objet:</strong> ${formData.subject}</p>
          <h3>Description du projet:</h3>
          <p>${formData.projectDescription.replace(/\n/g, "<br>")}</p>
        `,
      };

      // Envoi de l'email
      await transporter.sendMail(mailOptions);

      // Email de confirmation au client
      const clientMailOptions = {
        from: emailUser.value(),
        to: formData.email,
        subject: "Confirmation de votre message - WebSmith",
        html: `
          <h2>Merci pour votre message, ${formData.fullName}!</h2>
          <p>Nous avons bien reçu votre demande concernant "${
            formData.subject
          }".</p>
          <p>Notre équipe va étudier votre projet et vous recontactera dans les plus brefs délais.</p>
          <p>Voici un récapitulatif de votre message:</p>
          <p><strong>Description du projet:</strong><br>${formData.projectDescription.replace(
            /\n/g,
            "<br>"
          )}</p>
          <p>À bientôt,<br>L'équipe WebSmith</p>
        `,
      };

      // Envoi de l'email de confirmation
      await transporter.sendMail(clientMailOptions);

      // Log de succès
      logger.info("Email envoyé avec succès", {
        name: formData.fullName,
        email: formData.email,
        subject: formData.subject,
      });

      // Réponse de succès
      res
        .status(200)
        .send({ success: true, message: "Email envoyé avec succès" });
    } catch (error) {
      // Log d'erreur
      logger.error("Erreur lors de l'envoi de l'email", error);

      // Réponse d'erreur
      res.status(500).send({
        success: false,
        message: "Erreur lors de l'envoi de l'email",
        error: error instanceof Error ? error.message : "Erreur inconnue",
      });
    }
  }
);
