import express from 'express';
import passport from 'passport';
import dotenv from 'dotenv';

const router = express.Router();

dotenv.config();

router.get('/google', passport.authenticate('google', {
  scope: ['profile'],
  prompt: 'select_account',
}));

router.get('/google/callback', passport.authenticate('google', {
  successRedirect: process.env.FRONTEND_HOME_URL,
  failureRedirect: process.env.FRONTEND_URL,
}));

router.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'successfull',
      user: req.user,
    });
  }
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(process.env.FRONTEND_URL);
});

export default router;
