# Configuration des Fonctions Firebase pour WebSmith

Ce dossier contient les fonctions Firebase Cloud Functions utilisées par le site WebSmith.

## Configuration requise

1. Installer Firebase CLI globalement :
```bash
npm install -g firebase-tools
```

2. Se connecter à Firebase :
```bash
firebase login
```

3. Initialiser le projet Firebase (si ce n'est pas déjà fait) :
```bash
firebase init
```

## Configuration des secrets

Pour que la fonction d'envoi d'email fonctionne, vous devez configurer les secrets suivants : mail.infomaniak.com

```bash
firebase functions:secrets:set EMAIL_USER
# Entrez l'adresse email qui sera utilisée pour envoyer les emails (ex: thibault.tuffin@websmith.fr)

firebase functions:secrets:set EMAIL_PASS
# Entrez le mot de passe de l'email (ou le mot de passe d'application pour Gmail)

firebase functions:secrets:set EMAIL_HOST
# Entrez l'hôte SMTP (ex: mail.infomaniak.fr)

firebase functions:secrets:set EMAIL_PORT
# Entrez le port SMTP (ex: 465)

firebase functions:secrets:set EMAIL_RECIPIENT
# Entrez l'adresse email qui recevra les notifications (ex: tuffinthibaultgw@gmail.com)
```

## Développement local

Pour tester les fonctions localement :

```bash
npm run serve
```

## Déploiement

Pour déployer les fonctions sur Firebase :

```bash
npm run deploy
```

## Configuration du site Next.js

Après le déploiement, mettez à jour le fichier `.env.local` à la racine du projet avec l'URL de vos fonctions :

```
NEXT_PUBLIC_FIREBASE_FUNCTIONS_URL=https://[REGION]-[PROJECT_ID].cloudfunctions.net
```

Remplacez `[REGION]` par la région de déploiement (ex: europe-west1) et `[PROJECT_ID]` par l'ID de votre projet Firebase.

## Notes importantes

- Si vous utilisez Gmail comme service d'envoi d'emails, vous devrez créer un "mot de passe d'application" dans les paramètres de sécurité de votre compte Google.
- Assurez-vous que les paramètres CORS sont correctement configurés pour permettre les requêtes depuis votre domaine. 