import { MongoClient } from 'mongodb'

const URI =
""

const client = new MongoClient(URI)

export const db = client.db('Spotify')

