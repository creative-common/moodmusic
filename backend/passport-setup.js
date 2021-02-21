const passport = require('passport'),
      SpotifyStrategy = require('passport-spotify').Strategy,
      env = require('./config')

passport.use(
  new SpotifyStrategy(
    {
      clientID: env.SPOTIFY_CLIENT_ID,
      clientSecret: env.SPOTIFY_CLIENT_SECRET,
      callbackURL: env.BASE_URL_DEV + '/auth/spotify/callback',
    },
    async (accessToken, refreshToken, expires_in, profile, done) => {
      console.log("passport-setup file user profile ", profile)
      return done(null, profile);
    }
  )
);