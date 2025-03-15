// Configuration des URLs des API
const config = {
  // URL de base pour les fonctions Firebase
  // Remplacez [REGION] et [PROJECT_ID] par vos valeurs réelles
  firebaseFunctionsBaseUrl: process.env.NEXT_PUBLIC_FIREBASE_FUNCTIONS_URL || 'https://[REGION]-[PROJECT_ID].cloudfunctions.net',
  
  // Endpoints des fonctions
  endpoints: {
    contact: '/sendContactEmail',
  },
};

export default config; 