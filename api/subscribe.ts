import type { VercelRequest, VercelResponse } from '@vercel/node'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const dbName = 'utlr'
const collectionName = 'newsletter_subscribers'

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
    const client = await MongoClient.connect(uri as string)
    const db = client.db(dbName)
    const collection = db.collection(collectionName)

    // Vérifier si l'email existe déjà
    const existing = await collection.findOne({ email })
    if (existing) {
      await client.close()
      return response.status(400).json({ error: 'Email already subscribed' })
    }

    // Ajouter le nouvel abonné
    await collection.insertOne({
      email,
      subscribedAt: new Date(),
      status: 'active'
    })

    await client.close()
    return response.status(200).json({ success: true })
  } catch (error) {
    console.error('Error:', error)
    return response.status(500).json({ error: 'Internal server error' })
  }
}
