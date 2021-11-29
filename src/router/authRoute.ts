import express from 'express'
import {getInfo,authenticateUser } from '../auth/Controller/authController';
import passport from 'passport'
//import set_session from '../util/session'
import session from 'express-session'
import connectRedis from 'connect-redis'
import { redisClient } from '../util/redis';
const auth_router = express.Router();

passport.serializeUser((user:any, done) => {
    done(null, user); // user객체가 deserializeUser로 전달됨.
  });
passport.deserializeUser((user:any, done) => {
    done(null, user); // 여기의 user가 req.user가 됨
});
auth_router.get('/',authenticateUser, getInfo);
auth_router.get('/google', passport.authenticate('google', { scope: ['profile'] }));
auth_router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/'}),
    (req:any,res:any)=>{
        console.log(req)
        req.session.user = {
            id: req.user.id,
            name: req.user.displayName,
            provider : req.user.provider,
            email : req.user.id+'@'+req.user.provider
        }
        res.redirect('/auth')
    });

auth_router.get('/logout', function(req:any, res:any){    
    if(req.session.user){
        console.log('로그아웃');
        
        req.session.destroy(function(err:any){
            if(err) throw err;
            console.log('세션 삭제하고 로그아웃됨');
            res.redirect('/');
        });
    }
    else{
        console.log('로그인 상태 아님');
        res.redirect('/auth');
    }
});
export default auth_router;
