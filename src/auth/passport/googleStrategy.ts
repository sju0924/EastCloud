import passport from 'passport'
import { Strategy } from 'passport-google-oauth20';

function google(){
passport.use(new Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: "http://localhost:3000/auth/google/callback"
  }, function(accessToken, refreshToken, profile, done) {
        done(null, profile);
    }));
} 

export {google}