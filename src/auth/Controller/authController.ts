
import {getAuth} from '../Services/auth'
import express from 'express';
import passport from 'passport';
import {google} from '../passport/googleStrategy';
//import set_session from '../../util/session'
import session from 'express-session';
import { redisClient } from '../../util/redis';
import connectRedis from 'connect-redis'
//import session from 'express-session';
google();


const authenticateUser = (req:any, res:any, next:any) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.status(301).redirect('/');
    }
  };

 

  function getInfo(req:any, res:any){
      try{
        res.send(getAuth(req,res));
      }
      catch(err){
          console.log(err);
      }
        
  }

export{authenticateUser,getInfo}