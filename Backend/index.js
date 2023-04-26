import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';
import cookieSession from 'cookie-session';
import connectToDB from './database/db.js';
import passportConfiguration from './passport.js';
import authRoutes from './routes/auth.js';
import myListRoutes from './routes/myList.js';

const server = express();

dotenv.config();

connectToDB();

server.use(cookieSession(
  {
    name: 'session',
    keys: ['disney'],
    maxAge: 24 * 60 * 60 * 100,
  },
));

server.use(passport.initialize());
server.use(passport.session());

server.use(cors({
  origin: '*',
  methods: 'GET, POST, PUT, DELETE',
  credentials: true,
}));

passportConfiguration();

server.use('/auth', authRoutes);
server.use('/api/my-list', myListRoutes);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
