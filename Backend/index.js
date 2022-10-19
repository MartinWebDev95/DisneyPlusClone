import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectToDB from './database/db.js';

const server = express();

dotenv.config();

connectToDB();

const allowDomain = [process.env.FRONTEND_URL];

const corsOption = {
  origin(origin, callback) {
    if (allowDomain.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

server.use(cors(corsOption));

server.use('/', (req, res) => {
  res.send('Hola mundo');
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
