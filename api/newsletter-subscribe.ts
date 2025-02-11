import type { VercelRequest, VercelResponse } from '@vercel/node'
import { list, put } from '@vercel/blob'

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = request.body

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return response.status(400).json({ error: 'Invalid email address' })
  }

  try {
    // Lire la liste actuelle des emails
    const { blobs } = await list()
    const emailsBlob = blobs.find(blob => blob.pathname === 'newsletter/subscribers.txt')
    
    let currentEmails = ''
    if (emailsBlob) {
      const response = await fetch(emailsBlob.url)
      currentEmails = await response.text()
    }

    // Vérifier si l'email existe déjà
    if (currentEmails.includes(email)) {
      return response.status(400).json({ error: 'Email already subscribed' })
    }

    // Ajouter le nouvel email avec la date
    const newContent = currentEmails ? 
      `${currentEmails}\n${email},${new Date().toISOString()}` :
      `${email},${new Date().toISOString()}`

    // Sauvegarder dans le blob store
    await put('newsletter/subscribers.txt', newContent, {
      access: 'public',
    })

    return response.status(200).json({ 
      success: true,
      message: 'Successfully subscribed to newsletter'
    })
  } catch (error) {
    console.error('Error:', error)
    return response.status(500).json({ error: 'Internal server error' })
  }
}
