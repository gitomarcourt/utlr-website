// URL de l'API Brevo (anciennement Sendinblue)
const BREVO_API_URL = 'https://api.brevo.com/v3/contacts';
const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY || '';
// Remplacez la valeur ci-dessous par l'ID de votre liste "UTLR Newsletter"
// Vous pouvez trouver cet ID dans l'URL lorsque vous consultez votre liste dans Brevo
// Par exemple: https://app.brevo.com/contact/lists/123 → l'ID est 123
const BREVO_LIST_ID = 3; // ⚠️ À MODIFIER avec l'ID de votre liste

function isValidEmail(email: string) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export async function subscribeToNewsletter(email: string) {
  if (!isValidEmail(email)) {
    throw new Error('Adresse email invalide');
  }

  if (!BREVO_API_KEY) {
    console.error('Clé API Brevo non configurée');
    throw new Error('Configuration du service de newsletter incomplète');
  }

  try {
    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        email,
        listIds: [BREVO_LIST_ID],
        updateEnabled: false,
        attributes: {
          SOURCE: 'website_utlr',
          SIGNUP_DATE: new Date().toISOString().split('T')[0]
        }
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      // Si l'email existe déjà, Brevo renvoie une erreur spécifique
      if (response.status === 400 && data.message && data.message.includes('already exists')) {
        throw new Error('Cet email est déjà inscrit à notre newsletter');
      }
      throw new Error(data.message || 'Erreur lors de l\'inscription');
    }

    return { status: 'success', message: 'Inscription réussie' };
  } catch (error: any) {
    console.error('Erreur lors de l\'inscription:', error);
    throw error;
  }
}
