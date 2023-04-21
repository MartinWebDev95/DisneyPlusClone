import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';

const passportConfiguration = () => {
  passport.use(new GoogleStrategy.Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    ((accessToken, refreshToken, profile, done) => {
      done(null, profile);
    }),
  ));

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};

export default passportConfiguration;
