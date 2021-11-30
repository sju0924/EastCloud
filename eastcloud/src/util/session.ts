import session from 'express-session';
import express from "express"
import passport from 'passport';
import { redisClient } from './redis';
import connectRedis from 'connect-redis'


var app = express();

export = () =>{
    var RedisStore = connectRedis(session);
    app.use(express.json());
    app.use(session({
    store: new RedisStore({
            client: redisClient,
            host: 'localhost',
            port: 6379,
            prefix : "session:",
            db : 0,
            //saveUninitialized: false,
            //resave: false
    
    }),
    secret: process.env.SECRET_CODE!,
    cookie: { maxAge: 60 * 60 * 1000 },
    //resave: true,
    //saveUninitialized: false
}));

app.use(passport.initialize()); 
app.use(passport.session());

passport.serializeUser((user:any, done) => {
    done(null, user); // user객체가 deserializeUser로 전달됨.
  });
passport.deserializeUser((user:any, done) => {
    done(null, user); // 여기의 user가 req.user가 됨
});

}