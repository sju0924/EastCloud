import express from "express"
import path from 'path'
//import set_session from './util/session'
import bodyParser from 'body-parser'
import {goods_router} from './src/router/goodsRoute';
import {auth_router} from './src/router/authRoute';

const app = express();

import session from 'express-session'
import connectRedis from 'connect-redis'
import { redisClient } from './src/util/redis';
import passport from 'passport'

var RedisStore = connectRedis(session);
app.use(express.json());
    app.use(session({
    store: new RedisStore({
            client: redisClient,
            host : 'localhost',
            port: 6379,
            prefix : "session:",
            db : 0
    
    }),
    secret: process.env.SECRET_CODE!,
    cookie: { maxAge: 60 * 60 * 1000 },
    resave: true,
    saveUninitialized: false
}));

app.use(passport.initialize()); 
app.use(passport.session());

passport.serializeUser((user:any, done) => {
    done(null, user); // user객체가 deserializeUser로 전달됨.
  });
passport.deserializeUser((user:any, done) => {
    done(null, user); // 여기의 user가 req.user가 됨
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/goods',goods_router);
app.use('/auth',auth_router)
app.get('/',async (req:any,res:any)=>{
    if(req.isAuthenticated()){
        console.log(req.user)
        res.send(req.user.displayName+'님 안녕하세요')
    }
    else{
        res.send('안녕하세요')
    }
})


app.listen(3000, () => {
    console.log('Conneted 3000 port');
});