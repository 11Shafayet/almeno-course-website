require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const coursesRoutes = require('./routes/coursesRoutes');

const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

//setting up mongo db
const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const run = async () => {
  try {
    const coursesCollection = client.db('almano').collection('courses');
    app.use('/courses', coursesRoutes(coursesCollection));
  } catch (error) {
    console.log('Error occured while connecting MongoDB:', error);
  } finally {
    // await client.close();
  }
};

//setting up cors
app.use(
  cors({
    origin: ['http://localhost:5173'],
  })
);

run();
app.get('/', (req, res) => {
  res.send('Almano server is running!');
});

app.listen(port, () => {
  console.log('Almano server is running at port:', port);
});
