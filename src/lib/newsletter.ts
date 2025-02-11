import { neon } from "@neondatabase/serverless";

function isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

export async function subscribeToNewsletter(email: string) {
    if (!isValidEmail(email)) {
        throw new Error('Adresse email invalide');
    }

    const databaseUrl = import.meta.env.VITE_DATABASE_URL;
    if (!databaseUrl) {
        throw new Error('VITE_DATABASE_URL environment variable is not defined');
    }
    console.log(databaseUrl);
    const sql = neon(databaseUrl);
    const data = await sql`INSERT INTO newsletter_subscribers 
    (email) VALUES (${email});`;
    return data;
}
