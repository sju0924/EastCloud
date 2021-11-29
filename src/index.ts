import express from 'express';
import bodyParser from 'body-parser';
import { redisClient } from './util/redis';
import passport from 'passport';
import routeInit from './router';
import { config } from 'dotenv';

config();

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());
//app.use(passport.session());

passport.serializeUser((user:any, done) => {
    done(null, user); // user객체가 deserializeUser로 전달됨.
  });
passport.deserializeUser((user:any, done) => {
    done(null, user); // 여기의 user가 req.user가 됨
});

app.get('/',async (req:any,res:any)=>{
    if(req.isAuthenticated()){
        console.log(req.user)
        res.send(req.user.displayName+'님 안녕하세요')
    }
    else{
        res.send('안녕하세요')
    }
});

routeInit(app);

app.listen(3000, () => {
    console.log('Conneted 3000 port');
});