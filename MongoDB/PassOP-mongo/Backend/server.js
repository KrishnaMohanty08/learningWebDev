const express = require('express');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser');
const cors = require('cors');

dotenv.config();

const url = process.env.MONGO_URI;
const client = new MongoClient(url); // Define client here
const dbName = process.env.DB_NAME;
const app = express();
const port = 3000;

// Middleware
app.use(bodyparser.json());
app.use(cors());

async function startServer() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    // Define routes after MongoDB connection
    app.get('/', async (req, res) => {
      const db = client.db(dbName);
      const collection = db.collection('passwords');
      const findResult = await collection.find({}).toArray();
      res.json(findResult);
    });

    app.post('/', async (req, res) => {
      const password = req.body;
      const db = client.db(dbName);
      const collection = db.collection('passwords');
      const findResult = await collection.insertOne(password);
      res.send({ success: true, result: findResult });
    });

    app.delete('/:url', async (req, res) => {
      const url = decodeURIComponent(req.params.url);
      const db = client.db(dbName);
      const collection = db.collection('passwords');
      const findResult = await collection.deleteOne({ url });
      res.send({ success: true, result: findResult });
    });

    app.listen(port, () => {
      console.log(`Example app listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1); // Exit if MongoDB connection fails
  }
}

startServer();