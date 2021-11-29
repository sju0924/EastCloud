import {getAuth} from '../Services/auth';
import {google} from '../passport/googleStrategy';
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