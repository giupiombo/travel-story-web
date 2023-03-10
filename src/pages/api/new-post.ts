import { MongoClient } from 'mongodb';

async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(`${process.env.MONGODB_URL}`);
    const db = client.db();

    const postsCollection = db.collection('posts');

    const result = await postsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: 'Post inserted!' });
  }
}

export default handler;
