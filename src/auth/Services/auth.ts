import 'dotenv/config'
import {google} from '../passport/googleStrategy';
google();

function getAuth(req:any, res:any){
    if(req.session.user){
        return {'sessionid' : 'session:'+req.session.id, 
                'user' : req.session.user.name,
            'code': req.session.user.email}
    }
    else{
        res.redirect('/')
    }
}

export{getAuth}