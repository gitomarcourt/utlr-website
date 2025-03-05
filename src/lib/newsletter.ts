const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbytNOu91taxbAy0Oz5UhGB6SvwY6bGTBHKP9qBomkcfJhcsU2yNQLxPrjhRXGhYX9Js/exec';

function isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

export async function subscribeToNewsletter(email: string) {
    if (!isValidEmail(email)) {
        throw new Error('Adresse email invalide');
    }

    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        });

        if (!response.ok) {
            throw new Error('Erreur réseau');
        }

        const data = await response.json();
        
        if (data.status === 'error') {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        console.error('Erreur lors de l\'inscription:', error);
        throw error;
    }
}
